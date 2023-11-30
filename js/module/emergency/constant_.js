"use strict";
// 추가가 필요한 다른 constant, html 파일을 불러사용한다.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const {CONST: SOCKET_CONST} = await import(`/js/module/socket/constant.js${ver_string}`);
const {CONST: MEASUREMENT_CONST} = await import(`/js/custom/measurement_constant.js${ver_string}`);
const monitor_html = await import(`/template/${GBL.DESIGN.THEME}/content/monitoring.js${ver_string}`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const CONST = {
    VERSION: "0.1.0",
    DESIGN: {
        THEME: "default"
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 사이트별 모듈에서 상이하게 처리해야 할 부분은 init 에 추가를 하던가? 아니면 새로운 함수를 추가하여 활용한다.
    // 이 모듈은 socket에서 측정에 대한 이벤트 처리시 사용하는 모듈이다.
    // 측정 이벤트 처리시 꼭 필요한다.
    // INIT : config 값 변경시 사용
    // POST_PROCESS: 해당 모듈의 액션 처리 후 진행해야 할 부분이 있다면 추가
    // 예시 - init)
    // // 버전은 기본 버전 뒤에 .0부터 올린다.
    // CONST.VERSION = `${CONST.VERSION}.0`;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    INIT: function() {
        // 아래 영역에 코드 작성
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 버전은 기본 버전 뒤에 .0부터 올린다.
        CONST.VERSION = `${CONST.VERSION}.0`;
        CONST.DESIGN.THEME = "edit2";
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    },
    UTIL: {
        SET_PARSING_VALUE: function(type = "delete", param = null) { // delete/add
            let result = param;
            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            if(type === "delete") {
                let wardInfo = null;
                if(GBL.ACCOUNT.INFO.organizationCode === "KR_HUMC") {
                    let tempWardInfo = "R";
                    let tempBedInfo = Number(param['measurement']['sickBed']);
                    if(param['measurement']['sickRoom'].indexOf("중증") === -1) {
                        tempWardInfo = `${param['measurement']['sickRoom']}`;
                    }
                    wardInfo = `${tempWardInfo}${tempBedInfo}`;
                }
                else {
                    wardInfo = `(${param['measurement']['ward']}/ ${param['measurement']['sickRoom']}/ ${param['measurement']['sickBed']})`;
                }
                result = {
                    baseBedInfo: param['measurement'],
                    wardInfo: wardInfo
                }
            }
            else if(type === "add") {
                if(GBL.ACCOUNT.INFO.organizationCode === "KR_HUMC") {
                    let tempWardInfo = "R";
                    let tempBedInfo = Number(param['measurement']['sickBed']);
                    if(param['measurement']['sickRoom'].indexOf("중증") === -1) {
                        tempWardInfo = `${param['measurement']['sickRoom']}`;
                    }
                    param['measurement'].wardInfo = `${tempWardInfo}${tempBedInfo}`;
                }
                else {
                    param['measurement'].wardInfo = `(${param['measurement']['ward']}/ ${param['measurement']['sickRoom']}/ ${param['measurement']['sickBed']})`;
                }
                result = param['measurement'];
            }
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            return result;
        },
        // controller, action을 가지고 판단.
        // 3가지 - index, select
        GET_NOW_PROCESS: function() {
            let result = url.getNowAction();

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            // index인 경우를 찾기
            if(url.getNowController() === "monitoring" && url.getNowAction() === "index") {
                result = "index";
            }

            // select인 경우를 찾기
            if(url.getNowController().indexOf("fullMonitoring") !== -1 && url.getNowAction() === "select") {
                result = "select";
            }
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////

            return result;
        }
    },
    POST_PROCESS: {
        index: function(param = null) {
            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            if(param['type'] === "delete") {
                // 측정 완료 이벤트 삭제
                $(".buttonForMeasurementEnd").off("click");
                // 측정 등록 이벤트 등록
                CUSTOM.EVENT.HTML.push(".measurementNoData");
                $(".measurementNoData").off("click").click(function (e) {
                    e.preventDefault();
                    MEASUREMENT_CONST.UTIL.EVENT.MEASUREMENT_ADD(this, monitor_html.modalProcessForMeasurement);
                });
                // 구독 삭제
                SOCKET_D3.CHART.setDataUnsubscribeForUnit(param['measurement'].measurementCode);

                // refresh interval 초기화
                if(CUSTOM.REFRESH.ECG.INTERVAL.OBJ.hasOwnProperty(param['measurement'].measurementCode) === true) {
                    etc.intervalUseWorker.end(CUSTOM.REFRESH.ECG.INTERVAL.OBJ[param['measurement'].measurementCode]);
                    CUSTOM.REFRESH.ECG.INTERVAL.OBJ[param['measurement'].measurementCode] = null;
                }
            }
            else if(param['type'] === "add") {
                // 측정 등록 이벤트 삭제
                $(".measurementNoData").off("click");
                // 완료 이벤트 등록
                let succesFunction = function() {};
                CUSTOM.EVENT.HTML.push(".buttonForMeasurementEnd");
                $(".buttonForMeasurementEnd").off("click").click(function (e) {
                    e.preventDefault();
                    MEASUREMENT_CONST.UTIL.EVENT.MEASUREMENT_END(this, succesFunction);
                });
                // 구독 시작
                let runSubscribe = function(measurementCode) {
                    if(CUSTOM.MODULE['socket'].STOMP.CLIENT !== null) {
                        if(CUSTOM.MODULE['socket'].STOMP.SUBSCRIBE.hasOwnProperty(measurementCode) === false) {
                            SOCKET_D3.CHART.setDataInit(measurementCode);
                            if(url.getNowAction() == "select") {
                                SOCKET_CONST.FUNCTION.CALLBACK.stompForSubscribe(SOCKET_CONST.STOMP.DATA_TYPE.NORMAL, measurementCode);

                                // ecg 챠트 5분마다 초기화
                                CUSTOM.REFRESH.ECG.INTERVAL.OBJ[measurementCode] = new Worker( '/js/module/windowWorker/workerInterval.js' );
                                etc.intervalUseWorker.start(CUSTOM.REFRESH.ECG.INTERVAL.OBJ[measurementCode], true, function() {
                                    SOCKET_D3.CHART.setEcgChartDataInit(measurementCode);
                                }, CUSTOM.REFRESH.ECG.INTERVAL.TERM);
                            }
                            else {
                                SOCKET_CONST.FUNCTION.CALLBACK.stompForSubscribe(SOCKET_CONST.STOMP.DATA_TYPE.SIMPLE, measurementCode);
                            }
                        }
                        else {
                            setTimeout(function() {
                                runSubscribe(measurementCode)
                            }, 100);
                        }
                    }
                    else {
                        setTimeout(function() {
                            runSubscribe(measurementCode)
                        }, 100);
                    }
                }
                runSubscribe(param['measurement'].measurementCode);
            }
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        }

        // controller에 index이외의 action이 있다면 직접 추가
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
CONST.INIT();