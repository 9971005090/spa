"use strict";

const promise = async () => {

    const {CONST: CONST} = await import(`/js/module/layout/constant.js${ver_string}`);
    const header = await import(`/js/module/layout/template/${CONST.DESIGN.THEME}/header.js${ver_string}`);
    const left = await import(`/js/module/layout/template/${CONST.DESIGN.THEME}/left_menu.js${ver_string}`);
    const footer = await import(`/js/module/layout/template/${CONST.DESIGN.THEME}/footer.js${ver_string}`);
    const layout = await import(`/js/module/layout/template/${CONST.DESIGN.THEME}/layout.js${ver_string}`);

    const _setLayout = function() {
        GBL.DESIGN.LAYOUT.CLEAR();
        GBL.CONSTANTS.set(`GLOBAL.CONSTANTS`, {
            DEFAULT: {
                CONTROLLER: GBL.DESIGN.DEFAULT_CONTROLLER,
                ACTION: GBL.DESIGN.DEFAULT_ACTION
            }
        }, true);
        let parsingValue = {
            leftMenu: etc.setHtmlParsing(null, left.html, {}, false),
            header: etc.setHtmlParsing(null, header.html, {}, false),
            footer: etc.setHtmlParsing(null, footer.html, {}, false)
        }
        let htmlLayout = etc.setHtmlParsing(null, layout.html, parsingValue, false);
        $(`body`).html(htmlLayout);
        GBL.DESIGN.LAYOUT.EXIST = true;
    }

    const _setPostProcess = function(action) {
        if(CONST.POST_PROCESS.hasOwnProperty(action) === true) {
            // 레이아웃 생성 후 레이아웃 관련 event 처리가 있을 경우, 필요한 html 에 추가하여, 사용하기
            CONST.POST_PROCESS[action]({layout: layout, left: left, header: header, footer: footer});
        }
    }

    const pre = function() {
        return new Promise(function(resolve, reject) {

            let loadingEnd = function() {
                // 아래 영역에 코드 작성
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                resolve(true);
            }
            let options = {
                files: [
                    // 아래 영역에 코드 작성(필요한 js, css 로딩)
                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                ],
                errorAfterType: "stop",
                callback: loadingEnd
            }
            let fileLoading = new preFileLoading();
            fileLoading.setInit(options);
            fileLoading.run();
        });
    }

    const index = function() {
        _setLayout();
        _setPostProcess("index");
    }

    const setPostProcess = function(action = "index") {
        _setPostProcess(action);
    }

    return {
        pre: pre,
        index: index,
        setPostProcess: setPostProcess
    };
};

export { promise }