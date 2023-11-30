"use strict";
export const html = `
    <button class="burger-btn d-none" id="left-burger-btn">
         <span class="top-line"></span> 
         <span class="mid-line"></span> 
         <span class="bot-line"></span>   
    </button> 
    <section class="cm-left-nav-section nav-type-long">
        <ul id="side-menu" class="gnb scroll-bar">
            <li class="gnb-list" data-info="" data-location="">
                <a class="link">
                    <span class="icon mdi mdi-monitor-dashboard"></span>
                    <span class="txt">대시보드</span>
                </a>
            </li>
            <li class="gnb-list" data-info="" data-location="">
                <a class="link">
                    <span class="icon mdi mdi-paperclip"></span>
                    <span class="txt">임상논문</span>
                </a>
            </li>
            <li class="gnb-list" data-info="" data-location="">
                <a class="link">
                    <span class="icon mdi mdi-image-filter-tilt-shift"></span>
                    <span class="txt">임상연구</span>
                </a>
            </li>
            <li class="gnb-list" data-info="" data-location="">
                <a class="link">
                    <span class="icon mdi mdi-email-newsletter"></span>
                    <span class="txt">공지사항</span>
                </a>
            </li>
            <li class="gnb-list" data-info="" data-location="">
                <a class="link">
                    <span class="icon mdi mdi-email-newsletter"></span>
                    <span class="txt">복지제도</span>
                </a>
            </li>
            <li class="gnb-list" data-info="" data-location="">
                <a class="link">
                    <span class="icon mdi mdi-email-newsletter"></span>
                    <span class="txt">사업보고서</span>
                </a>
            </li>
            <li class="gnb-list" data-info="" data-location="">
                <a class="link">
                    <span class="icon mdi mdi-email-newsletter"></span>
                    <span class="txt">IR</span>
                </a>
            </li>
            <li class="gnb-list" data-info="" data-location="">
                <a class="link">
                    <span class="icon mdi mdi-camera-enhance-outline"></span>
                    <span class="txt">보도자료</span>
                </a>
            </li>
            <li class="gnb-list" data-info="" data-location="">
                <a class="link">
                    <span class="icon mdi mdi-bag-personal-outline"></span>
                    <span class="txt">채용</span>
                </a>
            </li>
            <li class="gnb-list selected" data-info='{"datas": ["qna"]}' data-location="/qna/index">
                <a class="link">
                    <span class="icon mid mdi-paperclip"></span>
                    <span class="txt">문의하기</span>
                </a>
            </li>
            <li class="gnb-list" data-info="" data-location="">
                <a class="link">
                    <span class="icon mdi mdi-run-fast"></span>
                    <span class="txt">데모요청</span>
                </a>
            </li>
        </ul>            
    </section>
`;