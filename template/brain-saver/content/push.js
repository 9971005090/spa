"use strict";
export const index = `
    <div class="common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">Search</h4>
            <button type="button" class="cm-btn cm-btn-middle btn-add">푸시 등록</button>
        </div>
        <form class="form-common-search">
        <div class="search-form">
            <div class="search-wrap">
                <div class="d-flex">
                    <div class="tit">전송상태</div>
                    <div class="cont">
                        <div class="radio-box">
                            <div class="radio-btn-cont">
                                <input type="radio" name="send-status" class="radio-input" value="-1" checked>
                                <label class="span">전체</label>
                            </div>
                            {{#each CONSTANTS.SEND_STATUS}} 
                            <div class="radio-btn-cont">
                                <input type="radio" name="send-status" class="radio-input" value="{{@key}}">
                                <label class="span">{{this}}</label>
                            </div>
                            {{/each}}
                        </div>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="tit">알림구분</div>
                    <div class="cont">
                        <div class="radio-box">
                            <div class="radio-btn-cont">
                                <input type="radio" name="is-transfer" class="radio-input" value="-1" checked>
                                <label class="span">전체</label>
                            </div>
                            {{#each CONSTANTS.ALERT_TYPE}} 
                            <div class="radio-btn-cont">
                                <input type="radio" name="is-transfer" class="radio-input" value="{{@key}}">
                                <label class="span">{{this}}</label>
                            </div>
                            {{/each}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-wrap">
                <div class="d-flex">
                    <div class="tit">메세지구분</div>
                    <div class="cont">
                        <div class="cm-select-box">
                            <input type="hidden" class="check" name="transfer-status" value="-1">
                            <button type="button" class="label font-size-14 font-weight-500">전체</button>
                            <ul class="option-list" id="">
                                <li class="option-item" data-code="-1">전체</li>
                                {{#each CONSTANTS.MESSAGE_TYPE}} 
                                <li class="option-item" data-code="{{@key}}">{{this}}</li>
                                {{/each}}
                            </ul>
                            <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="tit">검색기간</div>
                    <div class="cont">
                        <div class="search-date-wrap">
                            <div class="search-date-cont start-calendar">
                                <input type="text" class="search-data-input" id="form-common-search-start-date" placeholder="YYYY.MM.DD" readonly />    
                                <span class="img"></span>
                            </div>
                            <p class="p">-</p>
                            <div class="search-date-cont end-calendar">
                                <input type="text" class="search-data-input" id="form-common-search-end-date" placeholder="YYYY.MM.DD" readonly />    
                                <span class="img"></span>
                            </div>
                            <input type="hidden" id="form-common-search-term" value="30">
                            <button type="button" class="cm-btn cm-btn-small btn-black button-search-term selected" data-term="30">1개월</button>
                            <button type="button" class="cm-btn cm-btn-small btn-black button-search-term" data-term="60">3개월</button>
                            <button type="button" class="cm-btn cm-btn-small btn-black button-search-term" data-term="-1">전체</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-wrap">
                <div class="d-flex">
                    <div class="tit">검색어</div>
                    <div class="cont">
                        <div class="cm-device-search">
                            <span class="span d-none">검색</span>
                            <div class="default-background common-search-input">
                                <img class="search-icon d-none" src="/assets/images/theme/{{THEME}}/icon/search.png">
                                <input type="text" class="font-size-14 font-weight-500 search-input-enter form-common-search-keyword" placeholder="검색어">
                            </div>  
                            <button type="button" class="device-search-btn form-common-search-button">
                                <span class="img"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
        <div class="cm-table-wrap board-view">
            <div class="cm-table-cont">
                <div class="cm-colgroup">
                    <div style="width:5%"></div>
                    <div style="width:7%"></div>
                    <div style="width:7%"></div>
                    <div style="width:7%"></div>
                    <div style=""></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                    <div style="width:7%"></div>
                </div>
                <div class="cm-thead">
                    <div class="cm-tr">
                        <p class="cm-th">순서</p>
                        <p class="cm-th">전송상태</p>
                        <p class="cm-th">재전송횟수</p>
                        <p class="cm-th">알림구분</p>
                        <p class="cm-th">메세지구분</p>
                        <p class="cm-th">고유코드</p>
                        <p class="cm-th">요청일자</p>
                        <p class="cm-th">발신일자</p>
                        <p class="cm-th">전송일자</p>
                        <p class="cm-th">관리</p>
                    </div>
                </div>
                <div class="cm-tbody" id="contents-by-data-table"></div>
            </div>
        </div>
        <div class="pagination"></div>
    </div>
`;

export const dataTable = `
{{#each datas}}  
<div class="cm-tr" data-unique-id="{{id}}">
    <p class="cm-td td-num">{{virtualNumber}}</p>
    <p class="cm-td">
        <span class="pc-d-none">전송상태</span>
        {{parsingSendStatus}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">재전송횟수</span>
        {{resend}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">알림구분</span>
        {{parsingAlertType}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">메세지구분</span>
        {{parsingMessageType}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">알림고유코드</span>
        {{code}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">발신요청일자</span>
        {{requestDateTime}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">발신일자</span>
        {{sendDateTime}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">전송일자</span>
        {{transferDateTime}}
    </p>
    <p class="cm-td">
        <button type="button" class="cm-btn cm-btn-small btn-black button-info">보기</button>
<!--        <button type="button" class="cm-btn cm-btn-small btn-detail-view button-delete">삭제</button>-->
    </p>
</div>
{{/each}}
`;

export const add = `
    <div class="common-cont organ-common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">{{title}}</h4>
        </div>
        <form id="form-data">
        <div class="cm-table-wrap">
            <table class="cm-table-cont">
                <colgroup>
                    <col style="width: 180px;">
                    <col style="width: *;">
                    <col style="width: 180px;">
                    <col style="width: *;">
                </colgroup>
                <tbody class="tbody">
                    <tr class="tr">
                        <th class="th">알림구분</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.ALERT_TYPE}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="alert-type" class="radio-input" value="{{@key}}" checked>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th">메세지구분</th>
                        <td class="td">
                            <div class="cm-select-box">
                                {{#each CONSTANTS.MESSAGE_TYPE}} 
                                {{#customIf @index '<=' 0}}
                                <input type="hidden" class="check" name="message-type" value="{{@key}}">
                                <button type="button" class="label font-size-14 font-weight-500">{{this}}</button>
                                {{/customIf}}
                                {{/each}}
                                <ul class="option-list" id="">
                                    {{#each CONSTANTS.MESSAGE_TYPE}} 
                                    <li class="option-item" data-code="{{@key}}">{{this}}</li>
                                    {{/each}}
                                </ul>
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                    </tr>
<!--                    <tr class="tr">-->
<!--                        <th class="th">비고</th>-->
<!--                        <td colspan="3">-->
<!--                            <div class="cm-input-cont">-->
<!--                                <input type="text" class="cm-input-text check" placeholder="text input" value="admin" autocomplete="off" />-->
<!--                                <p class="error-text">중복된 아이디가 존재합니다.</p>-->
<!--                            </div>-->
<!--                        </td>-->
<!--                    </tr>-->
                </tbody>
            </table>
        </div>
        <div class="btm-btn-wrap d-flex">
            <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle btn-confirm button-submit">등록</button>
            <button type="button" class="cm-btn cm-btn-middle btn-go-list button-cancel">목록</button>
        </div>
        </form>
    </div>
`;
export const info = `
    <div class="common-cont organ-common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">{{title}}</h4>
        </div>
        <form id="form-data">
        <div class="cm-table-wrap">
            <table class="cm-table-cont">
                <colgroup>
                    <col style="width: 180px;">
                    <col style="width: *;">
                    <col style="width: 180px;">
                    <col style="width: *;">
                </colgroup>
                <tbody class="tbody">
                    <tr class="tr">
                        <th class="th">전송상태</th>
                        <td class="td">{{push.parsingSendStatus}}</td>
                        <th class="th">재전송횟수</th>
                        <td class="td">{{push.resend}}</td>
                    </tr>
                    <tr class="tr">
                        <th class="th">알림구분</th>
                        <td class="td">{{push.parsingAlertType}}</td>
                        <th class="th">메세지구분</th>
                        <td class="td">{{push.parsingMessageType}}</td>
                    </tr>
                    <tr class="tr">
                        <th class="th">알림고유코드</th>
                        <td class="td">{{push.code}}</td>
                        <th class="th">발신요청일자</th>
                        <td class="td">{{push.requestDateTime}}</td>
                    </tr>
                    <tr class="tr">
                        <th class="th">발신일자</th>
                        <td class="td">{{push.sendDateTime}}</td>
                        <th class="th">전송일자</th>
                        <td class="td">{{push.transferDateTime}}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div class="btm-btn-wrap d-flex">
            <button type="button" class="cm-btn cm-btn-middle btn-go-list button-cancel">목록</button>
        </div>
        </form>
    </div>
`;