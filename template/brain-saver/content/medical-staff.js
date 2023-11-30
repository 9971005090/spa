"use strict";
export const html = `
    <div class="common-cont medical-staff">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">Search</h4>
            <button type="button" class="cm-btn cm-btn-middle btn-add">의료진 등록</button>
        </div>
        <div class="search-form">
            <div class="search-wrap">
                <div class="tit">검색어</div>
                <div class="cont">
                     <div class="cm-select-box" id="searchCateUserType">
                        <input type="hidden" class="check"  value="0" >
                        <button type="button" class="label font-size-14 font-weight-500" >사용자 분류</button>
                        <ul class="option-list" >
                           
                        </ul>
                        <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                     </div>
                     <div class="cm-select-box" id="searchCateUserOrgan">
                        <input type="hidden" class="check"  >
                        <button type="button" class="label font-size-14 font-weight-500" >소속 기관</button>
                        <ul class="option-list" >
                           
                        </ul>
                        <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                    </div>
                    <div class="cm-select-box" id="searchCateType">
                        <input type="hidden" class="check"  >
                        <button type="button" class="label font-size-14 font-weight-500" >검색 조건</button>
                        <ul class="option-list" >
                            <li class="option-item" data-code="all">전체 조회</li>
                            <li class="option-item" data-code="id">사용자 아이디</li>
                            <li class="option-item" data-code="pw">사용자 이름</li>
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
                </div>
            </div>
        </div>
        <div class="medical-staff cm-table-wrap board-view">
            <div class="cm-table-cont">
                <div class="cm-colgroup">
                    <div style="width:3%"></div> 
                    <div style="width:22%"></div>
                    <div style="width:22%"></div>
                    <div style="width:15%"></div>
                    <div style="width:24%"></div>
                    <div style="width:14%"></div>
                </div>
                <div class="cm-thead">
                    <div class="cm-tr">
                        <p class="cm-th">순서</p>
                        <p class="cm-th">사용자 분류</p>
                        <p class="cm-th">소속 기관</p>
                        <p class="cm-th">사용자 아이디</p>
                        <p class="cm-th">사용자 이름</p>
                        <p class="cm-th">Action</p>
                    </div>
                </div>
                <div class="cm-tbody user-list">
                    
                </div>
            </div>
        </div>
        <div class="pagination" style="display: none;"></div>
        <div id="loading">{{{loading}}}</div>
    </div>
`;
export const medicalStaffList =`
{{#each userAccountSimpleList}}
<div class="cm-tr">
    <p class="cm-td td-num">{{indexNum @index}}</p>
    <p class="cm-td">
        <span class="pc-d-none">사용자 분류</span>
        {{accountTypeName accountType}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">소속 기관</span>
        {{organizationCode}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">사용자 아이디</span>
        {{id}}
    </p>    
     <p class="cm-td">
        <span class="pc-d-none">사용자 이름</span>
        {{name}}
    </p>      
    <p class="cm-td">
        <span class="pc-d-none">Action</span>
        <button type="button" data-user-id ="{{id}}" data-user-name ="{{name}}" class="cm-btn cm-btn-small btn-detail-view " >상세보기</button>
        <button type="button" data-user-id ="{{id}}" data-user-name ="{{name}}" data-user-code ="{{userCode}}" class="cm-btn cm-btn-small btn-user-del " >삭제</button>
    </p>
</div>
{{/each}}
`;
export const add = `
    <div class="common-cont organ-common-cont medical-staff">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">상세정보</h4>
        </div>
        <div class="cm-table-wrap" id = "userAccountInfoTable">
            
        </div>
        <div class="btm-btn-wrap d-flex">
            <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle btn-confirm" id = "createAccountBtn">등록</button>
            <button type="button" class="cm-btn cm-btn-middle btn-go-list" id = "goUserListBtn">목록</button>
        </div>
    </div>
`;
export const userAccountInfo =`
    <form id="accountInfoForm">
        <table class="cm-table-cont">
            <colgroup>
                <col style="width: 180px;">
                <col style="width: *;">
                <col style="width: 180px;">
                <col style="width: *;">
            </colgroup>
            <tbody class="tbody">
                <tr class="tr">
                    <th class="th">회원아이디</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="text" class="cm-input-text require-value" placeholder="사용자 아이디" name="id" autocomplete="off" />
                            <p class="error-text">사용자 아이디를 입력해주세요.</p>
                        </div>
                    </td>
                    <th class="th">이름</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="text" class="cm-input-text require-value" placeholder="사용자 이름"  name="name" autocomplete="off" />
                              <p class="error-text">사용자 이름을 입력해주세요.</p>
                        </div>
                    </td>
                </tr>
                <tr class="tr">
                    <th class="th">회원비밀번호</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="password" class="cm-input-text require-value" placeholder="패스워드를 입력해주세요.(알파벳,숫자 포함 8자이상)" name="password" autocomplete="off" data-type="password" />
                            <p class="error-text">비밀번호 확인이 필요합니다.</p>
                        </div>
                    </td>
                    <th class="th">회원비밀번호 확인</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="password" class="cm-input-text require-value" placeholder="패스워드를 다시 한번 입력해주세요." name="passwordCheck" autocomplete="off" data-type="password_confirm" />
                            <p class="error-text">비밀번호 확인이 필요합니다.</p>
                        </div>
                    </td>
                </tr>
                <tr class="tr">
                    <th class="th">연락처</th>
                    <td class="td">
                        <div class="cm-input-cont ">
                            <input type="text" class="cm-input-text " name="phoneNumber" placeholder="연락처(xxx-xxxx-xxxx)" data-type="cellPhone" autocomplete="off" />
                            <p class="error-text">연락처를 입력해주세요</p>
                        </div>
                    </td>
                    <th class="th">성별</th>
                    <td class="td">
                         <div class="radio-box mt-4">
                            <div class="radio-btn-cont">
                                <input type="radio" id="rdM" name="rdBtnSex" class="radio-input" value="1" checked>
                                <label for="rdM" class="span">남성</label>
                            </div>
                            <div class="radio-btn-cont">
                                <input type="radio" id="rdF" name="rdBtnSex" class="radio-input" value="2">
                                <label for="rdF" class="span">여성</label>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="tr">
                    <th class="th">사용자 분류</th>
                    <td class="td">
                        <div class="cm-select-box require-value-cont" id="searchCateUserType" style="width: 230px;">
                            <input type="hidden" class="check require-value"  name="accountType" >
                            <button type="button" class="label font-size-14 font-weight-500" >사용자 분류</button>
                            <ul class="option-list" style="width: 230px; max-height: 200px;">
                               
                            </ul>
                            <p class="error-text">사용자 분류를 선택해주세요.</p>
                        </div>
                    </td>
                    <th class="th">사용자 권한</th>
                    <td class="td">
                        <div class="cm-select-box require-value-cont" id="searchCateUserLevel" style="width: 230px;">
                            <input type="hidden" class="check require-value"  name="level"  >
                            <button type="button" class="label font-size-14 font-weight-500" >사용자 권한</button>
                            <ul class="option-list" style="width: 230px; max-height: 200px;">
                               
                            </ul>
                            <p class="error-text">사용자 권한을 선택해주세요.</p>
                        </div>
                    </td>     
                </tr>
                 <tr class="tr">
                    <th class="th">소속 기관</th>
                    <td class="td">
                        <div class="cm-select-box require-value-cont" id="searchCateUserOrgan" style="width: 230px;">
                            <input type="hidden" class="check require-value" name="accountUserOrgan" >
                            <button type="button" class="label font-size-14 font-weight-500" >소속 기관</button>
                            <ul class="option-list" style="width: 230px; max-height: 200px;">
                                
                            </ul>
                            <p class="error-text">사용자의 소속기관을 선택해주세요.</p>
                        </div>
                    </td>
                    <th class="th">부서명/소속</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="text" class="cm-input-text require-value" placeholder="사용자 부서명을 입력해주세요." name="department" autocomplete="off" />
                            <p class="error-text">사용자 부서명을 입력해주세요,.</p>
                        </div>
                    </td>
                   
                </tr>
                <tr class="tr">
                    <th class="th">직책</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="text" class="cm-input-text require-value" placeholder="사용자 직책명을 입력해주세요." name="position" autocomplete="off" />
                            <p class="error-text">사용자 직책명을 입력해주세요.</p>
                        </div>
                    </td>
                    <th class="th">이메일</th>
                    <td class="td" >
                        <div class="cm-input-cont require-value-cont" >
                           <input type="text" class="cm-input-text require-value" placeholder="이메일 주소를 입력해주세요." name="email" data-type="email" autocomplete="off" />
                            <p class="error-text">이메일 주소를 입력해주세요.</p>
                        </div>
                    </td>
                </tr>
                <tr class="tr">
                    <th class="th">비고</th>
                    <td class="td" colspan="3">
                        <div class="cm-textarea-cont" style="display: inline-block;">
                            <textarea name="etc" class="cm-textarea" placeholder="" ></textarea>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>            
    </form>        
`;
export const mod = `
    <div class="common-cont organ-common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">상세정보</h4>
        </div>
        <div class="cm-table-wrap" id = "userAccountInfoTable">
            
        </div>
        <div class="btm-btn-wrap d-flex">
            <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle " id = "modAccountBtn">수정</button>
            <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle " id = "delAccountBtn">삭제</button>
            <button type="button" class="cm-btn cm-btn-middle btn-go-list" id = "goUserListBtn">목록</button>
        </div>
    </div>
`;
export const modUserAccountInfo =`
    <form id="accountInfoForm">
        <table class="cm-table-cont">
            <colgroup>
                <col style="width: 180px;">
                <col style="width: *;">
                <col style="width: 180px;">
                <col style="width: *;">
            </colgroup>
            <tbody class="tbody">
                <tr class="tr">
                    <th class="th">회원아이디</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="text" class="cm-input-text require-value" placeholder="사용자 아이디" name="id" autocomplete="off" value="{{id}}" />
                             <input type="hidden" class="cm-input-text require-value"  name="userCode" autocomplete="off" value="{{userCode}}" />
                            <p class="error-text">사용자 아이디를 입력해주세요.</p>
                        </div>
                    </td>
                    <th class="th">이름</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="text" class="cm-input-text require-value" placeholder="사용자 이름"  name="name" autocomplete="off" value="{{name}}" />
                              <p class="error-text">사용자 이름을 입력해주세요.</p>
                        </div>
                    </td>
                </tr>
                <tr class="tr">
                    <th class="th">회원비밀번호</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="password" class="cm-input-text require-value" placeholder="패스워드를 입력해주세요.(알파벳,숫자 포함 8자이상)" name="password" autocomplete="off" data-type="password" />
                            <p class="error-text">비밀번호 확인이 필요합니다.</p>
                        </div>
                    </td>
                    <th class="th">회원비밀번호 확인</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="password" class="cm-input-text require-value" placeholder="패스워드를 다시 한번 입력해주세요." name="passwordCheck" autocomplete="off"  />
                            <p class="error-text">비밀번호 확인이 필요합니다.</p>
                        </div>
                    </td>
                </tr>
                <tr class="tr">
                    <th class="th">연락처</th>
                    <td class="td">
                        <div class="cm-input-cont ">
                            <input type="text" class="cm-input-text " name="phoneNumber" placeholder="연락처(xxx-xxxx-xxxx)" data-type="cellPhone" autocomplete="off" value="{{phoneNumber}}"  />
                            <p class="error-text">연락처를 입력해주세요</p>
                        </div>
                    </td>
                    <th class="th">성별</th>
                    <td class="td">
                         <div class="radio-box mt-4">
                            <div class="radio-btn-cont">
                                <input type="radio" id="rdM" name="rdBtnSex" class="radio-input" value="1" checked>
                                <label for="rdM" class="span">남성</label>
                            </div>
                            <div class="radio-btn-cont">
                                <input type="radio" id="rdF" name="rdBtnSex" class="radio-input" value="2">
                                <label for="rdF" class="span">여성</label>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="tr">
                    <th class="th">사용자 분류</th>
                    <td class="td">
                        <div class="cm-select-box require-value-cont" id="searchCateUserType" style="width: 230px;">
                            <input type="hidden" class="check require-value"  name="accountType" value="{{accountType}}" >
                            <button type="button" class="label font-size-14 font-weight-500" >{{accountTypeName accountType}}</button>
                            <ul class="option-list" style="width: 230px; max-height: 200px;">
                               
                            </ul>
                            <p class="error-text">사용자 분류를 선택해주세요.</p>
                        </div>
                    </td>
                    <th class="th">사용자 권한</th>
                    <td class="td">
                        <div class="cm-select-box require-value-cont" id="searchCateUserLevel" style="width: 230px;">
                            <input type="hidden" class="check require-value"  name="level" value="{{level}}" >
                            <button type="button" class="label font-size-14 font-weight-500" >{{levelName level}}</button>
                            <ul class="option-list" style="width: 230px; max-height: 200px;">
                               
                            </ul>
                            <p class="error-text">사용자 권한을 선택해주세요.</p>
                        </div>
                    </td>        
                </tr>
                 <tr class="tr">
                    <th class="th">소속 기관</th>
                    <td class="td">
                        <div class="cm-select-box require-value-cont" id="searchCateUserOrgan" style="width: 230px;">
                            <input type="hidden" class="check require-value" name="accountUserOrgan" value="{{organizationCode}}" >
                            <button type="button" class="label font-size-14 font-weight-500" >{{organizationCode}}</button>
                            <ul class="option-list" style="width: 230px; max-height: 200px;">
                                
                            </ul>
                            <p class="error-text">사용자의 소속기관을 선택해주세요.</p>
                        </div>
                    </td>
                    <th class="th">부서명/소속</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="text" class="cm-input-text " placeholder="사용자 부서명을 입력해주세요." name="department" autocomplete="off" value="{{department}}" />
                            <p class="error-text">사용자 부서명을 입력해주세요,.</p>
                        </div>
                    </td>
                    
                </tr>
                <tr class="tr">
                    <th class="th">직책</th>
                    <td class="td">
                        <div class="cm-input-cont require-value-cont">
                            <input type="text" class="cm-input-text " placeholder="사용자 직책명을 입력해주세요." name="position" autocomplete="off" value="{{position}}" />
                            <p class="error-text">사용자 직책명을 입력해주세요.</p>
                        </div>
                    </td>
                    <th class="th">이메일</th>
                    <td class="td" >
                        <div class="cm-input-cont require-value-cont" >
                           <input type="text" class="cm-input-text require-value" placeholder="이메일 주소를 입력해주세요." name="email" data-type="email" autocomplete="off" value="{{email}}" />
                            <p class="error-text">이메일 주소를 입력해주세요.</p>
                        </div>
                    </td>
                </tr>
                <tr class="tr">
                    <th class="th">비고</th>
                    <td class="td" colspan="3">
                        <div class="cm-textarea-cont" style="display: inline-block;">
                            <textarea name="etc" class="cm-textarea" placeholder="" ></textarea>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>            
    </form>
        
`;
export const listNotFound =`

<div class="cm-tr">
    <h2>조회된 내역이 없습니다.</h2>  
</div>
`;

export const deleteModal =`
<section class="cm-middle-modal " id="{{id}}">
    <header class="cm-modal-header">
        <div class="cm-modal-header-contents" >
            <h2 class="modal-title-h2">사용자 삭제 확인</h2>
        </div>  
    </header>
    <article class="cm-modal-contents">
        <div class="contents-info">
            <p class="p">{{userName}}(id: {{userId}}) 사용자를 <br><span class="bold-text">삭제하시겠습니까?</span><br>삭제시 사용자의 모든정보가 삭제됩니다.</p>         
        </div>
        <div class="contents-btn">
            <button class="cm-btn cm-btn-middle comfirm-cancel-btn " onclick="modal.globalClose('{{id}}')">아니요</button>
            <button class="cm-btn cm-btn-middle comfirm-ok-btn user-delete-ok-btn" data-user-code ="{{userCode}}" >네,삭제합니다</button>
        </div>
    </article>           
</section>
`;
export const modUserModal =`
<section class="cm-middle-modal " id="{{id}}">
    <header class="cm-modal-header">
        <div class="cm-modal-header-contents" >
            <h2 class="modal-title-h2">사용자 수정 확인</h2>
        </div>  
    </header>
    <article class="cm-modal-contents">
        <div class="contents-info">
            <p class="p">{{userName}}(id: {{userId}}) 사용자 정보를 <br><span class="bold-text">수정하시겠습니까?</span><br>수정시 기존 내용은 전부 변경됩니다.</p>         
        </div>
        <div class="contents-btn">
            <button class="cm-btn cm-btn-middle comfirm-cancel-btn " onclick="modal.globalClose('{{id}}')">아니요</button>
            <button class="cm-btn cm-btn-middle comfirm-ok-btn user-update-ok-btn" data-user-code ="{{userCode}}" >네,수정합니다</button>
        </div>
    </article>           
</section>
`;