"use strict";
export const CONST = {
    API: {
        URL: {
            'SELECT_LIST': "/BrainSaver/SelectOrganizationList",
            'PAGE': "/BrainSaver/SelectOrganizationPage",
            'SELECT': "/BrainSaver/SelectOrganization",
            'INSERT': "/BrainSaver/InsertOrganization",
            'UPDATE': "/BrainSaver/UpdateOrganization",
        }
    },
    DESIGN: {
        CONTENTS_BY_DATA_TABLE: `#contents-by-data-table`,
        CONTENTS_BY_VIEW_DATA_TABLE: `#contents-for-view`,
    },
    ORGANIZATION_TYPE: {
        CODE: {
            CODE0: 0,
            CODE1: 1,
        },
        TITLE: {},
    },
    STROKE_TYPE: {
        CODE: {
            CODE0: 0,
            CODE1: 1,
            CODE2: 2,
        },
        TITLE: {},
    },
    INCLUDE_NAVIGATION: {
        CODE: {
            FALSE: 0,
            TRUE: 1,
        },
        TITLE: {},
    },
    MESSAGE_TYPE: {
        CODE: {
            all: 0,
            NAME: 1,
            ADDRESS: 2,
            PHONE_NUMBER: 3,
            PATIENT: 99,
            // ORGANIZATION_CODE: 4,
            // STROKE_TYPE_CODE: 5,
        },
        TITLE: {}
    },
    EXPIRATION: {
        CODE: {
            TRUE: 0,
            FALSE: 1,
        },
        TITLE: {}
    },
    USE_TYPE: {
        CODE: {
            FALSE: 0,
            TRUE: 1,
        },
        TITLE: {}
    },
}
CONST.EXPIRATION.TITLE[CONST.EXPIRATION.CODE.TRUE] = "사용";
CONST.EXPIRATION.TITLE[CONST.EXPIRATION.CODE.FALSE] = "미사용";
CONST.USE_TYPE.TITLE[CONST.USE_TYPE.CODE.FALSE] = "사용안함";
CONST.USE_TYPE.TITLE[CONST.USE_TYPE.CODE.TRUE] = "사용함";
CONST.ORGANIZATION_TYPE.TITLE[CONST.ORGANIZATION_TYPE.CODE.CODE0] = "일반 병원(IPM)";
CONST.ORGANIZATION_TYPE.TITLE[CONST.ORGANIZATION_TYPE.CODE.CODE1] = "브레인 세이버 연동 병원";
CONST.STROKE_TYPE.TITLE[CONST.STROKE_TYPE.CODE.CODE0] = "없음";
CONST.STROKE_TYPE.TITLE[CONST.STROKE_TYPE.CODE.CODE1] = "PCS";
CONST.STROKE_TYPE.TITLE[CONST.STROKE_TYPE.CODE.CODE2] = "TSC";
CONST.MESSAGE_TYPE.TITLE[CONST.MESSAGE_TYPE.CODE.all] = "전체";
CONST.MESSAGE_TYPE.TITLE[CONST.MESSAGE_TYPE.CODE.NAME] = "기관 명칭";
// CONST.MESSAGE_TYPE.TITLE[CONST.MESSAGE_TYPE.CODE.ORGANIZATION_CODE] = "기관 연동 타입";
// CONST.MESSAGE_TYPE.TITLE[CONST.MESSAGE_TYPE.CODE.STROKE_TYPE_CODE] = "뇌졸중 병원 타입";
CONST.MESSAGE_TYPE.TITLE[CONST.MESSAGE_TYPE.CODE.ADDRESS] = "기관 주소";
CONST.MESSAGE_TYPE.TITLE[CONST.MESSAGE_TYPE.CODE.PHONE_NUMBER] = "대표전화";