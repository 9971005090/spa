"use strict";
export const index = `
    <div class="sub-cont-top">
        <h4 class="sub-cont-title"></h4>
        <div class="d-flex">
            <button type="button" class="cm-btn cm-btn-middle btn-add">등록</button>
            <button type="button" class="cm-btn cm-btn-icon-large btn-download-excel button-excel" style="margin-left: 2px;"> 
                <span class="icon"></span>
                <span class="txt">엑셀다운로드</span>
            </button>
        </div>
    </div>
    <form class="form-common-search">
    <div class="search-form">
        <div class="search-wrap">
            <div class="d-flex">
                <div class="tit">검색기간</div>
                <div class="cont">
                    <div class="search-date-wrap">
                        <div class="search-date-cont start-calendar">
                            <input type="text" class="search-data-input" id="form-common-search-start-date" placeholder="YYYY.MM.DD" readonly />    
                            <span class="img"></span>
                        </div>
                        <p class="p">-</p>
                        <div class="search-date-cont end-calendar">
                            <input type="text" class="search-data-input" id="form-common-search-end-date" placeholder="YYYY.MM.DD" readonly />    
                            <span class="img"></span>
                        </div>
                        <input type="hidden" id="form-common-search-term" value="30">
                        <button type="button" class="cm-btn cm-btn-auto btn-black button-search-term selected" data-term="30">1개월</button>
                        <button type="button" class="cm-btn cm-btn-auto btn-black button-search-term" data-term="60">3개월</button>
                        <button type="button" class="cm-btn cm-btn-auto btn-black button-search-term" data-term="-1">전체</button>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="tit">검색어</div>
                <div class="cont">
                    <div class="cm-device-search">
                        <span class="span d-none">검색</span>
                        <div class="default-background common-search-input">
                            <img class="search-icon d-none" src="/assets/images/theme/{{THEME}}/icon/search.png">
                            <input type="text" class="font-size-14 font-weight-500 search-input-enter form-common-search-keyword" placeholder="검색어" value="{{choiceSearchOptions.search}}">
                        </div>  
                        <button type="button" class="device-search-btn form-common-search-button">
                            <span class="img"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    <div class="cm-table-wrap board-view">
        <div class="cm-table-cont">
            <div class="cm-colgroup">
                <div style="width:5%"></div>
                <div style=""></div>
                <div style="width:7%"></div>
                <div style="width:7%"></div>
                <div style="width:7%"></div>
                <div style="width:7%"></div>
                <div style="width:7%"></div>
                <div style="width:7%"></div>
                <div style="width:7%"></div>
                <div style="width:15%"></div>
                <div style="width:10%"></div>
            </div>
            <div class="cm-thead">
                <div class="cm-tr">
                    <p class="cm-th">번호</p>
                    <p class="cm-th">이름</p>
                    <p class="cm-th">목록권한</p>
                    <p class="cm-th">읽기권한</p>
                    <p class="cm-th">쓰기권한</p>
                    <p class="cm-th">답글권한</p>
                    <p class="cm-th">코멘트퀀한</p>
                    <p class="cm-th">답글사용</p>
                    <p class="cm-th">코멘트사용</p>
                    <p class="cm-th">수정시간</p>
                    <p class="cm-th">관리</p>
                </div>
            </div>
            <div class="cm-tbody" id="contents-by-data-table"></div>
        </div>
    </div>
    <div class="pagination board-pagination" id="pagination"></div>
`;

export const dataTable = `
{{#each datas}}  
<div class="cm-tr" data-unique-id="{{code}}">
    <p class="cm-td td-num">{{virtualNumber}}</p>
    <p class="cm-td">
        {{name}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">목록권한</span>
        {{parsingList}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">읽기권한</span>
        {{parsingView}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">쓰기권한</span>
        {{parsingWrite}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">답글권한</span>
        {{parsingReply}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">코멘트권한</span>
        {{parsingComment}}
    </p>    
    <p class="cm-td">
        <span class="pc-d-none">답글사용</span>
        {{parsingUseReply}}
    </p>
    <p class="cm-td">
        <span class="pc-d-none">코멘트사용</span>
        {{parsingUseComment}}
    </p>    
    <p class="cm-td">
        <span class="pc-d-none">수정시간</span>
        {{updateDateTime}}
    </p>
    <p class="cm-td">
<!--        <button type="button" class="cm-btn cm-btn-small btn-black button-update">수정</button>        -->
<!--        <button type="button" class="cm-btn cm-btn-small cm-btn-n-default btn-delete button-delete">삭제</button>-->
        <button type="button" class="button button-blue button-small button-update">수정</button>
        <button type="button" class="button button-red button-small button-delete">삭제</button>
    </p>
</div>
{{/each}}
`;

export const add = `
    <div class="common-cont organ-common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">{{title}}</h4>
        </div>
        <form id="form-data">
        <div class="cm-table-wrap">
            <table class="cm-table-cont">
                <colgroup>
                    <col style="width: 180px;">
                    <col style="width: *;">
                    <col style="width: 180px;">
                    <col style="width: *;">
                </colgroup>
                <tbody class="tbody">
                    <tr class="tr">
                        <th class="th require-validation">환자 생성타입</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.PATIENT_TYPE}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="patient-type" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th">지정 병원</th>
                        <td class="td">
                            <div class="cm-select-box">
                                <input type="hidden" class="check" name="designate-organization-code" value="{{hospital.0.organizationCode}}">
                                <button type="button" class="label font-size-14 font-weight-500">{{hospital.0.organizationName}}</button>
                                <ul class="option-list" id="">
                                    {{#each hospital}} 
                                    <li class="option-item" data-code="{{organizationCode}}">{{organizationName}}</li>
                                    {{/each}}
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">기관 위도(x)</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="위도" name="latitude" autocomplete="off" />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                        <th class="th">기관 경도(y)</th>
                        <td class="td">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="경도" name="longitude" autocomplete="off" />
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th">발견주소</th>
                        <td class="td" colspan="3">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="발견주소" name="discovery-address" autocomplete="off" />
                            </div>
                        </td>
                    </tr>
                    
                    <tr class="tr">
                        <th class="th require-validation">성별</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.GENDER}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="gender" class="radio-input" value="{{this}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{genderParsing this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">연령대</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.AGE_RANGE}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="age-range" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th require-validation">뇌전증 과거력</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="epilepsy-history" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">심장질환(심방세동) 과거력</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="heart-disease-history" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th require-validation">항응고제 사용력</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="anticoagulant-history" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">혈당</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="glucose" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th require-validation">의식저하</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="altered-mental-status" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">주시편위</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="gaze-deviation" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th require-validation">얼굴마비</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="facial-palsy" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">팔다리 마비</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="limb-paralysis" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th require-validation">발음/언어장애</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="speech-disturbance" class="radio-input" value="{{@key}}" {{#customIf @index '===' 0}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">증상발생시간</th>
                        <td class="td">
                            <div class="cm-input-cont" style="display: flex; position: relative;">
                                <div class="search-date-cont start-calendar" style="width: 150px;">
                                    <input type="text" class="search-data-input" name="symptom-date" id="symptom-date" placeholder="2003-12-31" readonly="">    
                                    <span class="img"></span>
                                </div>
                                <input type="text" name="symptom-time" id="symptom-time" style="width: 55px; margin-left: 16px; padding: 7px 8px; border-bottom: 1px solid #aaa; vertical-align: bottom; font-size: 14px;" placeholder="12:59" value="00:00" maxlength="5">
                                <p class="error-text" style="position: absolute; top: 30px;">시간을 정확히 입력하세요.</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="btm-btn-wrap d-flex">
            <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle btn-confirm button-submit">등록</button>
            <button type="button" class="cm-btn cm-btn-middle btn-go-list button-cancel">목록</button>
        </div>
        </form>
    </div>
`;
export const update = `
    <div class="common-cont organ-common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">{{title}}</h4>
        </div>
        <form id="form-data">
        <input type="hidden" name="id" value="{{brainSaverPatient.id}}">
        <div class="cm-table-wrap">
            <table class="cm-table-cont">
                <colgroup>
                    <col style="width: 180px;">
                    <col style="width: *;">
                    <col style="width: 180px;">
                    <col style="width: *;">
                </colgroup>
                <tbody class="tbody">
<!--                    <tr class="tr">-->
<!--                        <th class="th require-validation">환자 생성타입</th>-->
<!--                        <td class="td">-->
<!--                            <div class="radio-box">-->
<!--                                {{#each CONSTANTS.PATIENT_TYPE}} -->
<!--                                <div class="radio-btn-cont">-->
<!--                                    <input type="radio" name="patient-type" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.patientType '===' key}}checked{{/customIf}}>-->
<!--                                    <label class="span">{{this}}</label>-->
<!--                                </div>-->
<!--                                {{/each}}-->
<!--                            </div>-->
<!--                        </td>-->
<!--                        <th class="th">지정 병원</th>-->
<!--                        <td class="td">-->
<!--                            <div class="radio-box">-->

<!--                            </div>-->
<!--                        </td>-->
<!--                    </tr>-->
<!--                    <tr class="tr">-->
<!--                        <th class="th">기관 위도(x)</th>-->
<!--                        <td class="td">-->
<!--                            <div class="cm-input-cont">-->
<!--                                <input type="text" class="cm-input-text" placeholder="위도" name="latitude" value="{{brainSaverPatient.latitude}}" autocomplete="off" />-->
<!--                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>-->
<!--                            </div>-->
<!--                        </td>-->
<!--                        <th class="th">기관 경도(y)</th>-->
<!--                        <td class="td">-->
<!--                            <div class="cm-input-cont">-->
<!--                                <input type="text" class="cm-input-text" placeholder="경도" name="longitude" value="{{brainSaverPatient.longitude}}" autocomplete="off" />-->
<!--                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>-->
<!--                            </div>-->
<!--                        </td>-->
<!--                    </tr>-->
                    <tr class="tr">
                        <th class="th">발견주소</th>
                        <td class="td" colspan="3">
                            <div class="cm-input-cont">
                                <input type="text" class="cm-input-text" placeholder="발견주소" name="discovery-address" value="{{brainSaverPatient.discoveryAddress}}" autocomplete="off" />
                            </div>
                        </td>
                    </tr>
                    
                    <tr class="tr">
                        <th class="th require-validation">성별</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.GENDER}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="gender" class="radio-input" value="{{this}}" {{#customIf ../brainSaverPatient.gender '===' this}}checked{{/customIf}}>
                                    <label class="span">{{genderParsing this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">연령대</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.AGE_RANGE}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="age-range" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.ageRange '==' @key}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th require-validation">뇌전증 과거력</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="epilepsy-history" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.epilepsyHistory '==' @key}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">심장질환(심방세동) 과거력</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="heart-disease-history" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.heartDiseaseHistory '==' @key}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th require-validation">항응고제 사용력</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="anticoagulant-history" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.anticoagulantHistory '==' @key}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">혈당</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="glucose" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.glucose '==' @key}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th require-validation">의식저하</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="altered-mental-status" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.alteredMentalStatus '==' @key}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">주시편위</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="gaze-deviation" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.gazeDeviation '==' @key}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th require-validation">얼굴마비</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="facial-palsy" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.facialPalsy '==' @key}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">팔다리 마비</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="limb-paralysis" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.limbParalysis '==' @key}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                    </tr>
                    <tr class="tr">
                        <th class="th require-validation">발음/언어장애</th>
                        <td class="td">
                            <div class="radio-box">
                                {{#each CONSTANTS.DIAGNOSIS_TYPE2}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" name="speech-disturbance" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.speechDisturbance '==' @key}}checked{{/customIf}}>
                                    <label class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </td>
                        <th class="th require-validation">증상발생시간</th>
                        <td class="td">
                            <div class="cm-input-cont" style="display: flex; position: relative;">
                                <div class="search-date-cont start-calendar" style="width: 150px;">
                                    <input type="text" class="search-data-input" name="symptom-date" id="symptom-date" placeholder="2003-12-31" value="{{dateParsingForFormat brainSaverPatient.symptomDateTime "yyyy-MM-dd"}}" readonly="">    
                                    <span class="img"></span>
                                </div>
                                <input type="text" name="symptom-time" id="symptom-time" style="width: 55px; margin-left: 16px; padding: 7px 8px; border-bottom: 1px solid #aaa; vertical-align: bottom; font-size: 14px;" placeholder="12:59" value="{{dateParsingForFormat brainSaverPatient.symptomDateTime "HH:mm"}}" maxlength="5">
                                <p class="error-text" style="position: absolute; top: 30px;">시간을 정확히 입력하세요.</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
                
                
                
                
                
                
<!--                <tbody class="tbody">-->
<!--                    <tr class="tr">-->
<!--                        <th class="th">상태</th>-->
<!--                        <td class="td">-->
<!--                            <div class="radio-box">-->
<!--                                {{#each CONSTANTS.TRANSPORT_STATUS}} -->
<!--                                <div class="radio-btn-cont">-->
<!--                                    <input type="radio" name="transport-status" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.transferStatus '==' @key}}checked{{/customIf}}>-->
<!--                                    <label class="span">{{this}}</label>-->
<!--                                </div>-->
<!--                                {{/each}}-->
<!--                            </div>-->
<!--                        </td>-->
<!--                        <th class="th">성별</th>-->
<!--                        <td class="td">-->
<!--                            <div class="radio-box">-->
<!--                                {{#each CONSTANTS.GENDER}} -->
<!--                                <div class="radio-btn-cont">-->
<!--                                    <input type="radio" name="gender" class="radio-input" value="{{this}}" {{#customIf ../brainSaverPatient.gender '==' @key}}checked{{/customIf}}>-->
<!--                                    <label class="span">{{genderParsing this}}</label>-->
<!--                                </div>-->
<!--                                {{/each}}-->
<!--                            </div>-->
<!--                        </td>-->
<!--                    </tr>-->
<!--                    <tr class="tr">-->
<!--                        <th class="th require-validation">발생장소 주소</th>-->
<!--                        <td class="td">-->
<!--                            <div class="cm-input-cont">-->
<!--                                <input type="text" name="location-address" class="cm-input-text check active-check"  value="{{brainSaverPatient.locationAddress}}" />-->
<!--                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>-->
<!--                            </div>-->
<!--                        </td>-->
<!--                        <th class="th require-validation">발생장소 상세주소</th>-->
<!--                        <td class="td">-->
<!--                            <div class="cm-input-cont">-->
<!--                                <input type="text" name="location-address-detail" class="cm-input-text check active-check"  value="{{brainSaverPatient.locationAddressDetail}}" />-->
<!--                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>-->
<!--                            </div>-->
<!--                        </td>-->
<!--                    </tr>-->
<!--                    <tr class="tr">-->
<!--                        <th class="th">이송여부</th>-->
<!--                        <td class="td" colspan="3">-->
<!--                            <div class="radio-box">-->
<!--                                {{#each CONSTANTS.IS_TRANSFER}} -->
<!--                                <div class="radio-btn-cont">-->
<!--                                    <input type="radio" name="is-transfer" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.isTransfer '==' @key}}checked{{/customIf}}>-->
<!--                                    <label class="span">{{this}}</label>-->
<!--                                </div>-->
<!--                                {{/each}}-->
<!--                            </div>-->
<!--                        </td>-->
<!--                    </tr>-->
                </tbody>
            </table>
        </div>
        <div class="btm-btn-wrap d-flex">
            <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle btn-confirm button-submit">수정</button>
            <button type="button" class="cm-btn cm-btn-middle btn-go-list button-cancel">목록</button>
        </div>
        </form>
    </div>
`;


export const modalForHospitalChange = `
<style>
.layer_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
}
.layer_popup_container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 600px;
  box-sizing: border-box;
  border-radius: 4px;
;
}
.layer_popup_container .layer_popup_header {
  padding: 20px 20px 14px 20px;
}
.layer_popup_container .layer_popup_header .close {
  position: absolute;
  top: 25px;
  right: 20px;
}
.layer_popup_container .layer_popup_header .layer_popup_modal_title {
  padding-bottom: 15px;
  border-bottom: 1px solid var(--light-gray-100);
}
.layer_popup_container .layer_popup_header .layer_popup_modal_title h2 {
  color: var(--black);;
}

.layer_popup_container .layer_popup_body {
  padding: 20px;
  display: flex;
}
.layer_popup_container .layer_popup_body p{
  width: 120px;
  font-size: 14px;
  vertical-align: middle;
}
.layer_popup_container .layer_popup_body .container {
  width: 100%;
  height: 350px;
  overflow-y: auto;
}
.layer_popup_container .layer_popup_footer {
  padding: 0px 20px 20px 20px;
}

/*.layer_popup_container .layer_popup_footer .btm-btn-wrap {*/
/*    align-items: center;*/
/*    justify-content: center;*/
/*    gap: 6px;*/
/*    padding-top: 20px;*/
/*}*/
/*.layer_popup_container .layer_popup_footer .btm-btn-wrap .cm-btn {*/
/*    transition: 0.2s all ease-in;*/
/*}*/

/*.layer_popup_container .layer_popup_footer .btn_cancel{*/
/*  width: 120px;*/
/*  height: 40px;*/
/*  border-radius: 4px;*/
/*  border:1px solid #940045;*/
/*  background: none;*/
/*  font-size: 14px;*/
/*  color: #940045;*/
/*}*/
/*.layer_popup_container .layer_popup_footer .btn_check{*/
/*  width: 120px;*/
/*  height: 40px;*/
/*  border-radius: 4px;*/
/*  border:1px solid #007A94;*/
/*  background: #007A94;*/
/*  font-size: 14px;*/
/*  color: #fff;*/
}



</style>
                <div class="layer_popup_container" id="{{id}}" style="width:650px;">
                    <div class="layer_popup_header">
                        <div class="layer_popup_modal_title">
                            <h2>{{title}}</h2>
                            <span class="close fl-r" onclick="modal.globalClose('{{id}}');" style="cursor: pointer">&times;</span>
                        </div>
                    </div>
                    
                    <form id="form-data" autocomplete="off">
                    <input type="hidden" name="modalId" value="{{id}}">
                    <div class="layer_popup_body">
                        <div class="common-cont organ-common-cont">
                            <div class="cm-table-wrap">
                                <table class="cm-table-cont">
                                    <colgroup>
                                        <col style="width: 180px;">
                                        <col style="width: *;">
                                        <col style="width: 180px;">
                                        <col style="width: *;">
                                    </colgroup>
                                    <tbody class="tbody">
                                        <tr class="tr">
                                            <th class="th">지정 병원</th>
                                            <td class="td" colspan="3">
                                                <div class="hospital-change cm-select-box">
                                                    <input type="hidden" class="check" name="designate-organization-code" value="{{choiceHospital.code}}">
                                                    <button type="button" class="label font-size-14 font-weight-500" id="">{{choiceHospital.name}}</button>
                                                    <ul class="option-list" id="">
                                                        {{#each hospital}} 
                                                        <li class="option-item" data-code="{{organizationCode}}">{{organizationName}}</li>
                                                        {{/each}}
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="layer_popup_footer">
                        <div class="btm-btn-wrap d-flex" style="border-top: 1px solid var(--light-gray-100);">
                            <button type="button" class="cm-btn cm-btn-middle btn-go-list btn_cancel" onclick="modal.globalClose('{{id}}');">취소</button>
                            <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle btn-confirm button-submit btn_check">{{processTitle}}</button>
                        </div>
                    </div>                          
                    </form>
                    
                </div>
`;
export const modalForTransportChange = `
<style>
.layer_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
}
.layer_popup_container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 600px;
  box-sizing: border-box;
  border-radius: 4px;
;
}
.layer_popup_container .layer_popup_header {
  padding: 20px 20px 14px 20px;
}
.layer_popup_container .layer_popup_header .close {
  position: absolute;
  top: 25px;
  right: 20px;
}
.layer_popup_container .layer_popup_header .layer_popup_modal_title {
  padding-bottom: 15px;
  border-bottom: 1px solid var(--light-gray-100);
}
.layer_popup_container .layer_popup_header .layer_popup_modal_title h2 {
  color: var(--black);;
}

.layer_popup_container .layer_popup_body {
  padding: 20px;
  display: flex;
}
.layer_popup_container .layer_popup_body p{
  width: 120px;
  font-size: 14px;
  vertical-align: middle;
}
.layer_popup_container .layer_popup_body .container {
  width: 100%;
  height: 350px;
  overflow-y: auto;
}
.layer_popup_container .layer_popup_footer {
    padding: 15px 20px 20px 20px;
}

/*.layer_popup_container .layer_popup_footer .btm-btn-wrap {*/
/*    align-items: center;*/
/*    justify-content: center;*/
/*    gap: 6px;*/
/*    padding-top: 20px;*/
/*}*/
/*.layer_popup_container .layer_popup_footer .btm-btn-wrap .cm-btn {*/
/*    transition: 0.2s all ease-in;*/
/*}*/

/*.layer_popup_container .layer_popup_footer .btn_cancel{*/
/*  width: 120px;*/
/*  height: 40px;*/
/*  border-radius: 4px;*/
/*  border:1px solid #940045;*/
/*  background: none;*/
/*  font-size: 14px;*/
/*  color: #940045;*/
/*}*/
/*.layer_popup_container .layer_popup_footer .btn_check{*/
/*  width: 120px;*/
/*  height: 40px;*/
/*  border-radius: 4px;*/
/*  border:1px solid #007A94;*/
/*  background: #007A94;*/
/*  font-size: 14px;*/
/*  color: #fff;*/
}



</style>
                <div class="layer_popup_container" id="{{id}}" style="width:650px;">
                    <div class="layer_popup_header">
                        <div class="layer_popup_modal_title">
                            <h2>{{title}}</h2>
                            <span class="close fl-r" onclick="modal.globalClose('{{id}}');" style="cursor: pointer">&times;</span>
                        </div>
                    </div>
                    
                    <form id="form-data" autocomplete="off">
                    <input type="hidden" name="modalId" value="{{id}}">
                    <div class="layer_popup_body">
                        <div class="common-cont organ-common-cont">
                            <div class="cm-table-wrap">
                                <table class="cm-table-cont">
                                    <colgroup>
                                        <col style="width: 180px;">
                                        <col style="width: *;">
                                        <col style="width: 180px;">
                                        <col style="width: *;">
                                    </colgroup>
                                    <tbody class="tbody">
                                        <tr class="tr">
                                            <th class="th">이송 상태</th>
                                            <td class="td" colspan="3">
                                                {{#each CONSTANTS.TRANSPORT_STATUS}} 
                                                <div class="radio-btn-cont">
                                                    <input type="radio" name="transport-status" class="radio-input" value="{{@key}}" {{#customIf ../brainSaverPatient.transportStatus '==' @key}}checked{{/customIf}}>
                                                    <label class="span">{{this}}</label>
                                                </div>
                                                {{/each}}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div class="layer_popup_footer">
                        <div class="btm-btn-wrap d-flex" style="border-top: 1px solid var(--light-gray-100);">
                            <button type="button" class="cm-btn cm-btn-middle btn-go-list btn_cancel" onclick="modal.globalClose('{{id}}');">취소</button>
                            <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle btn-confirm button-submit btn_check">{{processTitle}}</button>
                        </div>
                    </div>                      
                    </form>
                    
                </div>
`;