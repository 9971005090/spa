"use strict";
export const index = `
    <div class="common-cont organ-common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">Search</h4>
            <div class="d-flex">
                <button type="button" class="cm-btn cm-btn-middle btn-black btn-enroll">의료진 등록</button>
                <button type="button" class="cm-btn cm-btn-icon-large btn-download-excel"> 
                    <span class="icon"></span>
                    <span class="txt">엑셀다운로드</span>
                </button>
            </div>
        </div>
        <form action="" class="form-common-search">
            <div class="search-form">
                <div class="search-wrap">
                    <div class="d-flex">
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
                                    <input type="text" class="font-size-14 font-weight-500 search-input-enter form-common-search-keyword" placeholder="검색어">
                                </div>  
                                <button type="button" class="device-search-btn form-common-search-button">
                                    <span class="img"></span>
                                </button>
                            </div>
                            <div class="search-date-wrap">
                                <div class="search-date-cont start-calendar">
                                    <input type="text" class="search-data-input" id="startDate" placeholder="YYYY.MM.DD" readonly />    
                                    <span class="img"></span>
                                </div>
                                <p class="p">-</p>
                                <div class="search-date-cont end-calendar">
                                    <input type="text" class="search-data-input" id="endDate" placeholder="YYYY.MM.DD" readonly />    
                                    <span class="img"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-wrap">
                    <div class="d-flex">
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
                        </div>
                    </div>
                    <div class="d-flex">
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
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="cm-table-wrap board-view">
            <div class="cm-table-cont">
                <div class="cm-colgroup">
                    <div style="width:3%"></div>
                    <div style="width:7%"></div>
                    <div style="width:10%"></div>
                    <div style="width:30%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
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
                        <p class="cm-th">Action</p>
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
                        <div class="cm-td">
                            <div class="btn-wrap">
                                <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
                                <button type="button" class="cm-btn cm-btn-small cm-btn-n-default btn-delete">삭제</button>
                            </div>
                        </div>
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
                            <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
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
                            <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination"></div>
        <div id="loading">{{{loading}}}</div>
    </div>
`;

export const enroll = `
    <div class="common-cont organ-common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">상세정보</h4>
        </div>
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
                        <th class="th">기관번호</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="text input" value="HO0002" autocomplete="off" disabled />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                        <th class="th">기관분류</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="text input" value="기관(병원)"  autocomplete="off" disabled />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">기관 명칭</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="text input" value="아주대학교병원" autocomplete="off" disabled />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                        <th class="th">기관 주소</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="text input" value="경기도 수원시 영통구 월드컵로 164" autocomplete="off" disabled />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">기관 좌표계</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="text input" value="4326" autocomplete="off" disabled />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                        <th class="th">기관좌표 위도(x)</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="text input" value="37.2796727675239" autocomplete="off" disabled />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">기관좌표 경도(y)</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="text input" value="127.048284945342" autocomplete="off" disabled />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                        <th class="th">응급실 전화번호</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="number" class="cm-input-text" placeholder="text input" value="031-219-7700" autocomplete="off" disabled />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">주간병원 전화번호</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="number" class="cm-input-text" placeholder="text input" value="031-219-7700" autocomplete="off" disabled />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                        <th class="th">야간병원 전화번호</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="number" class="cm-input-text" placeholder="text input" value="031-219-7700" autocomplete="off" disabled />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">비고</th>
                        <td class="td" colspan="3">
                            <div class="cm-textarea-cont" style="display: inline-block;">
                                <textarea name="" id="" class="cm-textarea" placeholder="basic textarea" disabled>응급의료센터</textarea>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">사용 유무</th>
                        <td class="td" colspan="3">
                            <div class="radio-box">
                                <div class="radio-btn-cont">
                                    <input type="radio" id="rd01" name="rdBtn" class="radio-input" checked>
                                    <label for="rd01" class="span">사용함</label>
                                </div>
                                <div class="radio-btn-cont">
                                    <input type="radio" id="rd02" name="rdBtn" class="radio-input">
                                    <label for="rd02" class="span">사용안함</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">회원아이디</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="text input" value="admin" autocomplete="off" />
                                <p class="error-text">중복된 아이디가 존재합니다.</p>
                            </div>
                        </td>
                        <th class="th">회원비밀번호</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="password" class="cm-input-text" placeholder="text input" value="admin" autocomplete="off" />
                                <p class="error-text">비밀번호 확인이 필요합니다.</p>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">이름</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="의료진 이름" value="" autocomplete="off" />
                                <p class="error-text">중복된 아이디가 존재합니다.</p>
                            </div>
                        </td>
                        <th class="th">전화번호</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="number" class="cm-input-text" placeholder="의료진 전화번호" value="admin" autocomplete="off" />
                                <p class="error-text">유효성 메시지</p>
                            </div>
                            <div class="radio-box mt-4">
                                <div class="radio-btn-cont">
                                    <input type="radio" id="rdM" name="rdBtnSex" class="radio-input" checked>
                                    <label for="rdM" class="span">남성</label>
                                </div>
                                <div class="radio-btn-cont">
                                    <input type="radio" id="rdF" name="rdBtnSex" class="radio-input">
                                    <label for="rdF" class="span">여성</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">사용자 분류</th>
                        <td class="td">
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
                        </td>
                        <th class="th">소속 기관</th>
                        <td class="td">
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
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="btm-btn-wrap d-flex">
            <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle btn-confirm">등록</button>
            <button type="button" class="cm-btn cm-btn-middle btn-black btn-go-list">목록</button>
        </div>
        <div id="loading">{{{loading}}}</div>
    </div>
`;

export const tableScroll = `
    <div class="common-cont organ-common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">Search</h4>
            <div class="d-flex">
                <button type="button" class="cm-btn cm-btn-middle btn-black btn-enroll">의료진 등록</button>
                <button type="button" class="cm-btn cm-btn-icon-large btn-download-excel"> 
                    <span class="icon"></span>
                    <span class="txt">엑셀다운로드</span>
                </button>
            </div>
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
                    <div class="search-date-wrap">
                        <div class="search-date-cont start-calendar">
                            <input type="text" class="search-data-input" id="startDate" placeholder="YYYY.MM.DD" readonly />    
                            <span class="img"></span>
                        </div>
                        <p class="p">-</p>
                        <div class="search-date-cont end-calendar">
                            <input type="text" class="search-data-input" id="endDate" placeholder="YYYY.MM.DD" readonly />    
                            <span class="img"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="cm-table-wrap board-view">
            <div class="cm-table-cont">
                <div class="cm-colgroup">
                    <div style="width:3%"></div>
                    <div style="width:7%"></div>
                    <div style="width:10%"></div>
                    <div style="width:30%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
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
                        <p class="cm-th">Action</p>
                    </div>
                </div>
            </div>
            <div class="cm-table-div">
                <div class="cm-table-cont">
                    <div class="cm-colgroup">
                        <div style="width:3%"></div>
                        <div style="width:7%"></div>
                        <div style="width:10%"></div>
                        <div style="width:30%"></div>
                        <div style="width:10%"></div>
                        <div style="width:10%"></div>
                        <div style="width:10%"></div>
                        <div style="width:10%"></div>
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
                            <div class="cm-td">
                                <div class="btn-wrap">
                                    <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
                                    <button type="button" class="cm-btn cm-btn-small cm-btn-n-default btn-delete">삭제</button>
                                </div>
                            </div>
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
                                <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
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
                                <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
                            </p>
                        </div>
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
                            <div class="cm-td">
                                <div class="btn-wrap">
                                    <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
                                    <button type="button" class="cm-btn cm-btn-small cm-btn-n-default btn-delete">삭제</button>
                                </div>
                            </div>
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
                                <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
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
                                <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
                            </p>
                        </div>
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
                            <div class="cm-td">
                                <div class="btn-wrap">
                                    <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
                                    <button type="button" class="cm-btn cm-btn-small cm-btn-n-default btn-delete">삭제</button>
                                </div>
                            </div>
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
                                <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
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
                                <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view">수정</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination"></div>
    </div>
`;