"use strict";
export const CONST = {
    API: {
        URL: {
            SELECT: "/SelectBoardList",
            SELECT_PAGE: "/SelectBoardPage"
        }
    },
    DESIGN: {
        CONTENTS_BY_DATA_TABLE: `#contents-by-data-table`,
        CONTENTS_BY_VIEW_DATA_TABLE: `#contents-for-view`,
    },
    AUTH: {
        CODE: {
            CODE0: 0,
            CODE1: 1,
            CODE999: 999
        },
        TITLE: {}
    }
}
CONST.AUTH.TITLE[CONST.AUTH.CODE.CODE0] = "관리자";
CONST.AUTH.TITLE[CONST.AUTH.CODE.CODE1] = "회원";
CONST.AUTH.TITLE[CONST.AUTH.CODE.CODE999] = "비회원";