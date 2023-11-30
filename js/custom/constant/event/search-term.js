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
    SET_UNIT_INIT: function(calendarImgSelector, dateInputSelector) {
        CUSTOM.EVENT.HTML.push(calendarImgSelector);
        $(calendarImgSelector).off("click").on(`click`, function(e) {
            etc.stopBubbling(e);
            $(dateInputSelector).timepicker('show');
        });
    },
    SET_INIT: function() {
        CUSTOM.EVENT.HTML.push(".search-date-cont.start-calendar");
        $('.search-date-cont.start-calendar').off("click").on(`click`, function(e) {
            etc.stopBubbling(e);
            $('#form-common-search-start-date').timepicker('show');
        });
        CUSTOM.EVENT.HTML.push(".search-date-cont.end-calendar");
        $('.search-date-cont.end-calendar').off("click").on(`click`, function(e) {
            etc.stopBubbling(e);
            $('#form-common-search-end-date').timepicker('show');
        });
        CUSTOM.EVENT.HTML.push(".button-search-term");
        $('.button-search-term').off("click").on(`click`, function(e) {
            etc.stopBubbling(e);
            UTIL.TERM_BUTTON_INIT();
            $(this).addClass(`selected`);
            const choiceTerm = Number($(this).attr(`data-term`));
            $(`#form-common-search-term`).val(choiceTerm);
            if (choiceTerm > 0) {
                let nowDate = new Date();
                let startDate = new Date().add({days: choiceTerm * -1});
                $('#form-common-search-start-date').val(startDate.toString('yyyy-MM-dd'));
                $('#form-common-search-end-date').val(nowDate.toString('yyyy-MM-dd'));
            }
            else {
                $('#form-common-search-start-date').val(``);
                $('#form-common-search-end-date').val(``);
            }
        });
    }
}


export const UTIL = {
    GET_OPTIONS: function(callback, showTimepicker) {
        let nowDate = new Date();
        let maxDate = nowDate.toString(`yyyy-MM-dd`);
        let minDate = `1900-01-01`;
        let pickerOptions = {
            controlType: 'select',
            dateFormat: 'yy-mm-dd', // 일 표시 형식
            changeYear: true,
            yearRange: `1900:${nowDate.getFullYear()}`,
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNames: ['1월.', '2월.', '3월.', '4월.', '5월.', '6월.', '7월.', '8월.', '9월.', '10월.', '11월.', '12월.'],
            yearSuffix: `년`,
            showButtonPanel: false,
            minDate: minDate,
            maxDate: maxDate,
            onSelect: callback,
            showTimepicker: showTimepicker
        }
        return pickerOptions;
    },
    SET_UNIT_INIT: function(dateInputSelector, setFirstValue = true) {
        const _dateSelected = function(choice) {
            $(dateInputSelector).val(choice.substr(0, 10));
        }
        const nowDate = new Date();
        const pickerOptions = UTIL.GET_OPTIONS(_dateSelected, false);
        $(dateInputSelector).datetimepicker(pickerOptions);
        if (setFirstValue === true) {
            $(dateInputSelector).val(nowDate.toString('yyyy-MM-dd'));
        }
    },
    SET_INIT: function(term = 30, showTimepicker = false, firstValue = null) { // day
        let endDate = new Date();
        let startDate = new Date().add({days: term * -1});
        if (firstValue !== null) {
            startDate = new Date(firstValue.startDateTime);
            endDate = new Date(firstValue.endDateTime);
        }
        const _dateSelected = function(choice) {
            UTIL.TERM_BUTTON_INIT();
            $(`#form-common-search-start-date`).val(choice.substr(0, 10));
        }
        const _dateSelectedEnd = function(choice) {
            UTIL.TERM_BUTTON_INIT();
            $(`#form-common-search-end-date`).val(choice.substr(0, 10));
        }
        let maxDate = endDate.toString(`yyyy-MM-dd`);
        let minDate = `1900-01-01`;
        let pickerOptions = {
            controlType: 'select',
            dateFormat: 'yy-mm-dd', // 일 표시 형식
            changeYear: true,
            yearRange: `1900:${endDate.getFullYear()}`,
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNames: ['1월.', '2월.', '3월.', '4월.', '5월.', '6월.', '7월.', '8월.', '9월.', '10월.', '11월.', '12월.'],
            yearSuffix: `년`,
            showButtonPanel: false,
            minDate: minDate,
            maxDate: maxDate,
            onSelect: _dateSelected,
            showTimepicker: showTimepicker
        }
        let endPickerOptions = {
            controlType: 'select',
            dateFormat: 'yy-mm-dd', // 일 표시 형식
            changeYear: true,
            yearRange: `1900:${endDate.getFullYear()}`,
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNames: ['1월.', '2월.', '3월.', '4월.', '5월.', '6월.', '7월.', '8월.', '9월.', '10월.', '11월.', '12월.'],
            yearSuffix: `년`,
            showButtonPanel: false,
            minDate: minDate,
            maxDate: maxDate,
            onSelect: _dateSelectedEnd,
            showTimepicker: showTimepicker
        }
        $(`#form-common-search-start-date`).datetimepicker(pickerOptions);
        $(`#form-common-search-end-date`).datetimepicker(endPickerOptions);
        $(`#form-common-search-start-date`).val(startDate.toString('yyyy-MM-dd'));
        $(`#form-common-search-end-date`).val(endDate.toString('yyyy-MM-dd'));
    },
    VALIDATE_DATE: function() {
        const _s = new Date(`${$(`#form-common-search-start-date`).val()} 00:00:00`);
        const _e = new Date(`${$(`#form-common-search-end-date`).val()} 23:59:59`);
        if (_s > _e) {
            return false;
        }
        return true;
    },
    TERM_BUTTON_INIT: function() {
        $('.button-search-term').removeClass(`selected`);
    }
}