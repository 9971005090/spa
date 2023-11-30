"use strict";
/**
 * @file 전체 메뉴에서 사용되는 셀렉트 박스 이벤트 정의 파일
 * @version 0.0.1
 * @description 전체 메뉴에서 사용되는 셀렉트 박스 이벤트 정의 파일
 * @author zaid
 */
export const EVENT = {
    /**
     * custom selectbox 액션 이벤츠 처리 함수
     * @description 클릭 처리후 라벨에 표시까지 처리, 선택된 아이템을 콜백함수로 전달
     *              이후 처리부분은 각 컨트롤러에서 처리
     * @returns {void}
     */
    ON_CLICK: function(selectBoxClass = `.cm-select-box`, selectOptionListClass = `.option-list`, selectOptionItemClass = `.option-item`, labelClass = `.label`, selectedClass = `selected`, optionItemClickCallback = null ) {
        CUSTOM.EVENT.HTML.push(selectBoxClass);
        $(selectBoxClass).off("click").on('click', function(e){
            etc.stopBubbling(e);
            $(this).toggleClass(selectedClass);
            $(this).children(selectOptionListClass).css("top",-3);
            $(this).children(selectOptionListClass).width($(this).width());
            $(this).children(selectOptionListClass).toggle();
            if ($(this).find(".option-item").length > 0){
                for (let i = 0; i < $(this).find(".option-item").length; i++) {
                    if ($(this).find(".option-item").eq(i).text() === $(this).find(".label").text()){
                        $(this).find(".option-item").eq(i).addClass("selected")
                    }
                }
            }
        });
        CUSTOM.EVENT.HTML.push(selectOptionItemClass);
        $(selectOptionItemClass).off("click").on('click', function(e){
            etc.stopBubbling(e);
            $(selectOptionItemClass).removeClass("selected");
            $(this).parent().parent(selectBoxClass).removeClass(selectedClass);
            $(this).parent(selectOptionListClass).toggle();
            $(this).parent().parent(selectBoxClass).find(labelClass).text($(this).text());
            $(this).addClass("selected")
            if (optionItemClickCallback !== null) {
                optionItemClickCallback($(this));
            }
        });
    },
    CUSTOM_ON_CLICK : function(selectBoxClass, selectOptionListClass, selectOptionItemClass, labelClass, selectedClass = `selected`, optionItemClickCallback = null) {
        CUSTOM.EVENT.HTML.push(selectBoxClass);
        $(selectBoxClass).off("click").on('click', function(e){
            etc.stopBubbling(e);
            if(!$(this).hasClass("disabled")){
                $(this).toggleClass(selectedClass);
                $(this).children(selectOptionListClass).css("top",-1);
                $(this).children(selectOptionListClass).width($(this).width());
                $(this).children(selectOptionListClass).show();
            }
        });
        CUSTOM.EVENT.HTML.push(selectOptionItemClass);
        $(selectOptionItemClass).off("click").on('click', function(e){
            etc.stopBubbling(e);
            $(this).parent().parent(selectBoxClass).removeClass(selectedClass);
            $(this).parent(selectOptionListClass).toggle();
            $(this).parent().parent(selectBoxClass).find(labelClass).text($(this).text());
            if (optionItemClickCallback !== null) {
                optionItemClickCallback($(this));
            }
        });
    }
}