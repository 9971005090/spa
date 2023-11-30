"use strict";

const promise = async() => {
    const {CONST: MEASUREMENT_CONST} = await import(`/js/custom/constant/measurement.js${ver_string}`);
    const {CONST: NOTIFICATION_CONST} = await import(`/js/custom/${GBL.DESIGN.THEME}/notification_constant.js${ver_string}`);
    const html = await import(`/template/${GBL.DESIGN.THEME}/content/measurement/notification.js${ver_string}`);
    const htmlForUnit = await import(`/template/${GBL.DESIGN.THEME}/content/unit.js${ver_string}`);
    const {UTIL: NOTIFICATION_UTIL} = await import(`/js/custom/${GBL.DESIGN.THEME}/util/notification.js${ver_string}`);
    const {UTIL: PATIENT_UTIL} = await import(`/js/custom/constant/util/patient.js${ver_string}`);
    const {API: MEASUREMENT_API} = await import(`/js/custom/constant/api/measurement.js${ver_string}`);

    const setAddEvent = function(content = `index`) {
        if(content === `index`) {
            if(PATIENT_UTIL.GET_SYNC_PATIENT_INFO(patientCodeInfo().patientCode).homePatientInfo.homeStatus === 2){
                $(`.notificationHistory textarea, .notificationHistory .senderInput, .notificationHistory #buttonForAlarmPush`).prop("disabled", true);
            }

            // 신규 알림 보내기 버튼 클릭
            CUSTOM.EVENT.HTML.push("#buttonForAlarmPush");
            $("#buttonForAlarmPush").off("click").on("click", function (e) {
                e.preventDefault();
                if( $(`.messageInputView textarea`).val() !== "" && $(`.senderInput`).val() !== ""){
                    let thisPatientCode = patientCodeInfo().patientCode
                    let passingParams = {
                        patientCodeList: [thisPatientCode],
                        fromName: $(`.senderInput`).val(),
                        message: $(`.messageInputView textarea`).val(),
                        sendType: 1,
                        requestDateTime: new Date().toString(`yyyy-MM-dd HH:mm:ss`),
                    }
                    let response = NOTIFICATION_UTIL.INSERT_HOME_ALARM_MESSAGE(passingParams);
                    searchAlarmList();
                    $(`.senderInput`).val("");
                    $(`.messageInputView textarea`).val("");
                    GBL.CONSTANTS.set(`MEASUREMENT.messageAlarmTextarea`, "", true);
                }
                else {
                    if( $(`.messageInputView textarea`).val() === "" || $(`.senderInput`).val() === ""){
                        let modalId = "customAlert";
                        let initParameter = {
                            msg: `<div style="text-align: center;width: 100%;"><b style="font-weight: bold;">메세지</b> 또는 <b style="font-weight: bold;">발신인</b>을 입력해주세요.</div>`,
                            id: modalId,
                            isBackgroundClickForClose: false,
                            button: {
                                ok: {
                                    callback: []
                                },
                                del: {
                                    isUse: false
                                },
                                cancel: {
                                    callback: [
                                        {
                                            name: modal.globalClose,
                                            params: [modalId]
                                        }
                                    ]
                                }
                            }
                        }
                        Seers.Loader.moduleLoad(`custom-alert`, `index`, initParameter);
                    }
                }
            });
            $(`.messageInputView .textarea`).keyup(function (e){
                let content = $(this).val();
                GBL.CONSTANTS.set(`MEASUREMENT.messageAlarmTextarea`, content, true);
            });

            let messageAlarmTextarea = GBL.CONSTANTS.get(`MEASUREMENT.messageAlarmTextarea`);
            if(messageAlarmTextarea !== "" ){
                $(`.messageInputView .textarea`).val(messageAlarmTextarea)
            }
        }
        if(content === "datas"){
            // 알림메시지 상세보기 버튼 클릭
            CUSTOM.EVENT.HTML.push(".btnForNotificationDetail");
            $(".btnForNotificationDetail").off("click").click(function (e) {
                e.preventDefault();
                let successPararms = {
                    alarmCode : $(this).data("alarmcode")
                }
                NOTIFICATION_CONST.UTIL.EVENT.NOTIFICATION_END(this,successPararms,"measurement");
            });
        }
    }
    const patientCodeInfo = function(){
        let passingParamsInfo = {
            requester : GBL.ACCOUNT.INFO.userCode,
            organizationCode : GBL.ACCOUNT.INFO.organizationCode,
            measurementCode : GBL.CONSTANTS.get(`MEASUREMENT.SELECTED.CODE`)
        }
        let _r = custom.request.api(MEASUREMENT_API.SELECT_MEASUREMENT_INFO, passingParamsInfo);
        return _r.homeMeasurementInfo;
    }

    const searchAlarmList = function(){
        // 호출 데이타 조회
        let passingAddParams = {
            endCallback: setAddEvent,
            pagingCallback: searchAlarmList,
        };
        let thisPatientCode = patientCodeInfo().patientCode

        let selectParams = {
            startDatetime: "2001-01-01 00:00:00",
            endDatetime: new Date().toString(`yyyy-MM-dd`) + " 23:59:59",
            searchValue: null,
        }
        let selectResult = NOTIFICATION_UTIL.SELECT_HOME_ALARM_LIST(selectParams);

        let response = {
            alarmList: selectResult.alarmList.filter(item => item.patientCode === thisPatientCode)
        }

        if(response.alarmList.length > 0){
            $(`.notificationListView .listTable tbody`).html("");
            etc.setHtmlParsing($(`.notificationListView .listTable tbody`), html.alarmList, response);
        }
        else {
            $(`.notificationListView .listTable tbody`).html("");
            etc.setHtmlParsing($(`.notificationListView .listTable tbody`), html.notFound);
        }
        setAddEvent("datas")
    }

    const index = function() {
        $(`${MEASUREMENT_CONST.DESIGN.CONTENTS_BY_VIEW_DATA_TABLE}`).html(htmlForUnit.loading);

        // 데이타 조회(환자 현황, 트렌드, 복약현황)
        $(`${MEASUREMENT_CONST.DESIGN.CONTENTS_BY_VIEW_DATA_TABLE}`).html(``);
        etc.setHtmlParsing($(`${MEASUREMENT_CONST.DESIGN.CONTENTS_BY_VIEW_DATA_TABLE}`), html.dataTableForNotification, {});

        setAddEvent();
        searchAlarmList();
    }
    return {
        index: index
    };
};

export { promise }