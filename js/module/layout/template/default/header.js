"use strict";
export const html = `
    <section class="cm-header-section type02">
        <div class="cm-header-name">
            <button class="burger-btn" id="burger-btn">
                 <span class="burger-line top-line"></span> 
                 <span class="burger-line mid-line"></span> 
                 <span class="burger-line btm-line"></span>   
            </button> 
            <h1 class="cm-header-logo">
                <a class="cm-header-logo-link" style="cursor: pointer">
                    <!--<img src="/assets/images/theme/{{THEME}}/logo-images/header-logo.svg" class="header-img d-none">-->
                    <span class="logo-txt">Admin</span>
                </a>
            </h1>
        </div>
        <nav class="cm-top-menu">
            <a class="cm-header-m-nav-link d-none">
                <!--<img src="/assets/images/theme/{{THEME}}/logo-images/header-logo.svg" class="header-img d-none">
                <span class="logo-txt d-none">seers</span>-->
            </a>
            <ul class="cm-top-menu-ul">
                <li class="menu-list" data-info='{"datas": ["board"]}' data-location="/hospital/index">게시판관리</li>
            </ul>        
        </nav>
        <article class="cm-header-left-cont d-none">
        </article>
        <article class="cm-header-right-cont">
            <p class="p">
                <span class="span member-name">{{ACCOUNT.name}}</span>
                <span class="span txt d-none">님 로그인 하셨습니다.</span>
            </p>
            <button type="button" class="cm-btn cm-btn-middle logout_btn logout-button">로그아웃</button>
            <div class="btn-wrap d-none">
                <button type="button" class="cm-btn cm-btn-small">버튼</button>
            </div>
        </article>
    </section>
`;