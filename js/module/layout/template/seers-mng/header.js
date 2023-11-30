"use strict";
export const html = `
    <section class="cm-header-section">
        <button class="burger-btn d-none" id="burger-btn">
             <span class="top-line"></span> 
             <span class="mid-line"></span> 
             <span class="bot-line"></span>   
        </button> 
        <article class="cm-header-left-cont">
            <h1 class="cm-header-logo">
                <a href="javascript:;" class="cm-header-logo-link">
                    <img src="https://seerstech.com/images/logo_mng_head.png" class="header-img" alt="thynC tm">
                    <span class="logo-txt d-none">thynC</span>
                </a>
            </h1>
            <nav class="cm-top-menu d-none">
                <a href="javascript:;" class="cm-header-m-nav-link">
                    <img src="https://seerstech.com/images/logo_mng_head.png" class="header-img" alt="seers logo">
                    <span class="logo-txt d-none">seers</span>
                </a>
                <ul class="cm-top-menu-ul">
                    <li class="menu-list" data-info='{"datas": [""]}' data-location="">대시보드</li>
                    <li class="menu-list" data-info='{"datas": ["qna"]}' data-location="/qna/index">문의하기</li>
                </ul>        
            </nav>
        </article>
        <article class="cm-header-right-cont">
            <p class="p">
                <span class="span member-name">관리자</span>
                <span class="span txt">님 반갑습니다.</span>
            </p>
            <button type="button" class="cm-btn cm-btn-middle logout_btn" onclick="etc.move('/logout');">로그아웃</button>
            <div class="btn-wrap d-none">
                <button type="button" class="cm-btn cm-btn-small">버튼</button>
            </div>
        </article>
    </section>
`;