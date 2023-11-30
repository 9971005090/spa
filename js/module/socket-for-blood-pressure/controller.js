"use strict";

const promise = async () => {

    const {CONST: CONST} = await import(`/js/module/socket-for-blood-pressure/constant.js${ver_string}`);
    const {CONST: FULL_MONITORING_CONST} = await import(`/js/custom/constant/full-monitoring.js${ver_string}`);
    const {CONST: MONITORING_CONST} = await import(`/js/custom/constant/monitoring.js${ver_string}`);
    const {CONST: SOCKET_MEASUREMENT_CONST} = await import(`/js/custom/constant/socket-measurement.js${ver_string}`);
    const ignoreAuthAction = [];

    const _setBloodPressure = async function(measurementCode, bloodPressureInfo) {
        const {CONST: SOCKET_MEASUREMENT_CONST} = await import(`/js/custom/constant/socket-measurement.js${ver_string}`);
        const {UTIL: SOCKET_MEASUREMENT_UTIL} = await import(`/js/custom/constant/util/socket-measurement.js${ver_string}`);
        let checkUrl = document.location.origin;
        let checkSearch = document.location.search;
        if (bloodPressureInfo.systolic !== null && bloodPressureInfo.systolic !== "-" && SOCKET_MEASUREMENT_UTIL.IS_STAND_BY(measurementCode, SOCKET_MEASUREMENT_CONST) === false) {
            // if (GBL.WINDOW_HISTORY_STATE.GET_NOW_ACTION() === "select") {
            //     if (checkUrl.indexOf("ward.mobicareconsole.com") !== -1 || checkSearch.indexOf("wardCode") !== -1) {
            //         // $(`#div${measurementCode}`).find(`#value-nbp`).html(`${bloodPressureInfo.systolic}/${bloodPressureInfo.diastolic} (${bloodPressureInfo.pulse})`);
            //         // $(`#div${measurementCode}`).find(`#value-nbp2`).html(bloodPressureInfo.pulse);
            //         // $(`#div${measurementCode}`).find(`#value-nbp3`).html(new Date(bloodPressureInfo.recordDateTime).toString("yy.MM.dd HH:mm:ss"));
            //         // $(`#div${measurementCode}`).find(`#value-nbp4`).html(new Date(bloodPressureInfo.recordDateTime).toString("HH:mm"));
            //         $(`#div${measurementCode}`).find(`#value-nbpPulse`).html(`${bloodPressureInfo.pulse}`);
            //         $(`#div${measurementCode}`).find(`#value-nbpSystolic`).html(`${bloodPressureInfo.systolic}`);
            //         $(`#div${measurementCode}`).find(`#value-nbpDiastolic`).html(`${bloodPressureInfo.diastolic}`);
            //     }
            //     else {
            //         $(`#div${measurementCode}`).find(`#value-nbpPulse`).html(`${bloodPressureInfo.pulse}`);
            //         $(`#div${measurementCode}`).find(`#value-nbpSystolic`).html(`${bloodPressureInfo.systolic}`);
            //         $(`#div${measurementCode}`).find(`#value-nbpDiastolic`).html(`${bloodPressureInfo.diastolic}`);
            //         // $(`#div${measurementCode}`).find(`#value-nbp`).html(`${bloodPressureInfo.systolic}/${bloodPressureInfo.diastolic}`);
            //         // $(`#div${measurementCode}`).find(`#value-nbp2`).html(bloodPressureInfo.pulse);
            //         // $(`#div${measurementCode}`).find(`#value-nbp3`).html(new Date(bloodPressureInfo.recordDateTime).toString("yy.MM.dd HH:mm:ss"));
            //         // $(`#div${measurementCode}`).find(`#value-nbp4`).html(new Date(bloodPressureInfo.recordDateTime).toString("HH:mm"));
            //     }
            //     // 집중보기
            //     if (String.isNullOrWhitespace(CUSTOM.CHART.CHOICE_MEASUREMENT_FOR_CLONE) === false) {
            //         if (CUSTOM.CHART.CHOICE_MEASUREMENT_FOR_CLONE.measurementCode === measurementCode) {
            //             $(`#contentsByDetailParent`).find(`#value-nbp`).text(`${bloodPressureInfo.systolic}/${bloodPressureInfo.diastolic}`);
            //             $(`#contentsByDetailParent`).find(`#value-nbp2`).text(bloodPressureInfo.pulse);
            //             $(`#contentsByDetailParent`).find(`#value-nbp3`).text(new Date(bloodPressureInfo.recordDateTime).toString("yy.MM.dd HH:mm:ss"));
            //         }
            //     }
            // }
            // else if (GBL.WINDOW_HISTORY_STATE.GET_NOW_ACTION() === "view") {
            //     $(`#div${measurementCode}`).find(`#value-nbpPulse`).html(`${bloodPressureInfo.pulse}`);
            //     $(`#div${measurementCode}`).find(`#value-nbpSystolic`).html(`${bloodPressureInfo.systolic}`);
            //     $(`#div${measurementCode}`).find(`#value-nbpDiastolic`).html(`${bloodPressureInfo.diastolic}`);
            // }
            // else if (GBL.WINDOW_HISTORY_STATE.GET_NOW_ACTION() === "index") {
            //     $(`#div${measurementCode}`).find(`#value-nbpPulse`).html(`${bloodPressureInfo.pulse}`);
            //     $(`#div${measurementCode}`).find(`#value-nbpSystolic`).html(`${bloodPressureInfo.systolic}`);
            //     $(`#div${measurementCode}`).find(`#value-nbpDiastolic`).html(`${bloodPressureInfo.diastolic}`);
            // }

            if (MONITORING_CONST.MENU.NAME.MONITORING.indexOf(GBL.CONSTANTS.get(`NOW_CONTROLLER`)) !== -1 && MONITORING_CONST.ACTION.MONITORING.LIST.indexOf(GBL.CONSTANTS.get(`NOW_ACTION`)) !== -1 || MONITORING_CONST.MENU.NAME.DASHBOARD.indexOf(GBL.CONSTANTS.get(`NOW_CONTROLLER`)) !== -1 || MONITORING_CONST.ACTION.MONITORING.VIEW.indexOf(GBL.CONSTANTS.get(`NOW_ACTION`)) !== -1) {
                $(`#div${measurementCode}`).find(`#value-nbpPulse`).html(`${bloodPressureInfo.pulse}`);
                $(`#div${measurementCode}`).find(`#value-nbpSystolic`).html(`${bloodPressureInfo.systolic}`);
                $(`#div${measurementCode}`).find(`#value-nbpDiastolic`).html(`${bloodPressureInfo.diastolic}`);
            }
            // 집중보기가 있는 경우
            if ($(SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS).length > 0) {
                $(SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS).find(`#value-nbpPulse`).html(`${bloodPressureInfo.pulse}`);
                $(SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS).find(`#value-nbpSystolic`).html(`${bloodPressureInfo.systolic}`);
                $(SOCKET_MEASUREMENT_CONST.SELECTOR.MEASUREMENT.NAME.FOCUS).find(`#value-nbpDiastolic`).html(`${bloodPressureInfo.diastolic}`);
            }

            let measurement = GBL.CONSTANTS.get(`MEASUREMENT.${measurementCode}`);
            measurement.measurementAlarmSetting.nowValue.nbpPulse = bloodPressureInfo.pulse;
            measurement.measurementAlarmSetting.nowValue.nbpSystolic = bloodPressureInfo.systolic;
            measurement.measurementAlarmSetting.nowValue.nbpDiastolic = bloodPressureInfo.diastolic;
            measurement.measurementAlarmSetting.nowValue.nbpRecordDateTime = bloodPressureInfo.recordDateTime;
            GBL.CONSTANTS.set(`MEASUREMENT.${measurement.measurementCode}`, measurement, true);
            // 병상 코드로 직접찾기 위해
            GBL.CONSTANTS.set(`MEASUREMENT.SICK_BED.${measurement.sickBedCode}`, measurement.measurementCode, true);
        }
    }

    const index = function(setting = null) {
        let bloodPressureInfo = null;
        if(setting.measurementCode != null && setting.hasOwnProperty("bioSignalData") === true && setting.bioSignalData.hasOwnProperty("bloodPressureSimple") === true && setting.bioSignalData.bloodPressureSimple !== null) {
            bloodPressureInfo = setting.bioSignalData.bloodPressureSimple;
            bloodPressureInfo.recordDateTime = setting.bioSignalData.bloodPressureSimple.dateTime;
        }
        if(setting.measurementCode != null && setting.hasOwnProperty("bioSignalSimpleData") === true && setting.bioSignalSimpleData.hasOwnProperty("systolic") === true && setting.bioSignalSimpleData.systolic !== null) {
            bloodPressureInfo = setting.bioSignalSimpleData;
        }
        _setBloodPressure(setting.measurementCode, bloodPressureInfo);
    };

    return {
        ignoreAuthAction: ignoreAuthAction,
        index: index
    };
};

export { promise }
