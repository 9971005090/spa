"use strict";

const promise = async () => {
    const {CONST: DEFAULT_CONST} = await import(`/js/custom/constant/default/constant.js${ver_string}`);
    const {CONST: PUSH_CONST} = await import(`/js/custom/constant/push/constant.js${ver_string}`);
    const {UTIL: PUSH_UTIL} = await import(`/js/custom/constant/push/util.js${ver_string}`);
    const {EVENT: SELECT_BOX_EVENT} = await import(`/js/custom/constant/event/select-box.js${ver_string}`);
    const {EVENT: SEARCH_TERM_EVENT, UTIL: SEARCH_TERM_UTIL} = await import(`/js/custom/constant/event/search-term.js${ver_string}`);
    const html = await import(`/template/${GBL.DESIGN.THEME}/content/push.js${ver_string}`);
    const htmlForUnit = await import(`/template/${GBL.DESIGN.THEME}/content/unit.js${ver_string}`);
    await import(`/js/custom/constant/push/data-init.js${ver_string}`);

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
        if (SEARCH_TERM_UTIL.VALIDATE_DATE() === false) {
            custom.etc.customToastForColor(`검색 기간을 정확히 입력하세요.`, `bgRed`);
            return false;
        }
        $(`${PUSH_CONST.DESIGN.CONTENTS_BY_DATA_TABLE}`).html(htmlForUnit.searching);
        if (type === `search`) {
            custom.etc.showLoading(GBL.DESIGN.MAIN_DIV_NAME);
        }
        const currentPage = $(`#push_currentPage`).length > 0 ? Number($(`#push_currentPage`).val()) : 1;
        const params = {
            'searchValue': $(`.form-common-search-keyword`).val(),
            'pageNumber': currentPage,
            'count': DEFAULT_CONST.PAGING.DATA_COUNT,
            'sendStatus': Number($(`input[name=send-status]`).val()) === -1 ? null : Number($(`input[name=send-status]`).val()),
            'messageType': Number($(`input[name=message-type]`).val()) === -1 ? null : Number($(`input[name=message-type]`).val()),
            'alertType': Number($(`input[name=alert-type]:checked`).val()) === -1 ? null : Number($(`input[name=alert-type]:checked`).val()),
        }
        if (Number($(`#form-common-search-term`).val()) > 0) {
            params[`startDateTime`] = `${$(`#form-common-search-start-date`).val()} 00:00:00`;
            params[`endDateTime`] = `${$(`#form-common-search-end-date`).val()} 23:59:59`;
        }
        const _t = PUSH_UTIL.LIST(params);
        if (_t.result === true) {
            let startVirtualNumber = Number.getStartVirtualNumber(_t.totalCount, DEFAULT_CONST.PAGING.DATA_COUNT, currentPage);
            if (_t.pushList !== null) {
                if (_t.pushList.length > 0) {
                    for (let i = 0; i < _t.pushList.length; i++) {
                        _t.pushList[i] = PUSH_UTIL.DATA_PARSING(_t.pushList[i]);
                        _t.pushList[i].virtualNumber = startVirtualNumber - i;
                    }
                    $(`${PUSH_CONST.DESIGN.CONTENTS_BY_DATA_TABLE}`).html(``);
                    etc.setHtmlParsing($(`${PUSH_CONST.DESIGN.CONTENTS_BY_DATA_TABLE}`), html.dataTable, {datas: _t.pushList});
                    $(`#content-data-count`).text(_t.totalCount);
                    setAddEvent(`datas`);
                }

                // 페이징 처리 파라미터 셋팅 및 호출
                let pagingParameter = {
                    prefix: "push",
                    divName: ".pagination",
                    totalData: _t.totalCount,
                    callback: _search,
                    callbackRun: false,
                    dataPerPage: DEFAULT_CONST.PAGING.DATA_COUNT
                }
                if($(`#${pagingParameter.prefix}_currentPage`).length > 0) {
                    pagingParameter.currentPage = Number($(`#${pagingParameter.prefix}_currentPage`).val());
                    pagingParameter.dataPerPage = Number($(`#${pagingParameter.prefix}_dataPerPage`).val());
                    pagingParameter.pageCount = Number($(`#${pagingParameter.prefix}_pageCount`).val());
                }
                Seers.Loader.moduleLoad("paging", "index", pagingParameter);
            }
            else {
                $(`${PUSH_CONST.DESIGN.CONTENTS_BY_DATA_TABLE}`).html(htmlForUnit.notFound);
                $(`#content-data-count`).text(0);
            }
        }
        else {
            $(`${PUSH_CONST.DESIGN.CONTENTS_BY_DATA_TABLE}`).html(htmlForUnit.fail);
        }
        custom.etc.removeLoading();
    }
    const setAddEvent = function(content = `index`){
        const selectBoxCallback = function (choiceBox) {
            let selectObj = $(choiceBox).parents(".cm-select-box");
            selectObj.children(".check").val($(choiceBox).data("code"));
        }
        SELECT_BOX_EVENT.ON_CLICK(`.cm-select-box`, `.option-list`, `.option-item`, `.label`, `selected`, selectBoxCallback);

        if (content === `index`) {
            SEARCH_TERM_EVENT.SET_INIT();

            CUSTOM.EVENT.HTML.push(".btn-add");
            $(".btn-add").off("click").on("click", function (e) {
                etc.stopBubbling(e);
                etc.move("/push/add");
            });

            CUSTOM.EVENT.HTML.push(".form-common-search");
            $(".form-common-search").off("submit").on("submit", function (e) {
                etc.stopBubbling(e);
                $(`#push_currentPage`).val(1);
                _search();
            });
        }
        else if (content === `datas`) {
            CUSTOM.EVENT.HTML.push(`.button-info`)
            $(`.button-info`).off("click").on("click", function (e) {
                etc.stopBubbling(e);
                etc.move(`/push/info?id=${$(this).closest('.cm-tr').attr('data-unique-id')}`);
            });

            // 삭제 예시
            CUSTOM.EVENT.HTML.push(`.button-delete`)
            $(`.button-delete`).off("click").on("click", function (e) {
                etc.stopBubbling(e);
                const modalId = "customAlertPushDelete";
                const selectedId = Number($(this).closest('.cm-tr').attr('data-unique-id'));
                const okBtnCallback = function () {
                    const response = PUSH_UTIL.DELETE(selectedId);
                    if (response.result === true) {
                        custom.etc.customToastForColor(`정상적으로 삭제됐습니다.`);
                    }
                    else {
                        custom.etc.customToastForColor(`삭제에 실패했습니다. 잠시 후 다시 시도하세요.`, `bgRed`);
                    }
                    modal.globalClose(modalId);
                }
                const cancelBtnCallback = function () {
                    modal.globalClose(modalId);
                }

                let initParameter = {
                    msg: `<p class="customAlertText">정말 삭제하시겠습니까?</p>`,
                    id: modalId,
                    isBackgroundClickForClose: false,
                    button: {
                        cancel: {
                            callback :[{ name: cancelBtnCallback, params: [] }]
                        },
                        ok : {
                            callback :[{ name: okBtnCallback, params: [] }]
                        },
                        del: {
                            isUse: false
                        }
                    }
                }
                Seers.Loader.moduleLoad("custom-alert", "index", initParameter);
            });
        }
        else if (content === `add`) {
            CUSTOM.EVENT.HTML.push(".btn-confirm");
            $(".btn-confirm").off("click").on("click", function (e) {
                etc.stopBubbling(e);
                let dataFormId = "form-data";
                let form = etc.formParser(dataFormId);
                if(etc.formCheck(dataFormId, null, `error`) === true) {
                    if(etc.isFormSubmit(dataFormId, "check") === true) {
                        return false;
                    }
                    const params = {
                        alertType : form[`alert-type`],
                        messageType : form[`message-type`],
                    }
                    const _t = PUSH_UTIL.INSERT(params);
                    if (_t.result === true) {
                        let processEnd = function(mode = `list`) { //list, add
                            if (mode === `list`) {
                                etc.move(`/push/index`);
                            }
                            else {
                                location.reload();
                            }
                        }
                        let modalId = "customAlertForPushAdd";
                        let initParameter = {
                            msg: `등록이 완료됐습니다.`,
                            id: modalId,
                            isBackgroundClickForClose: false,
                            button: {
                                ok: {
                                    callback: [
                                        {
                                            name: processEnd,
                                            params: ['list']
                                        },
                                        {
                                            name: modal.globalClose,
                                            params: [modalId]
                                        }
                                    ]
                                },
                                del: {
                                    isUse: false
                                },
                                cancel: {
                                    isUse: false
                                }
                            }
                        }
                        Seers.Loader.moduleLoad(`custom-alert`, `index`, initParameter);
                    }
                }
            });

            etc.formSubmitCheckDisabled();
        }
        else if (content === `info`) {
            etc.formSubmitCheckDisabled();
        }
    }

    const index = function() {
        const _c = {
            SEND_STATUS: Array.deepCopy(PUSH_CONST.SEND_STATUS.TITLE),
            ALERT_TYPE: Array.deepCopy(PUSH_CONST.ALERT_TYPE.TITLE),
            MESSAGE_TYPE: Array.deepCopy(PUSH_CONST.MESSAGE_TYPE.TITLE),
        }
        GBL.CONSTANTS.set(`CONSTANTS`, _c, true);
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html(``);
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.index);
        SEARCH_TERM_UTIL.SET_INIT();
        setAddEvent();
        setTimeout(function() {
            _search(`first`);
        }, 200);
    };

    const add = function() {
        const _c = {
            ALERT_TYPE: Array.deepCopy(PUSH_CONST.ALERT_TYPE.TITLE),
            MESSAGE_TYPE: Array.deepCopy(PUSH_CONST.MESSAGE_TYPE.TITLE),
        }
        delete _c.ALERT_TYPE[PUSH_CONST.ALERT_TYPE.CODE.SYSTEM];
        delete _c.MESSAGE_TYPE[PUSH_CONST.MESSAGE_TYPE.CODE.PATIENT];
        GBL.CONSTANTS.set(`CONSTANTS`, _c, true);
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.add, {title: `등록`});
        custom.etc.removeLoading();
        setAddEvent("add");
    }

    const info = function(params = null) {
        if ((params.hasOwnProperty(`id`) === true && String.isNullOrWhitespace(params.id) === false) === false) {
            custom.etc.customToastForColor(`잘못된 요청입니다.`, `bgRed`);
            etc.moveBack(1, `/push/index`);
        }
        const _t = PUSH_UTIL.INFO(params.id);
        if (_t.result === true) {
            _t.push = PUSH_UTIL.DATA_PARSING(_t.push);
            $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
            etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.info, {title: `상세보기`, push: _t.push});
            custom.etc.removeLoading();
            setAddEvent(`info`);
        }
        else {
            custom.etc.customToastForColor(`네트웍 오류입니다. 잠시 후 다시 시도하세요..`, `bgRed`);
            etc.moveBack(1, `/push/index`);
        }
    }
    return {
        pre: pre,
        index: index,
        add: add,
        info: info
    };
};

export { promise }