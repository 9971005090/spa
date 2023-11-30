"use strict";
export const html = `
    <div class="common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">Search</h4>
            <button type="button" class="cm-btn cm-btn-middle">의료진 등록</button>
        </div>
        <div class="search-form">
            <div class="search-wrap">
                <div class="tit">검색어</div>
                <div class="cont">
                    <div class="cm-select-box">
                        <input type="hidden" class="check" name="" id="" value="" >
                        <button type="button" class="label font-size-14 font-weight-500" id="">selectbox</button>
                        <ul class="option-list" id="">
                            <li class="option-item" data-code="all">option list all</li>
                            <li class="option-item" data-code="01">option list 01</li>
                            <li class="option-item" data-code="02">option list 02</li>
                        </ul>
                        <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                    </div>
                    <div class="cm-device-search">
                        <span class="span d-none">검색</span>
                        <div class="default-background common-search-input">
                            <img class="search-icon d-none" src="/assets/images/theme/{{THEME}}/icon/search.png">
                            <input type="text" class="font-size-14 font-weight-500 search-input-enter" placeholder="검색어">
                        </div>  
                        <button type="button" class="device-search-btn">
                            <span class="img"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="cm-table-wrap board-view">
            <div class="cm-table-cont">
                <div class="cm-colgroup">
                    <div style="width:3%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                    <div style="width:30%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                    <div style="width:7%"></div>
                </div>
                <div class="cm-thead">
                    <div class="cm-tr">
                        <p class="cm-th">순서</p>
                        <p class="cm-th">기관 분류</p>
                        <p class="cm-th">기관 명칭</p>
                        <p class="cm-th">기관 주소</p>
                        <p class="cm-th">응급실 전화번호</p>
                        <p class="cm-th">주간병원 전화번호</p>
                        <p class="cm-th">야간병원 전화번호</p>
                        <p class="cm-th">관리</p>
                    </div>
                </div>
                <div class="cm-tbody">
                    <div class="cm-tr">
                        <p class="cm-td td-num">1</p>
                        <p class="cm-td">
                            <span class="pc-d-none">분류</span>
                            기관(병원)
                        </p>
                        <p class="cm-td">
                            <span class="pc-d-none">명칭</span>
                            아주대학교병원
                        </p>
                        <p class="cm-td">경기도 수원시 영통구 월드컵로 164</p>
                        <p class="cm-td">
                            <span class="pc-d-none">응급실</span>
                            031-219-7700
                        </p>
                        <p class="cm-td">
                            <span class="pc-d-none">주간</span>
                            031-219-7700
                        </p>
                        <p class="cm-td">
                            <span class="pc-d-none">야간</span>
                            031-219-7700
                        </p>
                        <p class="cm-td">
                            <button type="button" class="cm-btn cm-btn-small btn-detail-view">수정</button>
                        </p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td td-num">2</p>
                        <p class="cm-td">
                            <span class="pc-d-none">명칭</span>
                            기관(병원)
                        </p>
                        <p class="cm-td">
                            <span class="pc-d-none">분류</span>
                            한림대학교성심병원
                        </p>
                        <p class="cm-td">경기도 안양시 동안구 관평로170번길 22</p>
                        <p class="cm-td">
                            <span class="pc-d-none">응급실</span>
                            031-380-4129
                        </p>
                        <p class="cm-td">
                            <span class="pc-d-none">주간</span>
                            031-380-4129
                        </p>
                        <p class="cm-td">
                            <span class="pc-d-none">야간</span>
                            031-380-4129
                        </p>
                        <p class="cm-td">
                            <button type="button" class="cm-btn cm-btn-small btn-detail-view">수정</button>
                        </p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td td-num">3</p>
                        <p class="cm-td">
                            <span class="pc-d-none">명칭</span>
                            기관(병원)
                        </p>
                        <p class="cm-td">
                            <span class="pc-d-none">분류</span>
                            분당서울대학교병원
                        </p>
                        <p class="cm-td">경기도 성남시 분당구 구미로173번길 82</p>
                        <p class="cm-td">
                            <span class="pc-d-none">응급실</span>
                            031-787-3036
                        </p>
                        <p class="cm-td">
                            <span class="pc-d-none">주간</span>
                            031-787-3036
                        </p>
                        <p class="cm-td">
                            <span class="pc-d-none">야간</span>
                            031-787-3036
                        </p>
                        <p class="cm-td">
                            <button type="button" class="cm-btn cm-btn-small btn-detail-view">수정</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination"></div>
    </div>
`;