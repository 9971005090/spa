export const html =`
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">문의하기</h4>
            <div class="row no-gutters mb-2">
                <div class="col-xl-12">
                    <div class="float-right">
                        <form method="get" name="frm_search" id="frm_search" class="form-inline d-flex" onsubmit="return frm_search_chk(this);">
                             <div class="cm-select-box" style="width: 158px;">
                                <input type="hidden" class="check" name="sel_qt_type" id="sel_qt_type" value="" >
                                <button type="button" class="label font-size-14 font-weight-500" id="">문의구분</button>
                                <ul class="option-list" id="">
                                    <li class="option-item" data-code="01">파트너십 &amp; 비즈니스</li>
                                    <li class="option-item" data-code="03">R&amp;D기술협력</li>
                                    <li class="option-item" data-code="04">투자</li>
                                    <li class="option-item" data-code="05">임상시험</li>
                                </ul>
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                             <div class="cm-select-box" style="width: 106px; min-width: 106px;">
                                <input type="hidden" class="check" name="sel_qt_status" id="sel_qt_status" value="" >
                                <button type="button" class="label font-size-14 font-weight-500" id="">처리상태</button>
                                <ul class="option-list" id="">
                                    <li class="option-item" data-code="01">문의접수</li>
                                    <li class="option-item" data-code="02">처리중</li>
                                    <li class="option-item" data-code="03">처리완료</li>
                                </ul>
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                             <div class="cm-select-box" style="width: 293px; min-width: 293px;">
                                <input type="hidden" class="check" name="sel_qt_country" id="sel_qt_country" value="" >
                                <button type="button" class="label font-size-14 font-weight-500" id="">국가</button>
                                <ul class="option-list" id="">
                                    <li class="option-item" data-code="01">Afghanistan</li>
                                    <li class="option-item" data-code="02">Åland</li>
                                    <li class="option-item" data-code="03">Albania</li>
                                </ul>
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                             <div class="cm-select-box" style="width: 106px; min-width: 106px;">
                                <input type="hidden" class="check" name="sel_search" id="sel_search" value="" >
                                <button type="button" class="label font-size-14 font-weight-500" id="">통합검색</button>
                                <ul class="option-list" id="">
                                    <li class="option-item" data-code="01">이름</li>
                                    <li class="option-item" data-code="02">이메일</li>
                                    <li class="option-item" data-code="03">소속명</li>
                                    <li class="option-item" data-code="04">내용</li>
                                </ul>
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                            <div class="cm-device-search">
                                <span class="span d-none">검색</span>
                                <div class="default-background common-search-input" style="width: 200px; min-width: 200px; overflow: hidden;">
                                    <img class="search-icon d-none" src="/assets/images/theme/{{THEME}}/icon/search.png">
                                    <input type="text" class="font-size-14 font-weight-500 search-input-enter" placeholder="검색어를 입력바랍니다.">
                                </div>  
                                <button type="button" class="cm-btn device-search-btn cm-btn-middle">
                                    <span>검색</span>
                                    <span class="img d-none"></span>
                                </button>
                                <button type="button" class="cm-btn cm-btn-middle cm-btn-gray-full ml-4">초기화</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="cm-table-wrap fix-width scroll-bar mt-12">
                <div class="cm-table-cont">
                    <div class="cm-colgroup">
                        <div style="width:5.9%"></div>
                        <div style="width:10.3%"></div>
                        <div style="width:10.3%"></div>
                        <div style="width:8.8%"></div>
                        <div style="width:10.3%"></div>
                        <div style="width:22.1%"></div>
                        <div style="width:8.8%"></div>
                        <div style="width:13.2%"></div>
                        <div style="width:10.3%"></div>
                    </div>
                    <div class="cm-thead">
                        <div class="cm-tr">
                            <p class="cm-th">번호</p>
                            <p class="cm-th">관리</p>
                            <p class="cm-th">구분</p>
                            <p class="cm-th">상태</p>
                            <p class="cm-th">국가</p>
                            <p class="cm-th">내용</p>
                            <p class="cm-th">이름</p>
                            <p class="cm-th">이메일</p>
                            <p class="cm-th">등록일시</p>
                        </div>
                    </div>
                    <div class="cm-tbody">
                        <div class="cm-tr"> 
                            <p class="cm-td">106</p>
                            <p class="cm-td">
                                <button type="button" class="cm-btn cm-btn-small cm-btn-default modal-btn">상세</button>
                                <button type="button" class="cm-btn cm-btn-small cm-btn-n-default">삭제</button>
                            </p>
                            <p class="cm-td">투자</p>
                            <p class="cm-td">문의접수</p>
                            <p class="cm-td">France</p>
                            <p class="cm-td">Hello, i wrote earlier this summer but I didn't get a reply. I was interested to know more about your products and technologies as there may be many synergies and opportunities working together, either through business partnership or by investing. With regards. Alix Joseph</p>
                            <p class="cm-td">Alix Joseph</p>
                            <p class="cm-td">alix.joseph@linxens.com</p>
                            <p class="cm-td">23.08.22&nbsp;(화)&nbsp;00:04</p>
                        </div>
                        <div class="cm-tr"> 
                            <p class="cm-td">105</p>
                            <p class="cm-td">
                                <button type="button" class="cm-btn cm-btn-small cm-btn-default modal-btn">상세</button>
                                <button type="button" class="cm-btn cm-btn-small cm-btn-n-default">삭제</button>
                            </p>
                            <p class="cm-td">투자</p>
                            <p class="cm-td">문의접수</p>
                            <p class="cm-td">France</p>
                            <p class="cm-td">Hello, i wrote earlier this summer but I didn't get a reply. I was interested to know more about your products and technologies as there may be many synergies and opportunities working together, either through business partnership or by investing. With regards. Alix Joseph</p>
                            <p class="cm-td">Alix Joseph</p>
                            <p class="cm-td">alix.joseph@linxens.com</p>
                            <p class="cm-td">23.08.22&nbsp;(화)&nbsp;00:04</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pagination"></div>        
        </div>
    </div>
`;


export const modalHtml = `
    <div class="cm-modal-cont" id="common-modal">
        <div class="cm-modal-header">
            <h4>문의 상세보기</h4>
            <button type="button" class="btn-close cm-btn cm-btn-default">
                <span class="icon fa fa-close"></span>
            </button> 
        </div>
        <div class="cm-modal-section">
            <div>
                <p>투자</p>
                <p>France</p>
                <p>Alix Joseph alix.joseph@linxens.com</p>
                <p>23.08.22 (화) 00:04</p>
                <hr>
                <p class="txt-cont scroll-bar">
                    Hello, i wrote earlier this summer but I didn't get a reply. I was interested to know more about your products and technologies as there may be many synergies and opportunities working together, either through business partnership or by investing.<br><br>
                    With regards.<br><br>
                    Alix Joseph
                </p>
            </div>
            <button class="cm-btn cm-btn-middle cm-btn-default btn-modal-confirm">확인</button>
        </div>
    </div>
`;