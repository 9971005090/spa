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
                <a data-location="/main/index" class="cm-header-logo-link" style="cursor:pointer;">
                    <img src="https://seerstech.com/img/logo.svg" class="header-img" alt="seers logo">
                    <span class="logo-txt d-none">seers</span>
                </a>
            </h1>
            <nav class="cm-top-menu">
                <ul class="cm-top-menu-ul">
                    <li class="menu-list" data-info='{"datas": ["thync"]}' data-location="/thync/index">Solution</li>
                    <li class="menu-list" data-info='{"datas": ["product-patient"]}' data-location="/product-patient/index">Product</li>
                    <li class="menu-list" data-info='{"datas": ["company-board"]}' data-location="/company-board/index">Company</li>
                    <li class="menu-list" data-info='{"datas": ["contact"]}' data-location="/contact/index">Contact Us</li>
                </ul>        
            </nav>
        </article>
        <article class="cm-header-right-cont">
            <p class="p d-none">
                <span class="span member-name">홍길동</span>
                <span class="span txt">님 로그인 하셨습니다.</span>
            </p>
            <button type="button" class="cm-btn cm-btn-middle logout_btn d-none" onclick="etc.move('/logout');">로그아웃</button>
            <div class="btn-wrap">
                <button type="button" class="cm-btn selected">KR</button>
                <button type="button" class="cm-btn">EN</button>
            </div>
        </article>
    </section>
`;