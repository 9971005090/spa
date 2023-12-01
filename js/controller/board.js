"use strict";

const promise = async () => {
    const {CONST: DEFAULT_CONST} = await import(`/js/custom/constant/default/constant.js${ver_string}`);
    const {CONST: BOARD_CONST} = await import(`/js/custom/constant/board/constant.js${ver_string}`);
    const {UTIL: BOARD_UTIL} = await import(`/js/custom/constant/board/util.js${ver_string}`);
    const {EVENT: SEARCH_TERM_EVENT, UTIL: SEARCH_TERM_UTIL} = await import(`/js/custom/constant/event/search-term.js${ver_string}`);
    const {EVENT: SELECT_BOX_EVENT} = await import(`/js/custom/constant/event/select-box.js${ver_string}`);
    const {CONST: LANGUAGE} = await import(`/js/language/${GBL.CONSTANTS.get(`APP.LOCALE`)}/base.js${ver_string}`);
    const html = await import(`/template/${GBL.DESIGN.THEME}/content/board.js${ver_string}`);
    const htmlForUnit = await import(`/template/${GBL.DESIGN.THEME}/content/unit.js${ver_string}`);
    await import(`/js/custom/constant/board/data-init.js${ver_string}`);

    let choiceMeasurementCode = null;
    const preAction = function() {
        return new Promise(function(resolve, reject) {
            if (GBL.CONSTANTS.get(`NOW_ACTION`) !== "index") {
                GBL.CONSTANTS.del(`SEARCH.IS`);
            }
            resolve(true);
        });
    }
    const pre = function() {
        return new Promise(function(resolve, reject) {
            let loadingEnd = function() {
                resolve(true);
            }
            let options = {
                files: [
                    `/js/util/jquery/jquery-ui-1.12.1.css${ver_string}`,
                    `/js/util/jquery/jquery-ui-timepicker-addon.js${ver_string}`,
                    `/js/util/jquery/jquery-ui-timepicker-addon.css${ver_string}`,
                    `/assets/css/theme/${GBL.DESIGN.THEME}/jquery-ui-timepicker-addon.css${ver_string}`,
                ],
                errorAfterType: "stop",
                callback: loadingEnd
            }
            let fileLoading = new preFileLoading();
            fileLoading.setInit(options);
            fileLoading.run();
        });
    }

    const _search = function(type = `search`) { //first, search
        const params = {
            type: `search`,
            paging: {
                prefix: `board`,
                info: DEFAULT_CONST.PAGING,
                domSelector: `.board-pagination`
            },
            searchAddParams: {},
            useFunction: {
                parsing: BOARD_UTIL.DATA_PARSING,
                search: BOARD_UTIL.LIST,
                afterEvent: setAddEvent, // 파라미터로는 stirng > `datas` 가 전달된다.
                paging: _search
            },
            data: {
                domSelector: BOARD_CONST.DESIGN.CONTENTS_BY_DATA_TABLE,
                resultKey: `boardList`
            },
            constains: {},
            template: html.dataTable
        }
        custom.etc.searchForPaging(params);
    }
    const setAddEvent = function(content = `index`){
        if (content === `index`) {
            const selectBoxCallback = function (choiceBox) {
                let selectObj = $(choiceBox).parents(".cm-select-box");
                selectObj.children(".check").val($(choiceBox).data("code"));
            }
            SELECT_BOX_EVENT.ON_CLICK(`.cm-select-box`, `.option-list`, `.option-item`, `.label`, `selected`, selectBoxCallback);
            SEARCH_TERM_EVENT.SET_INIT();

            CUSTOM.EVENT.HTML.push(".btn-add");
            $(".btn-add").off("click").on("click", function (e) {
                etc.stopBubbling(e);
                // etc.move("/board/add");
                custom.etc.customToastForColor(`준비중입니다.`);
            });

            CUSTOM.EVENT.HTML.push(".form-common-search");
            $(".form-common-search").off("submit").on("submit", function (e) {
                etc.stopBubbling(e);
                $(`#BOARD_currentPage`).val(1);
                _search();
            });

            CUSTOM.EVENT.HTML.push(".button-excel");
            $(".button-excel").off("click").on("click", function (e) {
                etc.stopBubbling(e);
                // const currentPage = $(`#BOARD_currentPage`).length > 0 ? Number($(`#BOARD_currentPage`).val()) : 1;
                // const params = {
                //     'search': $(`.form-common-search-keyword`).val(),
                //     'pageNumber': currentPage,
                //     'count': DEFAULT_CONST.PAGING.DATA_COUNT,
                // }
                // if (Number($(`#form-common-search-term`).val()) > 0) {
                //     params['startDateTime'] = `${$(`#form-common-search-start-date`).val()} 00:00:00`;
                //     params['endDateTime'] = `${$(`#form-common-search-end-date`).val()} 23:59:59`;
                // }
                // BOARD_UTIL.EXCEL(params);
                custom.etc.customToastForColor(`준비중입니다.`);
            });
        }
        else if (content === `datas`) {
            CUSTOM.EVENT.HTML.push(`.button-update`)
            $(`.button-update`).off("click").on("click", function (e) {
                etc.stopBubbling(e);
                // etc.move(`/board/update?measurementCode=${$(this).closest('.cm-tr').attr('data-unique-id')}`);
                custom.etc.customToastForColor(`준비중입니다.`);
            });

            CUSTOM.EVENT.HTML.push(`.button-delete`)
            $(`.button-delete`).off("click").on("click", function (e) {
                etc.stopBubbling(e);
                // const modalId = "customAlertboardDelete";
                // const selectedUniqueId = $(this).closest('.cm-tr').attr('data-unique-id');
                // const okBtnCallback = function () {
                //     const response = BOARD_UTIL.DELETE(selectedUniqueId);
                //     if (response.result === true) {
                //         custom.etc.customToastForColor(LANGUAGE.SUCCESS.DELETE);
                //         _search();
                //     }
                //     else {
                //         custom.etc.customToastForColor(LANGUAGE.FAIL.DELETE, `bgRed`);
                //     }
                //     modal.globalClose(modalId);
                // }
                // const cancelBtnCallback = function () {
                //     modal.globalClose(modalId);
                // }
                //
                // let initParameter = {
                //     msg: `<p class="customAlertText">${LANGUAGE.CONFIRM.DELETE}</p>`,
                //     id: modalId,
                //     isBackgroundClickForClose: false,
                //     button: {
                //         cancel: {
                //             callback :[{ name: cancelBtnCallback, params: [] }]
                //         },
                //         ok : {
                //             isUse: false
                //         },
                //         del: {
                //             callback :[{ name: okBtnCallback, params: [] }]
                //         }
                //     }
                // }
                // Seers.Loader.moduleLoad("custom-alert", "index", initParameter);
                custom.etc.customToastForColor(`준비중입니다.`);
            });
        }
        else if (content === `add`) {
            // SEARCH_TERM_EVENT.SET_UNIT_INIT(`.search-date-cont.start-calendar`, `#symptom-date`);
            // CUSTOM.EVENT.HTML.push(".btn-confirm");
            // $(".btn-confirm").off("click").on("click", function (e) {
            //     etc.stopBubbling(e);
            //     let dataFormId = "form-data";
            //     let form = etc.formParser(dataFormId);
            //     const _addCheck = function() {
            //         const checkDate = new Date(`${form['symptom-date']} ${form['symptom-time']}:00`);
            //         if (checkDate.isValid() === true) {
            //             $(`.search-date-cont.start-calendar`).parent().removeClass("error")
            //             return true;
            //         }
            //         else {
            //             $(`.search-date-cont.start-calendar`).parent().removeClass("error").addClass("error");
            //             return false;
            //         }
            //     }
            //     if(etc.formCheck(dataFormId, _addCheck, `error`) === true) {
            //         if(etc.isFormSubmit(dataFormId, "check") === true) {
            //             return false;
            //         }
            //         const params = {
            //             boardType : form['board-type'],
            //             latitude : form['latitude'],
            //             longitude : form['longitude'],
            //             designateOrganizationCode : form['designate-organization-code'],
            //             discoveryAddress : form['discovery-address'],
            //             gender : form['gender'],
            //             ageRange : form['age-range'],
            //             epilepsyHistory : form['epilepsy-history'],
            //             heartDiseaseHistory : form['heart-disease-history'],
            //             anticoagulantHistory : form['anticoagulant-history'],
            //             glucose : form['glucose'],
            //             alteredMentalStatus : form['altered-mental-status'],
            //             symptomDateTime : `${form['symptom-date']} ${form['symptom-time']}:00`,
            //             gazeDeviation : form['gaze-deviation'],
            //             facialPalsy : form['facial-palsy'],
            //             limbParalysis : form['limb-paralysis'],
            //             speechDisturbance : form['speech-disturbance']
            //         }
            //         const _t = BOARD_UTIL.INSERT(params);
            //         if (_t.result === true) {
            //             let processEnd = function(mode = `list`) { //list, add
            //                 if (mode === `list`) {
            //                     etc.move(`/board/index`);
            //                 }
            //                 else {
            //                     location.reload();
            //                 }
            //             }
            //             let modalId = "customAlertForboardAdd";
            //             let initParameter = {
            //                 msg: `등록이 완료됐습니다.`,
            //                 id: modalId,
            //                 isBackgroundClickForClose: false,
            //                 button: {
            //                     ok: {
            //                         callback: [
            //                             {
            //                                 name: processEnd,
            //                                 params: ['list']
            //                             },
            //                             {
            //                                 name: modal.globalClose,
            //                                 params: [modalId]
            //                             }
            //                         ]
            //                     },
            //                     del: {
            //                         isUse: false
            //                     },
            //                     cancel: {
            //                         isUse: false
            //                     }
            //                 }
            //             }
            //             Seers.Loader.moduleLoad(`custom-alert`, `index`, initParameter);
            //         }
            //     }
            // });
            //
            // etc.formSubmitCheckDisabled();
        }
        else if (content === `update`) {
            // SEARCH_TERM_EVENT.SET_UNIT_INIT(`.search-date-cont.start-calendar`, `#symptom-date`);
            // CUSTOM.EVENT.HTML.push(".btn-confirm");
            // $(".btn-confirm").off("click").on("click", function (e) {
            //     etc.stopBubbling(e);
            //     let dataFormId = "form-data";
            //     let form = etc.formParser(dataFormId);
            //     if(etc.formCheck(dataFormId, null, `error`) === true) {
            //         if(etc.isFormSubmit(dataFormId, "check") === true) {
            //             return false;
            //         }
            //         const params = {
            //             updateType: BOARD_CONST.UPDATE_TYPE.CODE.CODE0,
            //             boardType : form['board-type'],
            //             // latitude : form['latitude'],
            //             // longitude : form['longitude'],
            //             designateOrganizationCode : null,
            //             discoveryAddress : form['discovery-address'],
            //             gender : form['gender'],
            //             ageRange : form['age-range'],
            //             epilepsyHistory : form['epilepsy-history'],
            //             heartDiseaseHistory : form['heart-disease-history'],
            //             anticoagulantHistory : form['anticoagulant-history'],
            //             glucose : form['glucose'],
            //             alteredMentalStatus : form['altered-mental-status'],
            //             symptomDateTime : `${form['symptom-date']} ${form['symptom-time']}:00`,
            //             gazeDeviation : form['gaze-deviation'],
            //             facialPalsy : form['facial-palsy'],
            //             limbParalysis : form['limb-paralysis'],
            //             speechDisturbance : form['speech-disturbance']
            //         }
            //         const _t = BOARD_UTIL.UPDATE(choiceMeasurementCode, params);
            //         if (_t.result === true) {
            //             let processEnd = function(mode = `list`) { //list, add
            //                 if (mode === `list`) {
            //                     etc.move(`/board/index`);
            //                 }
            //                 else {
            //                     location.reload();
            //                 }
            //             }
            //             let modalId = "customAlertForboardAdd";
            //             let initParameter = {
            //                 msg: `수정됐습니다.`,
            //                 id: modalId,
            //                 isBackgroundClickForClose: false,
            //                 button: {
            //                     ok: {
            //                         callback: [
            //                             {
            //                                 name: processEnd,
            //                                 params: ['list']
            //                             },
            //                             {
            //                                 name: modal.globalClose,
            //                                 params: [modalId]
            //                             },
            //                         ]
            //                     },
            //                     del: {
            //                         isUse: false,
            //                     },
            //                     cancel: {
            //                         isUse: false
            //                     }
            //                 }
            //             }
            //             Seers.Loader.moduleLoad(`custom-alert`, `index`, initParameter);
            //         }
            //     }
            // });
            //
            // etc.formSubmitCheckDisabled(`#form-data`, {submit: `.button-submit`, cancel: `.button-cancel`}, `update`);
        }
    }

    const index = function() {
        // const _c = {
        //     BOARD_TYPE: Array.deepCopy(BOARD_CONST.BOARD_TYPE.TITLE),
        //     TRANSPORT_STATUS: Array.deepCopy(BOARD_CONST.TRANSPORT_STATUS.TITLE),
        //     // IS_TRANSFER: Array.deepCopy(BOARD_CONST.IS_TRANSFER.TITLE),
        // }
        const params = {
            choiceSearchOptions: {
                boardType: [-1],
                transportStatus: [-1],
                search: null
            }
        }
        let _s = null;
        if (GBL.CONSTANTS.has(`SEARCH.OPTIONS`) === true) {
            _s = GBL.CONSTANTS.get(`SEARCH.OPTIONS`);
            // if (_s.boardTypeList !== null) {
            //     params.choiceSearchOptions.boardType = _s.boardTypeList;
            // }
            // if (_s.transportStatusList !== null) {
            //     params.choiceSearchOptions.transportStatus = _s.transportStatusList;
            // }
            // if (_s.search !== null) {
            //     params.choiceSearchOptions.search = _s.search;
            // }
        }
        // GBL.CONSTANTS.set(`CONSTANTS`, _c, true);
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html(``);
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.index, params);
        SEARCH_TERM_UTIL.SET_INIT(30, false, _s);
        setAddEvent();
        setTimeout(function() {
            _search(`first`);
        }, 200);
    };

    const add = function() {
        let DIAGNOSIS_TYPE2 = Array.deepCopy(BOARD_CONST.DIAGNOSIS_TYPE.TITLE);
        delete DIAGNOSIS_TYPE2[BOARD_CONST.DIAGNOSIS_TYPE.CODE.NOT];
        const _c = {
            TRANSPORT_STATUS: Array.deepCopy(BOARD_CONST.TRANSPORT_STATUS.TITLE),
            BOARD_TYPE: Array.deepCopy(BOARD_CONST.BOARD_TYPE.TITLE),
            AGE_RANGE: Array.deepCopy(BOARD_CONST.AGE_RANGE.TITLE),
            DIAGNOSIS_TYPE: Array.deepCopy(BOARD_CONST.DIAGNOSIS_TYPE.TITLE),
            DIAGNOSIS_TYPE2: DIAGNOSIS_TYPE2,
            GENDER: Array.deepCopy(DEFAULT_CONST.GENDER.CODE)
        }
        GBL.CONSTANTS.set(`CONSTANTS`, _c, true);

        // 병원 찾기
        const params = {
            'organizationTypeList': [HOSPITAL_CONST.TYPE.CODE.BRAIN]
        }
        const _t = HOSPITAL_UTIL.LIST(params);
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.add, {title: `등록`, hospital: _t.organizationList});
        SEARCH_TERM_UTIL.SET_UNIT_INIT(`#symptom-date`, true);
        custom.etc.removeLoading();
        setAddEvent("add");
    }

    const update = function(params = null) {
        if ((params.hasOwnProperty(`measurementCode`) === true && String.isNullOrWhitespace(params.measurementCode) === false) === false) {
            custom.etc.customToastForColor(`잘못된 요청입니다.`, `bgRed`);
            etc.moveBack(1, `/board/index`);
        }
        let DIAGNOSIS_TYPE2 = Array.deepCopy(BOARD_CONST.DIAGNOSIS_TYPE.TITLE);
        delete DIAGNOSIS_TYPE2[BOARD_CONST.DIAGNOSIS_TYPE.CODE.NOT];
        const _c = {
            TRANSPORT_STATUS: Array.deepCopy(BOARD_CONST.TRANSPORT_STATUS.TITLE),
            BOARD_TYPE: Array.deepCopy(BOARD_CONST.BOARD_TYPE.TITLE),
            AGE_RANGE: Array.deepCopy(BOARD_CONST.AGE_RANGE.TITLE),
            DIAGNOSIS_TYPE: Array.deepCopy(BOARD_CONST.DIAGNOSIS_TYPE.TITLE),
            DIAGNOSIS_TYPE2: DIAGNOSIS_TYPE2,
            GENDER: Array.deepCopy(DEFAULT_CONST.GENDER.CODE)
        }
        GBL.CONSTANTS.set(`CONSTANTS`, _c, true);
        choiceMeasurementCode = params.measurementCode;
        const _t = BOARD_UTIL.INFO(params.measurementCode);
        if (_t.result === true) {
            _t.brainSaverboard = BOARD_UTIL.DATA_PARSING(_t.brainSaverboard);
            $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
            etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.update, {title: `수정`, brainSaverboard: _t.brainSaverboard});
            SEARCH_TERM_UTIL.SET_UNIT_INIT(`#symptom-date`, false);
            custom.etc.removeLoading();
            setAddEvent(`update`);
        }
        else {
            custom.etc.customToastForColor(`네트웍 오류입니다. 잠시 후 다시 시도하세요..`, `bgRed`);
            etc.moveBack(1, `/board/index`);
        }
    }
    return {
        pre: pre,
        preAction: preAction,
        index: index,
        add: add,
        update: update
    };
};

export { promise }