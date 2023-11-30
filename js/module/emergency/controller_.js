"use strict";

const promise = async () => {

    // const model = await import(`/js/model/patient_list.js${ver_string}`);
    // const {CONST: MEASUREMENT_CONST} = await import(`/js/custom/measurement_constant.js${ver_string}`);
    // const {CONST: SOCKET_CONST} = await import(`/js/module/socket/constant.js${ver_string}`);
    const {CONST: CONST} = await import(`/js/module/patient_change/constant.js${ver_string}`);
    const html = await import(`/js/module/patient_change/template/${CONST.DESIGN.THEME}/design.js${ver_string}`);
    // const monitor_html = await import(`/template/${GBL.DESIGN.THEME}/content/monitoring.js${ver_string}`);
    const ignoreAuthAction = ["index"];

    const _setPostProcess = function(action, param = null) {
        if(CONST.POST_PROCESS.hasOwnProperty(action) === true) {
            // 레이아웃 생성 후 레이아웃 관련 event 처리가 있을 경우, 필요한 html 에 추가하여, 사용하기
            CONST.POST_PROCESS[action](param);
        }
    }

    const index = function(measurement = null) {
        if(measurement != null) {
            let divName = `#div${measurement.measurementCode}`;
            let divNameForBed = `#div_${measurement.wardCode}_${measurement.sickRoomCode}_${measurement.sickBedCode}`;
            if(CONST.UTIL.GET_NOW_PROCESS() == "index" || CONST.UTIL.GET_NOW_PROCESS() == "select") {
                // 삭제 또는 완료로 변경(목록에서 제거 및 subscribe 제거)
                if(measurement.deactivate === 1 || measurement.measurementStatus == CUSTOM.MEASUREMENT.STATUS.CODE.DELETE || measurement.measurementStatus == CUSTOM.MEASUREMENT.STATUS.CODE.RECODING_END || measurement.measurementStatus == CUSTOM.MEASUREMENT.STATUS.CODE.COMPLETED) {
                    let parsingHtml = html.deleteMeasurementForIndex;
                    if(CONST.UTIL.GET_NOW_PROCESS() == "select") {
                        parsingHtml = html.deleteMeasurementForSelect;
                    }
                    let parsingValue = CONST.UTIL.SET_PARSING_VALUE("delete", {measurement: measurement});
                    // let wardInfo = null;
                    // if(GBL.ACCOUNT.INFO.organizationCode === "KR_HUMC") {
                    //     let tempWardInfo = "R";
                    //     let tempBedInfo = Number(measurement['sickBed']);
                    //     if(measurement['sickRoom'].indexOf("중증") === -1) {
                    //         tempWardInfo = `${measurement['sickRoom']}`;
                    //     }
                    //     wardInfo = `${tempWardInfo}${tempBedInfo}`;
                    // }
                    // else {
                    //     wardInfo = `(${measurement['ward']}/ ${measurement['sickRoom']}/ ${measurement['sickBed']})`;
                    // }
                    $(divName).html("");
                    // etc.setHtmlParsing($(divName), parsingHtml, {baseBedInfo: measurement, wardInfo: wardInfo});
                    etc.setHtmlParsing($(divName), parsingHtml, parsingValue);
                    $(divName).attr("id", divNameForBed.replace("#", ""));

                    _setPostProcess("index",{type: "delete", measurement: measurement});

                    // // 측정 완료 이벤트 삭제
                    // $(".buttonForMeasurementEnd").off("click");
                    // // 측정 등록 이벤트 등록
                    // CUSTOM.EVENT.HTML.push(".measurementNoData");
                    // $(".measurementNoData").off("click").click(function (e) {
                    //     e.preventDefault();
                    //     MEASUREMENT_CONST.UTIL.EVENT.MEASUREMENT_ADD(this, monitor_html.modalProcessForMeasurement);
                    // });
                    // // 구독 삭제
                    // SOCKET_D3.CHART.setDataUnsubscribeForUnit(measurement.measurementCode);
                    //
                    // // refresh interval 초기화
                    // if(CUSTOM.REFRESH.ECG.INTERVAL.OBJ.hasOwnProperty(measurement.measurementCode) === true) {
                    //     etc.intervalUseWorker.end(CUSTOM.REFRESH.ECG.INTERVAL.OBJ[measurement.measurementCode]);
                    //     CUSTOM.REFRESH.ECG.INTERVAL.OBJ[measurement.measurementCode] = null;
                    // }
                }

                // 측정중 또는 대기중으로 변경(목록에 추가 및 subscribe 추가)
                else if(measurement.measurementStatus == CUSTOM.MEASUREMENT.STATUS.CODE.RECODING_START || measurement.measurementStatus == CUSTOM.MEASUREMENT.STATUS.CODE.WAITING) {
                    if($(divNameForBed).length > 0) {
                        $(divNameForBed).html("");
                        let parsingHtml = html.setMeasurementForIndex;
                        if(url.getNowAction() == "select") {
                            parsingHtml = html.setMeasurementForSelect;
                        }
                        let parsingValue = CONST.UTIL.SET_PARSING_VALUE("add", {measurement: measurement});
                        // let wardInfo = null;
                        // if(GBL.ACCOUNT.INFO.organizationCode === "KR_HUMC") {
                        //     let tempWardInfo = "R";
                        //     let tempBedInfo = Number(measurement['sickBed']);
                        //     if(measurement['sickRoom'].indexOf("중증") === -1) {
                        //         tempWardInfo = `${measurement['sickRoom']}`;
                        //     }
                        //     measurement.wardInfo = `${tempWardInfo}${tempBedInfo}`;
                        // }
                        // else {
                        //     measurement.wardInfo = `(${measurement['ward']}/ ${measurement['sickRoom']}/ ${measurement['sickBed']})`;
                        // }
                        // etc.setHtmlParsing($(divNameForBed), parsingHtml, measurement);
                        etc.setHtmlParsing($(divNameForBed), parsingHtml, parsingValue);
                        $(divNameForBed).attr("id", divName.replace("#", ""));

                        _setPostProcess("index",{type: "add", measurement: measurement});
                        // // 측정 등록 이벤트 삭제
                        // $(".measurementNoData").off("click");
                        // // 완료 이벤트 등록
                        // let succesFunction = function() {};
                        // CUSTOM.EVENT.HTML.push(".buttonForMeasurementEnd");
                        // $(".buttonForMeasurementEnd").off("click").click(function (e) {
                        //     e.preventDefault();
                        //     MEASUREMENT_CONST.UTIL.EVENT.MEASUREMENT_END(this, succesFunction);
                        // });
                        // // 구독 시작
                        // let runSubscribe = function(measurementCode) {
                        //     if(CUSTOM.MODULE['socket'].STOMP.CLIENT !== null) {
                        //         if(CUSTOM.MODULE['socket'].STOMP.SUBSCRIBE.hasOwnProperty(measurementCode) === false) {
                        //             SOCKET_D3.CHART.setDataInit(measurementCode);
                        //             if(url.getNowAction() == "select") {
                        //                 SOCKET_CONST.FUNCTION.CALLBACK.stompForSubscribe(SOCKET_CONST.STOMP.DATA_TYPE.NORMAL, measurementCode);
                        //
                        //                 // ecg 챠트 5분마다 초기화
                        //                 CUSTOM.REFRESH.ECG.INTERVAL.OBJ[measurementCode] = new Worker( '/js/module/windowWorker/workerInterval.js' );
                        //                 etc.intervalUseWorker.start(CUSTOM.REFRESH.ECG.INTERVAL.OBJ[measurementCode], true, function() {
                        //                     SOCKET_D3.CHART.setEcgChartDataInit(measurementCode);
                        //                 }, CUSTOM.REFRESH.ECG.INTERVAL.TERM);
                        //             }
                        //             else {
                        //                 SOCKET_CONST.FUNCTION.CALLBACK.stompForSubscribe(SOCKET_CONST.STOMP.DATA_TYPE.SIMPLE, measurementCode);
                        //             }
                        //         }
                        //         else {
                        //             setTimeout(function() {
                        //                 runSubscribe(measurementCode)
                        //             }, 100);
                        //         }
                        //     }
                        //     else {
                        //         setTimeout(function() {
                        //             runSubscribe(measurementCode)
                        //         }, 100);
                        //     }
                        // }
                        // runSubscribe(measurement.measurementCode);
                    }
                }
            }
        }
    }

    return {
        ignoreAuthAction: ignoreAuthAction,
        index: index
    };
};

export { promise }
