"use strict";

const promise = async () => {
    const html = await import(`/template/${GBL.DESIGN.THEME}/content/organ.js${ver_string}`);
    const {EVENT: SELECT_BOX_EVENT} = await import(`/js/custom/constant/event/select-box.js${ver_string}`);
    const htmlForUnit = await import(`/template/${GBL.DESIGN.THEME}/content/unit.js${ver_string}`);

    const _search = function(type = `search`) { //first, search
        $(`#loading`).html(``);
    }

    const pre = function() {
        return new Promise(function(resolve, reject) {
            let loadingEnd = function() {
                resolve(true);
            }
            let options = {
                files: [
                    `/js/util/jquery/jquery-ui-1.12.1.css${ver_string}`,
                    `/js/util/jquery/jquery-ui-timepicker-addon.js${ver_string}`,
                    `/js/util/jquery/jquery-ui-timepicker-addon.css${ver_string}`,
                    `/assets/css/theme/${GBL.DESIGN.THEME}/jquery-ui-timepicker-addon.css${ver_string}`,
                ],
                errorAfterType: "stop",
                callback: loadingEnd
            }
            let fileLoading = new preFileLoading();
            fileLoading.setInit(options);
            fileLoading.run();
        });
    }

    const setAddEvent = function(content = "index"){
        const selectBoxCallback = function (choiceBox) {
            let selectObj = $(choiceBox).parents(".cm-select-box");
            selectObj.children(".check").val($(choiceBox).data("code"));
        }
        SELECT_BOX_EVENT.ON_CLICK(`.cm-select-box`, `.option-list`, `.option-item`, `.label`, `selected`, selectBoxCallback);

        // 페이징 처리 파라미터 셋팅 및 호출
        let pagingParameter = {
            divName: ".pagination",
            totalData: 10,
            callbackRun: false,
            dataPerPage: 10
        }
        pagingParameter.currentPage = 1;
        pagingParameter.pageCount = 10;
        Seers.Loader.moduleLoad("paging", "index", pagingParameter);

        CUSTOM.EVENT.HTML.push(".btn-enroll");
        $(".btn-enroll").off("click").on("click", function(){
            etc.move("/organ/enroll");
        })

        if(content === "enroll"){
            CUSTOM.EVENT.HTML.push(".btn-go-list");
            $(".btn-go-list").off("click").on("click", function(){
                etc.move("/organ/index");
            })
        }

        let nowDate = new Date();
        const _dateSelected = function(choice) {
            $(`#startDate`).val(choice.substr(0, 10));
        }
        const _dateSelectedEnd = function(choice){
            $(`#endDate`).val(choice.substr(0, 10));
        }
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
            onSelect: _dateSelected,
        }
        let endPickerOptions = {
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
            onSelect: _dateSelectedEnd,
        }
        $(`#startDate`).datetimepicker(pickerOptions);
        $(`#endDate`).datetimepicker(endPickerOptions);

        CUSTOM.EVENT.HTML.push(".searchDateDiv.start-calendar");
        $('.search-date-cont.start-calendar').off("click").on(`click`, function(e) {
            etc.stopBubbling(e);
            $('#startDate').timepicker('show');
        });
        CUSTOM.EVENT.HTML.push(".searchDateDiv.end-calendar");
        $('.search-date-cont.end-calendar').off("click").on(`click`, function(e) {
            etc.stopBubbling(e);
            $('#endDate').timepicker('show');
        });

        $(`.search-data-input`).on('change', function(){
        })

        CUSTOM.EVENT.HTML.push(".form-common-search");
        $(".form-common-search").off("submit").on("submit", function (e) {
            console.log("Sdf")
            etc.stopBubbling(e);
            $(`#push_currentPage`).val(1); // > 페이징이 필요시
            _search(); // > 검색 함수
        });
    }

    const index = function() {
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.index, {loading: htmlForUnit.loading});
        setAddEvent("index");
        setTimeout(function() {
            _search(`first`);
        }, 200);
    };

    const enroll = function(){
        $(`${GBL.DESIGN.PAGE_DIV_NAME}`).html("");
        etc.setHtmlParsing($(`${GBL.DESIGN.PAGE_DIV_NAME}`), html.enroll, {loading: htmlForUnit.loading});
        setAddEvent("enroll");
        setTimeout(function() {
            _search(`first`);
        }, 200);
    }

    return {
        pre: pre,
        index: index,
        enroll: enroll,
    };
};

export { promise }