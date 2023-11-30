"use strict";
export const html = `
    <section class="cm-header-section">
        <button class="burger-btn" id="burger-btn">
             <span class="top-line"></span> 
             <span class="mid-line"></span> 
             <span class="bot-line"></span>   
        </button> 
        <article class="cm-header-left-cont">
            <h1 class="cm-header-logo">
                <a href="/example-main/index" class="cm-header-logo-link">
                    <img src="/assets/images/theme/{{THEME}}/logo-images/header-logo.svg" class="header-img" alt="thynC tm">
                    <span class="logo-txt d-none">thynC</span>
                </a>
            </h1>
            <nav class="cm-top-menu">
                <a href="javascript:;" class="cm-header-m-nav-link d-none">
                    <img src="/assets/images/theme/{{THEME}}/logo-images/header-logo.svg" class="header-img" alt="seers logo">
                    <span class="logo-txt d-none">seers</span>
                </a>
                <ul class="cm-top-menu-ul">
                    <li class="menu-list" data-info='{"datas": ["buttons"]}' data-location="/buttons/index">공통 버튼들</li>
                    <li class="menu-list" data-info='{"datas": ["forms"]}' data-location="/forms/index">폼태그들</li>
                    <li class="menu-list" data-info='{"datas": ["board"]}' data-location="/board/index">게시판</li>
                    <li class="menu-list" data-info='{"datas": ["modal"]}' data-location="/modal/index">모달</li>
                    <li class="menu-list" data-info='{"datas": ["tab-menu"]}' data-location="/tab-menu/index">탭</li>
                </ul>        
            </nav>
        </article>
        <article class="cm-header-right-cont">
            <p class="p">
                <span class="span member-name">홍길동</span>
                <span class="span txt">님 로그인 하셨습니다.</span>
            </p>
            <button type="button" class="cm-btn cm-btn-middle logout_btn" onclick="etc.move('/logout');">로그아웃</button>
            <div class="btn-wrap">
                <button type="button" class="cm-btn cm-btn-small">버튼</button>
            </div>
        </article>
    </section>
`;