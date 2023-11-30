"use strict";

const promise = async () => {

    const {CONST: CONST} = await import(`/js/module/stream-last-update-time-view/constant.js${ver_string}`);
    const index = (function() {
        return () => {
            let getNow = Date.getNow("yy.MM.dd HH:mm:ss");
            $(`${CONST.DESIGN.DIV_NAME}`).html(getNow);
        }
    })();

    return {
        index: index
    };
};

export { promise }