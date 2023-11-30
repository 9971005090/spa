"use strict";

const promise = async () => {

    const {CONST: CONST} = await import(`/js/module/patient_change/constant.js${ver_string}`);
    const html = await import(`/js/module/patient_change/template/${CONST.DESIGN.THEME}/design.js${ver_string}`);
    const ignoreAuthAction = ["index"];

    const _setPostProcess = function(action, param = null) {
        if(CONST.POST_PROCESS.hasOwnProperty(action) === true) {
            // 레이아웃 생성 후 레이아웃 관련 event 처리가 있을 경우, 필요한 html 에 추가하여, 사용하기
            CONST.POST_PROCESS[action](param);
        }
    }

    const index = (function(emergency = null) {
        return (emergency = null) => {
            if(emergency.measurementCode != null) {
                if(emergency.type.indexOf("red") !== -1) {
                    if(emergency.type === "red") {
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-red", "yes");
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-redProcess", emergency.redProcess);
                    }
                    else {
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-red", "off");
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-redProcess", "");
                    }
                }
                else if(emergency.type.indexOf("blue_off") !== -1) {
                    if(emergency.type === "blue_off_hr") {
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-blue-hr", "off");
                    }
                    if(emergency.type === "blue_off_ews") {
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-blue-ews", "off");
                    }
                    if(emergency.type === "blue_off_resp") {
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-blue-resp", "off");
                    }
                    if(emergency.type === "blue_off_temp") {
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-blue-temp", "off");
                    }
                }
                else if(emergency.type.indexOf("blue") !== -1) {
                    if(emergency.type === "blue_hr") {
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-blue-hr", "yes");
                    }
                    if(emergency.type === "blue_ews") {
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-blue-ews", "yes");
                    }
                    if(emergency.type === "blue_resp") {
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-blue-resp", "yes");
                    }
                    if(emergency.type === "blue_temp") {
                        $(`[data-unique-id="${emergency.measurementCode}"]`).attr("data-emergency-blue-temp", "yes");
                    }
                }

                $(`[data-unique-id="${emergency.measurementCode}"]`).closest(CUSTOM.MONITORING.EMERGENCY.SELECTOR.NAME.PARENT).trigger("change");
                $(`[data-unique-id="${emergency.measurementCode}"]`).closest(CUSTOM.MONITORING.EMERGENCY.SELECTOR.NAME.PARENT_FOR_DASHBOARD).trigger("change");
            }
        }
    })();

    const warning = (function(info = null) {
        return (info = null) => {
            let _isWaring = (function(type = "simple", mode = "hr", data = null) {
                return (type = "simple", mode = "hr", data = null) => {
                    let max = 0;
                    let min = 0;
                    let checkValue = 0;
                    if(data !== null) {
                        // console.log("info.data::::::", info.data);
                        if(mode === "hr") {
                            max = CUSTOM.MEASUREMENT_INFO.list[data.measurementCode].measurementAlarmSetting.heartRateMax;
                            min = CUSTOM.MEASUREMENT_INFO.list[data.measurementCode].measurementAlarmSetting.heartRateMin;
                            checkValue = info.data.hr;
                        }
                        if(mode === "resp") {
                            max = CUSTOM.MEASUREMENT_INFO.list[data.measurementCode].measurementAlarmSetting.respMax;
                            min = CUSTOM.MEASUREMENT_INFO.list[data.measurementCode].measurementAlarmSetting.respMin;
                            checkValue = info.data.resp;
                        }
                        if(mode === "spo2") {
                            min = CUSTOM.MEASUREMENT_INFO.list[data.measurementCode].measurementAlarmSetting.spo2Min;
                            checkValue = info.data.spo2;
                        }
                        if(mode === "temp") {
                            max = CUSTOM.MEASUREMENT_INFO.list[data.measurementCode].measurementAlarmSetting.tempMax;
                            min = CUSTOM.MEASUREMENT_INFO.list[data.measurementCode].measurementAlarmSetting.tempMin;
                            checkValue = info.data.temp;
                        }
                        if(mode === "ews") {
                            checkValue = info.data.ews;
                            if (2 < checkValue) {
                                return true;
                            }
                        }
                        else {
                            if(checkValue > 0) {
                                if (min > checkValue || max < checkValue) {
                                    return true;
                                }
                            }
                        }
                    }
                    max = null;
                    min = null;
                    checkValue = null;
                    return false;
                }
            })();
            if(info != null) {
                if(info.type === "simple" || info.type === "default") {
                    if(info.data.hr > 0 || info.data.resp > 0 || info.data.spo2 > 0 || info.data.temp > 0 || info.data.ews > -2) {
                        if(info.data.hr > 0) {
                            if (_isWaring("simple", "hr", info.data) === true) {
                                $(`[data-unique-id="${info.data.measurementCode}"]`).attr("data-emergency-yellow-hr", "yes");
                            } else {
                                $(`[data-unique-id="${info.data.measurementCode}"]`).attr("data-emergency-yellow-hr", "");
                            }
                        }
                        if(info.data.resp > 0) {
                            if (_isWaring("simple", "resp", info.data) === true) {
                                $(`[data-unique-id="${info.data.measurementCode}"]`).attr("data-emergency-yellow-resp", "yes");
                            } else {
                                $(`[data-unique-id="${info.data.measurementCode}"]`).attr("data-emergency-yellow-resp", "");
                            }
                        }
                        if(info.data.spo2 > 0) {
                            if (_isWaring("simple", "spo2", info.data) === true) {
                                $(`[data-unique-id="${info.data.measurementCode}"]`).attr("data-emergency-yellow-spo2", "yes");
                            } else {
                                $(`[data-unique-id="${info.data.measurementCode}"]`).attr("data-emergency-yellow-spo2", "");
                            }
                        }
                        if(info.data.temp > 0) {
                            if (_isWaring("simple", "temp", info.data) === true) {
                                $(`[data-unique-id="${info.data.measurementCode}"]`).attr("data-emergency-yellow-temp", "yes");
                            } else {
                                $(`[data-unique-id="${info.data.measurementCode}"]`).attr("data-emergency-yellow-temp", "");
                            }
                        }
                        if(info.data.ews > -2) {
                            if (_isWaring("simple", "ews", info.data) === true) {
                                $(`[data-unique-id="${info.data.measurementCode}"]`).attr("data-emergency-yellow-ews", "yes");
                            } else {
                                $(`[data-unique-id="${info.data.measurementCode}"]`).attr("data-emergency-yellow-ews", "");
                            }
                        }
                        // $(`[data-unique-id="${info.data.measurementCode}"]`).closest(CUSTOM.MONITORING.EMERGENCY.SELECTOR.NAME.PARENT).trigger("change");
                        // $(`[data-unique-id="${info.data.measurementCode}"]`).closest(CUSTOM.MONITORING.EMERGENCY.SELECTOR.NAME.PARENT_FOR_DASHBOARD).trigger("change");
                    }
                }
                if(info.type === "default") {

                }
            }
        }
    })();

    return {
        ignoreAuthAction: ignoreAuthAction,
        index: index,
        warning: warning
    };
};

export { promise }
