`use strict`;
/**
 * @file 각 메뉴의 헤더/레프트 메뉴 처리 파일
 * @version 0.0.1
 * @description 각 메뉴의 헤더/레프트 메뉴 처리 파일
 * @author zaid
 */

const {CONST: HOSPITAL_CONST} = await import(`/js/custom/constant/hospital/constant.js${ver_string}`);

/**
 * @constant
 * @typedef {object} UTIL
 * @property {object} HEADER 각 메뉴의 헤더 관련 처리 정의
 * @description 각 메뉴의 헤더/레프트에서 사용되는 유틸 함수 정의
 */
export const UTIL = {
    DATA_PARSING: function(data) {
        data.parsingStrokeType = HOSPITAL_CONST.STROKE_TYPE.TITLE[data.strokeType];
        data.parsingOrganizationType = HOSPITAL_CONST.ORGANIZATION_TYPE.TITLE[data.organizationType];
        data.parsingMessageType = HOSPITAL_CONST.MESSAGE_TYPE.TITLE[data.messageType];
        return data;
    },
    LIST: function(addParams = null) {
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            includeNavigation: false,
        }
        if (addParams !== null) {
            for (let key in addParams) {
                passingParams[key] = addParams[key]
            }
        }
        const response = custom.request.api(HOSPITAL_CONST.API.URL.SELECT_LIST, passingParams);
        return response;
    },
    PAGE: function(addParams = null) {
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            includeNavigation: false,
        }
        if (addParams !== null) {
            for (let key in addParams) {
                passingParams[key] = addParams[key]
            }
        }
        const response = custom.request.api(HOSPITAL_CONST.API.URL.PAGE, passingParams);
        return response;
    },
    SELECT: function(code = null) {
        if (code === null) {
            return false;
        }
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            organizationCode : code,
            includeNavigation: false,
        }
        const response = custom.request.api(HOSPITAL_CONST.API.URL.SELECT, passingParams);
        return response;
    },
    DELETE: function(code = null) {
        if (code === null) {
            return false;
        }
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            organizationCode : code,
        }
        const response = custom.request.api(HOSPITAL_CONST.API.URL.DELETE, passingParams);
        return response;
    },
    INSERT: function(name = null, addParams = null) {
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            organizationName : name,
        }

        if (addParams !== null) {
            for (let key in addParams) {
                passingParams[key] = addParams[key]
            }
        }
        console.log(passingParams)
        const response = custom.request.api(HOSPITAL_CONST.API.URL.INSERT, passingParams);
        return response;
    },
    UPDATE: function(code = null, addParams=null) {
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            organizationCode : code,
        }
        if (addParams !== null) {
            for (let key in addParams) {
                passingParams[key] = addParams[key]
            }
        }
        console.log("passingParams::::::::", passingParams);
        const response = custom.request.api(HOSPITAL_CONST.API.URL.UPDATE, passingParams);
        return response;
    },
}