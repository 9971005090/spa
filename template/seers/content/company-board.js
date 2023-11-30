export const html =`
    <div class="sub_pg">
        <section class="border-bottom" data-aos="fade-right">
            <div class="container">
                <div class="page-nav" style="padding:0;">
                    <a href="javascript:void();" class="page-nav-link">
                        <span class="fa fa-home"></span>
                    </a>
                    <span class="icon fa fa-angle-right"></span>   
                    <a href="javascript:void();" class="page-nav-link">Company</a>
                    <span class="icon fa fa-angle-right"></span>   
                    <a href="javascript:void();" class="page-nav-link">보도자료</a>
                </div>
                <p class="sub_top">씨어스는 디지털 헬스케어 시장을 선도합니다</p>
            </div>
        </section>
        <div class="container mx-auto">
            <form name="frm_list" id="frm_list" onsubmit="return false;">
                <input type="hidden" name="act" id="act" value="press_list" />
                <input type="hidden" name="pt_lang_type" id="pt_lang_type" value="1" />
                <input type="hidden" name="obj_list" id="obj_list" value="press_list_box" />
                <input type="hidden" name="uri" id="uri" value="../press_update_inc.php" />
                <input type="hidden" name="pg" id="pg" value="" />
                <div class="board_tit_wr board_tit_wr2">
                    <p class="board_tit">보도자료 <span class="tit_dot"></span></p>
                    <div class="d-flex">
                        <div class="ip_wr sel_ip mt-0">
                             <div class="cm-select-box">
                                <input type="hidden" class="check" name="" id="" value="" >
                                <button type="button" class="label font-size-14 font-weight-500" id="">전체</button>
                                <ul class="option-list" id="">
                                    <li class="option-item" data-code="all">전체</li>
                                    <li class="option-item" data-code="01">언론사명</li>
                                    <li class="option-item" data-code="02">제목</li>
                                    <li class="option-item" data-code="03">태그분류명</li>
                                </ul>
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </div>
                        <div class="ip_wr sch_ip">
                            <div class="cm-device-search">
                                <div class="default-background common-search-input">
                                    <img class="search-icon d-none" src="/assets/images/theme/seers/icon/search.png">
                                    <input type="text" class="font-size-14 font-weight-500 search-input-enter" placeholder="검색어를 입력해주세요.">
                                </div>  
                                <button type="button" class="device-search-btn">
                                    <span class="img"></span>
                                </button>
                            </div>
<!--                            <input-->
<!--                                type="text"-->
<!--                                name="search_txt"-->
<!--                                id="search_txt"-->
<!--                                class="form-control"-->
<!--                                placeholder="검색어를 입력해주세요."-->
<!--                            />-->
<!--                            <button type="button" onclick="f_get_press_box_list();" class="btn p-0 h-auto">-->
<!--                                <img src="https://seerstech.com/img/sch_icon.png" alt="" />-->
<!--                            </button>-->
                        </div>
                    </div>
                </div>
            </form>
            <div id="press_list_box">
                <div class="cm-table-wrap card-view">
                    <div class="cm-table-cont">
                        <div class="cm-colgroup">
                            <div style="width:5%"></div>
                            <div style="width:70%"></div>
                            <div style="width:10%"></div>
                            <div style="width:10%"></div>
                        </div>
                        <div class="cm-thead">
                            <div class="cm-tr">
                                <p class="cm-th">번호</p>
                                <p class="cm-th">내용</p>
                                <p class="cm-th">작성자</p>
                                <p class="cm-th">작성일</p>
                                <p class="cm-th">상태</p>
                            </div>
                        </div>
                        <div class="cm-tbody">
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/img/blank_img.jpg" alt="씨어스 하루에 500~600명 모비케어로 검사.. 8월 초 상장 예비심사 진행">
                                    </div>
                                    <p>씨어스 "하루에 500~600명 모비케어로 검사... 8월 초 상장 예비심사 진행"</p>
                                </div>
                                <p class="cm-td fw_500">BIO Insight (한국경제)</p>
                                <p class="cm-td fw_300">2023.08.04</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#장기간심전도검사</li>
                                        <li>#환자원격모니터링솔루션</li>
                                        <li>#웨어러블의료기기</li>
                                        <li>#인공지능</li>
                                        <li>#AI</li>
                                        <li>#모비케어</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/images/uploads/pt_file1_35.jpg" alt="웨어러블 심전도 검사기로 우울증·난임 치료 돕는다">
                                    </div>
                                    <p>"웨어러블 심전도 검사기로 우울증·난임 치료 돕는다"</p>
                                </div>
                                <p class="cm-td fw_500">네이버 뉴스 - 한국경제</p>
                                <p class="cm-td fw_300">2023.08.03</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#모비케어</li>
                                        <li>#심전도검사</li>
                                        <li>#씨어스테크놀로지</li>
                                        <li>#웨어러블심전도검사기</li>
                                        <li>#우울증</li>
                                        <li>#난임치료</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/images/uploads/pt_file1_34.jpg" alt="“웨어러블 심전도 기기, 심방세동 선별검사 대안으로 기대”">
                                    </div>
                                    <p>“웨어러블 심전도 기기, 심방세동 선별검사 대안으로 기대”</p>
                                </div>
                                <p class="cm-td fw_500">MEDICAL Observer</p>
                                <p class="cm-td fw_300">2023.07.12</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#부정맥</li>
                                        <li>#웨어러블</li>
                                        <li>#웨어러블심전도기기</li>
                                        <li>#심방세동</li>
                                        <li>#씨어스테크놀로지</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/images/uploads/pt_file1_33.jpg" alt="화순전남대병원, ' 미래 의료연구단' 만들고 디지털 헬스케어 준비">
                                    </div>
                                    <p>화순전남대병원, ' 미래 의료연구단' 만들고 디지털 헬스케어 준비</p>
                                </div>
                                <p class="cm-td fw_500">헬스인뉴스</p>
                                <p class="cm-td fw_300">2023.07.11</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#디지털헬스케어</li>
                                        <li>#심포지엄</li>
                                        <li>#화순전남대학교병원</li>
                                        <li>#씨어스테크놀로지</li>
                                        <li>#모비케어</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/images/uploads/pt_file1_31.jpg" alt="제주산학융합원 입주 ㈜씨어스테크놀로지 코스닥 기평 통과">
                                    </div>
                                    <p>제주산학융합원 입주 ㈜씨어스테크놀로지 코스닥 기평 통과</p>
                                </div>
                                <p class="cm-td fw_500">파이낸셜뉴스</p>
                                <p class="cm-td fw_300">2023.06.21</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#기술특례상장제도</li>
                                        <li>#씨어스테크놀로지</li>
                                        <li>#기술성평가</li>
                                        <li>#기평</li>
                                        <li>#통과</li>
                                        <li>#디지털헬스케어</li>
                                        <li>#웨어러블바이오센서</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/images/uploads/pt_file1_30.jpg" alt="‘디지털헬스’ 씨어스, 코스닥 기평통과..“7월 예심청구”">
                                    </div>
                                    <p>‘디지털헬스’ 씨어스, 코스닥 기평통과..“7월 예심청구”</p>
                                </div>
                                <p class="cm-td fw_500">바이오스펙테이터</p>
                                <p class="cm-td fw_300">2023.06.20</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#씨어스테크놀로지</li>
                                        <li>#디지털헬스</li>
                                        <li>#코스닥기평통과</li>
                                        <li>#모비케어</li>
                                        <li>#웨어러블의료기기</li>
                                        <li>#환자모니터링</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/img/blank_img.jpg" alt="금연 DTx, 화상분석 SW 확증임상 시작... 시장 진입 본격화">
                                    </div>
                                    <p>금연 DTx, 화상분석 SW 확증임상 시작... 시장 진입 본격화</p>
                                </div>
                                <p class="cm-td fw_500">HIT NEWS</p>
                                <p class="cm-td fw_300">2023.05.08</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#웨어러블기기</li>
                                        <li>#펄스옥시미터</li>
                                        <li>#산소포화도</li>
                                        <li>#확증임상시험</li>
                                        <li>#의료기기</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/images/uploads/pt_file1_26.png" alt="아이쿱, 씨어스테크놀로지와 MOU...심전도 분석 시스템 연동 통한 시너지 확대 기대">
                                    </div>
                                    <p>아이쿱, 씨어스테크놀로지와 MOU...심전도 분석 시스템 연동 통한 시너지 확대 기대</p>
                                </div>
                                <p class="cm-td fw_500">약업신문 (The Yakup)</p>
                                <p class="cm-td fw_300">2023.04.21</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#아이쿱</li>
                                        <li>#씨어스테크놀로지</li>
                                        <li>#웨어러블진단</li>
                                        <li>#모니터링솔루션</li>
                                        <li>#MOU체결</li>
                                        <li>#협약식</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/images/uploads/pt_file1_23.jpg" alt="순천향대 천안병원, 암 병동 ‘웨어러블 심전도 모니터링’ 시작">
                                    </div>
                                    <p>순천향대 천안병원, 암 병동 ‘웨어러블 심전도 모니터링’ 시작</p>
                                </div>
                                <p class="cm-td fw_500">메디포뉴스</p>
                                <p class="cm-td fw_300">2022.12.05</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#웨어러블 심전도 모니터링</li>
                                        <li>#사물인터넷</li>
                                        <li>#천안병원</li>
                                        <li>#심전도패치</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/images/uploads/pt_file1_23.jpg" alt="순천향대 천안병원, 암 병동 ‘웨어러블 심전도 모니터링’ 시작">
                                    </div>
                                    <p>순천향대 천안병원, 암 병동 ‘웨어러블 심전도 모니터링’ 시작</p>
                                </div>
                                <p class="cm-td fw_500">메디포뉴스</p>
                                <p class="cm-td fw_300">2022.12.05</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#웨어러블 심전도 모니터링</li>
                                        <li>#사물인터넷</li>
                                        <li>#천안병원</li>
                                        <li>#심전도패치</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/images/uploads/pt_file1_23.jpg" alt="순천향대 천안병원, 암 병동 ‘웨어러블 심전도 모니터링’ 시작">
                                    </div>
                                    <p>순천향대 천안병원, 암 병동 ‘웨어러블 심전도 모니터링’ 시작</p>
                                </div>
                                <p class="cm-td fw_500">메디포뉴스</p>
                                <p class="cm-td fw_300">2022.12.05</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#웨어러블 심전도 모니터링</li>
                                        <li>#사물인터넷</li>
                                        <li>#천안병원</li>
                                        <li>#심전도패치</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cm-tr">
                                <p class="cm-td">1</p>
                                <div class="cm-td">
                                    <div class="rect">
                                        <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                        <img src="https://seerstech.com/images/uploads/pt_file1_23.jpg" alt="순천향대 천안병원, 암 병동 ‘웨어러블 심전도 모니터링’ 시작">
                                    </div>
                                    <p>순천향대 천안병원, 암 병동 ‘웨어러블 심전도 모니터링’ 시작</p>
                                </div>
                                <p class="cm-td fw_500">메디포뉴스</p>
                                <p class="cm-td fw_300">2022.12.05</p>
                                <div class="cm-td">
                                    <ul class="news_tags">
                                        <li>#웨어러블 심전도 모니터링</li>
                                        <li>#사물인터넷</li>
                                        <li>#천안병원</li>
                                        <li>#심전도패치</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="pagination"></div>
            </div>
        </div>
    </div>
`;