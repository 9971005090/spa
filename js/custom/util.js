"use strict";

/****************** 사이트별로 변경이 필요한 부분은 수정해서 사용. ***************************************/
let custom = {
    preFileLoading: function() {
        // 파일 로딩 자체가 async로 병렬 처리가 되서,  promise 사용
        return new Promise(function(resolve, reject) {
            let loadingEnd = function() {
                resolve(true);
            }
            let options = {
                files: [
                    `/assets/font/google_font_noto.css${ver_string}`,
                    `/assets/font/google_font_bebas.css${ver_string}`,
                    `/assets/css/common/font-awesome/css/font-awesome-4.7.0.min.css${ver_string}`,
                    `/assets/css/theme/${GBL.DESIGN.THEME}/custom.css${ver_string}`,
                    `/assets/css/theme/${GBL.DESIGN.THEME}/responsive.css${ver_string}`,
                    `/assets/css/theme/${GBL.DESIGN.THEME}/default-custom.css${ver_string}`
                ],
                errorAfterType: "stop",
                callback: loadingEnd
            }
            if(GBL.DEEP_COPY.TYPE === "cloneDeep") {
                options.files.push(`/js/util/lodash/lodash-4.17.21.min.js${ver_string}`);
            }
            if(GBL.API.FAKE !== false) {
                options.files.push(`/js/custom/fake-api-json.js${ver_string}`);
            }
            let fileLoading = new preFileLoading();
            fileLoading.setInit(options);
            fileLoading.run();
        });
    },
    process: {
        setWorkerApi: function() {
            GBL.CONSTANTS.set(`GLOBAL.WORKER.API`, new Worker( `/js/module/window-worker/worker-api.js${ver_string}` ), true);
        },
        setMenuInfo: function() {
            GBL.CONSTANTS.set(`NOW_CONTROLLER`, GBL.WINDOW_HISTORY_STATE.GET_NOW_CONTROLLER(0, true), true);
            GBL.CONSTANTS.set(`NOW_ACTION`, GBL.WINDOW_HISTORY_STATE.GET_NOW_ACTION(0, true), true);
        },
        getGlobal: async function() {
            let initInfo = {
                'APP.NAME': 'seers',
            };
            // 아래 영역에 사이트별 기본 설정이 필요한 값을 정의한다.
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            GBL.CONSTANTS = GBL.GET_CONSTANTS(initInfo);
            custom.process.setMenuInfo();
            // custom.process.setWorkerApi();
        },
        setGlobal: async function() {
            let initInfo = {
                'APP.NAME': 'seers',
            };

            // 향후 다국어 처리를 위한 기본값
            const {CONST: LANGUAGE_CONST} = await import(`/js/language/constant.js${ver_string}`);
            initInfo['APP.LOCALE'] = LANGUAGE_CONST[navigator.language];
            initInfo['APP.TIME.ZONE'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
            initInfo['APP.TIME.ZONE.OFFSET'] = new Date().getTimezoneOffset() / 60; // hour

            // 아래 영역에 사이트별 기본 설정이 필요한 값을 정의한다.
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            GBL.CONSTANTS = GBL.GET_CONSTANTS(initInfo);
        },
        initGlobal: async function() {
            GBL.CONSTANTS.init();
            custom.process.setMenuInfo();
            // custom.process.setWorkerApi();
        },
        init: async function() {
            showSiteLoadingLog(`custom util > process - init`, `#029cb8`, `#d9e6f1`);
            GBL.DESIGN.SET_SITE_NAME();
            GBL.DESIGN.SET_SITE_META_ALL();
            await custom.process.setGlobal();
            custom.process.setWorkerApi();

            // template 헬퍼
            Handlebars.registerHelper('dateParsingForFormat', function(dateString, format) {
                return custom.etc.dateParsingForFormat(dateString, format);
            });
            Handlebars.registerHelper('genderParsing', function(gender) {
                return custom.etc.genderParsing(gender);
            });

            // Hoisting 처리로 함수는 아래에 정의
            _setInitPreAuth();
            _setHandlebarsHelper();

            // 세션 리뉴 처리
            if(GBL.SESSION_RENEW.IS_USE === true) {
                if(GBL.ACCOUNT.IS_AUTH() === true) {
                    if(GBL.SESSION_RENEW.INTERVAL.START === false && GBL.SESSION_RENEW.OBJ === null) {
                        GBL.SESSION_RENEW.OBJ = setTimeout(custom.sessionRenew, GBL.SESSION_RENEW.INTERVAL.TERM);
                    }
                }
            }

            // 최초 인증 검사
            if(GBL.SESSION_FIRST_CHECK === false) {
                if(GBL.ACCOUNT.IS_AUTH() === true) {
                    if(GBL.ACCOUNT.INFO === null) {
                        return "AUTH_FAIL";
                    }
                    else if(GBL.ACCOUNT.INFO.hasOwnProperty("name") === false || GBL.ACCOUNT.INFO.hasOwnProperty("id") === false || GBL.ACCOUNT.INFO.hasOwnProperty("userCode") === false) {
                        return "AUTH_FAIL";
                    }
                    else if(String.isNullOrWhitespace(GBL.ACCOUNT.INFO.name) === true || String.isNullOrWhitespace(GBL.ACCOUNT.INFO.id) === true || String.isNullOrWhitespace(GBL.ACCOUNT.INFO.userCode) === true) {
                        return "AUTH_FAIL";
                    }
                    else {
                        // 간단하게 서버가 살아 있는지 확인 용도
                        // 실제 토큰이 만료면 로그인 창으로 갈테고, 서버가 살아 있지 않다면 반복적으로 실행이 될테고
                        const response = await custom.etc.authCheck();
                        showSiteLoadingLog(`backend server check - ${response.result === true ? 'live' : '"die'}`, `#0a5700`, `#d9f1dc`);
                        if (response.result === false) {
                            return "BACKEND_SERVER_DIE";
                        }
                    }
                }
                else {
                    return "AUTH_FAIL";
                }
                GBL.SESSION_FIRST_CHECK = true;
            }

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            // 인증전에 처리할 것이 있으면 추가
            function _setInitPreAuth() {
                // 아래 영역에 코드 작성
                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////
            }

            // const _setHandlebarsHelper = function()
            // 무명 함수로 하면, 호이스팅 처리가 안되서, 위에서 오출시 에러가 난다. 이부분만 유명함수로 처리한다.
            // 최초 접속시 인증이 안되서, 헬퍼가 로딩이 안된다.
            function _setHandlebarsHelper() {
                // 아래 영역에 코드 작성
                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                Handlebars.registerHelper('indexNum', function(index) {
                    return ++index;
                })
                Handlebars.registerHelper('dateParsingForFormat', function(dateString, format) {
                    if(dateString !== null) {
                        return new Date(dateString).toString(format);
                    }
                    return null;
                });
                Handlebars.registerHelper('customIndexOf', function(check, value, options) {
                    try {
                        return check.indexOf(Number(value)) !== -1 ? options.fn(this) : options.inverse(this);
                    }
                    catch(e) {
                        return check.indexOf(value) !== -1 ? options.fn(this) : options.inverse(this);
                    }
                });
                ///////////////////////////////////////////////////////////////////////////////////////////////////////
            }
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            return `OK`;
        },
        preForOutOfControllerScope: async function(domId = null, parameters = null) {
            showSiteLoadingLog(`custom util > process - preForOutOfControllerScope`, `#029cb8`, `#d9e6f1`);

            // 사이트별 필요한 슈저 전역변수 설정(이전 controller와 같은 경우는 초기화 하지 않는다.
            if (GBL.WINDOW_HISTORY_STATE.URL.length === 0 || GBL.WINDOW_HISTORY_STATE.IS_CHANGE(true) === true) {
                custom.process.initGlobal();
            }
            else if (GBL.CONSTANTS !== null) {
                custom.process.setMenuInfo();
            }

            // 로딩 이미지 레이어 추가
            let checkDomId = GBL.DESIGN.MAIN_DIV_NAME;
            if(domId !== null) {
                checkDomId = domId;
            }
            if($(`${checkDomId}`).length > 0) {
                let isShow = true;
                if (parameters !== null && parameters.hasOwnProperty(`loading`) === true && JSON.parse(parameters.loading) === false) {
                    isShow = false;
                }
                if (isShow === true) {
                    custom.etc.showLoading(checkDomId);
                }
            }

            // 디자인에서 직접 선언을 하지 않고, 다른 controller, model, module에서 선언한 이벤트 제거
            for (let i = 0; i < CUSTOM.EVENT.HTML.length; i++) {
                $(`${CUSTOM.EVENT.HTML[i]}`).unbind();
            }
            CUSTOM.EVENT.HTML = [];

            if (GBL.WINDOW_HISTORY_STATE.URL.length === 0 || GBL.WINDOW_HISTORY_STATE.IS_SUB_CHANGE(true) === true) {
                // 페이지 새로고침 변수 초기화
                if (GBL.CONSTANTS.get(`REFRESH`) !== null) {
                    // timeout은 timoout을 선언한 객체를 재 실행전에 삭제하면, 실행이 안된다.,
                    // 다만! interval로 정의한것은 선언한 객체를 지워도 실행이 계속 된다.
                    // 반드시 clearInterval이 필요하다. 그래서 그냥 공통적으로 같게 clear하는것으로 정리함
                    GBL.CONSTANTS.get(`REFRESH`).clear();
                    GBL.CONSTANTS.del(`REFRESH`);
                }
            }

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            return `OK`;
        },
        postForOutOfControllerScope: async function() {
            showSiteLoadingLog(`custom util > process - postForOutOfControllerScope`, `#029cb8`, `#d9e6f1`);
            GBL.MODULE.IS_LOADING['popup'] = await Seers.Loader.moduleLoad("popup", "index");
            // 검객 영역의 키워드를 넣는 부분에서 엔터를 치면 submit 이 발생되는 코드가 계속 반복적으로 들어가고 있어, 공통 영역에 추가함
            // form id는 따로 해당 클래스 에서 쓸수도 있으니, 잘 안쓰는 클래스명으로 통일해서 사용하는것으로 함
            // controller에서 비동기로 처리되는 부분이 있어, 그 처리가 끝나는 시점 파악이 어려워 편법으로 진행
            // > 더 좋은 방법을 찾기 위해 계속 조사 필요
            let _t = 0; // 총 2초가 지나도 없으면 실행하지 않게
            const _e = function() {
                _t = _t + 100;
                if ($(`.form-common-search`).length === 1) {
                    CUSTOM.EVENT.HTML.push(`.form-common-search`);
                    $(`.form-common-search`).on('submit', function(e) {
                        etc.stopBubbling(e);
                    });

                    CUSTOM.EVENT.HTML.push(`.form-common-search-keyword`);
                    $(`.form-common-search-keyword`).off(`keyup`).on('keyup', function(e){
                        etc.stopBubbling(e);
                        if ($(`.form-common-search input[type=text]`).length > 1) {
                            if (e.which === GBL.KEYBOARD_KEY.CODE.ENTER) {
                                $(`.form-common-search`).submit();
                            }
                        }
                    })
                    CUSTOM.EVENT.HTML.push(`.form-common-search-button`);
                    $(`.form-common-search-button`).off(`click`).on('click', function(e){
                        etc.stopBubbling(e);
                        $(`.form-common-search`).submit();
                    })
                }
                else {
                    if (_t <= 2000) {
                        setTimeout(function() {
                            _e();
                        }, 100)
                    }
                }
            }
            _e();


            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            return `OK`;
        },
        pre: async function() {
            showSiteLoadingLog(`custom util > pre`, `#029cb8`, `#d9e6f1`);

            // 아래 영역에 코드 작성(공통부분)
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////

            //메뉴 변경 시 액션 처리 전 처리되어야 할 것들..
            if(GBL.WINDOW_HISTORY_STATE.IS_CHANGE() === true || GBL.WINDOW_HISTORY_STATE.IS_SUB_CHANGE() === true || GBL.WINDOW_HISTORY_STATE.IS_FULL_CHANGE() === true) {
                // 아래 영역에 코드 작성
                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////
            }
            return `OK`;
        },
        post: async function() {
            showSiteLoadingLog(`custom util > post`, `#029cb8`, `#d9e6f1`);

            // 아래 영역에 코드 작성(공통부분)
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////

            //메뉴 변경 시 액션 처리 후 처리되어야 할 것들..
            if(GBL.WINDOW_HISTORY_STATE.IS_CHANGE() === true && GBL.WINDOW_HISTORY_STATE.GET_NOW_CONTROLLER() == "patient") {
                // 아래 영역에 코드 작성
                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                // 무조건 세션 리프레시는 초기화
                GBL.SESSION_RENEW.INTERVAL.START = false;
                ///////////////////////////////////////////////////////////////////////////////////////////////////////
            }
            return `OK`;
        },
        reset: function() {
            console.log("custom process - reset");
            custom.process.localStorageInit();
            custom.process.sessionStorageInit();

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        },
        afterLogin: async function(parameters = null) {
            console.log("custom process - afterLogin");

            custom.process.setWorkerApi();
            if(GBL.SESSION_RENEW.IS_USE === true) {
                GBL.SESSION_RENEW.OBJ = setTimeout(custom.sessionRenew, GBL.SESSION_RENEW.INTERVAL.TERM);
            }

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        },
        afterLogout: function() {
            console.log("custom process - afterLogout");
            if(GBL.SESSION_RENEW.IS_USE === true) {
                if(GBL.SESSION_RENEW.INTERVAL.START === true && GBL.SESSION_RENEW.OBJ !== null) {
                    clearTimeout(GBL.SESSION_RENEW.OBJ);
                    GBL.SESSION_RENEW.OBJ = null;
                    GBL.SESSION_RENEW.INTERVAL.START = false;
                }
            }

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            // GLOBAL 변수 초기화
            if (GBL.CONSTANTS.has(`GLOBAL.MEASUREMENT.INTERVAL`) === true) {
                let _m_i = GBL.CONSTANTS.get(`GLOBAL.MEASUREMENT.INTERVAL`);
                for (let key in _m_i) {
                    clearInterval(_m_i[key]);
                }
            }
            GBL.CONSTANTS.allDeleteIngoreApp();
        },
        error: function(data = null) {
            console.log("custom process - error");
            if(GBL.DEBUG.USE === true) {
                // 서버 재시작이라고 간주함
                if(data.responseText === undefined) {
                    custom.request.httpStatusErrorFunction["serverError"](data);
                }
                else {
                    sessionStorage.setItem("etc", JSON.stringify(data));
                    Seers.Loader.directControllerLoad("error", "viewForErrorPage");
                }
            }
            else {
                custom.request.httpStatusErrorFunction["serverError"](data);
            }

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        },
        sessionStorageInit: function() {
            showSiteLoadingLog(`custom util > process - sessionStorageInit`, `#029cb8`, `#d9e6f1`);
            sessionStorage.clear();

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        },
        localStorageInit: function() {
            showSiteLoadingLog(`custom util > process - localStorageInit`, `#029cb8`, `#d9e6f1`);
            localStorage.clear();

            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
    },
    etc: {
        // 반드시 sync로 처리되는 함수
        setHtmlParsing: function(parsingValue) {
            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            if (custom.etc.hasOwnProperty(`getFunctionEnvironment`) === true) {
                parsingValue['FUNCTION_ENVIRONMENT'] = custom.etc.getFunctionEnvironment();
            }
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            return parsingValue;
        },
        reStart: function() {
            setTimeout(function() {
                // if(GBL.WINDOW_HISTORY_STATE.GET_NOW_CONTROLLER(0, true) !== "login" && GBL.WINDOW_HISTORY_STATE.GET_NOW_CONTROLLER(0, true) !== "logout") {
                // 서버가 재시작할때, 서버에 접속을 하지못하고, json 파싱에러가
                try {
                    let date = new Date();
                    let options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            'SX-Auth-Token': GBL.ACCOUNT.TOKEN,
                            'SX-Client-IP': null
                        },
                        body: JSON.stringify({
                            requester: GBL.ACCOUNT.INFO.userCode,
                            organizationCode: GBL.ACCOUNT.INFO.organizationCode,
                            deviceKind: custom.request.getDeviceKindCode(),
                            timezone: "Asia/Seoul",
                            gmtCode: 'GMT' + date.getUTCOffset(),
                            requestDateTime: date.toString('yyyy-MM-dd HH:mm:ss'),
                            systemTime: date.getTime(),
                            countryCode: "Ko",
                            countryName: "Korea",
                            pageNumber: 1,
                            count: 10
                        }),
                    }
                    fetch(`${GBL.API.BASE_URL}/Manager/SelectGatewayInfoPage`, options)
                        .then(
                            (response) => {
                                // console.log("onSuccess", onSuccess);
                                console.log("response:", response);
                                location.reload();
                            }
                        )
                        .catch(
                            (error) => {
                                console.log("error:", error);
                                custom.etc.reStart();
                            }
                        );
                }
                catch (e) {
                    console.log("e:::::::::", e);
                    custom.etc.reStart();
                }
                // }
            }, 1000 * 3);
        },
        authCheck: async function() {1
            let passingParams = {
                pageNumber: 1,
                count: 5
            }
            let response = custom.request.api("/Manager/SelectGatewayInfoPage", passingParams);
            return response;
        },
        customAlertForError: function(msg, okCallback = null) {
            let modalId = `customAlertForError_${String.generateRandom(10)}`;
            let initParameter = {
                msg: msg,
                id: modalId,
                isBackgroundClickForClose: false,
                button: {
                    cancel: {
                        isUse: false
                    },
                    del: {
                        isUse: false
                    },
                    ok: {
                        callback: [
                            {
                                name: modal.globalClose,
                                params: [modalId]
                            }
                        ]
                    }
                }
            }
            if(okCallback !== null) {
                for(let i = 0; i < okCallback.length; i++) {
                    initParameter.button.ok.callback.push(okCallback[i]);
                }
            }
            Seers.Loader.moduleLoad(`custom-alert`, `index`, initParameter);
        },
        showLoading: function(selector = null) {
            if (selector !== null && $(`#contents-loading-parent`).length <= 0) {
                $(selector).append(`
                    <div id="contents-loading-parent" style="z-index: 0; position: fixed; top: 0; left: 0; width: 100%; height: 100vh;">
                        <style>
                        .rotate-img {animation: rotate_image 2s linear infinite;transform-origin: 50% 50%;}
                        @media screen and (min-width:1200px), screen and (max-width:1199px), screen and (max-width:1023px) {
                            #contents-loading-child {
                                width: 500px; height: 500px;
                            }
                            #contents-loading-child img {
                                width: 500px;
                            }
                        }
                        @media screen and (max-width:767px) {
                            #contents-loading-child {
                                width: 300px; height: 300px;
                            }
                            #contents-loading-child img {
                                width: 300px;
                            }
                        }
                        @media screen and (max-width:487px) {
                            #contents-loading-child {
                                width: 200px; height: 200px;
                            }
                            #contents-loading-child img {
                                width: 200px;
                            }
                        }
                        @keyframes rotate_image{
                            100% {
                                transform: rotate(360deg);
                            }
                        }
                        </style>

                        <div id="contents-loading-child" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); box-sizing: border-box; padding: 0px; margin: 0px;">
                            <img src="/assets/images/progress-blue.png" class="rotate-img">    
                        </div>                
                    </div>                
                `);
            }
        },
        removeLoading: function() {
            $(`#contents-loading-parent`).remove();
        },
        customToastForError: function(msg) {
            let passingParameter = {
                time: 3000,
                bg: `bgRed`,
                text: msg,
            }
            Seers.Loader.moduleLoad("toast-message", "index", passingParameter);
        },
        customToastForColor: function(msg, color = `bgBlue`, position = `top-center`) {
            let passingParameter = {
                time: 3000,
                bg: color,
                text: msg,
                position: position
            }
            Seers.Loader.moduleLoad("toast-message", "index", passingParameter);
        },
        commonDivHide: function() {
            // 셀렉트 박스들
            $(".select-box").removeClass("selected");
            $(".select-box").children(".option-list").hide();
            $(".cm-select-box").removeClass("selected");
            $(".cm-select-box").children(".option-list").hide();
        },
        excelDownload: async function(fileName, sheetName, header, data) {
            new Promise(function(resolve, reject) {
                let loadingEnd = async function() {
                    resolve(true);
                    _download();
                }
                let options = {
                    files: [
                        `/js/util/exceljs/exceljs-4.3.0.min.js`,
                    ],
                    errorAfterType: "stop",
                    callback: loadingEnd
                }
                let fileLoading = new preFileLoading();
                fileLoading.setInit(options);
                fileLoading.run();
            });
            const _download = function() {
                // https://github.com/exceljs/exceljs
                // https://codepen.io/jenasapan007/pen/VwpgdVO
                const wb = new ExcelJS.Workbook();
                const workbookName = `${fileName}.xlsx`;
                const worksheetName = sheetName;
                const ws = wb.addWorksheet(worksheetName, {
                        properties: {
                            tabColor: {argb:'FFFF0000'}
                        }
                    }
                );
                ws.columns = header;
                ws.addRows(data);
                wb.xlsx.writeBuffer()
                    .then(function(buffer) {
                        const blob = new Blob([buffer], {type: "application/octet-stream"});
                        const link = document.createElement('a');
                        link.href = window.URL.createObjectURL(blob);
                        link.download = workbookName;
                        link.click();
                    });
            }
        },
        genderParsing: function(gender) {
            if(gender !== null) {
                if(gender === 1 || gender === "1" || gender === "M") {
                    return "남"
                }
                else if(gender === 2 || gender === "2" || gender === "F") {
                    return "여"
                }
                else {
                    return "-"
                }
            }
            return "-";
        },
        dateParsingForFormat: function(dateString, format) {
            if(dateString != null || dateString != undefined ) {
                return new Date(dateString).toString(format);
            }
            // return null;
            return null;
        },
        responsive: function() {
            if(1024 >= $(window).width() && 768 < $(window).width()){
                $(`#app`).removeClass("pc mobile mobile-small").addClass("tablet");
            }
            else if(768 >= $(window).width() && 488 < $(window).width()) {
                $(`#app`).removeClass("tablet pc mobile-small").addClass("mobile");
            }
            else if(488 >= $(window).width()){
                $(`#app`).removeClass("tablet pc mobile").addClass("mobile-small");
            }
            else{
                $(`#app`).removeClass("tablet mobile mobile-small").addClass("pc");
            }
            if($(`#app`).hasClass("pc")){
                if($(`main menu`).hasClass("on")){
                    $(`main menu`).removeClass("on");
                    $(`.burger-btn`).removeClass("active");
                }
            }
            else{
                if(!$(`main menu`).hasClass("on")){
                    $(`main menu`).addClass("on");
                    $(`.burger-btn`).addClass("active");
                }
            }
        },

        // 아래 영역에 코드 작성
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        searchForPaging: async function(initParams = null) {
            const {CONST: DEFAULT_CONST} = await import(`/js/custom/constant/default/constant.js${ver_string}`);
            const {UTIL: SEARCH_TERM_UTIL} = await import(`/js/custom/constant/event/search-term.js${ver_string}`);
            const htmlForUnit = await import(`/template/${GBL.DESIGN.THEME}/content/unit.js${ver_string}`);
            if (initParams === null) {
                return false;
            }
            const initInfo = {
                type: `search`,
                paging: {
                    prefix: `prefix`,
                    info: DEFAULT_CONST.PAGING,
                    domSelector: `.pagination`
                },
                searchAddParams: null,
                useFunction: {
                    parsing: null,
                    search: null,
                    afterEvent: null,
                    paging: null
                },
                data: {
                    domSelector: `.data`,
                    resultKey: `result`
                },
                constains: null,
                template: null
            }
            if (initParams !== null) {
                $.extend(true, initInfo, initParams);
            }

            GBL.CONSTANTS.set(`CONSTANTS`, initInfo.constains, true);
            if (SEARCH_TERM_UTIL.VALIDATE_DATE() === false) {
                custom.etc.customToastForColor(`검색 기간을 정확히 입력하세요.`, `bgRed`);
                return false;
            }
            $(`${initInfo.data.domSelector}`).html(htmlForUnit.searching);
            if (initInfo.type === `search`) {
                custom.etc.showLoading(GBL.DESIGN.MAIN_DIV_NAME);
            }
            let params = null;
            let currentPage = $(`#${initInfo.paging.prefix}_currentPage`).length > 0 ? Number($(`#${initInfo.paging.prefix}_currentPage`).val()) : 1;
            if (GBL.CONSTANTS.has(`SEARCH.IS`) === false && GBL.CONSTANTS.has(`SEARCH.OPTIONS`) === true) {
                params = GBL.CONSTANTS.get(`SEARCH.OPTIONS`);
                currentPage = params.pageNumber;
            }
            if (params === null) {
                params = {
                    'search': $(`.form-common-search-keyword`).val(),
                    'pageNumber': currentPage,
                    'count': initInfo.paging.info.DATA_COUNT,
                    'startDateTime': null,
                    'endDateTime': null
                }
                if (Number($(`#form-common-search-term`).val()) > 0) {
                    params['startDateTime'] = `${$(`#form-common-search-start-date`).val()} 00:00:00`;
                    params['endDateTime'] = `${$(`#form-common-search-end-date`).val()} 23:59:59`;
                }
                if (initInfo.searchAddParams !== null) {
                    for (let key in initInfo.searchAddParams) {
                        params[key] = initInfo.searchAddParams[key];
                    }
                }
            }
            GBL.CONSTANTS.set(`SEARCH.OPTIONS`, params, true);
            GBL.CONSTANTS.set(`SEARCH.IS`, true, true)
            const _t = initInfo.useFunction.search(params);
            console.log("_t::::::", _t);
            if (_t.result === true) {
                let startVirtualNumber = Number.getStartVirtualNumber(_t.totalCount, initInfo.paging.info.DATA_COUNT, currentPage);
                if (_t[initInfo.data.resultKey] !== null) {
                    if (_t[initInfo.data.resultKey].length > 0) {
                        for (let i = 0; i < _t[initInfo.data.resultKey].length; i++) {
                            _t[initInfo.data.resultKey][i] = initInfo.useFunction.parsing(_t[initInfo.data.resultKey][i]);
                            _t[initInfo.data.resultKey][i].virtualNumber = startVirtualNumber - i;
                        }
                        $(`${initInfo.data.domSelector}`).html(``);
                        etc.setHtmlParsing($(`${initInfo.data.domSelector}`), initInfo.template, {datas: _t[initInfo.data.resultKey]});
                        $(`#content-data-count`).text(_t.totalCount);
                        initInfo.useFunction.afterEvent(`datas`);
                    }
                    else {
                        $(`${initInfo.data.domSelector}`).html(htmlForUnit.notFound);
                        $(`#content-data-count`).text(0);
                    }

                    // 페이징 처리 파라미터 셋팅 및 호출
                    let pagingParameter = {
                        prefix: initInfo.paging.prefix,
                        divName: initInfo.paging.domSelector,
                        totalData: _t.totalCount,
                        callback: initInfo.useFunction.paging,
                        callbackRun: false,
                        dataPerPage: initInfo.paging.info.DATA_COUNT
                    }
                    if ($(`#${pagingParameter.prefix}_currentPage`).length > 0) {
                        pagingParameter.currentPage = Number($(`#${pagingParameter.prefix}_currentPage`).val());
                        pagingParameter.dataPerPage = Number($(`#${pagingParameter.prefix}_dataPerPage`).val());
                        pagingParameter.pageCount = Number($(`#${pagingParameter.prefix}_pageCount`).val());
                    }
                    if (GBL.WINDOW_HISTORY_STATE.IS_SUB_CHANGE() === true && GBL.CONSTANTS.has(`SEARCH.OPTIONS`) === true) {
                        pagingParameter.currentPage = currentPage;
                    }
                    Seers.Loader.moduleLoad("paging", "index", pagingParameter);
                }
            }
            else {
                $(`${initInfo.data.domSelector}`).html(htmlForUnit.fail);
            }
            custom.etc.removeLoading();
        },
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    },

    request: {
        httpStatusErrorFunction: {
            100: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            200: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            201: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            204: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            206: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            301: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            302: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            303: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            304: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            307: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            308: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            401: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            403: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            404: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            406: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            407: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            409: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            410: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            412: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            416: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            418: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            425: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            451: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            500: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            501: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            502: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            503: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            504: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////
            },
            serverError: function(data) {
                console.log("data::::::::", data);
                // 전역으로 사용하기 위해서는 아래 내용을 추가하여 사용한다.
                //////////////////////////////////////////////////////////////////////////////////
                let reStart = function() {
                    setTimeout(function() {
                        //location.reload();
                    }, 5000);
                }
                let modalId = "customAlert"
                let initParameter = {
                    msg: `알 수 없는 오류가 발생하였습니다. 잠시후 재시작 됩니다.`,
                    id: modalId,
                    isBackgroundClickForClose: false,
                    modalEventCallback: [
                        {
                            name: reStart,
                            params: [null]
                        }
                    ],
                    button: {
                        ok: {
                            isUse: true,
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
                //////////////////////////////////////////////////////////////////////////////////
            }
        },
        api: function(url, parameter, onSuccessFunc = null, onSuccessParams = null, header = null, etcParams = {isFormData: false, httpStatusErrorFunction: null}) {
            let runHttpStatusErrorFunction = function(status, data) {
                if(custom.request.httpStatusErrorFunction.hasOwnProperty(status) === true) {
                    custom.request.httpStatusErrorFunction[status](data);
                    return false;
                }
                return true;
            }
            // fake 여부 확인해서 처리
            let fakeApi = false;
            if(typeof GBL.API.FAKE[url] !== "undefined") {
                fakeApi = GBL.API.FAKE[url];
            }
            if(fakeApi === true) {
                return custom.request.fake(url, parameter, onSuccessFunc, onSuccessParams);
            }
            else {
                if(etcParams.hasOwnProperty("httpStatusErrorFunction") === true) {
                    if(etcParams.httpStatusErrorFunction !== null) {
                        $.extend(true, custom.request.httpStatusErrorFunction, etcParams.httpStatusErrorFunction);
                    }
                }
                let errorFunction = function(data) {
                    // ajax success 에서의 에러 처리
                    let error = String.isJson(data.responseText);
                    data.url = url;
                    data.parameter = parameter;
                    data.onSuccessFunc = onSuccessFunc;
                    data.onSuccessParams = onSuccessParams;
                    data.etcParams = etcParams;
                    data.apiInfo = {
                        url: url,
                        parameter: JSON.stringify(parameter),
                        onSuccessFunc: JSON.stringify(onSuccessFunc),
                        onSuccessParams: JSON.stringify(onSuccessParams),
                        etcParams: JSON.stringify(etcParams)
                    }
                    if(error === false) {
                        error = data.responseText;
                    }
                    if(data.hasOwnProperty("error") === true) {
                        // 로그인 화면으로 이동..
                        if(data.error == GBL.API.RESPONSE.CODE.SESSION_CLOSED) {
                            // alert(log);
                            Seers.Loader.goMove("seers", "login");
                            return;
                        }
                        if(data.hasOwnProperty("code") === true) {
                            try {
                                if(runHttpStatusErrorFunction(Number(data.code), data) === false) {
                                    return false;
                                }
                            }
                            catch(e) {
                                console.log("data.code::::::::::::", data.code);
                                custom.process.error(data);
                            }
                        }
                        if(GBL.SITE_MENU.CHOICE_CONTROLLER !== `login`) {
                            sessionStorage.setItem("error", JSON.stringify(data));
                            custom.process.error(data);
                            // Seers.Loader.directControllerLoad("error", "viewForErrorPage");
                        }
                        else {
                            if (GBL.CONSTANTS.has(`LOGIN.FAIL.FUNCTION`) === true) {
                                GBL.CONSTANTS.get(`LOGIN.FAIL.FUNCTION`)(data);
                            }
                            else {
                                // let msg = GBL.ACCOUNT.CHECK.LOGIN_FAIL.GET_MESSAGE(data.message);
                                // Seers.Loader.moduleLoad("alert", "index", {msg: msg, id: "alert"});
                                let modalId = "customAlertForLogin";
                                let okCallback = [];
                                if(onSuccessParams !== null && onSuccessParams.hasOwnProperty("formId") === true) {
                                    okCallback.push({
                                        name: etc.isFormSubmit,
                                        params: [onSuccessParams.formId, "end"]
                                    })
                                }
                                okCallback.push({
                                    name: modal.globalClose,
                                    params: [modalId]
                                })
                                let initParameter = {
                                    // msg: GBL.ACCOUNT.CHECK.LOGIN_FAIL.GET_MESSAGE(data.message),
                                    msg: `로그인에 실패했습니다!`,
                                    id: modalId,
                                    isBackgroundClickForClose: false,
                                    button: {
                                        ok: {
                                            callback: okCallback
                                        },
                                        del: {isUse: false},
                                        cancel: {isUse: false}
                                    }
                                }
                                Seers.Loader.moduleLoad(`custom-alert`, `index`, initParameter);
                            }
                        }
                    }

                    // ajax error 에서의 에러 처리
                    else {
                        try {
                            if(runHttpStatusErrorFunction(error.status, data) === false) {
                                return false;
                            }
                        }
                        catch(e) {
                            console.log("data.code::::::::::::", data.code);
                            console.log("data.responseText::::::::::::::::", data.responseText);
                            sessionStorage.setItem("error", JSON.stringify(data.responseText));
                            custom.process.error(data);
                            // Seers.Loader.directControllerLoad("error", "viewForErrorPage");
                        }
                    }
                }
                let req = new requestAPI();
                let defaultParams = custom.request.getDefaultParam(true, parameter);
                let params = null;
                let isFormData = false;
                if(etcParams.hasOwnProperty("isFormData") === true) {
                    isFormData = etcParams.isFormData;
                }
                if(isFormData === true) {
                    params = new FormData();
                    params.append('requestUserCode', parameter.requestUserCode);
                    if(parameter.hasOwnProperty("organizationCode") === true) {
                        params.append('organizationCode', parameter.organizationCode);
                    }
                    for(let key in parameter) {
                        if(key !== "requestUserCode" && key !== "organizationCode") {
                            params.append(key, parameter[key]);
                        }
                    }
                    for (const [key, value] of Object.entries(defaultParams)) {
                        if(key !== "requestUserCode" && key !== "organizationCode") {
                            params.append(key, value);
                        }
                    }
                }
                else {
                    params = Object.assign(custom.request.getDefaultParam(true), parameter);
                }

                if(onSuccessFunc == null) {
                    req.setAsync(false);
                }
                if(onSuccessParams != null) {
                    req.setSuccessParameters(onSuccessParams);
                }
                req.setErrorFunction(errorFunction);

                if(header != null) {
                    req.setHeader(header);
                }
                else {
                    req.setHeader({
                        "Content-Type": "application/json;charset=UTF-8",
                        'SX-Auth-Token': GBL.ACCOUNT.TOKEN,
                        'SX-Client-IP': null
                    });
                }

                if(url.indexOf("http") == -1) {
                    req.setUrl(GBL.API.BASE_URL + url);
                }
                else {
                    req.setUrl(url);
                }
                req.setParameter(params);
                return req.API(onSuccessFunc, {isFormData: isFormData});
            }
        },
        fake: function(url, parameter, onSuccessFunc = null, onSuccessParams = null) {
            let getResponse = function() {
                if (parameter.hasOwnProperty(`checkKey`) === true) {
                    return FAKE_API_JSON[`${url}_${parameter.checkKey}`];
                }
                else {
                    return FAKE_API_JSON[url];
                }
            }
            let fakeAsyncFunction = async function() {
                onSuccessFunc(Object.assign({}, {result: true}, getResponse()), parameter, onSuccessParams);
                return true;
            }

            if(onSuccessFunc !== null) {
                fakeAsyncFunction();
            }
            else {
                return Object.assign({}, {result: true}, getResponse());
            }
            return true;
        },

        getDefaultParam: function(authNotInclude = false, parameter = {}) {
            let params = {};
            let date = new Date();

            if(GBL.ACCOUNT.INFO !== null) {
                if(parameter.hasOwnProperty("requester") === false) {
                    params.requester = GBL.ACCOUNT.INFO.userCode;
                }
                if(parameter.hasOwnProperty("organizationCode") === false) {
                    params.organizationCode = GBL.ACCOUNT.INFO.organizationCode;
                }
            }
            if(authNotInclude === false) {
                params.requester = null;
                params.organizationCode = null;
            }

            params.deviceKind = custom.request.getDeviceKindCode();
            params.timezone =  "Asia/Seoul";
            params.gmtCode = 'GMT' + date.getUTCOffset();
            params.requestDateTime = date.toString('yyyy-MM-dd HH:mm:ss');
            params.systemTime = date.getTime();
            params.countryCode = "Ko";
            params.countryName = "Korea";

            return params;
        },
        getDeviceKindCode: function() {
            return 3
        }
    },

    preprocess: {
        // 아래 영역에 코드 작성
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    },

    sessionRenew: function() {
        let successSessionRenew = function(response) {
            if(response.result === true) {
                CookieHelper.set('userAccount', CookieHelper.get('userAccount'), null);
                CookieHelper.set('accessToken', response.accessToken, null);
                GBL.ACCOUNT.TOKEN = response.accessToken;
                GBL.SESSION_RENEW.INTERVAL.START = true;
                setTimeout(custom.sessionRenew, GBL.SESSION_RENEW.INTERVAL.TERM);
            }
        }
        // 새창을 띄워서 리뉴를 하기 시작하면, 본창과 새창의 토큰값이 달라지게 된다.
        // 그래서 쿠키값을 다시 확인하여 세팅해준다.
        GBL.ACCOUNT.TOKEN = CookieHelper.get('accessToken');
        custom.request.api(GBL.SESSION_RENEW.API.URL, {}, successSessionRenew);

        // 아래 영역에 코드 작성
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
}