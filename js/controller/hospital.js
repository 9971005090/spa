"use strict";

const promise = async () => {
    const {CONST: DEFAULT_CONST} = await import(`/js/custom/constant/default/constant.js${ver_string}`);
    const html = await import(`/template/${GBL.DESIGN.THEME}/content/hospital.js${ver_string}`);
    const {CONST: HOSPITAL_CONST} = await import(`/js/custom/constant/hospital/constant.js${ver_string}`);
    const {UTIL: HOSPITAL_UTIL} = await import(`/js/custom/constant/hospital/util.js${ver_string}`);
    const {EVENT: SELECT_BOX_EVENT} = await import(`/js/custom/constant/event/select-box.js${ver_string}`);
    const htmlForUnit = await import(`/template/${GBL.DESIGN.THEME}/content/unit.js${ver_string}`);
    // const {API: ORGANIZATION_API} = await import(`/js/custom/constant/hospital/constant.js${ver_string}`);
    // await import(`/js/custom/constant/hospital/data-init.js${ver_string}`);

    const _search = function(type = `search`) { //first, search
        let colspan = 7;
        $(`${HOSPITAL_CONST.DESIGN.CONTENTS_BY_DATA_TABLE}`).html(htmlForUnit.searching);
        $("#contents-by-data-table td").attr("colspan", colspan);
        if (type === `search`) {
            custom.etc.showLoading(GBL.DESIGN.MAIN_DIV_NAME);
        }
        const currentPage = $(`#hospital_currentPage`).length > 0 ? Number($(`#hospital_currentPage`).val()) : 1;

        let organizationTypeList, strokeTypeList;
        if($('.cm-select-box .check[name="organizationTypeList"]').parent().find(".label").text() === "전체"){
            organizationTypeList = [0,1];
        }
        else{
            organizationTypeList = [Number($('.cm-select-box .check[name="organizationTypeList"]').val())];
        }
        if($('.cm-select-box .check[name="strokeTypeList"]').parent().find(".label").text() === "전체"){
            strokeTypeList = [0,1,2];
        }
        else{
            strokeTypeList = [Number($('.cm-select-box .check[name="strokeTypeList"]').val())];
        }
        const params = {
            'search': $(`.form-common-search-keyword`).val(),
            'organizationTypeList': organizationTypeList,
            'strokeTypeList': strokeTypeList,
            'pageNumber': currentPage,
            'count': DEFAULT_CONST.PAGING.DATA_COUNT,
            'includeNavigation': false,
            'startDatetime': `${$(`#start-date`).val()} 00:00:00`,
            'endDatetime': `${$(`#end-date`).val()} 23:59:59`,
            'page': currentPage,
            'expiration': 0,
        }
        const _t = HOSPITAL_UTIL.PAGE(params);
        custom.etc.removeLoading();
        if (_t.result === true) {
            if (_t.organizationList !== null && _t.organizationList.length > 0) {
                let startVirtualNumber = Number.getStartVirtualNumber(_t.totalCount, DEFAULT_CONST.PAGING.DATA_COUNT, currentPage);
                for (let i = 0; i < _t.organizationList.length; i++) {
                    _t.organizationList[i] = HOSPITAL_UTIL.DATA_PARSING(_t.organizationList[i]);
                    _t.organizationList[i].virtualNumber = startVirtualNumber - i;
                }
                $(`${HOSPITAL_CONST.DESIGN.CONTENTS_BY_DATA_TABLE}`).html(``);
                etc.setHtmlParsing($(`${HOSPITAL_CONST.DESIGN.CONTENTS_BY_DATA_TABLE}`), html.dataTable, {datas: _t.organizationList});
                $(`#content-data-count`).text(_t.totalCount);
                setAddEvent(`datas`);

                // 페이징 처리 파라미터 셋팅 및 호출
                let pagingParameter = {
                    prefix: "hospital",
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
                $(`${HOSPITAL_CONST.DESIGN.CONTENTS_BY_DATA_TABLE}`).html(htmlForUnit.notFound);
                $("#contents-by-data-table td").attr("colspan", colspan);
                $(`#content-data-count`).text(0);
            }
        }
        else {
            $(`${HOSPITAL_CONST.DESIGN.CONTENTS_BY_DATA_TABLE}`).html(htmlForUnit.fail);
            $("#contents-by-data-table td").attr("colspan", colspan);
        }
    }

    const _moveListEvent = function() {
        CUSTOM.EVENT.HTML.push(".btn-go-list");
        $(".btn-go-list").off("click").on("click", function(){
            let modalId = "customAlert";
            const okBtnCallback = function (param) {
                etc.move("/hospital/index");
                modal.globalClose(param);
            }
            const cancelBtnCallback = function (param) {
                modal.globalClose(param);
            }
            let msg = ``;
            if(GBL.CONSTANTS.get(`NOW_ACTION`) === "add"){
                msg =`병원 등록을 멈추고 목록 화면으로 이동하시겠습니까?<br>입력 하신 내용은 모두 삭제됩니다.`;
            }
            else if(GBL.CONSTANTS.get(`NOW_ACTION`) === "update"){
                msg =`병원 정보 수정을 멈추고 목록 화면으로 이동하시겠습니까?<br>수정된 내용은 모두 삭제됩니다.`;
            }
            let initParameter = {
                msg: `<p class="customAlertText">${msg}</p>`,
                id: modalId,
                isBackgroundClickForClose: false,
                button: {
                    cancel: {
                        isUse: true,
                        callback: [{name: cancelBtnCallback, params: [modalId]}]
                    },
                    ok: {
                        callback: [{
                            name: okBtnCallback, params: [modalId]
                        }]
                    },
                    del: {
                        isUse: false
                    }
                }
            }
            Seers.Loader.moduleLoad("custom-alert", "index", initParameter);
        });

    }

    const setAddEvent = function(content = `index`){
        const selectBoxCallback = function (choiceBox) {
            let selectObj = $(choiceBox).parents(".cm-select-box");
            selectObj.children(".check").val($(choiceBox).data("code"));
        }
        SELECT_BOX_EVENT.ON_CLICK(`.cm-select-box`, `.option-list`, `.option-item`, `.label`, `selected`, selectBoxCallback);

        if (content === `index`) {
            CUSTOM.EVENT.HTML.push(".btn-add");
            $(".btn-add").off("click").on("click", function(){
                etc.move("/hospital/add");
            })

            CUSTOM.EVENT.HTML.push(".form-common-search");
            $(".form-common-search").off("submit").on("submit", function (e) {
                etc.stopBubbling(e);
                $(`#hospital_currentPage`).val(1);
                _search();
            });
        }
        else if (content === `datas`) {
            CUSTOM.EVENT.HTML.push(`.button-update`)
            $(`.button-update`).off("click").on("click", function (e) {
                etc.stopBubbling(e);
                etc.move(`/hospital/update?code=${$(this).closest('.cm-tr').attr('data-code')}`);
            });

            CUSTOM.EVENT.HTML.push(`.btn-delete`)
            $(`.btn-delete`).off("click").on("click", function (e) {
                etc.stopBubbling(e);
                let dataFormId = "form-data";
                let form = etc.formParser(dataFormId);
                const modalId = "customAlertPushDelete";
                const selectedId = $(this).parents('.cm-tr').attr('data-code');
                const params = {
                    "expiration" : 1,
                }
                const okBtnCallback = function () {
                    const response = HOSPITAL_UTIL.UPDATE(selectedId, params);
                    if (response.result === true) {
                        custom.etc.customToastForColor(`정상적으로 삭제됐습니다.`);
                    }
                    else {
                        custom.etc.customToastForColor(`삭제에 실패했습니다. 잠시 후 다시 시도하세요.`, `bgRed`);
                    }
                    modal.globalClose(modalId);
                    _search();
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
            _moveListEvent();
        }
        else if (content === `add`){
            CUSTOM.EVENT.HTML.push(".btn-confirm");
            $(".btn-confirm").off("click").on("click", function (e) {
                etc.stopBubbling(e);
                let dataFormId = "form-data";
                let form = etc.formParser(dataFormId);
                if(etc.formCheck(dataFormId, null, `error`) === true) {
                    if(etc.isFormSubmit(dataFormId, "check") === true) {
                        return false;
                    }
                    if(form[`organizationName`] !== null && form[`state`] !== null && form[`city`] !== null){
                        const params = {
                            "organizationCode" : form[`organizationCode`],
                            "organizationType" : Number(form[`organizationType`]),
                            "organizationName" : form[`organizationName`],
                            "strokeType" : Number(form[`strokeType`]),
                            "state" : form[`state`],
                            "city" : form[`city`],
                            "address" : form[`address`],
                            "phoneNumber" : form[`phoneNumber`],
                            "latitude" : Number(form[`latitude`]),
                            "longitude" : Number(form[`longitude`]),
                            "etc" : form[`etc`],
                        }
                        const _t = HOSPITAL_UTIL.INSERT(form[`organizationName`], params);
                        if (_t.result === true) {
                            let processEnd = function(mode = `list`) { //list, add
                                if (mode === `list`) {
                                    etc.move(`/hospital/index`);
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
                    if(form[`name`] === null || form[`location`] === null || form[`dayPhoneNumber`] === null){
                        let essentialValue = function(){
                            if(form[`name`] === null){
                                $(".cm-input-text[name='name']").parent().addClass("error");
                            }
                            else {
                                $(".cm-input-text[name='name']").parent().removeClass("error");
                            }
                            if(form[`location`] === null){
                                $(".cm-input-text[name='location']").parent().addClass("error");
                            }
                            else {
                                $(".cm-input-text[name='location']").parent().removeClass("error");
                            }
                            if(form[`dayPhoneNumber`] === null){
                                $(".cm-input-text[name='dayPhoneNumber']").parent().addClass("error");
                            }
                            else {
                                $(".cm-input-text[name='dayPhoneNumber']").parent().removeClass("error");
                            }
                        }
                        let modalId = "customAlertForPushFalse";
                        let initParameter = {
                            msg: `필수입력 항목을 입력해주세요.`,
                            id: modalId,
                            isBackgroundClickForClose: true,
                            button: {
                                ok: {
                                    callback: [
                                        {
                                            name: essentialValue,
                                            params: [null]
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
                        return false;
                    }
                }
            });

            _moveListEvent();

            etc.formSubmitCheckDisabled();
        }
        else if (content === `update`) {
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
                        "organizationCode" : form[`organizationCode`],
                        "organizationType" : Number(form[`organizationType`]),
                        "organizationName" : form[`organizationName`],
                        "strokeType" : Number(form[`strokeType`]),
                        "state" : form[`state`],
                        "city" : form[`city`],
                        "address" : form[`address`],
                        "phoneNumber" : form[`phoneNumber`],
                        "latitude" : Number(form[`latitude`]),
                        "longitude" : Number(form[`longitude`]),
                        "etc" : form[`etc`],
                        "expiration" : Number(form[`expiration`]),
                    }
                    const _t = HOSPITAL_UTIL.UPDATE(form['organizationCode'], params);
                    if (_t.result === true) {
                        let processEnd = function(mode = `list`) { //list, add
                            if (mode === `list`) {
                                etc.move(`/hospital/index`);
                            }
                            else {
                                location.reload();
                            }
                        }
                        let modalId = "customAlertForPatientAdd";
                        let initParameter = {
                            msg: `수정됐습니다.`,
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
            _moveListEvent();
        }
    }

    const index = function() {
        const _c = {
            EXPIRATION: Array.deepCopy(HOSPITAL_CONST.EXPIRATION.TITLE),
            ORGANIZATION_TYPE: Array.deepCopy(HOSPITAL_CONST.ORGANIZATION_TYPE.TITLE),
            STROKE_TYPE: Array.deepCopy(HOSPITAL_CONST.STROKE_TYPE.TITLE),
            MESSAGE_TYPE: Array.deepCopy(HOSPITAL_CONST.MESSAGE_TYPE.TITLE),
        }
        GBL.CONSTANTS.set(`CONSTANTS`, _c, true);
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html(``);
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.index);
        setAddEvent();
        setTimeout(function() {
            _search(`first`);
        }, 200);
    };

    const add = function(){
        const _c = {
            ORGANIZATION_TYPE: Array.deepCopy(HOSPITAL_CONST.ORGANIZATION_TYPE.TITLE),
            STROKE_TYPE: Array.deepCopy(HOSPITAL_CONST.STROKE_TYPE.TITLE),
            MESSAGE_TYPE: Array.deepCopy(HOSPITAL_CONST.MESSAGE_TYPE.TITLE),
        }
        GBL.CONSTANTS.set(`CONSTANTS`, _c, true);
        delete _c.MESSAGE_TYPE[HOSPITAL_CONST.MESSAGE_TYPE.PATIENT];
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.add, {title: `등록`});
        custom.etc.removeLoading();
        setAddEvent("add");
    }

    const update = function(params = null){
        const _c = {
            EXPIRATION: Array.deepCopy(HOSPITAL_CONST.EXPIRATION.TITLE),
            ORGANIZATION_TYPE: Array.deepCopy(HOSPITAL_CONST.ORGANIZATION_TYPE.TITLE),
            STROKE_TYPE: Array.deepCopy(HOSPITAL_CONST.STROKE_TYPE.TITLE),
            MESSAGE_TYPE: Array.deepCopy(HOSPITAL_CONST.MESSAGE_TYPE.TITLE),
        }
        GBL.CONSTANTS.set(`CONSTANTS`, _c, true);
        // delete _c.MESSAGE_TYPE[HOSPITAL_CONST.MESSAGE_TYPE.PATIENT];
        const _t = HOSPITAL_UTIL.SELECT(params.code);
        // const _t = HOSPITAL_UTIL.UPDATE(params.code);
        if (_t.result === true) {
            _t.hospital = HOSPITAL_UTIL.DATA_PARSING(_t.organization
            );
            $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
            etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.update, {title: `수정`, datas: _t.organization});
            custom.etc.removeLoading();
            setAddEvent(`update`);
        }
        else {
            custom.etc.customToastForColor(`네트웍 오류입니다. 잠시 후 다시 시도하세요..`, `bgRed`);
            etc.moveBack(1, `/hospital/index`);
        }
    }

    return {
        index: index,
        add: add,
        update: update,
    };
};

export { promise }