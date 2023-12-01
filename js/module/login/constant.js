"use strict";
export const CONST = {
    VERSION: "0.1.0",
    DESIGN: {
        THEME: "default",
        DIV_NAME: GBL.DESIGN.MAIN_DIV_NAME,
        DOM: {
            INPUT: {
                ID: "#id_input",
                PASS: "#password_input",
                CHECK: {
                    AUTO: "#login_auto",
                    ID_SAVE: "#login_userId"
                }
            },
            BUTTON: {
                LOGIN: "#login_btn"
            },
            FORM: {
                DATA: "#dataForm"
            }
        },
        LOGO: {
            TYPE: `text`, // image, text
        }
    },
    COOKIE: {
        NAME: {
            ID: "seers_id",
            AUTO_LOGIN: "seers_auto_login"
        },
        TERM: {
            REMEMBER_ID: 30, // days
            AUTO_LOGIN: 365
        }
    },
    USE: {
        MODULE: [
            {
                name: "version",
                action: "index"
            }
        ],
        AUTO_LOGON_CHECK: {
            SAVE_ID_CHECK: false
        },
    },
    WELCOME: {
        USE: false,
        MESSAGE: null
    },
    API: {
        LOGIN: `/Account/LoginHIS`
    },
    AFTER_LOGIN_URL: GBL.ACCOUNT.AFTER_LOGIN_URL,
    LOGIN_FAIL: {
        TYPE: "normal", // normal(실패만 알려줌), detail(자세히 알려줌)
        CODE: { // 아래 문구가 포함되는 걸 찾는다.
            NULL: "Account is null",
            INCORRECT: "The password is incorrect",
            BOTH: []
        },
        MESSAGE: {
            NULL: "계정이 존재하지 않습니다. 아이디와 비밀번호를 정확하게 입력하세요!",
            INCORRECT: "비밀번호가 정확하지 않습니다. 비밀번호를 정확하게 입력하세요!",
            BOTH: null,
            NORMAL: `로그인에 실패했습니다. 아이디와 비밀번호를 정확하게 입력하세요!`
        },
        GET_MESSAGE: function(code) {
            let msg = CONST.LOGIN_FAIL.MESSAGE.BOTH;
            if(CONST.LOGIN_FAIL.TYPE === "detail") {
                if(code.indexOf(CONST.LOGIN_FAIL.CODE.NULL) !== -1) {
                    msg = CONST.LOGIN_FAIL.MESSAGE.NULL;
                }
                else if(code.indexOf(CONST.LOGIN_FAIL.CODE.INCORRECT) !== -1) {
                    msg = CONST.LOGIN_FAIL.MESSAGE.INCORRECT;
                }
            }
            else {
                msg = CONST.LOGIN_FAIL.MESSAGE.NORMAL;
            }
            return msg;
        }
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 사이트별 모듈에서 상이하게 처리해야 할 부분은 init 에 추가를 하던가? 아니면 새로운 함수를 추가하여 활용한다.
    // INIT : config 값 변경시 사용
    // POST_PROCESS: 해당 모듈의 액션 처리 후 진행해야 할 부분이 있다면 추가
    // 예시 - init)
    // // 버전은 기본 버전 뒤에 .0부터 올린다.
    // CONST.VERSION = `${CONST.VERSION}.0`;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    INIT: async function() {
        // 아래 영역에 코드 작성
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 버전은 기본 버전 뒤에 .0부터 올린다.
        CONST.VERSION = `${CONST.VERSION}.0`;
        CONST.DESIGN.THEME = GBL.DESIGN.THEME;
        CONST.USE.AUTO_LOGON_CHECK.SAVE_ID_CHECK = true;

        const {CONST: LANGUAGE} = await import(`/js/language/${GBL.CONSTANTS.get(`APP.LOCALE`)}/base.js${ver_string}`);
        CONST.WELCOME.USE = true;
        CONST.WELCOME.MESSAGE = LANGUAGE.MESSAGE['LOGIN-AFTER'];

        CONST.SET_FAKE_API();
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    },
    UTIL: {
        AFTER_LOGIN: function() {

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////

            etc.move(CONST.AFTER_LOGIN_URL);
        },
        SET_ADD_PARAMS: function(params = null, form = null) {

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////

            return params;
        },

        // 아래 영역에 코드 작성
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    },
    POST_PROCESS: {

        index: function(param = null) {

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            if (CONST.DESIGN.LOGO.TYPE === `text`) {
                $(`.login_module_logo`).css(`width`, `300`);
                $(`.login_module_logo`).css(`text-align`, `center`);
            }
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////

        }


        // controller에 index이외의 action이 있다면 직접 추가
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    },
    SET_FAKE_API: function () {
        GBL.API.FAKE[CONST.API.LOGIN] = true;
        FAKE_API_JSON[CONST.API.LOGIN] = {
            "result": true,
            "extra": null,
            "error": 0,
            "message": null,
            "remoteIp": "123.143.78.43",
            "accessToken": "TEST_test_20231130115118333_2K9N9P5T_TOKEN_WEB",
            "userAccount": {
                "id": "test",
                "password": null,
                "organizationCode": "TEST",
                "userCode": "TEST_test",
                "employeeCode": null,
                "department": null,
                "position": null,
                "level": 8,
                "name": "test",
                "phoneNumber": "01073665332",
                "email": "9971005090@naver.com",
                "status": 0,
                "dateTime": "2021-12-28 12:23:27",
                "gmtCode": "GMT+0900",
                "timezone": "Asia/Seoul",
                "updateDateTime": null,
                "lastUpdatePwDateTime": "2021-12-28 12:23:27",
                "modifyPwAlertDateTime": null,
                "deactivateDateTime": null,
                "organizationName": "test",
                "profilePhotoUrl": null,
                "accountType": 0,
                "fireStationAddressId": 0,
                "wardSimple": null
            },
            "organization": {
                "organizationId": 74,
                "organizationCode": "SEERS",
                "organizationName": "test",
                "countryCode": "Ko",
                "countryName": "Korea",
                "state": "test",
                "city": "test, test",
                "address": "test, test",
                "latitude": 11.380262,
                "longitude": 111.115272,
                "phoneNumber": "+test",
                "level": 10,
                "expiration": 0,
                "expirationDateTime": "2220-10-27 12:04:24",
                "dateTime": "2021-12-28 17:37:24",
                "gmtCode": "GMT+0900",
                "timezone": "Asia/Seoul",
                "etc": "test",
                "organizationType": 0,
                "strokeType": 0,
                "navigationInfo": null
            },
            "apiServerInfoList": null,
            "wardSimpleList": null,
            "wardSimple": null,
            "emergencyTransportPatientInfo": null,
            "loginFailCount": 0,
            "loginFailMaxCount": 0,
            "doctorDepartment": null,
            "brainSaverPatient": null,
            "fireStationAddress": null
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
CONST.INIT();