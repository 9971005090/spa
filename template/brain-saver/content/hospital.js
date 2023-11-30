"use strict";
export const index = `
    <div class="common-cont">
        <div class="sub-cont-top">
            <h4 class="sub-cont-title">Search</h4>
            <button type="button" class="cm-btn cm-btn-middle btn-black btn-add">병원 등록</button>
        </div>
        <form class="form-common-search">
            <div class="search-form">
                <div class="search-wrap">
                    <div class="d-flex">
                        <div class="tit">기관 연동타입</div>
                        <div class="cont">
                            <!--<div class="cm-select-box">
                                {{#each CONSTANTS.MESSAGE_TYPE}} 
                                {{#customIf @index '<=' 0}}
                                <input type="hidden" class="check" name="message-type" value="{{@key}}">
                                <button type="button" class="label font-size-14 font-weight-500">{{this}}</button>
                                {{/customIf}}
                                {{/each}}
                                <ul class="option-list" id="">
                                    {{#each CONSTANTS.MESSAGE_TYPE}} 
                                    <li class="option-item" data-code="{{@key}}">{{this}}</li>
                                    {{/each}}
                                </ul>
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>-->
                            <div class="cm-select-box">
                                {{#each CONSTANTS.ORGANIZATION_TYPE}} 
                                {{#customIf @index '<=' 0}}
                                <input type="hidden" class="check" name="organizationTypeList" value="{{@key}}">
                                <button type="button" class="label font-size-14 font-weight-500">전체</button>
                                {{/customIf}}
                                {{/each}}
                                <ul class="option-list" id="">
                                    <li class="option-item" data-code="">전체</li>
                                    {{#each CONSTANTS.ORGANIZATION_TYPE}} 
                                    <li class="option-item" data-code="{{@key}}">{{this}}</li>
                                    {{/each}}
                                </ul>
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="tit">뇌졸중 병원타입</div>
                        <div class="cont">
                            <div class="cm-select-box">
                                {{#each CONSTANTS.STROKE_TYPE}} 
                                {{#customIf @index '<=' 0}}
                                <input type="hidden" class="check" name="strokeTypeList" value="{{@key}}">
                                <button type="button" class="label font-size-14 font-weight-500">전체</button>
                                {{/customIf}}
                                {{/each}}
                                <ul class="option-list" id="">
                                    <li class="option-item" data-code="">전체</li>
                                    {{#each CONSTANTS.STROKE_TYPE}} 
                                    <li class="option-item" data-code="{{@key}}">{{this}}</li>
                                    {{/each}}
                                </ul>
                                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-wrap">
                    <!--<div class="d-flex">
                        <div class="tit">사용여부</div>
                        <div class="cont">
                            <div class="radio-box">
                                {{#each CONSTANTS.EXPIRATION}} 
                                <div class="radio-btn-cont">
                                    <input type="radio" id="expiration{{@key}}" name="expiration" class="radio-input" value="{{@key}}" {{#customIf ../hospital.expiration '==' @key}}checked{{/customIf}}>
                                    <label for="expiration{{@key}}" class="span">{{this}}</label>
                                </div>
                                {{/each}}
                            </div>
                        </div>
                    </div>-->
                    <div class="d-flex">
                        <div class="tit">기관명</div>
                        <div class="cont">
                            <div class="cm-device-search">
                                <span class="span d-none">검색</span>
                                <div class="default-background common-search-input">
                                    <img class="search-icon d-none" src="/assets/images/theme/{{THEME}}/icon/search.png">
                                    <input type="text" class="font-size-14 font-weight-500 search-input-enter form-common-search-keyword" placeholder="검색어">
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
                    <div style="width:15%"></div>
                    <div style="width:10%"></div>
                    <div style="width:20%"></div>
                    <div style="width:30%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                </div>
                <div class="cm-thead">
                    <div class="cm-tr">
                        <p class="cm-th">순서</p>
                        <p class="cm-th">기관 연동 타입</p>
                        <p class="cm-th">뇌졸중 병원 타입</p>
                        <p class="cm-th">기관 명칭</p>
                        <p class="cm-th">기관 주소</p>
                        <p class="cm-th">대표 전화번호</p>
                        <p class="cm-th">관리</p>
                    </div>
                </div>
                <div class="cm-tbody" id="contents-by-data-table"></div>
            </div>
        </div>
        <div class="pagination"></div>
    </div>
`;

export const dataTable = `
    {{#each datas}}
        <div class="cm-tr" data-unique-id="{{organizationId}}" data-code="{{organizationCode}}">
            <p class="cm-td td-num">{{virtualNumber}}</p>
            <!--<p class="cm-td td-num">{{math @index '+' 1}}</p>-->
            <p class="cm-td">
                <span class="pc-d-none">연동 타입</span>
                {{parsingOrganizationType}}
            </p>
            <p class="cm-td">
                <span class="pc-d-none">뇌졸중 병원 타입</span>
                {{parsingStrokeType}}
            </p>
            <p class="cm-td">
                <span class="pc-d-none">명칭</span>
                {{organizationName}}
            </p>
            <p class="cm-td">
                <span class="pc-d-none">주소</span>
                {{state}} {{city}} {{address}}
            </p>
            <p class="cm-td">
                <span class="pc-d-none">대표전화</span>
                {{phoneNumber}}
            </p>
            <div class="cm-td">
                <div class="btn-wrap">
                    <button type="button" class="cm-btn cm-btn-small btn-black btn-detail-view button-update">수정</button>
                    <button type="button" class="cm-btn cm-btn-small cm-btn-n-default btn-delete">삭제</button>
                </div>
            </div>
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
                            <th class="th">기관코드</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text" placeholder="기관코드" name="organizationCode" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                            <th class="th">연동 타입</th>
                            <td class="td">
                                <div class="radio-box">
                                    <div class="radio-btn-cont">
                                        <input type="radio" id="organizationType0" name="organizationType" class="radio-input" value="0" checked>
                                        <label for="organizationType0" class="span">일반 병원(IPM)</label>
                                    </div>
                                    <div class="radio-btn-cont">
                                        <input type="radio" id="organizationType1" name="organizationType" class="radio-input" value="1">
                                        <label for="organizationType1" class="span">브레인 세이버 연동 병원</label>
                                    </div>
                                </div>
                                <!--<div class="cm-select-box">
                                    <input type="hidden" class="check active-check" name="organizationType" value="0">
                                    <button type="button" class="label font-size-14 font-weight-500">일반 병원(IPM)</button>
                                    <ul class="option-list" id="">
                                        <li class="option-item" data-code="0">일반 병원(IPM)</li>
                                        <li class="option-item" data-code="1">브레인 세이버 연동 병원</li>
                                    </ul>
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>-->
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th require-validation">기관 명칭</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text check active-check" name="organizationName" placeholder="기관 명칭" autocomplete="off" />
                                    <p class="error-text">기관 명칭을 입력해주세요.</p>
                                </div>
                            </td>
                            <th class="th require-validation">뇌졸중 병원 타입</th>
                            <td class="td">
                                <div class="cm-select-box">
                                    <input type="hidden" class="check active-check" name="strokeType" value="0">
                                    <button type="button" class="label font-size-14 font-weight-500">없음</button>
                                    <ul class="option-list" id="">
                                        <li class="option-item" data-code="0">없음</li>
                                        <li class="option-item" data-code="1">PCS</li>
                                        <li class="option-item" data-code="2">TSC</li>
                                    </ul>
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th require-validation">기관 행정구역</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text check active-check" placeholder="ex) Gyeonggi-do" name="state" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                            <th class="th require-validation">기관 도시</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text check active-check" placeholder="ex) Sujeong-gu, Seongnam-si" name="city" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th require-validation">상세 주소</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text check active-check" placeholder="ex) 76, Bokjeong-ro" name="address" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                            <th class="th">대표전화</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text" placeholder="0000000000" name="phoneNumber" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th">기관좌표 위도(x)</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text" placeholder="위도 좌표" name="latitude" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                            <th class="th">기관좌표 경도(x)</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text" placeholder="경도 좌표" name="longitude" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th">비고</th>
                            <td class="td" colspan="3">
                                <div class="cm-textarea-cont" style="display: inline-block;">
                                    <textarea name="etc" class="cm-textarea" placeholder=""></textarea>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="btm-btn-wrap d-flex">
                <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle btn-confirm button-submit">등록</button>
                <button type="button" class="cm-btn cm-btn-middle btn-go-list">목록</button>
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
                            <th class="th">기관코드</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text" placeholder="기관코드" value="{{datas.organizationCode}}" name="organizationCode" autocomplete="off" disabled />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                            <th class="th require-validation">연동 타입</th>
                            <td class="td">
                                <div class="radio-box">
                                    {{#each CONSTANTS.ORGANIZATION_TYPE}} 
                                    <div class="radio-btn-cont">
                                        <input type="radio" id="organizationType{{@key}}" name="organizationType" class="radio-input" value="{{@key}}" {{#customIf ../datas.organizationType '==' @key}}checked{{/customIf}}>
                                        <label for="organizationType{{@key}}" class="span">{{this}}</label>
                                    </div>
                                    {{/each}}
                                </div>
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th require-validation">기관 명칭</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text check active-check" placeholder="기관 명칭" value="{{datas.organizationName}}" name="organizationName" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                            <th class="th require-validation">뇌졸중 병원 타입</th>
                            <td class="td">
                                <div class="cm-select-box">
                                    <input type="hidden" class="check" name="strokeType" value="{{datas.strokeType}}">
                                    <button type="button" class="label font-size-14 font-weight-500">{{datas.parsingStrokeType}}</button>
                                    <ul class="option-list" id="">
                                        <li class="option-item" data-code="0">없음</li>
                                        <li class="option-item" data-code="1">PCS</li>
                                        <li class="option-item" data-code="2">TSC</li>
                                    </ul>
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th require-validation">기관 행정구역</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text check active-check" placeholder="ex) Gyeonggi-do" value="{{datas.state}}" name="state" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                            <th class="th require-validation">기관 도시</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text check active-check" placeholder="ex) Sujeong-gu, Seongnam-si" value="{{datas.city}}" name="city" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th require-validation">상세 주소</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text check active-check" placeholder="ex) 76, Bokjeong-ro" value="{{datas.address}}" name="address" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                            <th class="th">대표전화</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="textg" class="cm-input-text" placeholder="000-000-0000" name="phoneNumber" value="{{datas.phoneNumber}}" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th">기관좌표 위도(x)</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text" placeholder="위도 좌표" value="{{datas.latitude}}" name="latitude" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                            <th class="th">기관좌표 경도(x)</th>
                            <td class="td">
                                <div class="cm-input-cont">
                                    <input type="text" class="cm-input-text" placeholder="경도 좌표" name="longitude" value="{{datas.longitude}}" autocomplete="off" />
                                    <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
                                </div>
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th">사용여부</th>
                            <td class="td" colspan="3">
                                <div class="radio-box">
                                    {{#each CONSTANTS.EXPIRATION}} 
                                    <div class="radio-btn-cont">
                                        <input type="radio" id="expiration{{@key}}" name="expiration" class="radio-input" value="{{@key}}" {{#customIf ../datas.expiration '==' @key}}checked{{/customIf}}>
                                        <label for="expiration{{@key}}" class="span">{{this}}</label>
                                    </div>
                                    {{/each}}
                                </div>
                            </td>
                        </tr>
                        <tr class="tr">
                            <th class="th">비고</th>
                            <td class="td" colspan="3">
                                <div class="cm-textarea-cont" style="display: inline-block;">
                                    <textarea name="etc" id="" class="cm-textarea" placeholder="">{{datas.etc}}</textarea>
                                </div>
                            </td>
                        </tr>
                        <!--<tr class="tr">
                            <th class="th">사용 유무</th>
                            <td class="td" colspan="3">
                                <div class="radio-box">
                                    {{#each CONSTANTS.USE_TYPE}} 
                                    <div class="radio-btn-cont">
                                        <input type="radio" id="use-type{{@key}}" name="use-type" class="radio-input" value="{{@key}}" {{#customIf ../hospital.isUse '==' @key}}checked{{/customIf}}>
                                        <label for="use-type{{@key}}" class="span">{{this}}</label>
                                    </div>
                                    {{/each}}
                                </div>
                            </td>
                        </tr>-->
                    </tbody>
                </table>
            </div>
            <div class="btm-btn-wrap d-flex">
                <button type="button" class="cm-btn cm-btn-full-default cm-btn-middle btn-confirm">수정</button>
                <button type="button" class="cm-btn cm-btn-middle btn-go-list">목록</button>
            </div>
        </form>
    </div>
`;