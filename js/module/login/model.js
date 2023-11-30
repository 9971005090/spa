"use strict";
const {CONST: CONST} = await import(`/js/module/login/constant.js${ver_string}`);
export const successLogin = function(response, obj) {
    const _process = function() {
        let isChecked = $(`input:checkbox[id="${CONST.DESIGN.DOM.INPUT.CHECK.ID_SAVE.replace("#", "")}"]`).is(":checked");
        let isLoginAutoChecked = $(`input:checkbox[id="${CONST.DESIGN.DOM.INPUT.CHECK.AUTO.replace("#", "")}"]`).is(":checked");
        let id_val = $(CONST.DESIGN.DOM.INPUT.ID).val();
        GBL.ACCOUNT.SET(response);

        if (isChecked === true) {
            CookieHelper.set(CONST.COOKIE.NAME.ID, id_val, CONST.COOKIE.TERM.REMEMBER_ID);
        }
        else {
            CookieHelper.remove(CONST.COOKIE.NAME.ID);
        }

        if (isLoginAutoChecked === true) {
            CookieHelper.set(CONST.COOKIE.NAME.AUTO_LOGIN, response.accessToken, CONST.COOKIE.TERM.AUTO_LOGIN);
        }
        else {
            CookieHelper.remove(CONST.COOKIE.NAME.AUTO_LOGIN);
        }

        GBL.ACCOUNT.CHECK.RUN();

        let afterPassingParameter = {
            loginResponse: response,
            designParameter: {
                isChecked: isChecked,
                isLoginAutoChecked: isLoginAutoChecked
            }
        }
        process.afterLogin(afterPassingParameter);

        CONST.UTIL.AFTER_LOGIN();
    }
    if (CONST.WELCOME.USE === true) {
        custom.etc.customToastForColor(CONST.WELCOME.MESSAGE.replaceAll(`{{name}}`, response.userAccount.name));
        setTimeout(function() {
            _process();
        }, 500);
    }
    else {
        _process();
    }
}