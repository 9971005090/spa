"use strict";

/**
 * @file 소켓에서 받은 데이타를 이용하여, d3 line챠트를 그리는 유틸 파일
 * @author zaid
 * @description 소켓에서 받은 데이타를 이용하여, d3 line챠트를 그리는 유틸 파일
 */

/**
 * @constant
 * @typedef {object} SOCKET_D3
 * @property {object} CHART 챠트 관련 함수 모음
 * @property {object} CHART_COLUMN 심전도에서 (seconds, value, 페이스메이커) 에 해당하는 칼럼명 정의
 * @property {object} STACK 그래프를 그릴때 구간을 그린 후 이전 구간의 데이타를 남겨, 지워지게하기 위한 처리 정의, 향후 무조건 사용으로 변경할 수 있다.
 * @property {object} CONFIG 그래프 종류별 설정을 정의
 * @description 스트림을 가공할때 사용하는 조건의 값을 정의하는 상수(1차 까지만 설명, 2차 부터는 object 안에 직접 설명)
 */
const SOCKET_D3 = {
    /**
     * @type {object}
     * @description CHART 챠트 관련 함수 모음
     */
    CHART: {
        /**
         * 측정 전체 데이타 초기화 함수
         * @param {string} method all, socket, subscribe, interval
         * @description method에 따른 측정 전체 데이타 초기화(로그아웃 같은데서 사용)
         * @returns {void}
         */
        setAllDataInit: function(method = "interval") { //all, socket, subscribe, interval
            /**
             * 구독 종료
             */
            if(method == "all" || method == "subscribe") {
                for(let subObjKey in CUSTOM.MODULE['socket'].STOMP.SUBSCRIBE) {
                    SOCKET_D3.CHART.setDataUnsubscribeForUnit(subObjKey);
                }
                CUSTOM.MODULE['socket'].STOMP.SUBSCRIBE = {};
            }
            /**
             * 소켓 종료
             */
            if(method == "all" || method == "socket") {
                for(let keyname in CUSTOM.MODULE['socket'].STOMP.CLIENT) {
                    CUSTOM.MODULE['socket'].STOMP.CLIENT[keyname].disconnect();
                }
                CUSTOM.MODULE['socket'].STOMP.CLIENT = null;
            }
        },
        /**
         * 측정별 구독 종료 시키는 함수
         * @param {string} measurementCode 측정코드
         * @description 측정별 구독 종료 처리
         * @returns {void}
         */
        setDataUnsubscribeForUnit: function(measurementCode) {
            if(typeof CUSTOM.MODULE['socket'].STOMP.SUBSCRIBE[measurementCode] != "undefined") {
                CUSTOM.MODULE['socket'].STOMP.SUBSCRIBE[measurementCode].unsubscribe();
                for(let objKey in CUSTOM.CHART.CONFIG) {
                    if(CUSTOM.CHART.CONFIG[objKey].use === true) {
                        custom.etc.workerChart.run(CUSTOM.CHART.WORKER, function() {console.log("init")}, {processType: "init", measurementCode: measurementCode});
                    }
                }
                delete CUSTOM.MODULE['socket'].STOMP.SUBSCRIBE[measurementCode];
            }
        },
        /**
         * 측정별 챠트를 그리는 데이타 초기화 처리 부모 함수
         * @param {string} measurementCode 측정코드
         * @description 측정별 챠트를 그리는 데이타 초기화 처리(worker를 이용하는것으로 하여, 사실상 처리 내용이 없다)
         * @returns void(0)
         */
        setDataInit: function(measurementCode) {
            for (let objKey in CUSTOM.CHART.CONFIG) {
                if(CUSTOM.CHART.CONFIG[objKey].use === true) {
                    // if(typeof CUSTOM.CHART.CONFIG[objKey].data.chart[measurementCode] == "undefined") {
                    //     SOCKET_D3.CHART.setDataInitForUnit(objKey, measurementCode);
                    // }
                }
            }
            // if(typeof CUSTOM.MODULE['socket'].RECEIVE.COUNT.ECG[measurementCode] == "undefined") {
            //     CUSTOM.MODULE['socket'].RECEIVE.COUNT.ECG[measurementCode] = 0;
            // }
            // if(typeof CUSTOM.MODULE['socket'].RECEIVE.COUNT.TEMPERATURE[measurementCode] == "undefined") {
            //     CUSTOM.MODULE['socket'].RECEIVE.COUNT.TEMPERATURE[measurementCode] = 0;
            // }
        },
        /**
         * 장치 종류별/측정별 챠트를 그리는 데이타 초기화 처리 함수
         * @param {string} objKey 장치 종류
         * @param {string} measurementCode 측정코드
         * @description 장치 종류별/측정별 챠트를 그리는 데이타 초기화 처리(worker를 이용하는것으로 하여, 사실상 처리 내용이 없다)
         * @returns void(0)
         */
        setDataInitForUnit: function(objKey, measurementCode) {
            // CUSTOM.CHART.CONFIG[objKey].data.receiveDevel[measurementCode] = [];
            // CUSTOM.CHART.CONFIG[objKey].data.receiveOrigin[measurementCode] = [];
            // CUSTOM.CHART.CONFIG[objKey].data.chart[measurementCode] = null;
            // CUSTOM.CHART.CONFIG[objKey].data.chartBack[measurementCode] = null;
            // CUSTOM.CHART.CONFIG[objKey].data.chartStack[measurementCode] = null;
            // CUSTOM.CHART.CONFIG[objKey].data.reverseCount[measurementCode] = null;
            // CUSTOM.CHART.CONFIG[objKey].interval.obj[measurementCode] = null;
            // CUSTOM.CHART.CONFIG[objKey].interval.proceedTime[measurementCode] = 0;
            // CUSTOM.CHART.CONFIG[objKey].interval.first[measurementCode] = true;
            // CUSTOM.CHART.CONFIG[objKey].interval.newProcessTerm[measurementCode] = CUSTOM.CHART.CONFIG[objKey].interval.processTerm;
            // CUSTOM.CHART.CONFIG[objKey].interval.socketReceiveDelay[measurementCode] = false;
        },
        /**
         * 측정별 챠트 포함 초기화 함수
         * @param {string} measurementCode 측정코드
         * @description 측정별 챠트 포함 초기화 처리(worker를 이용하는것으로 하여, 사실상 처리 내용이 없음. 챠트 영역만 초기화)
         * @returns {void}
         */
        setEcgChartDataInit: function(measurementCode) {
            $(`#ECG_chart_${measurementCode}`).html("");
        },
        /**
         * 소켓 데이타 수신 후 데이타 처리하는 함수
         * @param {string} type 측정 종류
         * @param {object} streamPacket 수신된 소켓 데이타
         * @param {string} measurementCode 측정코드
         * @description 측정별 챠트 포함 초기화 처리(worker를 이용하는것으로 하여, 사실상 처리 내용이 없음. 챠트 영역만 초기화)
         * @returns void(0)
         */
        setReceiveChartData: function(type, streamPacket) {
            /**
             * 해당 측정 종류의 데이타가 있으면 처리
             */
            if(streamPacket.bioSignalData[CUSTOM.CHART.CONFIG[type]['receiveVariable']].length > 0) {
                // 마지막 값은 emergency 모듈에서 처리를 한다.
                // 여기서는 챠트와 관련된 처리만 한다.
                if(type === CUSTOM.DEVICE.TYPE.STR.ECG || type === CUSTOM.DEVICE.TYPE.STR.SPO2_PPG) {
                    // 챠트 초기화(테스트)
                    SOCKET_D3.CHART.setInitD3ChartForNew(streamPacket.measurementCode, type);

                    let scale = null
                    if(type === CUSTOM.DEVICE.TYPE.STR.ECG) {
                        scale = GBL.CONSTANTS.get(`MEASUREMENT.${streamPacket.measurementCode}`).measurementAlarmSetting.scale;
                    }
                    // worker쪽으로 데이타 전달
                    custom.etc.workerChart.run(CUSTOM.CHART.WORKER, SOCKET_D3.CHART.getChartDataByIntervalD3ForNew, {processType: `receive`, type: type, streamPacket: streamPacket, etc: {
                            params: {
                                // action: SOCKET_D3.CHART.getAction(),
                                measurement: GBL.CONSTANTS.get(`MEASUREMENT.${streamPacket.measurementCode}`),
                                columnInfo: CUSTOM.CHART.CHART_USE_COLUMN,
                                scale: scale,
                                timeSeconds: $(`#div${streamPacket.measurementCode} #chart-ecg`).attr(`data-time-seconds`)
                            }
                        }
                    });
                }
            }
        },
        /**
         * 파라미터로 전달받은 객체 배열에서 유효한 마지막값을 반환하는 함수
         * @param {object[]} datas 데이타 배열
         * @description 파라미터로 전달받은 객체 배열에서 유효한 마지막값을 반환
         * @returns {void}
         */
        // getLastValue: function(datas = []) {
        //     for(let i = datas.length - 1; i >= 0; i--) {
        //         if(datas[i].value !== null) {
        //             return datas[i].value;
        //             break;
        //         }
        //     }
        // },
        /**
         * 파라미터로 전달받은 정보를 이용하여, dom에 값을 표시하는 함수
         * @param {string} type 측정 종류
         * @param {string} valueId 표시하려는 dom id
         * @param {number} lastValue 표시하려는 값
         * @param {string} measurementCode 측정코드
         * @description 파라미터로 전달받은 정보를 이용하여, dom에 값을 표시
         * @returns void(0)
         */
        setLastValueInHtml: function(type, valueId, lastValue, measurementCode) {
            /**
             * 유효값 처리
             */
            if(lastValue > 0 || (type == "EWS" && lastValue > -1)) {
                /**
                 * heart(심박), resp(호흡)은 심전도가 리드오프라면 표시하지 않게 한다.
                 */
                if(type === "HEART" || type === "RESP") {
                    if(SOCKET_D3.DEVICE.isLeadOff(measurementCode) === true) {
                        return;
                    }
                }
                /**
                 * 체온은 소수점 한자리까지 표시한다.
                 */
                if(type == CUSTOM.DEVICE.TYPE.STR.TEMP) {
                    lastValue = lastValue.toFixed(1);
                }
                $(`#${valueId}`).text(lastValue);
                $(`.${valueId}`).text(lastValue);
                // 하단 상세보기가 있을경우
                if(String.isNullOrWhitespace(CUSTOM.CHART.CHOICE_MEASUREMENT_FOR_CLONE) === false) {
                    if(CUSTOM.CHART.CHOICE_MEASUREMENT_FOR_CLONE.measurementCode === measurementCode && String.isNullOrWhitespace(valueId) === false) {
                        $(`#${valueId.replace(measurementCode, "")}detail`).text(lastValue);
                        $(`.${valueId.replace(measurementCode, "")}detail`).text(lastValue);
                    }
                }
            }
        },
        getAction: function() {
            let result = "list";
            let pathname = SOCKET_D3.CHART.getPathName();
            if(GBL.SITE_MENU.URL.PATIENT_VIEW.indexOf(pathname) !== -1 && SOCKET_D3.CHART.getPathName().indexOf("fullMonitoring") === -1) {
                result = "view";
            }
            return result;
        },
        getPathName: function() {
            let tempPath = location.pathname.split("/");
            let pathname = `/${tempPath[1]}`;
            if(typeof tempPath[1] !== "undefined") {
                pathname += `/${tempPath[2]}`;
            }
            return pathname;
        },
        /**
         * 챠트, 값 dom id를 반환 하는 함수
         * @param {string} type 측정 종류
         * @param {string} measurementCode 측정코드
         * @param {string} column 챠트/값 종류
         * @description 파라미터 정보로 dom id 를 반환한다.
         * @returns {string} dom id
         */
        // getChartId: function(type, measurementCode, column = "chartId") {
        //     let tempPath = location.pathname.split("/");
        //     let pathname = `/${tempPath[1]}`;
        //     if(typeof tempPath[1] !== "undefined") {
        //         pathname += `/${tempPath[2]}`;
        //     }
        //     let chart_id = CUSTOM.CHART.CONFIG[type]['viewInfo']['detail'][column];
        //     if(GBL.SITE_MENU.URL.PATIENT_VIEW.indexOf(pathname) == -1) {
        //         chart_id = CUSTOM.CHART.CONFIG[type]['viewInfo']['list'][column];
        //     }
        //     if(chart_id != null) {
        //         chart_id = chart_id.replace("{measurementCode}", measurementCode);
        //     }
        //     return chart_id;
        // },
        /**
         * ecg 데이타의 평균값을 구한다.
         * @param {object[]} datas ecg 데이타
         * @description 파라미터 정보로 받은 데이타의 평균값을 반환한다.
         * @returns {number} 평균값
         */
        getBaseline: function(datas) {
            let tempValueArray = [];
            let dataLength = datas.length;
            for (let j = 0; j < dataLength; j++) {
                if(datas[j].hasOwnProperty("dataValue") === true) {
                    tempValueArray.push(datas[j].dataValue);
                }
                else {
                    tempValueArray.push(datas[j][CUSTOM.CHART.CHART_USE_COLUMN.VALUE]);
                }
            }
            return Array.average(tempValueArray);
        },
        /**
         * ecg 챠트의 unit 라인 생성 함수
         * @param {object} chartObj customD3 객체
         * @param {string} measurementCode 측정코드
         * @param {number} scale 스케일 종류(5, 10, 20, 0)
         * @param {number} unit y축을 8칸으로 가정하고, 그 8칸중에 몇칸인지?
         * @description ecg 챠트의 unit 라인을 생성한다.
         * @returns void(0)
         */
        drawRealTimeChartUnitLine: function(chartObj, measurementCode, scale = null, unit = null) {
            /**
             * 현재 기억어 안나는데, 예상하지 못하는 에러가 발생해서 try 로 예외 처리를 한다.
             * <br />; x축이 50칸인데, 52로 설정하는 이유는 기억이 안난다.
             */
            try {
                if ($(`#${chartObj.d3.svgObj.org.attr("id")}`).length > 0) {
                    // 단위 라인 그리기
                    let mV = GBL.CONSTANTS.get(`MEASUREMENT.${measurementCode}`).measurementAlarmSetting.scale;
                    if (scale !== null) {
                        mV = scale;
                    }
                    let margin = chartObj.d3.getSvgMargin();
                    let size = chartObj.d3.getSvgSize();
                    let chart_desc_txt_x = margin.left + 5;
                    let chart_desc_txt_y = size.height + margin.top - 5;
                    // line 시작 위치
                    let position = {
                        text: {
                            x: chart_desc_txt_x,
                            y: chart_desc_txt_y
                        },
                        line: {
                            x: Math.round(((size.width / 52 + margin.left) + 1) * 10000) / 10000,
                            y: Math.round((size.height + margin.top - size.height / 8) * 10000) / 10000
                        }
                    }
                    // x축 unit 정보(최종 unit line 의 시작 위치 계산을 위해서)
                    let unitInfo = {
                        speed: "25.0",
                        sizeForWidth: 52,
                        xAddMargin: 1
                    }
                    // unit 의 크기 정보(x축: 52칸, y축: 8칸)
                    let unitSize = {
                        line: {
                            x: size.width / unitInfo.sizeForWidth,
                            y: size.height / 8
                        }
                    }
                    // 작게/보통/크게 일 경우 설정
                    let calUnit = 2;
                    if (mV == 20) {
                        calUnit = 4;
                        // text = `${unitInfo.speed} mm/s &nbsp;&nbsp;&nbsp; 20 mm/mV`;
                    }
                    else if (mV == 5) {
                        calUnit = 1;
                        // text = `${unitInfo.speed} mm/s &nbsp;&nbsp;&nbsp; 5 mm/mV`;
                    }
                    // 자동일때 worker에서 계산한 값을
                    if (unit !== null) {
                        calUnit = unit;
                    }
                    // y축은 아래에서 1칸 여유를 주는데, 자동일때 7칸보다 크면 여유를 줄이기 위한 계산
                    if (calUnit > 7) {
                        position.line.y = Math.round((size.height + margin.top - (8 - calUnit) * (size.height / 8)) * 10000) / 10000
                    }
                    // worker에서 계산한 값이 무한대로 오는경우가 있다. 무한대가 아닐경우만 그리기
                    if (calUnit !== Infinity) {
                        let xAddMargin = unitInfo.xAddMargin;
                        let x = position.line.x + (xAddMargin * unitSize.line.x);
                        let y = position.line.y;
                        let color = "#ffffff";
                        if ($(`#${chartObj.d3.svgObj.org.attr("id")}_ecgChartUnitLine`).length > 0) {
                            d3.select(`#${chartObj.d3.svgObj.org.attr("id")}_ecgChartUnitLine`)
                                .attr("d", function () {
                                    return `M${x},${y} L${x},${y - (calUnit * unitSize.line.y)} L${x + (1 * unitSize.line.x)},${y - (calUnit * unitSize.line.y)} L${x + (1 * unitSize.line.x)},${y}`;
                                });
                        }
                        else {
                            let options = {
                                d: `M${x},${y} L${x},${y - (calUnit * unitSize.line.y)} L${x + (1 * unitSize.line.x)},${y - (calUnit * unitSize.line.y)} L${x + (1 * unitSize.line.x)},${y}`,
                                fill: "none",
                                stroke_width: 2,
                                stroke: color,
                                opacity: 0.5,
                                id: `${chartObj.d3.svgObj.org.attr("id")}_ecgChartUnitLine`
                            }
                            customD3.drawSimpleLine(chartObj.d3.svgObj.org, options);
                        }
                    }
                }
            }
            catch(e) {
                console.log("drawRealTimeChartUnitLine) e::::::::::::", e);
            }
        },
        /**
         * ecg 챠트의 백그라운드 격자 그리는 함수
         * @param {object} chartObj customD3 객체
         * @param {string} measurementCode 측정코드
         * @description ecg 챠트의 백그라운드의 격자를 생성한다.
         * <br />; 챠트를 x축 50칸, y축 8칸을 기준으로 하여 처리한다.
         * @returns void(0)
         */
        drawRealTimeBackgroundLine: function(chartObj, measurementCode) {
            let size = chartObj.d3.getSvgSize();
            let unit = {
                x: size.width / 50,
                y: size.height / 8
            }
            // 큰 격자안에 5칸
            unit.subX = unit.x / 5;
            unit.subY = unit.y / 5;
            let options = {
                d: null,
                fill: "none",
                stroke_width: 1,
                stroke: "#CCCCCC",
                opacity: 1,
                class: null
            }
            if(GBL.WINDOW_HISTORY_STATE.GET_NOW_CONTROLLER().indexOf("fullMonitoring") === -1) {
                options.opacity = 0.5;
            }
            // x축과 y축의 첫번째 라인이후부터 세부격작아 있다.
            for(let i = 0; i <= 8; i++) {
                options.d = `M${0},${i * unit.y} L${size.width},${i * unit.y}`;
                options.class = `xGridLine`;
                options.opacity = 0.5;
                customD3.drawSimpleLine(chartObj.d3.svgObj.org, options);
                if(i > 0) {
                    for(let j = (i - 1) * 5 + 1; j < ((i - 1) * 5 + 1) + 4; j++) {
                        options.d = `M${0},${j * unit.subY} L${size.width},${j * unit.subY}`;
                        options.class = `ySubGridLine`;
                        options.opacity = 0.2;
                        customD3.drawSimpleLine(chartObj.d3.svgObj.org, options);
                    }
                }
            }
            for(let i = 0; i <= 50; i++) {
                options.d = `M${i * unit.x},${0} L${i * unit.x},${size.height}`;
                options.class = `yGridLine`;
                options.opacity = 0.5;
                customD3.drawSimpleLine(chartObj.d3.svgObj.org, options);
                if(i > 0) {
                    for(let j = (i - 1) * 5 + 1; j < ((i - 1) * 5 + 1) + 4; j++) {
                        options.d = `M${j * unit.subX},${0} L${j * unit.subX},${size.height}`;
                        options.class = `ySubGridLine`;
                        options.opacity = 0.2;
                        customD3.drawSimpleLine(chartObj.d3.svgObj.org, options);
                    }
                }
            }
            return void(0);
        },
        getPositionStripFor10UnitParam: function(chartObj) {
            let margin = chartObj.d3.getSvgMargin();
            let size = chartObj.d3.getSvgSize();
            let chart_desc_txt_x = margin.left + 5;
            let chart_desc_txt_y = size.height + margin.top - 5;
            return {
                text: {
                    x: chart_desc_txt_x,
                    y: chart_desc_txt_y
                },
                line: {
                    x: eval(size.width / 52 + margin.left) + 1,
                    y: eval(size.height + margin.top - size.height / 8)
                }
            }
        },
        changeStripFor10UnitText: function(chartObj, mV) {
            let unitInfo = {
                speed: "25.0",
                sizeForWidth: 52,
                xAddMargin: 2.1
            }


            let size = chartObj.d3.getSvgSize();
            let unitSize = {
                line: {
                    x: size.width / unitInfo.sizeForWidth,
                    y: size.height / 8
                }
            }
            // let xAddMargin = 1;
            let text = `${unitInfo.speed} mm/s &nbsp;&nbsp;&nbsp; ${mV} mm/mV`;
            if (mV == 20) {
                text = `${unitInfo.speed} mm/s &nbsp;&nbsp;&nbsp; 20 mm/mV`;
            }
            else if (mV == 5) {
                text = `${unitInfo.speed} mm/s &nbsp;&nbsp;&nbsp; 5 mm/mV`;
            }
            let addMarginTextTime = 110;
            let options = {
                font_family: "sans-serif",
                font_size: 10,
                font_weight: 500,
                x: position.text.x + addMarginTextTime,
                y: position.text.y,
                id: `${chartObj.d3.svgObj.org.attr("id")}_dateTimeTerm`,
                fill: textColor
            }
            customD3.drawSimpleText(chartObj.d3.svgObj.org, contentsByText, options);
            let originalMinMax = chartObj.d3.getMinMax();
            let contentsByText = ``;
            if(isSet === true) {
                $(`#${chartObj.for10.d3.svgObj.org.attr("id")}_unitText`).html(contentsByText);
            }
            else {
                return contentsByText;
            }
        },
        changeStripFor10DateTimeTermText: function(chartObj, measurement, isSet = true) {
            let originalMinMax = chartObj.d3.getMinMax();
            let contentsByText = ` / ${Date.addSeconds(measurement.startDateTime, Math.floor(originalMinMax.x[0])).toString("yyyy-MM-dd HH:mm:ss")} ~ ${Date.addSeconds(measurement.startDateTime, Math.floor(originalMinMax.x[1])).toString("yyyy-MM-dd HH:mm:ss")}`;
            if(isSet === true) {
                $(`#${chartObj.for10.d3.svgObj.org.attr("id")}_dateTimeTermText`).html(contentsByText);
            }
            else {
                return contentsByText;
            }
        },
        drawStripFor10DateTimeTermText: function(chartObj, contentsByText, position, baseline, textColor = `white`) {
            let addMarginTextTime = 110;
            let options = {
                font_family: "sans-serif",
                font_size: 10,
                font_weight: 500,
                x: position.text.x + addMarginTextTime,
                y: position.text.y,
                id: `${chartObj.d3.svgObj.org.attr("id")}_dateTimeTermText`,
                fill: textColor
            }
            customD3.drawSimpleText(chartObj.d3.svgObj.org, contentsByText, options);
            contentsByText = ` / baseline: ${baseline}`;
            addMarginTextTime = 340;
            options.x = position.text.x + addMarginTextTime;
            customD3.drawSimpleText(chartObj.d3.svgObj.org, contentsByText, options);
        },

        /**
         * d3 라인챠트 초기화 함수
         * @param {string} measurementCode 측정코드
         * @param {string} type 측정 종류
         * @param {string} chartType 챠트 종류
         * @param {string|object} paramChartId 챠트관련 dom 정보
         * @param {object} minmax 챠트의 minmax 정보
         * @description d3 라인챠트 초기화를 실행한다.
         * @returns void(0)
         */
        // setInitD3Chart: function(measurementCode, type, chartType = "line", paramChartId = null, minmax = null) {
        //     // 챠트 영역
        //     let chartId = paramChartId;
        //     // 챠트 영역에 생성되는 svg
        //     let childChartId = `${type}-Strip-Chart-Clone-${measurementCode}`;
        //     // 챠트 객체
        //     let chartObjectName = "cloneChartObject";
        //     if(chartId === null) {
        //         chartId = SOCKET_D3.CHART.getChartId(type, measurementCode);
        //         chartObjectName = "chartObject";
        //         childChartId = `${type}-Strip-Chart-${measurementCode}`;
        //     }
        //     else if(typeof paramChartId === "object") {
        //         chartId = paramChartId.chartId;
        //         chartObjectName = paramChartId.chartObjectName;
        //         childChartId = paramChartId.childChartId;
        //     }
        //     // 생성된 챠트가 없을 경우 챠트 생성
        //     if($(`#${chartId} > svg`).length <= 0) {
        //         let chartColumn = {
        //             x: CUSTOM.CHART.CHART_USE_COLUMN.NORMAL.SECONDS,
        //             y: CUSTOM.CHART.CHART_USE_COLUMN.NORMAL.VALUE,
        //         }
        //         if(CUSTOM.CHART.CHART_USE_COLUMN.IS_USE_SHORT === true && type === "ECG") {
        //             chartColumn = {
        //                 x: CUSTOM.CHART.CHART_USE_COLUMN.SHORT.SECONDS,
        //                 y: CUSTOM.CHART.CHART_USE_COLUMN.SHORT.VALUE,
        //             }
        //         }
        //         /**
        //          * custom d3를 생성하기 위한 옵션
        //          */
        //         let d3Options = {
        //             // 챠트 종류
        //             type: chartType, // line, bar
        //             // 챠트 영역 dom id
        //             divName: {
        //                 parent: chartId,
        //                 chart: childChartId
        //             },
        //             // 챠트 크기
        //             size: {
        //                 width: $(`#${chartId}`).innerWidth(),
        //                 height: $(`#${chartId}`).innerHeight()
        //             },
        //             // 챠트에 사용되는 정보
        //             data: {
        //                 // 그려질 데이타
        //                 datas: null,
        //                 // x/y 축 데이타의 항목명
        //                 info: {
        //                     x: chartColumn.x,
        //                     y: chartColumn.y
        //                 },
        //                 // x,y 축 범위
        //                 minMax: minmax
        //             }
        //         };
        //         /**
        //          * custom d3 생성
        //          */
        //         CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode] = {
        //             d3: new customD3(d3Options),
        //             lineGenerator: null,
        //             path: null,
        //             stroke_color: CUSTOM.CHART.CONFIG[type].chartOption.stroke_color,
        //         };
        //         CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.initChart();
        //         // svg에 생성할 도형 추가
        //         CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path = CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.svgObj.org.append("path");
        //         // 도형이 line인데, line을 쉽게 구현하는 d3함수 이용(생성된 스케일을 이용함)
        //         CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].linearGenerator = d3.line();
        //         CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].linearGenerator.x(d => CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.scale.x(d[chartColumn.x]));
        //         CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].linearGenerator.y(d => CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.scale.y(d[chartColumn.y]));
        //         // null 데이타는 공백으로 처리하는 부분(모든값을 매번확인한다.)
        //         CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].linearGenerator.defined(function (d) {
        //                 if(CUSTOM.CHART.USE_PACEMAKER_LINE === true && d.hasOwnProperty(CUSTOM.CHART.CHART_USE_COLUMN.PACE_MAKER) === true && d[CUSTOM.CHART.CHART_USE_COLUMN.PACE_MAKER] > 0) {
        //                     _paceBeatLine(measurementCode, CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode], d, chartObjectName);
        //                 }
        //                 return d[chartColumn.y] !== null;
        //             }
        //         );
        //         // 심전도일 경우 unit 과 background 를 처리한다.
        //         if(type === "ECG") {
        //             if(GBL.ACCOUNT.INFO.isZaid === true) {
        //                 SOCKET_D3.CHART.drawRealTimeBackgroundLine(CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode], measurementCode);
        //             }
        //             SOCKET_D3.CHART.drawRealTimeChartUnitLine(CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode], measurementCode);
        //         }
        //         // 심전도에서 사용하는 페이스메이커 라인 생성 내부함수
        //         const _paceBeatLine = function(measurementCode, chartObj, d, chartObjectName) {
        //             let targetY = 1;
        //             if(d[CUSTOM.CHART.CHART_USE_COLUMN.PACE_MAKER] === 1) {
        //                 targetY = -1;
        //             }
        //             chartObj.d3.svgObj.org.append('path')
        //                 .attr('class', `${measurementCode}_${chartObjectName}_pacemakerLine`)
        //                 .attr('d', `M${chartObj.d3.scale.x(d[chartColumn.x])},${chartObj.d3.scale.y(d[chartColumn.y])} L${chartObj.d3.scale.x(d[chartColumn.x])},${chartObj.d3.scale.y(d[chartColumn.y] + targetY)}`)
        //                 .attr("fill", "none")
        //                 .attr("stroke_width", 1)
        //                 .attr("stroke", "#FFFFFF")
        //                 .attr("opacity", 1)
        //         }
        //     }
        // },



        setInitD3ChartForNew: async function(measurementCode, type, chartType = "line", clone = false, minmax = null) {
            const {CONST: SOCKET_MEASUREMENT_CONST} = await import(`/js/custom/constant/socket-measurement.js${ver_string}`);
            const {UTIL: SOCKET_MEASUREMENT_UTIL} = await import(`/js/custom/constant/util/socket-measurement.js${ver_string}`);

            // 챠트 영역
            let chartId = `div${measurementCode} #chart-${type.toLowerCase()}`;
            let chartObjectName = `chartObject`;
            let childChartId = `${type}-Strip-Chart-${measurementCode}`;
            if(clone === true) {
                chartId = `vital #chart-${type.toLowerCase()}`;
                chartObjectName = `chartObjectForFocus`;
                childChartId = `${type}-Strip-Chart-Focus-${measurementCode}`;
            }
            //
            // 생성된 챠트가 없을 경우 챠트 생성
            if($(`#${chartId} > svg`).length <= 0 && SOCKET_MEASUREMENT_UTIL.IS_STAND_BY(measurementCode, SOCKET_MEASUREMENT_CONST) === false) {
                let chartColumn = {
                    x: CUSTOM.CHART.CHART_USE_COLUMN.NORMAL.SECONDS,
                    y: CUSTOM.CHART.CHART_USE_COLUMN.NORMAL.VALUE,
                }
                if(CUSTOM.CHART.CHART_USE_COLUMN.IS_USE_SHORT === true && type === "ECG") {
                    chartColumn = {
                        x: CUSTOM.CHART.CHART_USE_COLUMN.SHORT.SECONDS,
                        y: CUSTOM.CHART.CHART_USE_COLUMN.SHORT.VALUE,
                    }
                }
                /**
                 * custom d3를 생성하기 위한 옵션
                 */
                let d3Options = {
                    // 챠트 종류
                    type: chartType, // line, bar
                    // 챠트 영역 dom id
                    divName: {
                        parent: chartId,
                        chart: childChartId
                    },
                    // 챠트 크기
                    size: {
                        width: $(`#${chartId}`).innerWidth(),
                        height: $(`#${chartId}`).innerHeight()
                    },
                    // 챠트에 사용되는 정보
                    data: {
                        // 그려질 데이타
                        datas: null,
                        // x/y 축 데이타의 항목명
                        info: {
                            x: chartColumn.x,
                            y: chartColumn.y
                        },
                        // x,y 축 범위
                        minMax: minmax
                    }
                };
                /**
                 * custom d3 생성
                 */
                CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode] = {
                    d3: new customD3(d3Options),
                    lineGenerator: null,
                    path: null,
                    stroke_color: CUSTOM.CHART.CONFIG[type].chartOption.stroke_color,
                };
                CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.initChart();
                // svg에 생성할 도형 추가
                CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path = CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.svgObj.org.append("path");
                // 도형이 line인데, line을 쉽게 구현하는 d3함수 이용(생성된 스케일을 이용함)
                CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].linearGenerator = d3.line();
                CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].linearGenerator.x(d => CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.scale.x(d[chartColumn.x]));
                CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].linearGenerator.y(d => CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.scale.y(d[chartColumn.y]));
                // null 데이타는 공백으로 처리하는 부분(모든값을 매번확인한다.)
                CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].linearGenerator.defined(function (d) {
                        if(CUSTOM.CHART.USE_PACEMAKER_LINE === true && d.hasOwnProperty(CUSTOM.CHART.CHART_USE_COLUMN.PACE_MAKER) === true && d[CUSTOM.CHART.CHART_USE_COLUMN.PACE_MAKER] > 0) {
                            _paceBeatLine(measurementCode, CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode], d, chartObjectName);
                        }
                        return d[chartColumn.y] !== null;
                    }
                );
                // 심전도일 경우 unit 과 background 를 처리한다.
                if(type === "ECG") {
                    if(GBL.ACCOUNT.INFO.isZaid === true) {
                        SOCKET_D3.CHART.drawRealTimeBackgroundLine(CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode], measurementCode);
                    }
                    SOCKET_D3.CHART.drawRealTimeChartUnitLine(CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode], measurementCode);
                }
                // 심전도에서 사용하는 페이스메이커 라인 생성 내부함수
                const _paceBeatLine = function(measurementCode, chartObj, d, chartObjectName) {
                    let targetY = 1;
                    if(d[CUSTOM.CHART.CHART_USE_COLUMN.PACE_MAKER] === 1) {
                        targetY = -1;
                    }
                    chartObj.d3.svgObj.org.append('path')
                        .attr('class', `${measurementCode}_${chartObjectName}_pacemakerLine`)
                        .attr('d', `M${chartObj.d3.scale.x(d[chartColumn.x])},${chartObj.d3.scale.y(d[chartColumn.y])} L${chartObj.d3.scale.x(d[chartColumn.x])},${chartObj.d3.scale.y(d[chartColumn.y] + targetY)}`)
                        .attr("fill", "none")
                        .attr("stroke_width", 1)
                        .attr("stroke", "#FFFFFF")
                        .attr("opacity", 1)
                }
            }
        },


        /**
         * worker에서 데이타를 수신 후 라인챠트를 그리는 함수
         * @param {object} params 라인 생성을 위한 데이터
         * @description 워커에서 전달받은 데이타로 라인을 생성한다.
         * @returns void(0)
         */
        // getChartDataByIntervalD3: function(params) {
        //     /**
        //      * 파라미터로 전달받은 d3 객체에 해당되는 svg에 라인챠트를 그리는 내부 함수
        //      * @param {object[]} chartData 라인 생성을 위한 데이터
        //      * @param {string} chartObjectName d3 객체 키값
        //      * @description 파라미터로 전달받은 d3 객체에 해당되는 svg에 라인챠트를 생성한다.
        //      * @returns void(0)
        //      */
        //     let _drawGraph = function(chartData, chartObjectName = "chartObject") {
        //         // 페이스메이커 라인은 항상 지우고 다시 그린다.
        //         if(CUSTOM.CHART.USE_PACEMAKER_LINE === true && type === "ECG") {
        //             $(`.${measurementCode}_${chartObjectName}_pacemakerLine`).remove();
        //         }
        //         // 최초 x/y 축 범위 설정
        //         if(first === true) {
        //             CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.reSetMinMax(minMax, ["x", "y"]);
        //         }
        //         // 기존 x/y 축 범위를 확인하여 비교 후 설정
        //         else {
        //             let backMinMax = CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.getMinMax();
        //             if(backMinMax.y[0] !== minMax.y[0] || backMinMax.y[1] !== minMax.y[0]) {
        //                 CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.reSetMinMax(minMax, ["x", "y"]);
        //             }
        //             else {
        //                 CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.reSetMinMax(minMax);
        //             }
        //             backMinMax = null;
        //         }
        //         // 평균값(baseline)을 기준으로 심전도의 리드오프를 확인한다.
        //         if(type === "ECG") {
        //             SOCKET_D3.DEVICE.changeLead(measurementCode, baseline, false);
        //         }
        //         // 데이타가 있을 경우 라인 생성
        //         if(chartData.length > 0) {
        //             CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path.data(chartData);
        //             CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path.attr("d", CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].linearGenerator(chartData));
        //             CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path.attr("fill", CUSTOM.CHART.CONFIG[type].chartOption.fill);
        //             CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path.attr("stroke-width", CUSTOM.CHART.CONFIG[type].chartOption.stroke_width);
        //             // CUSTOM.CHART.CONFIG[type].chartObject[measurementCode].path.attr("stroke", CUSTOM.CHART.CONFIG[type].chartOption.stroke_color);
        //             CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path.attr("stroke", CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].stroke_color);
        //         }
        //         type = null;
        //         measurementCode = null;
        //         chartData = null;
        //         chartDataStack = null;
        //         minMax = null;
        //         first = null;
        //         proceedTime = null;
        //         action = null;
        //         // pageName = null;
        //         valueId = null;
        //     }
        //     // worker에서 받은 데이타를 명시적으로 나눈다.
        //     let type = params.type;
        //     let measurementCode = params.measurementCode;
        //     let chartData = params.chartData;
        //     let chartDataStack = params.chartDataStack;
        //     let minMax = params.minMax;
        //     let first = params.first;
        //     let proceedTime = params.proceedTime;
        //     let action = params.action;
        //     // let pageName = "list";
        //     let baseline = params.baseline;
        //     let valueId = null;
        //     let clone = params.clone;
        //     let scale = params.scale.scale;
        //     let unit = params.scale.unit;
        //     // if(action == "view") {
        //     //     pageName = "detail";
        //     // }
        //     let checkChartId = SOCKET_D3.CHART.getChartId(type, measurementCode);
        //     let chartObjectName = "chartObject";
        //     if(clone === true) {
        //         checkChartId = `${type}_chart_view_detail`;
        //         chartObjectName = "cloneDetailChartObject"
        //     }
        //     // 미리 생성을 해뒀기에 무조건 있다.(상세보기일 경우 하단의 svg는 없다)
        //     if($(`#${checkChartId} >  svg`).length > 0) {
        //         // d3 객체가 있을 경우 처리하자
        //         if(CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode] !== undefined) {
        //             if(type === "ECG") {
        //                 SOCKET_D3.CHART.drawRealTimeChartUnitLine(CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode], measurementCode, scale, unit);
        //             }
        //             _drawGraph(chartData, chartObjectName);
        //         }
        //     }
        //     else {
        //         // 상세보기가 있다면 처리
        //         if($(`#contentsByDetail`).find(`#tab-1`).css("display") === "block" || $(`#contentsByDetail`).find(`#tab-1`).css("display") === "flex") {
        //             // 왜 처리속도가 느려졌는지 파악은 못함
        //             // web worker에서 보내온 데이타가 새로 선택된 측정의 svg 생성보다 먼저 와서 기존 값으로 생성을 해버리는 문제가 있다.
        //             if(CUSTOM.CHART.CHOICE_MEASUREMENT_FOR_CLONE.measurementCode === measurementCode) {
        //                 let paramChartId = {
        //                     chartId: `${type}_chart_view_detail`,
        //                     childChartId: `${type}-Strip-Chart-Clone-Detail-${measurementCode}`,
        //                     chartObjectName: `cloneDetailChartObject`
        //                 }
        //                 SOCKET_D3.CHART.setInitD3Chart(measurementCode, type, "line", paramChartId, minMax);
        //             }
        //         }
        //     }
        // },
        getChartDataByIntervalD3ForNew: async function(params) {
            const {CONST: SOCKET_MEASUREMENT_CONST} = await import(`/js/custom/constant/socket-measurement.js${ver_string}`);
            const {UTIL: SOCKET_MEASUREMENT_UTIL} = await import(`/js/custom/constant/util/socket-measurement.js${ver_string}`);

            /**
             * 파라미터로 전달받은 d3 객체에 해당되는 svg에 라인챠트를 그리는 내부 함수
             * @param {object[]} chartData 라인 생성을 위한 데이터
             * @param {string} chartObjectName d3 객체 키값
             * @description 파라미터로 전달받은 d3 객체에 해당되는 svg에 라인챠트를 생성한다.
             * @returns void(0)
             */
            let _drawGraph = function(chartData, chartObjectName = "chartObject") {
                // 페이스메이커 라인은 항상 지우고 다시 그린다.
                if(CUSTOM.CHART.USE_PACEMAKER_LINE === true && type === CUSTOM.DEVICE.TYPE.STR.ECG) {
                    $(`.${measurementCode}_${chartObjectName}_pacemakerLine`).remove();
                }
                // 최초 x/y 축 범위 설정
                let backMinMax = CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.getMinMax();
                if (first === true || backMinMax === null) {
                    CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.reSetMinMax(minMax, [`x`, `y`]);
                }
                // 기존 x/y 축 범위를 확인하여 비교 후 설정
                else {
                    // let backMinMax = CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.getMinMax();
                    if (backMinMax.y[0] !== minMax.y[0] || backMinMax.y[1] !== minMax.y[0]) {
                        CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.reSetMinMax(minMax, [`x`, `y`]);
                    }
                    else {
                        CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].d3.reSetMinMax(minMax);
                    }
                    backMinMax = null;
                }
                // 평균값(baseline)을 기준으로 심전도의 리드오프를 확인한다.
                if (type === CUSTOM.DEVICE.TYPE.STR.ECG) {
                    SOCKET_D3.DEVICE.changeLead(measurementCode, baseline, false);
                }
                // 데이타가 있을 경우 라인 생성
                if (chartData.length > 0) {
                    CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path.data(chartData);
                    CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path.attr(`d`, CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].linearGenerator(chartData));
                    CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path.attr(`fill`, CUSTOM.CHART.CONFIG[type].chartOption.fill);
                    CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path.attr(`stroke-width`, $(`#div${measurementCode} #chart-ecg`).attr(`data-stroke-width`) ?? CUSTOM.CHART.CONFIG[type].chartOption.stroke_width);
                    CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].path.attr(`stroke`, CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode].stroke_color);
                }
                type = null;
                measurementCode = null;
                chartData = null;
                chartDataStack = null;
                minMax = null;
                first = null;
                proceedTime = null;
                action = null;
                // pageName = null;
                valueId = null;
            }
            // worker에서 받은 데이타를 명시적으로 나눈다.
            let type = params.type;
            let measurementCode = params.measurementCode;
            let chartData = params.chartData;
            let chartDataStack = params.chartDataStack;
            let minMax = params.minMax;
            let first = params.first;
            let proceedTime = params.proceedTime;
            let action = params.action;
            let baseline = params.baseline;
            let valueId = null;
            let clone = params.clone;
            let scale = params.scale.scale;
            let unit = params.scale.unit;
            // if (measurementCode === `SEERS_2303211346_1V62`) {
            //     console.log("params:::::::::::", params);
            // }
            let checkChartId = `div${measurementCode} #chart-${type.toLowerCase()}`;
            let chartObjectName = `chartObject`;
            if(clone === true) {
                checkChartId = `vital #chart-${type.toLowerCase()}`;
                chartObjectName = `chartObjectForFocus`;
            }
            // 미리 생성을 해뒀기에 무조건 있다.(상세보기일 경우 하단의 svg는 없다)11
            if ($(`#${checkChartId} > svg`).length > 0) {
                // d3 객체가 있을 경우 처리하자
                if (CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode] !== undefined) {
                    if(type === "ECG") {
                        SOCKET_D3.CHART.drawRealTimeChartUnitLine(CUSTOM.CHART.CONFIG[type][chartObjectName][measurementCode], measurementCode, scale, unit);
                    }
                    if (SOCKET_MEASUREMENT_UTIL.IS_STAND_BY(measurementCode, SOCKET_MEASUREMENT_CONST) === false) {
                        _drawGraph(chartData, chartObjectName);
                    }
                }
            }
        }
    },

    DEVICE: {
        // 아래 영역에 추가하고 싶은 함수 이어서 생성
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * 파라미터로 전달받은 측정의 평균값(baseline)으로 리드오프를 판단하는 함수
         * @param {object[]} chartData 라인 생성을 위한 데이터
         * @param {string} chartObjectName d3 객체 키값
         * @description 파라미터로 전달받은 d3 객체에 해당되는 svg에 라인챠트를 생성한다.
         * @returns void(0)
         */
        changeLead: function(measurementCode= null, baseLine = 0, force = false) {
            let type = "on";
            // 리드오프라고 예측이 되는 조건을 추가하면 된다.
            if(baseLine === 29.999 || baseLine === 29.99 || baseLine === 29.9 || baseLine === 29.9999 || force === true) {
                type = "off";
            }
            let obj = {
                background: $(`#div${measurementCode}`).find(`#chart-ecg`),
                backgroundClone: $(`#divClone${measurementCode}`).find(`#chart-ecg`),
                chart: $(`#div${measurementCode}`).find(`#chart-ecg > svg`),
                chartClone: $(`#divClone${measurementCode}`).find(`#chart-ecg > svg`),
                // chartCloneDetail: $(`#ECG-Strip-Chart-Clone-Detail-${measurementCode}`),
                hr: $(`#div${measurementCode}`).find(`#value-hr`),
                resp: $(`#div${measurementCode}`).find(`#value-resp`)
            }
            // if(GBL.WINDOW_HISTORY_STATE.GET_NOW_ACTION() === "view") {
            //     obj.background = $(`#div${measurementCode}`);
            // }
            if(type === "off") {
                obj.background.removeClass("leadOff").addClass("leadOff");
                obj.backgroundClone.removeClass("leadOff").addClass("leadOff");
                obj.chart.hide();
                obj.chartClone.hide();
                // obj.chartCloneDetail.hide();
                obj.hr.text("-");
                obj.resp.text("-");
            }
            if(type === "on") {
                obj.background.removeClass("leadOff");
                obj.backgroundClone.removeClass("leadOff");
                obj.chart.show();
                obj.chartClone.show();
                // obj.chartCloneDetail.show();
            }
        },
        /**
         * 파라미터로 받은 측정의 심전도가 리드오프 상태인지 확인하는 함수
         * @param {string} measurementCode 측정코드
         * @description 파라미터로 받은 측정의 심전도가 리드오프 상태인지 확인한다.
         * @returns {boolean} 리드오프 여부
         */
        isLeadOff: function(measurementCode = null) {
            let obj = $(`#div${measurementCode}`);
            if(obj.hasClass("leadOff") === true) {
                return true;
            }
            return false;
        },
        /**
         * 파라미터로 받은 측정의 심전도가 리드오프 상태인지 확인하는 함수
         * @param {string} measurementCode 측정코드
         * @description 파라미터로 받은 측정의 심전도가 리드오프 상태인지 확인한다.
         * @returns {boolean} 리드오프 여부
         */
        // deviceConnect: function(obj, useDevice, themeName) {
        //     // ecg 일경우 관련된 부분 모두 색상 변경
        //     // custom > constant.js에서 설정을 하고, custom > util.js > process.init 에서 기관별로 색상을 바꿔서 처리한다.
        //     let color = {
        //         ECG: {
        //             //  ews: "#ffffff",
        //             //  ecg: "#00FF22",
        //             //  pvc: "#00FF22",
        //             // // resp: "#EEFF00", 20221219 간호사 요청으로 수정
        //             //  resp: "#AD0116",
        //             //  "warning-ews": "#ffffff",
        //             //  "warning-hr": "#00FF22",
        //             //  "warning-pvc": "#00FF22",
        //             //  "warning-resp": "#AD0116",
        //             //  //"warning-resp": "#EEFF00", 20221219 간호사 요청으로 수정
        //             //  "device-connect-ews": "#ffffff",
        //             //  "device-connect-hr": "#00FF22",
        //             //  "device-connect-pvc": "#00FF22",
        //             //  //"device-connect-resp": "#EEFF00", 20221219 간호사 요청으로 수정
        //             //  "device-connect-resp": "#AD0116",
        //             'ews': CUSTOM.DEVICE.MONITORING_COLOR.ECG.EWS,
        //             'ecg': CUSTOM.DEVICE.MONITORING_COLOR.ECG.ECG,
        //             'pvc': CUSTOM.DEVICE.MONITORING_COLOR.ECG.PVC,
        //             'resp': CUSTOM.DEVICE.MONITORING_COLOR.ECG.RESP,
        //             'warning-ews': CUSTOM.DEVICE.MONITORING_COLOR.ECG.EWS,
        //             'warning-hr': CUSTOM.DEVICE.MONITORING_COLOR.ECG.ECG,
        //             'warning-pvc': CUSTOM.DEVICE.MONITORING_COLOR.ECG.PVC,
        //             'warning-resp': CUSTOM.DEVICE.MONITORING_COLOR.ECG.RESP,
        //             'device-connect-ews': CUSTOM.DEVICE.MONITORING_COLOR.ECG.EWS,
        //             'device-connect-hr': CUSTOM.DEVICE.MONITORING_COLOR.ECG.ECG,
        //             'device-connect-pvc': CUSTOM.DEVICE.MONITORING_COLOR.ECG.PVC,
        //             'device-connect-resp': CUSTOM.DEVICE.MONITORING_COLOR.ECG.RESP
        //         },
        //         SPO2: {
        //             // sp: "#00FFFF",
        //             // "warning-spo2": "#00FFFF",
        //             // "device-connect-spo2": "#00FFFF",
        //             'sp': CUSTOM.DEVICE.MONITORING_COLOR.SPO2.SP,
        //             'warning-spo2': CUSTOM.DEVICE.MONITORING_COLOR.SPO2.SP,
        //             'device-connect-spo2': CUSTOM.DEVICE.MONITORING_COLOR.SPO2.SP
        //         },
        //         TEMP: {
        //             // // temp: "#FF5499",
        //             // // "warning-temp": "#FF5499",
        //             // // "device-connect-temp": "#FF5499",
        //             // temp: "#00FFFF",
        //             // "warning-temp": "#00FFFF",
        //             // "device-connect-temp": "#00FFFF",
        //             temp: CUSTOM.DEVICE.MONITORING_COLOR.TEMP.TEMP,
        //             'warning-temp': CUSTOM.DEVICE.MONITORING_COLOR.TEMP.TEMP,
        //             'device-connect-temp': CUSTOM.DEVICE.MONITORING_COLOR.TEMP.TEMP
        //         },
        //         // nbp: "#ad0116",
        //     }
        //     let notUseColor = CUSTOM.DEVICE.MONITORING_COLOR.NOT_USE;
        //     // 하드코딩(장치)
        //     let device = null;
        //     if(themeName !== GBL.DESIGN.THEME) {
        //         device = {
        //             ECG: "mc200m",
        //             SPO2: "mp100",
        //             TEMP: "mt100",
        //         }
        //     }
        //     for(let key in color) {
        //         if(useDevice.indexOf(key) === -1) {
        //             for(let subKey in color[key]) {
        //                 obj.find(`.${subKey}`).css("color", notUseColor);
        //             }
        //         }
        //         else {
        //             for(let subKey in color[key]) {
        //                 obj.find(`.${subKey}`).css("color", color[key][subKey]);
        //             }
        //
        //             if(themeName !== GBL.DESIGN.THEME) {
        //                 obj.find(`.${device[key]}`).css({
        //                     "background-color": "transparent",
        //                     "border": "1px solid #ffffff",
        //                 });
        //                 obj.find(`.${device[key]}`).find(`img`).css({
        //                     "opacity": "1"
        //                 });
        //             }
        //         }
        //     }
        // }
        deviceConnect: async function(obj, useDevice, measurementCode = null) {
            const {CONST: DEVICE_CONST} = await import(`/js/custom/constant/device.js${ver_string}`);
            const {CONST: SOCKET_MEASUREMENT_CONST} = await import(`/js/custom/constant/socket-measurement.js${ver_string}`);
            let _m = obj.find(SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.CHILD).attr(`data-unique-id`);
            if (measurementCode !== null) {
                _m = measurementCode;
            }
            let _t = GBL.CONSTANTS.get(`MEASUREMENT.${_m}`);
            for(let key in DEVICE_CONST.DESIGN_STATUS) {
                obj.find(DEVICE_CONST.DESIGN_STATUS[key].selector).removeClass(DEVICE_CONST.DESIGN_STATUS[key].on).removeClass(DEVICE_CONST.DESIGN_STATUS[key].off).removeClass(DEVICE_CONST.DESIGN_STATUS[key]['low-battery']);
                if(useDevice.indexOf(key) === -1) {
                    obj.find(DEVICE_CONST.DESIGN_STATUS[key].selector).addClass(DEVICE_CONST.DESIGN_STATUS[key].off);
                    _t.deviceClass[key] = DEVICE_CONST.DESIGN_STATUS[key].off;
                }
                else {
                    obj.find(DEVICE_CONST.DESIGN_STATUS[key].selector).addClass(DEVICE_CONST.DESIGN_STATUS[key].on);
                    _t.deviceClass[key] = DEVICE_CONST.DESIGN_STATUS[key].on;
                }
            }
            GBL.CONSTANTS.set(`MEASUREMENT.${_t.measurementCode}`, _t, true);
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
}