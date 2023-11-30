`use strict`;
/**
 * @file 각 메뉴의 헤더/레프트 메뉴 처리 파일
 * @version 0.0.1
 * @description 각 메뉴의 헤더/레프트 메뉴 처리 파일
 * @author zaid
 */

const {CONST: BOARD_CONST} = await import(`/js/custom/constant/board/constant.js${ver_string}`);
const {CONST: DEFAULT_CONST} = await import(`/js/custom/constant/default/constant.js${ver_string}`);

/**
 * @constant
 * @typedef {object} UTIL
 * @property {object} HEADER 각 메뉴의 헤더 관련 처리 정의
 * @description 각 메뉴의 헤더/레프트에서 사용되는 유틸 함수 정의
 */
export const UTIL = {
    DATA_PARSING: function(data) {
        console.log("data:::::", data);
        data.parsingList = BOARD_CONST.AUTH.TITLE[data.list];
        data.parsingView = BOARD_CONST.AUTH.TITLE[data.view];
        data.parsingWrite = BOARD_CONST.AUTH.TITLE[data.write];
        data.parsingReply = BOARD_CONST.AUTH.TITLE[data.reply];
        data.parsingComment = BOARD_CONST.AUTH.TITLE[data.comment];
        data.parsingUseReply = DEFAULT_CONST.USE.TITLE[data.useReply];
        data.parsingUseComment = DEFAULT_CONST.USE.TITLE[data.useComment];
        return data;
    },
    LIST: function(addParams = null) {
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            organizationCode : GBL.ACCOUNT.INFO.organizationCode,
        }
        if (addParams !== null) {
            for (let key in addParams) {
                passingParams[key] = addParams[key]
            }
        }
        const response = custom.request.api(BOARD_CONST.API.URL.SELECT_PAGE, passingParams);
        return response;
    },
    INFO: function(measurementCode = null) {
        if (measurementCode === null) {
            return false;
        }
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            organizationCode : GBL.ACCOUNT.INFO.organizationCode,
            measurementCode: measurementCode
        }
        const response = custom.request.api(BOARD_CONST.API.URL.INFO, passingParams);
        return response;
    },
    DELETE: function(measurementCode = null) {
        if (measurementCode === null) {
            return false;
        }
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            organizationCode : GBL.ACCOUNT.INFO.organizationCode,
            measurementCode: measurementCode
        }
        const response = custom.request.api(BOARD_CONST.API.URL.DELETE, passingParams);
        return response;
    },
    INSERT: function(addParams = null) {
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            organizationCode : GBL.ACCOUNT.INFO.organizationCode,
        }
        if (addParams !== null) {
            for (let key in addParams) {
                passingParams[key] = addParams[key]
            }
        }
        const response = custom.request.api(BOARD_CONST.API.URL.INSERT, passingParams);
        return response;
    },
    UPDATE: function(measurementCode = null, addParams = null) {
        if (measurementCode === null) {
            return false;
        }
        const passingParams = {
            requester : GBL.ACCOUNT.INFO.userCode,
            organizationCode : GBL.ACCOUNT.INFO.organizationCode,
            measurementCode: measurementCode
        }
        if (addParams !== null) {
            for (let key in addParams) {
                passingParams[key] = addParams[key]
            }
        }
        const response = custom.request.api(BOARD_CONST.API.URL.UPDATE, passingParams);
        return response;
    },
    EXCEL: async function(params, fileName = `excel`, sheetName = `sheet`) {
        const _r = UTIL.LIST(params);
        if (_r.result === true) {
            if (_r.brainSaverPatientList !== null && _r.brainSaverPatientList.length > 0) {
                for (let i = 0; i < _r.brainSaverPatientList.length; i++) {
                    _r.brainSaverPatientList[i] = UTIL.DATA_PARSING(_r.brainSaverPatientList[i]);
                    _r.brainSaverPatientList[i].virtualNumber = i + 1;
                }
            }
        }
        const header = [
            {
                key: "virtualNumber",
                header: "번호",
                width: 20,
                style: { numFmt: '#,##0;' }
            },
            {
                key: "parsingTransportStatus",
                header: "환자이송상태",
                width: 20
            },
            {
                key: "measurementCode",
                header: "측정코드",
                width: 40
            },
            {
                key: "parsingGender",
                header: "환자성별",
                width: 20
            },
            {
                key: "discoveryAddress",
                header: "환자발생장소",
                width: 60
            },
            {
                key: "symptomDateTime",
                header: "환자발생시간",
                width: 30
            }
        ];
        custom.etc.excelDownload(fileName, sheetName, header, _r.brainSaverPatientList);
    }
}