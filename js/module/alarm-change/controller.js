"use strict";

const {CONST: MONITORING_CONST} = await import(`/js/custom/constant/monitoring.js${ver_string}`);
const {CONST: SOCKET_MEASUREMENT_CONST} = await import(`/js/custom/constant/socket-measurement.js${ver_string}`);
const {UTIL: MONITORING_MEASUREMENT_UTIL} = await import(`/js/custom/constant/util/monitoring/measurement.js${ver_string}`);

const promise = async () => {

    // const {CONST: CONST} = await import(`/js/module/measurement-change/constant.js${ver_string}`);
    // const html = await import(`/js/module/measurement-change/template/${CONST.DESIGN.THEME}/designPvc.js${ver_string}`);
    const ignoreAuthAction = ["index"];

    const index = function(setting = null) {
        if(setting.measurementCode != null && $(`#div${setting.measurementCode}`).length > 0) {
            let _t = GBL.CONSTANTS.get(`MEASUREMENT.${setting.measurementCode}`);

            _t.measurementAlarmSetting.heartRateMax = setting.heartRateMax;
            _t.measurementAlarmSetting.heartRateMin = setting.heartRateMin;
            _t.measurementAlarmSetting.spo2Min = setting.spo2Min;
            _t.measurementAlarmSetting.respMax = setting.respMax;
            _t.measurementAlarmSetting.respMin = setting.respMin;
            _t.measurementAlarmSetting.tempMax = setting.tempMax;
            _t.measurementAlarmSetting.tempMin = setting.tempMin;
            _t.measurementAlarmSetting.tempUnit = setting.tempUnit;
            _t.measurementAlarmSetting.hrAlertAlarm = setting.hrAlertAlarm;
            _t.measurementAlarmSetting.ewsAlertAlarm = setting.ewsAlertAlarm;
            _t.measurementAlarmSetting.spo2AlertAlarm = setting.spo2AlertAlarm;
            _t.measurementAlarmSetting.respAlertAlarm = setting.respAlertAlarm;
            _t.measurementAlarmSetting.tempAlertAlarm = setting.tempAlertAlarm;
            _t.measurementAlarmSetting.scale = setting.scale;

            $(`#div${setting.measurementCode}`).find(`#max-hr`).text(setting.heartRateMax);
            $(`#div${setting.measurementCode}`).find(`#min-hr`).text(setting.heartRateMin);
            $(`#div${setting.measurementCode}`).find(`#min-spo2`).text(setting.spo2Min);
            $(`#div${setting.measurementCode}`).find(`#max-resp`).text(setting.respMax);
            $(`#div${setting.measurementCode}`).find(`#min-resp`).text(setting.respMin);
            $(`#div${setting.measurementCode}`).find(`#max-temp`).text(setting.tempMax);
            $(`#div${setting.measurementCode}`).find(`#min-temp`).text(setting.tempMin);
            $(`.vital-detail .btn-alarm`).each(function(index, item) {
                if ($(item).attr(`data-column`) === `hr`) {
                    MONITORING_MEASUREMENT_UTIL.SET_ALARM($(item), setting.hrAlertAlarm);
                }
                if ($(item).attr(`data-column`) === `ews`) {
                    MONITORING_MEASUREMENT_UTIL.SET_ALARM($(item), setting.ewsAlertAlarm);
                }
                if ($(item).attr(`data-column`) === `spo2`) {
                    MONITORING_MEASUREMENT_UTIL.SET_ALARM($(item), setting.spo2AlertAlarm);
                }
                if ($(item).attr(`data-column`) === `resp`) {
                    MONITORING_MEASUREMENT_UTIL.SET_ALARM($(item), setting.respAlertAlarm);
                }
                if ($(item).attr(`data-column`) === `temp`) {
                    MONITORING_MEASUREMENT_UTIL.SET_ALARM($(item), setting.tempAlertAlarm);
                }
            });
            // 대시보드의 집중 보기가 활성화 됐을 경우
            if ($(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).length > 0 && GBL.CONSTANTS.get(`MEASUREMENT.SELECTED.CODE`) === setting.measurementCode) {
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#max-hr`).text(setting.heartRateMax);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#min-hr`).text(setting.heartRateMin);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#min-spo2`).text(setting.spo2Min);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#max-resp`).text(setting.respMax);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#min-resp`).text(setting.respMin);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#max-temp`).text(setting.tempMax);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#min-temp`).text(setting.tempMin);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#mute-hr`).prop("checked", false);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#mute-ews`).prop("checked", false);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#mute-spo2`).prop("checked", false);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#mute-resp`).prop("checked", false);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`.warning-resp`).find(`span`).css(`filter`, CUSTOM.DEVICE.MONITORING_COLOR.ECG.RESP_FILTER);
                $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#mute-temp`).prop("checked", false);
                if (setting.hrAlertAlarm === 0) {
                    $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#mute-hr`).prop("checked", true);
                }
                if (setting.ewsAlertAlarm === 0) {
                    $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#mute-ews`).prop("checked", true);
                }
                if (setting.spo2AlertAlarm === 0) {
                    $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#mute-spo2`).prop("checked", true);
                }
                if (setting.respAlertAlarm === 0) {
                    $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#mute-resp`).prop("checked", true);
                    $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`.warning-resp`).find(`span`).css(`filter`, `none`);

                }
                if (setting.tempAlertAlarm === 0) {
                    $(`${SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS}`).find(`#mute-temp`).prop("checked", true);
                }
            }

            // // 현재 챠트가 그려져 있을때만 실행되게
            let showChart = false;
            // 모니터링 상세보기
            if (MONITORING_CONST.MENU.NAME.MONITORING.indexOf(GBL.CONSTANTS.get(`NOW_CONTROLLER`)) !== -1 && MONITORING_CONST.ACTION.MONITORING.VIEW.indexOf(GBL.CONSTANTS.get(`NOW_ACTION`)) !== -1) {
                showChart = true;
            }
            // 대시보드

            if (showChart === true) {
                let type = "ECG";
                custom.etc.workerChart.run(CUSTOM.CHART.WORKER, SOCKET_D3.CHART.getChartDataByIntervalD3ForNew, {processType: "change", type: type, change: {
                        params: {
                            scale: _t.measurementAlarmSetting.scale,
                            measurementCode: setting.measurementCode
                        }
                    }
                });
                SOCKET_D3.CHART.drawRealTimeChartUnitLine(CUSTOM.CHART.CONFIG[type]['chartObject'][setting.measurementCode], setting.measurementCode);
                if (GBL.WINDOW_HISTORY_STATE.GET_NOW_CONTROLLER().indexOf("fullMonitoring") !== -1 && CUSTOM.CHART.CHOICE_MEASUREMENT_FOR_CLONE !== null) {
                    SOCKET_D3.CHART.drawRealTimeChartUnitLine(CUSTOM.CHART.CONFIG[type]['cloneDetailChartObject'][setting.measurementCode], setting.measurementCode);
                }

            }
            $(`#div${setting.measurementCode} .vital-toolBar .scale-button`).removeClass(`off`);
            if (_t.measurementAlarmSetting.scale === SOCKET_MEASUREMENT_CONST.ECG.CHART.SCALE.NORMAL) {
                $(`#div${setting.measurementCode} .vital-toolBar .scale-button`).addClass(`off`);
            }
            GBL.CONSTANTS.set(`MEASUREMENT.${setting.measurementCode}`, _t, true);
        }
    };

    return {
        ignoreAuthAction: ignoreAuthAction,
        index: index
    };
};

export { promise }
