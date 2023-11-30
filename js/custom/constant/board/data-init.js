"use strict";
const {CONST: BOARD_CONST} = await import(`/js/custom/constant/board/constant.js${ver_string}`);
const _setFakeApi = function() {
    GBL.API.FAKE[BOARD_CONST.API.URL.SELECT_PAGE] = true;
    FAKE_API_JSON[BOARD_CONST.API.URL.SELECT_PAGE] = {
        "result": true,
        "extra": null,
        "error": 0,
        "message": null,
        "remoteIp": null,
        "boardList": [
            {
                "indexId": 101,
                "code": "2311300911_8LOH",
                "name": "갤러리",
                "list": 999, // 0관리자, 1일반, 999비회원
                "view": 1,
                "write": 1,
                "reply": 1,
                "comment": 1,
                "useReply": 1,
                "useComment": 1,
                "updateDateTime": "2023-11-30 09:11:35",
                "registerDateTime": "2023-11-30 09:11:35"
            },
            {
                "indexId": 100,
                "code": "2311291601_O1O8",
                "name": "공지사항",
                "list": 999,
                "view": 999,
                "write": 0,
                "reply": 0,
                "comment": 0,
                "useReply": 0,
                "useComment": 0,
                "updateDateTime": "2023-11-30 09:11:17",
                "registerDateTime": "2023-11-29 16:01:50"
            },
            {
                "indexId": 99,
                "code": "2311291601_1IU6",
                "name": "FAQ",
                "list": 999,
                "view": 999,
                "write": 1,
                "reply": 0,
                "comment": 1,
                "useReply": 1,
                "useComment": 1,
                "updateDateTime": "2023-11-29 16:01:40",
                "registerDateTime": "2023-11-29 16:01:40"
            }
        ],
        "totalCount": 3
    };
    GBL.API.FAKE[BOARD_CONST.API.URL.INFO] = true;
    FAKE_API_JSON[`${BOARD_CONST.API.URL.INFO}_1`] = {
        "result":true,
        "extra":null,
        "error":0,
        "message":null,
        "remoteIp":null,
        "patient":{
            "id":1,
            "transferStatus":99,
            "code":"P20221209T160000500",
            "gender":2,
            "location":"세종특별자치시 나성동 753",
            "locationAddress":"세종특별자치시 나성동",
            "locationAddressDetail":"753",
            "isTransfer":1
        }
    };
    GBL.API.FAKE[BOARD_CONST.API.URL.DELETE] = true;
    FAKE_API_JSON[BOARD_CONST.API.URL.DELETE] = {
        "result":true,
        "extra":null,
        "error":0,
        "message":null,
        "remoteIp":null
    };
    GBL.API.FAKE[BOARD_CONST.API.URL.INSERT] = true;
    FAKE_API_JSON[BOARD_CONST.API.URL.INSERT] = {
        "result":true,
        "extra":null,
        "error":0,
        "message":null,
        "remoteIp":null
    };
    GBL.API.FAKE[BOARD_CONST.API.URL.UPDATE] = true;
    FAKE_API_JSON[`${BOARD_CONST.API.URL.UPDATE}_1`] = {
        "result":true,
        "extra":null,
        "error":0,
        "message":null,
        "remoteIp":null
    };
}
_setFakeApi();