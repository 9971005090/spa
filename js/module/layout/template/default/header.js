"use strict";
export const html = `
    <section>
        <div class="left">
            <button class="burger-button active" id="burger-button">
                 <span class="line top"></span> 
                 <span class="line middle"></span> 
                 <span class="line bottom"></span>   
            </button> 
            <h1 class="logo">
                <a style="cursor: pointer">
                    <span class="text">Admin</span>
                </a>
            </h1>
        </div>
        <menu>
            <ul>
                <li data-info='{"datas": ["board"]}' data-location="/board/index">게시판관리</li>
            </ul>        
        </menu>
        <div class="right">
            <p>
                <span class="member-name">{{ACCOUNT.name}}</span>
                <span class="text d-none">님 로그인 하셨습니다.</span>
            </p>
            <button type="button" class="button logout-button">로그아웃</button>
            <div class="button-wrap d-none">
                <button type="button" class="button small">버튼</button>
            </div>
        </div>
    </section>
`;