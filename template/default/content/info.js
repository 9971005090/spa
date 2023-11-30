export const infoSourceTree = `

                        <!-- table_content -->
                        <div class="table_content">
                            <div>
                                <h2 id="assets-static-">assets(static 파일)</h2>
                                <ul>
                                    <li>css : css 파일
                                        <ul>
                                            <li>common : 공통으로 사용되는 파일
                                                <ol>
                                                    <li>bootstrap-3.3.2.css : 부드스트랩 3.3.2 파일</li>
                                                    <li>font-awesome-4.7.0.css : font-awesome 4.7.0 파일</li>
                                                </ol>
                                            </li>
                                            <li>jquery : jquery 플러그인 사용시 사용되는 파일</li>
                                            <li>theme : 사이트 테마에 사용되는 파일
                                                <ul>
                                                    <li>default
                                                        <ol>
                                                            <li>custom.css : 사이트 기본 css 파일</li>
                                                        </ol>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>images : image 파일
                                        <ul>
                                            <li>common : 공통으로 사용되는 파일</li>
                                            <li>theme: 사이트 테마에 사용되는 파일</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h2 id="js">js(javascript 파일)</h2>
                                <ul>
                                    <li>common : 공통으로 사용되는 파일
                                        <ol>
                                            <li>base_api_url.js : api 연동시 운영서버, 테스트서버의 base url 상수 모음</li>
                                            <li>constant.js : 사이트에서 전역으로 사용되는 상수 모음</li>
                                            <li>loader.js : url 에 대응되는 javascript 로딩 함수, 독립적인 모듈 로딩 함수 모음</li>
                                        </ol>
                                    </li>
                                    <li>controller : url 을 / 로 나눴을 경우 첫번째 문자열에 댕응되는 javascript 파일 
                                        <ol>
                                            <li>error.js : 에러 처리 함수 모음</li>
                                            <li>info.js : seers core 사용과 관련된 설명 모음</li>
                                            <li>login.js : 로그인 함수 모음</li>
                                            <li>logout.js : 로그아웃 함수 모음</li>
                                        </ol>
                                    </li>
                                    <li>custom : 사이트 개발시 해당 사이트에서 사용되는 파일 
                                        <ol>
                                            <li>base_api_url.js : api 연동시 운영서버, 테스트서버의 base url 상수 모음(공통에서 정리한 값을 사이트에 맞게 변경)</li>
                                            <li>constant.js : 사이트에서 전역으로 사용되는 상수 모음(공통에서 정리한 값을 사이트에 맞게 변경 또는 자유롭게 추가)</li>
                                            <li>util.js : 사이트에서 전역으로 사용되는 함수 모음(공통에서 정리한 함수 내용을 사이트에 맞게 변경 또는 함수를 자유롭게 추가)</li>
                                        </ol>
                                    </li>
                                </ul>
                                <h2 id="template">template(template-design 파일)</h2>
                                <ul>
                                    <li>default : 기본 테마(하위에 필요한 디자인 파일 생성)
                                        <ul>
                                            <li>content : 일반 컨트롤러에서 사용하는 디자인 파일
                                                <ol>
                                                    <li>error.js : 에러내용 디자인 파일</li>
                                                    <li>info.js : 소스트리 설명 디자인 파일</li>
                                                    <li>login.js : 로그인 폼 디자인 파일</li>
                                                </ol>
                                            </li>
                                            <li>layout : 사이트 레이아웃 디자인 파일
                                                <ol>
                                                    <li>footer.js : 푸터 디자인 파일</li>
                                                    <li>header.js : 헤더 디자인 파일</li>
                                                    <li>left_menu.js : 왼쪽 메뉴 디자인 파일</li>
                                                </ol>
                                            </li>
                                            <li>modal : modal 디자인 파일
                                                <ol>
                                                    <li>alert.js : alert 용 디자인 파일</li>
                                                    <li>confirm.js : confirm 용 파일</li>
                                                    <li>left_menu.js : 왼쪽 메뉴 디자인 파일</li>
                                                </ol>
                                            </li>
                                            <li>module : 사이트 내에서 공통으로 사용하는 작은 모듈에 사용되는 디자인 파일
                                                <ol>
                                                    <li>app_ver.js : 사이트 버전 표시 디자인 파일</li>
                                                    <li>paging.js : 데이타 목록의 페이징 디자인 파일</li>
                                                    <li>popup.js : 팝업 디자인 파일</li>
                                                </ol>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- table_content -->
        
`;


export const infoPrepare = `

                        <!-- table_content -->
                        <div class="table_content">
                            <div>
                                <h2 id="prepare">준비사항</h2>
                                <ul>
                                    <li>javascript 학습 필요(아래 주소는 예시임)
                                        <ul>
                                            <li>ECMA 2015 (ES6) 이상 학습
                                                <ol>
                                                    <li>Promise : https://jeong-pro.tistory.com/128</li>
                                                    <li>dynamic import : https://smilerici.tistory.com/38</li>
                                                </ol>
                                            </li>
                                            <li>template 처리
                                                <ol>
                                                    <li>handlebars : https://handlebarsjs.com/</li>
                                                </ol> 
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- table_content -->
        
`;


export const infoUrlProcess = `

                        <!-- table_content -->
                        <div class="table_content">
                            <div>
                                <h2 id="assets-static-">url에 따른 처리단계</h2>
                                <pre>

## url 처리 단계(아래는 사이트 최초 접속 후 설정한 login 컨트롤로, index 액션으로 처리하는 내용 단계 설명-모두 순차처리)
01. index.html 접속
02. /js/index_init.js 로딩
03. baseScriptLoading() <처리에 필요한 각종 자바스크립트 로딩>
   - third party 파일 정보 생략
   - /js/util/util.js
   - /js/common/base_api_url.js
   - /js/common/loader.js
   - /js/custom/util.js
   - /js/custom/base_api_url.js
   - /js/custom/constant.js
04. custom.cssLoading() </js/custom/util.js - core를 제외한 사이트별 추가 파일 로딩>
05. process.init() </js/util/util.js - 사이트 최초 접속 후 처리 부분 로딩>
   - handlebars에서 사용될 custom helper 등록
06. custom.process.init() </js/custom/util.js - core를 제외한 사이트별 사이트 최초 접속 후 처리 부분 로딩>
    - 예시로 처리한 시계 모듈 로딩 < "now_time" >
      - Seers.Loader.moduleLoad("now_time", "index", {divName: "currentTime", realTime: true});
07. Seers.Loader.controllerLoad() </js/common/loader.js - 컨트롤러 로딩, 외부 모듈 또는 html 에서 직접 호출 가능>
    - 로딩할 controller 명과 처리할 action을 확인
08. Seers.Loader._controllerLoad(controller, action) </js/common/loader.js - 컨트롤러 로딩, 실질적인 로딩 처리 부분> 
09. ACCOUNT.REFRESH_SET() </js/common/constant.js - 인증 관련 확인 부분>
    - 메뉴 이동, 새로고침시 인증 확인을 위한 부분
      - 인증 필수 값을 cookie에 넣어두고 확인하다. 
10. DESIGN.LAYOUT.IS_USE(controller) </js/common/constant.js - 레이아웃이 필요한 페이지인 확인 하는 부분>
    - 레이아웃이 필요할 경우 레이아웃 모듈 로딩 < "layout" >
      - MODULE_IS_LOADING['layout'] = Seers.Loader.moduleLoad("layout", "index");
11. Seers.Loader._controllerLoad() 함수 안에 최종 로딩 함수 controllerLoad()
12. 해당 controller 파일 로딩
    - 파일이 없을 경우( error 컨트롤러 로딩 )
      - controllerLoad("error", "viewForNonAction")
13. url.setWindowHistoryStateUrl() </js/util/util.js - url 정보 저장>
14. DESIGN.SELECT_MENU(controller) </js/common/constant.js - 좌측 메뉴 선택하는 부분이 있을 경우 메뉴 처리 부분>
     - /js/custom/constant.js 에서 변수 값 변경하여 처리(오버로딩 효과)
15. ACCOUNT.IS_RUN_ACTION(controller, action, obj.ignoreAuthAction) </js/common/constant.js - 인증이 필요한 action인지 확인>
16. process.pre() </js/util/util.js - 액션처리시 사전 처리 내용 부분>
17. custom.process.pre() </js/custom/util.js - 액션처리시 사이트별 사전 처리 내용 부분>
18. 해당 컨트롤러의 액션 로딩
19. process.end() </js/util/util.js - 액션처리시 사후 처리 내용 부분>
20. custom.process.end() </js/custom/util.js - 액션처리시 사이트별 사후 처리 내용 부분>
  

                                </pre>
                            </div>
                        </div>
                        <!-- table_content -->
        
`;



export const titleSourceTree = `

                        <div class="tab_button">
                        {{#customIf NOW_ACTION "===" "index"}}
                            <button type="button" class="active" style="cursor: default">소스트리</button>
                        {{else}}
                            <button type="button" onclick="etc.move('/info/index');" style="cursor:pointer">소스트리</button>
                        {{/customIf}}
                        
                        {{#customIf NOW_ACTION "===" "prepare"}}
                            <button type="button" class="active" style="cursor: default">준비사항</button>
                        {{else}}
                            <button type="button" onclick="etc.move('/info/prepare');" style="cursor:pointer">준비사항</button>
                        {{/customIf}}
                        
                        {{#customIf NOW_ACTION "===" "urlProcess"}}
                            <button type="button" class="active" style="cursor: default">url에 따른 처리단계</button>
                        {{else}}
                            <button type="button" onclick="etc.move('/info/urlProcess');" style="cursor:pointer">url에 따른 처리단계</button>
                        {{/customIf}}
                        </div>

`;