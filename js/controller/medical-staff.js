"use strict";
const promise = async () => {
    const {UTIL: USER_UTIL} = await import(`/js/custom/constant/user/util.js${ver_string}`);
    const html = await import(`/template/${GBL.DESIGN.THEME}/content/medical-staff.js${ver_string}`);
    const {EVENT: SELECT_BOX_EVENT} = await import(`/js/custom/constant/event/select-box.js${ver_string}`);
    const pre = function() {
        return new Promise(function(resolve, reject) {
            let loadingEnd = function() {
                resolve(true);
            }
            let options = {
                files: [
                    `/assets/css/theme/${GBL.DESIGN.THEME}/medical-staff.css${ver_string}`
                ],
                errorAfterType: "stop",
                callback: loadingEnd
            }
            let fileLoading = new preFileLoading();
            fileLoading.setInit(options);
            fileLoading.run();
        });
    }
    const insertAccountUser = function(){
        console.log("========updateAccountUser========");
        const dataFormId = "accountInfoForm";
        const form = etc.formParser(dataFormId);
        if(USER_UTIL.formCheck(dataFormId)){
            form.gender =  parseInt($("input[name=rdBtnSex]:checked").val());
            form.requester = GBL.ACCOUNT.INFO.userCode;
            form.organizationCode = GBL.ACCOUNT.INFO.organizationCode;
            let result =  USER_UTIL.CREATE_ACCOUNT(form);
            if(result.result === true){
                let passingParameter = {
                    time : 3000,
                    text : `신규 계정이 생성되었습니다.`,
                    icon : "info",
                    loader:false
                }
                Seers.Loader.moduleLoad("toast-message", "index", passingParameter);
            }
            else{
                let passingParameter = {
                    time : 3000,
                    text : `신규 계정이 생성에 실패하였습니다.`,
                    icon : "error",
                    loader:false
                }
                Seers.Loader.moduleLoad("toast-message", "index", passingParameter);
            }
        }
    }
    const updateAccountUser = function(endCallback = null){
        console.log("========updateAccountUser========");
        const dataFormId = "accountInfoForm";
        const form = etc.formParser(dataFormId);
        if(USER_UTIL.formCheck(dataFormId)){
            form.gender =  parseInt($("input[name=rdBtnSex]:checked").val());
            form.requester = GBL.ACCOUNT.INFO.userCode;
            form.organizationCode = GBL.ACCOUNT.INFO.organizationCode;
            let result =  USER_UTIL.UPDATE_ACCOUNT_INFO(form);
            if(result.result === true){
                let passingParameter = {
                    time : 3000,
                    text : `계정 정보가 수정되었습니다.`,
                    icon : "info",
                    loader:false
                }
                Seers.Loader.moduleLoad("toast-message", "index", passingParameter);
                if(endCallback !== null){
                    endCallback();
                }
            }
            else{
                let passingParameter = {
                    time : 3000,
                    text : `계정 정보 수정에 실패하였습니다.`,
                    icon : "error",
                    loader:false
                }
                Seers.Loader.moduleLoad("toast-message", "index", passingParameter);
            }
        }
    }
    const setModalAddEvent = function(){
        CUSTOM.EVENT.HTML.push(".user-update-ok-btn");
        $(".user-update-ok-btn").off("click").on("click", function(){
            let modalId= $(this).parents(".cm-middle-modal").attr("id");
            const endCallback = function () {
                modal.globalClose(modalId) ;
            }
            updateAccountUser(endCallback);
        });
        CUSTOM.EVENT.HTML.push(".user-delete-ok-btn");
        $(".user-delete-ok-btn").off("click").on("click", function(){
            let deleteParams = {
                    "requester" : GBL.ACCOUNT.INFO.userCode,
                    "userCode"  : $(this).data().userCode
                };
            let deleteResult =  USER_UTIL.DELETE_ACCOUNT_INFO(deleteParams);
            if(deleteResult.result === true){
                let passingParameter = {
                    time : 3000,
                    text : `계정 정보가 삭제되었습니다.`,
                    icon : "info",
                    loader:false
                }
                Seers.Loader.moduleLoad("toast-message", "index", passingParameter);
                modal.globalClose($(this).parents(".cm-middle-modal").attr("id")) ;
                if(GBL.CONSTANTS.get(`NOW_ACTION`) ==="index"){
                    setListPage();
                }
                else if(GBL.CONSTANTS.get(`NOW_ACTION`) ==="mod"){

                }
            }
            else{
                let passingParameter = {
                    time : 3000,
                    text : `계정 정보 삭제에 실패하였습니다.`,
                    icon : "error",
                    loader:false
                }
                Seers.Loader.moduleLoad("toast-message", "index", passingParameter);
            }
        });
    }
    const setAddEvent = function(content = `index`){
        const selectBoxCallback = function (choiceBox) {
            let selectObj = $(choiceBox).parents(".cm-select-box");
            selectObj.children(".check").val($(choiceBox).data("code"));
        }
        SELECT_BOX_EVENT.ON_CLICK(`.cm-select-box`, `.option-list`, `.option-item`, `.label`, `selected`, selectBoxCallback);

        CUSTOM.EVENT.HTML.push("#goUserListBtn");
        $("#goUserListBtn").off("click").on("click", function(){
            let modalId = "customAlert";
            const okBtnCallback = function (param) {
                etc.move("/medical-staff/index");
                modal.globalClose(param);
            }
            const cancelBtnCallback = function (param) {
                modal.globalClose(param);
            }
            let msg = ``;
            if(GBL.CONSTANTS.get(`NOW_ACTION`) ==="add"){
                msg =`신규 사용자 추가를 멈추고 목록 화면으로 이동하시겠습니까?<br>입력 하신 내용은 모두 삭제됩니다.`;
            }
            else if(GBL.CONSTANTS.get(`NOW_ACTION`) ==="mod"){
                msg =`사용자 계정 정보 수정을 멈추고 목록 화면으로 이동하시겠습니까?<br>입력 하신 내용은 모두 삭제됩니다.`;
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
        if (content === `index`) {

            CUSTOM.EVENT.HTML.push(".device-search-btn");
            $(".device-search-btn").off("click").on("click", function(){
                setListPage();
            });
            CUSTOM.EVENT.HTML.push(".btn-add");
            $(".btn-add").off("click").on("click", function(){
                etc.move("/medical-staff/add");
            });
            CUSTOM.EVENT.HTML.push(".btn-detail-view ");
            $(".btn-detail-view ").off("click").on("click", function(){
                let selectParams = {
                    "requester" : GBL.ACCOUNT.INFO.userCode,
                    "organizationCode" : GBL.ACCOUNT.INFO.organizationCode,
                    "id" : $(this).data().userId
                };
                let selectUser = USER_UTIL.SELECT_ACCOUNT_INFO(selectParams);
                if(selectUser.result === true){
                    GBL.CONSTANTS.set("selectAccountInfo" , selectUser.userAccountSimple , true)
                    etc.move(`/medical-staff/mod`);
                }
                else{
                    let passingParameter = {
                        time : 3000,
                        text : `계정 정보가 없습니다.\n관리자에게 문의하세요.`,
                        icon : "error",
                        loader:false
                    }
                    Seers.Loader.moduleLoad("toast-message", "index", passingParameter);
                }
            });
            CUSTOM.EVENT.HTML.push(".btn-user-del");
            $(".btn-user-del").off("click").on("click", function(){
                let templateValue = {
                    "isBackgroundClickForClose": true,
                    "modalEventCallback": null,
                    "id" : "userDeleteModal",
                    "userName" : `${$(this).data().userName}`,
                    "userId" : `${$(this).data().userId}`,
                    "userCode" : `${$(this).data().userCode}`
                }
                let modalObj  = new modal(templateValue);
                modalObj.open(html.deleteModal, templateValue ,[{ name : setModalAddEvent , params : []}]);
            });
        }
        else if(content === `add`) {
            CUSTOM.EVENT.HTML.push("#createAccountBtn");
            $("#createAccountBtn").off("click").on("click", function(){
                insertAccountUser();
            });
        }
        else if(content === `mod`) {
            CUSTOM.EVENT.HTML.push("#modAccountBtn");
            $("#modAccountBtn").off("click").on("click", function(){
                const dataFormId = "accountInfoForm";
                const form = etc.formParser(dataFormId);
                if(USER_UTIL.formCheck(dataFormId)){
                    let templateValue = {
                        "isBackgroundClickForClose": true,
                        "modalEventCallback": null,
                        "id" : "userDeleteModal",
                        "userName" : `${form.name}`,
                        "userId" : `${form.id}`,
                        "userCode" : `${form.userCode}`
                    }
                    let modalObj  = new modal(templateValue);
                    modalObj.open(html.modUserModal, templateValue ,[{ name : setModalAddEvent , params : []}]);
                }
            });
            CUSTOM.EVENT.HTML.push("#delAccountBtn");
            $("#delAccountBtn").off("click").on("click", function(){
                let templateValue = {
                    "isBackgroundClickForClose": true,
                    "modalEventCallback": null,
                    "id" : "userDeleteModal",
                    "userName" : GBL.CONSTANTS.get("selectAccountInfo").name,
                    "userId" : GBL.CONSTANTS.get("selectAccountInfo").id,
                    "userCode" : GBL.CONSTANTS.get("selectAccountInfo").userCode
                }
                let modalObj  = new modal(templateValue);
                modalObj.open(html.deleteModal, templateValue ,[{ name : setModalAddEvent , params : []}]);
            });

        }

    }
    const setSelectBox = function (allCheck = false) {
        USER_UTIL.SELECT_BOX_USER_TYPE("searchCateUserType" , allCheck);
        USER_UTIL.SELECT_BOX_ORGAN("searchCateUserOrgan" , allCheck);
        USER_UTIL.SELECT_BOX_USER_LEVEL("searchCateUserLevel" , allCheck);
    }
    const setListPage = function () {
        let passingParams = {
            "requester": GBL.ACCOUNT.INFO.userCode,
            "organizationCode" :  $("#searchCateUserOrgan").children(".check").val() != "" ? $("#searchCateUserOrgan").children(".check").val() : GBL.ACCOUNT.INFO.organizationCode,
            "levelList" : USER_UTIL.CHECK_MY_LIMITED_LEVEL(),
            "search" : $(".common-search-input .search-input-enter").val(),
            "accountTypeList" : $("#searchCateUserType").children(".check").val() != 0 ? [$("#searchCateUserType").children(".check").val()] : null
        }
        let response = USER_UTIL.SELECT_ACCOUNT_LIST(passingParams);
        $(".cm-tbody").html("");
        if(response.result === true){
            etc.setHtmlParsing($(".cm-tbody"),html.medicalStaffList,response);
        }
        else{
            etc.setHtmlParsing($(".cm-tbody"),html.listNotFound,response);
        }
        setAddEvent("index");
    }
    const setUserAccountPage = function (type = "add") {
        $("#userAccountInfoTable").html("");
        if(type === "add"){
            etc.setHtmlParsing($("#userAccountInfoTable"), html.userAccountInfo , );
        }
        else {
            if( GBL.CONSTANTS.get("selectAccountInfo")){
                etc.setHtmlParsing($("#userAccountInfoTable"), html.modUserAccountInfo ,GBL.CONSTANTS.get("selectAccountInfo"));
            }else{
                etc.move(`/medical-staff/index`);
            }
        }
        setSelectBox(false);
        setAddEvent(type);
    }
    const index = function() {
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.html);
        custom.etc.removeLoading();
        setSelectBox(true);
        setListPage();
    };
    const add = function(){
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.add);
        custom.etc.removeLoading();
        setUserAccountPage("add");
    }
    const mod = function(){
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.mod);
        custom.etc.removeLoading();
        setUserAccountPage("mod");
    }
    return {
        pre : pre,
        index: index,
        add: add,
        mod: mod,
    };
};

export { promise }