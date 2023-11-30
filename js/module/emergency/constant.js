"use strict";
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
        CONST.DESIGN.THEME = "console";
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    },
    UTIL: {
        IS_YELLOW: function(choiceObj, selectorName, type = "index") {
            if(type === "index") {
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-hr") === "yes" || choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-ews") === "yes" || choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-resp") === "yes" || choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-spo2") === "yes" || choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-temp") === "yes") {
                    return true;
                }
            }
            return false;
        },
        IS_BLUE: function(choiceObj, selectorName, type = "index") {
            if(type === "index") {
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-hr") === "yes" || choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-ews") === "yes" || choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-resp") === "yes" || choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-temp") === "yes") {
                    return true;
                }
            }
            return false;
        }
    },
    EVENT : {
        SET_COMMON: function(choiceObj, selectorName) {
            let measurementCode = choiceObj.find(`${selectorName.child}`).attr("data-unique-id");
            if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-red") === "yes") {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.red = true;
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.redProcess = $(`#div${measurementCode}`).find(`.patient_info`).attr("data-emergency-redProcess");
            }
            else {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.red = false;
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.redProcess = "";
            }
            // if("SK_2206071130_I32Y" === measurementCode) {
            //     console.log("CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo:::::::::", CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo);
            // }
            if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-hr") !== "") {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.yellowHr = true;
            }
            else {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.yellowHr = false;
            }
            if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-ews") !== "") {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.yellowEws = true;
            }
            else {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.yellowEws = false;
            }
            if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-resp") !== "") {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.yellowResp = true;
            }
            else {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.yellowResp = false;
            }
            if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-temp") !== "") {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.yellowTemp = true;
            }
            else {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.yellowTemp = false;
            }
            if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-spo2") !== "") {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.yellowSpo2 = true;
            }
            else {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.yellowSpo2 = false;
            }
            if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue") === "yes") {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.blue = true;
            }
            else {
                CUSTOM.MEASUREMENT_INFO.list[measurementCode].emergencyInfo.blue = false;
            }
        },
        SET_INDEX: function(choiceObj, selectorName) {
            choiceObj.removeClass("active");
            choiceObj.removeClass("yellow");
            choiceObj.removeClass("blue");
            if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-red") === "yes") {
                choiceObj.addClass("active");
            }
            choiceObj.find(".warning-hr").removeClass("sub_active");
            choiceObj.find(".warning-ews").removeClass("sub_active");
            choiceObj.find(".warning-temp").removeClass("sub_active");
            choiceObj.find(".warning-resp").removeClass("sub_active");
            choiceObj.find(".warning-spo2").removeClass("sub_active");
            choiceObj.find(".warning-hr").removeClass("sub_active_blue");
            choiceObj.find(".warning-ews").removeClass("sub_active_blue");
            choiceObj.find(".warning-temp").removeClass("sub_active_blue");
            choiceObj.find(".warning-resp").removeClass("sub_active_blue");
            choiceObj.find(".warning-spo2").removeClass("sub_active_blue");
            if(CONST.UTIL.IS_YELLOW(choiceObj, selectorName) === true) {
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-red") !== "yes") {
                    choiceObj.addClass("active");
                    choiceObj.addClass("yellow");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-hr") === "yes") {
                    choiceObj.find(".warning-hr").addClass("sub_active");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-resp") === "yes") {
                    choiceObj.find(".warning-resp").addClass("sub_active");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-ews") === "yes") {
                    choiceObj.find(".warning-ews").addClass("sub_active");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-temp") === "yes") {
                    choiceObj.find(".warning-temp").addClass("sub_active");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-yellow-spo2") === "yes") {
                    choiceObj.find(".warning-spo2").addClass("sub_active");
                }
            }
            if(CONST.UTIL.IS_BLUE(choiceObj, selectorName) === true) {
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-red") !== "yes" && CONST.UTIL.IS_YELLOW(choiceObj, selectorName) !== true) {
                    choiceObj.addClass("active");
                    choiceObj.addClass("yellow");
                    choiceObj.addClass("blue");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-hr") === "yes") {
                    choiceObj.find(".warning-hr").addClass("sub_active_blue");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-ews") === "yes") {
                    choiceObj.find(".warning-ews").addClass("sub_active_blue");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-resp") === "yes") {
                    choiceObj.find(".warning-resp").addClass("sub_active_blue");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-temp") === "yes") {
                    choiceObj.find(".warning-temp").addClass("sub_active_blue");
                }
            }
            else {
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-hr") === "off") {
                    choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-hr", "");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-ews") === "off") {
                    choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-ews", "");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-resp") === "off") {
                    choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-resp", "");
                }
                if(choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-temp") === "off") {
                    choiceObj.find(`${selectorName.child}`).attr("data-emergency-blue-temp", "");
                }
            }
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
CONST.INIT();