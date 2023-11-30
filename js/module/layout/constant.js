"use strict";
export const CONST = {
    VERSION: "0.1.0",
    DESIGN: {
        THEME: "default",
        VIEW_COLUMN: {
            COPYRIGHT: true,
            VERSION: true
        },
        DIV_NAME: GBL.DESIGN.MAIN_DIV_NAME
    },


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 사이트별 모듈에서 상이하게 처리해야 할 부분은 init 에 추가를 하던가? 아니면 새로운 함수를 추가하여 활용한다.
    // INIT : config 값 변경시 사용
    // POST_PROCESS: 해당 모듈의 액션 처리 후 진행해야 할 부분이 있다면 추가
    // 예시 - init)
    // // 버전은 기본 버전 뒤에 .0부터 올린다.
    // CONST.VERSION = `${CONST.VERSION}.0`;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    INIT: function() {
        // 아래 영역에 코드 작성
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 버전은 기본 버전 뒤에 .0부터 올린다.
        CONST.VERSION = `${CONST.VERSION}.0`;
        CONST.DESIGN.THEME = GBL.DESIGN.THEME;

        CONST.DESIGN.HEADER_BUTTON = ".cm-header .cm-top-menu-ul .menu-list";
        CONST.DESIGN.HEADER_BUTTON_SELECTOR = "selected";
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    },
    EVENT : {
        // 아래 영역에 코드 작성
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        SET_HEADER_MENU: function() {
            // 대메뉴 이벤트 처리
            CUSTOM.EVENT.HTML.push(".cm-header .cm-top-menu-ul .menu-list");
            $(".cm-header .cm-top-menu-ul .menu-list").off("click").click(function(e) {
                etc.stopBubbling(e);
                $("#burger-btn.on").removeClass("on")
                $(".cm-top-menu.on").removeClass("on")
                let location = $(this).attr("data-location");
                let callback = $(this).attr("data-callback");
                $("#wrap").removeAttr("style");
                if(location !== undefined && location !== "") {
                    etc.move(location.toString());
                }
            });
        },
        SET_LEFT_MENU: function() {
            CUSTOM.EVENT.HTML.push(`.gnb-list`);
            $(`.gnb-list`).off("click").click(function(e) {
                etc.stopBubbling(e);
                let location = $(this).attr("data-location");
                let callback = $(this).attr("data-callback");
                if(location !== undefined && location !== "") {
                    etc.move(location.toString());
                }
                // callback 함수는 반드시 EVENT 에 등록을 한다.
                if(callback !== undefined && callback !== "") {
                    CONST.EVENT[callback]();
                }
            });
        },
        SET_LOGO: function() {
            // 로고 클릭 이벤트 처리
            CUSTOM.EVENT.HTML.push(".cm-header .cm-header-logo-link");
            $(".cm-header .cm-header-logo-link").off("click").click(function(e) {
                etc.stopBubbling(e);
                etc.move(`/`);
            });
        },
        SET_PRIVACY_COOKIE: function() {
            CUSTOM.EVENT.HTML.push(".btn-cookie-agree");
            $(".btn-cookie-agree").off("click").on("click", function(){
                CookieHelper.set('seers_cookie_agree', 'Y', '365');
                $('.cookie-popup').removeClass('on');
            })
        },
        SET_GO_TO_PAGE_TOP: function() {
            CUSTOM.EVENT.HTML.push(".cm-btn-top");
            $(".cm-btn-top").off("click").on("click", function(e) {
                etc.stopBubbling(e)
                $("html").animate({
                    scrollTop: "0"
                }, 680);
            });
            $(document).scroll(function() {
                if ($(this).scrollTop() > 50 ) {
                    $(".cm-btn-top").animate({
                        opacity: 1
                    }, 10);
                }
                else {
                    $(".cm-btn-top").animate({
                        opacity: 0
                    }, 10);
                }
            });
        },
        SET_BURGER: function() {
            CUSTOM.EVENT.HTML.push("#burger-btn");
            $("#burger-btn").off("click").on("click", function(e) {
                if ($(this).parents(".cm-header-section").hasClass("type02")) {
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        $(`.cm-left-nav`).removeClass("on");
                        $("#wrap").removeAttr("style");
                    }
                    else{
                        $(this).addClass('active');
                        $(`.cm-left-nav`).addClass("on");
                    }
                }
                else {
                    if ($(this).hasClass('on')) {
                        $(this).removeClass('on');
                        $(`.cm-top-menu`).removeClass("on");
                        $("#wrap").removeAttr("style");
                        $(".cm-header-logo-link").removeAttr("style");
                    }
                    else {
                        $(this).addClass('on');
                        $(`.cm-top-menu`).addClass("on");
                        $("#wrap").css({"height":"100vh", "overflow":"hidden"});
                        $(".cm-header-logo-link").css({"z-index":"10"});
                    }
                }
            });
            $("#burger-btn").trigger(`click`);
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    },
    PRE_PROCESS: {
        index: async function(param = null) {
            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
    },
    POST_PROCESS: {
        index: async function(param = null) {
            // 아래 영역에 코드 작성
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            // 로그아웃 이벤트
            CUSTOM.EVENT.HTML.push(".logout-button");
            $('.logout-button').off("click").click(function(e) {
                etc.stopBubbling(e);
                etc.move("/logout");
            });

            // 전체 페이지 영역을 클릭하면 닫혀야(안보여야) 하는 div 를 모두 닫는다.
            CUSTOM.EVENT.HTML.push("#wrap");
            $('#wrap').off("click").click(function(e) {
                // etc.stopBubbling(e);
                etc.commonDivHide();
                custom.etc.commonDivHide();
            });

            // 헤더 메뉴 선택 표시
            CONST.POST_PROCESS.setHeaderSelected();

            // 로고 링크
            CONST.EVENT.SET_LOGO();

            // 대메뉴 세팅
            CONST.EVENT.SET_HEADER_MENU();

            // 좌측 메뉴 세팅
            CONST.POST_PROCESS.setLeftMenu(`.cm-left-nav-section.nav-type-long`, `.cm-left-nav-section.nav-type-long .gnb.scroll-bar`, CONST.EVENT.SET_LEFT_MENU, true);

            // 페이지 타이틀/ 네비게이션 세팅
            CONST.POST_PROCESS.setPageTitle();

            // 반응형 함수 실행, 화면 크기 변경시 반응형 함수 실행되게.
            custom.etc.responsive();
            $(window).resize(function(e){
                etc.stopBubbling(e);
                custom.etc.responsive();
            })

            // 개인정보 처리방침 동의(쿠키 설정 이벤트/ 설명 div 노출 처리)
            CONST.EVENT.SET_PRIVACY_COOKIE();
            CONST.POST_PROCESS.setPrivacyDiv();

            // 페이지 상단 이동 버튼
            CONST.EVENT.SET_GO_TO_PAGE_TOP();

            // 좌측 메뉴 접기
            CONST.EVENT.SET_BURGER();
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        },

        // controller에 index이외의 action이 있다면 직접 추가, 또는 추가 함수가 있다면 직접 추가
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        setPageTitle: function() {
            // 대메뉴 선택 정보 확인
            const choiceMenu = {
                header: {
                    name: null,
                    location: null
                },
                left: {
                    name: null,
                    location: null
                },
            }
            $(`.cm-header .cm-top-menu-ul .menu-list`).each(function(index, item) {
                console.log("$(item).class:::", $(item).attr(`class`));
                if ($(item).hasClass(`selected`) === true) {
                    choiceMenu.header.name = $(item).text();
                    choiceMenu.header.location = $(this).attr("data-location").toString();
                    return false;
                }
            });
            $(`.cm-left-nav-section.nav-type-long .gnb-list`).each(function(index, item) {
                if ($(item).hasClass(`selected`)) {
                    choiceMenu.left.name = $(item).text();
                    choiceMenu.left.location = $(this).attr("data-location").toString();
                    return false;
                }
            });

            const leftMenuData = CONST.POST_PROCESS.getLeftMenuInfo();
            $(`.cm-main-content .page-top`).html(``);
            etc.setHtmlParsing($(`.cm-main-content .page-top`), leftMenuData.design.pageNavigationDataTable, {choiceMenu: choiceMenu}, true);
        },
        getLeftMenuInfo: function() {
            const _getLeftMenuData = function(controller) {
                if (controller === `hospital` || controller === `fire-station`) {
                    return {
                        // 'useController': [`hospital`, `fire-station`],
                        'useController': [`hospital`],
                        'datas': [
                            {
                                'controller': `hospital`,
                                'name': `기관관리`,
                                'data': {
                                    'info': `{"datas": ["index", "add", "update"]}`,
                                    'location': `/hospital/index`
                                }
                            },
                            // {
                            //     'controller': `fire-station`,
                            //     'name': `소방서관리`,
                            //     'data': {
                            //         'info': `{"datas": ["index", "add", "update"]}`,
                            //         'location': `/fire-station/index`,
                            //     }
                            // }
                        ]
                    }
                }
                else if (controller === `medical-staff` || controller === `paramedic` || controller === `manager` || controller === `administrator`) {
                    return {
                        // 'useController': [`medical-staff`, `paramedic`, `manager`, `administrator`],
                        'useController': [`medical-staff`],
                        'datas': [
                            {
                                'controller': `medical-staff`,
                                'name': `사용자관리`,
                                'data': {
                                    'info': `{"datas": ["index", "add", "update"]}`,
                                    'location': `/medical-staff/index`
                                }
                            },
                            // {
                            //     'controller': `paramedic`,
                            //     'name': `구급대원관리`,
                            //     'data': {
                            //         'info': `{"datas": ["index", "add", "update"]}`,
                            //         'location': `/paramedic/index`,
                            //     }
                            // },
                            // {
                            //     'controller': `manager`,
                            //     'name': `병원관리자관리`,
                            //     'data': {
                            //         'info': `{"datas": ["index", "add", "update"]}`,
                            //         'location': `/manager/index`,
                            //     }
                            // },
                            // {
                            //     'controller': `administrator`,
                            //     'name': `시스템관리자관리`,
                            //     'data': {
                            //         'info': `{"datas": ["index", "add", "update"]}`,
                            //         'location': `/administrator/index`,
                            //     }
                            // }
                        ]
                    }
                }
                else if (controller === `patient`) {
                    return {
                        'useController': [`patient`],
                        'datas': [
                            {
                                'controller': `patient`,
                                'name': `환자관리`,
                                'data': {
                                    'info': `{"datas": ["index", "add", "update"]}`,
                                    'location': `/patient/index`
                                }
                            }
                        ]
                    }
                }
                else if (controller === `push`) {
                    return {
                        'useController': [`push`],
                        'datas': [
                            {
                                'controller': `push`,
                                'name': `푸시관리`,
                                'data': {
                                    'info': `{"datas": ["index", "add", "update"]}`,
                                    'location': `/push/index`
                                }
                            }
                        ]
                    }
                }
                return null;
            }
            return {
                'design': {
                    'menuDataTable': `
                        <ul id="side-menu" class="gnb scroll-bar">
                            {{#each datas}}
                            <li class="gnb-list {{selected}}" data-info="{{data.info}}" data-location="{{data.location}}">
                                <a class="link" style="cursor: pointer;">
                                    <span class="icon d-none"></span>
                                    <span class="txt">{{name}}</span>
                                </a>         
                            </li>
                            {{/each}}
                        </ul>         
                    `,
                    'pageNavigationDataTable': `
                        <h3 class="page-title">{{choiceMenu.left.name}}</h3>
                        <div class="page-nav">
                            <a onclick="etc.move2('{{GLOBAL_CONSTANTS.DEFAULT.CONTROLLER}}', '{{GLOBAL_CONSTANTS.DEFAULT.ACTION}}')" class="page-nav-link go-main-link" style="cursor: pointer">
                                <span class="fa fa-home"></span>
                            </a>
                            <span class="icon fa fa-angle-right"></span>   
                            <a onclick="etc.move('{{choiceMenu.header.location}}')" class="page-nav-link" style="cursor: pointer">{{choiceMenu.header.name}}</a>
                            <span class="icon fa fa-angle-right"></span>   
                            <a class="page-nav-link">{{choiceMenu.left.name}}</a>
                        </div>                    
                    `
                },
                'controller': {
                    'hospital': {
                        'leftMenu': _getLeftMenuData(`hospital`)
                    },
                    'fire-station': {
                        'leftMenu': _getLeftMenuData(`fire-station`)
                    },
                    'medical-staff': {
                        'leftMenu': _getLeftMenuData(`medical-staff`)
                    },
                    'paramedic': {
                        'leftMenu': _getLeftMenuData(`paramedic`)
                    },
                    'manager': {
                        'leftMenu': _getLeftMenuData(`manager`)
                    },
                    'administrator': {
                        'leftMenu': _getLeftMenuData(`administrator`)
                    },
                    'patient': {
                        'leftMenu': _getLeftMenuData(`patient`)
                    },
                    'push': {
                        'leftMenu': _getLeftMenuData(`push`)
                    }
                }
            }
        },
        setLeftMenu: function(selector = null, subSelector = null, callback = null, clear = true) {
            const leftMenuData = CONST.POST_PROCESS.getLeftMenuInfo();
            let controller = null;
            let checkUrl = url.getUrlByPoint(0, true);
            if(checkUrl !== null) {
                let tempSplit = checkUrl.split("/");
                if(tempSplit.length > 1) {
                    controller = checkUrl.split("/")[1];
                }
                else {
                    controller = GBL.DESIGN.DEFAULT_CONTROLLER;
                }
            }
            if (leftMenuData.controller.hasOwnProperty(controller) === true) {
                if ($(`${subSelector}`).length > 0) {
                    if (clear === true) {
                        $(`${subSelector}`).remove();
                    }
                }
                let datas = Array.deepCopy(leftMenuData.controller[controller].leftMenu.datas);
                for (let i = 0; i < datas.length; i++) {
                    datas[i].selected = ``;
                    if (datas[i].controller === controller) {
                        datas[i].selected = ` selected`;
                    }
                }
                etc.setHtmlParsing($(`${selector}`), leftMenuData.design.menuDataTable, {datas: datas}, true, callback, `prepend`);
            }
        },
        setPrivacyDiv: function() {
            if(CookieHelper.get("seers_cookie_agree") === "Y") {
                $(".cookie-popup").removeClass("on")
            }
        },
        setHeaderSelected: function() {
            $(".cm-header .cm-top-menu-ul .menu-list").each(function(index, item) {
                let objInfoDatas = JSON.parse($(item).attr("data-info"));
                if(objInfoDatas.datas.indexOf(GBL.CONSTANTS.get(`NOW_CONTROLLER`)) !== -1) {
                    $(item).removeClass('selected').addClass('selected');
                }
                else {
                    $(item).removeClass('selected');
                }
            });
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
CONST.INIT();