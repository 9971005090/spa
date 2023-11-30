export const html = `
<style>
.common-cont{ display:flex; flex-direction:column; gap:20px; padding:30px 0; }
.common-cont > div{ padding: 0 30px; }
.b-example-divider { width: 100%; height: 3rem; background-color: rgba(0, 0, 0, .1); border: solid rgba(0, 0, 0, .15); border-width: 1px 0; box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, .1), inset 0 0.125em 0.5em rgba(0, 0, 0, .15); }
</style>
<form class="common-cont">
    <div style="display:flex; gap: 8px;">
        <div class="cm-select-box">
            <input type="hidden" class="check" name="" id="" value="" >
            <button type="button" class="label font-size-14 font-weight-500" id="">selectbox</button>
            <ul class="option-list" id="">
                <li class="option-item" data-code="all">option list all</li>
                <li class="option-item" data-code="01">option list 01</li>
                <li class="option-item" data-code="02">option list 02</li>
            </ul>
            <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
        </div>
        <div class="cm-select-box disabled">
            <input type="hidden" class="check" name="" id="" value="" >
            <button type="button" class="label font-size-14 font-weight-500" id="">selectbox2</button>
            <ul class="option-list" id="">
                <li class="option-item" data-code="all">option list all</li>
                <li class="option-item" data-code="01">option list 01</li>
                <li class="option-item" data-code="02">option list 02</li>
            </ul>
            <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
        </div>
        <div class="cm-select-box error">
            <input type="hidden" class="check" name="" id="" value="" >
            <button type="button" class="label font-size-14 font-weight-500" id="">selectbox</button>
            <ul class="option-list" id="">
                <li class="option-item" data-code="all">option list all</li>
                <li class="option-item" data-code="01">option list 01</li>
                <li class="option-item" data-code="02">option list 02</li>
            </ul>
            <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
        </div>
    </div>
    <div class="b-example-divider"></div>
    <div style="display:flex; flex-direction: column; gap:12px;">
        <div>
            <div class="cm-input-cont">
                <input type="text" class="cm-input-text" placeholder="text input" autocomplete="off" />
                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
            </div>
            <div class="cm-input-cont">
                <input type="text" class="cm-input-text" placeholder="text input" autocomplete="off" disabled />
                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
            </div>
            
            <div class="cm-input-cont error" style="width:300px; display: inline-block;">
                <input type="text" class="cm-input-text" placeholder="text input" autocomplete="off" />
                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
            </div>
        </div>
        <div>
            <div class="cm-textarea-cont" style="display: inline-block;">
                <textarea name="" id="" class="cm-textarea" placeholder="basic textarea"></textarea>
            </div>
            <div class="cm-textarea-cont" style="display: inline-block;">
                <textarea name="" id="" class="cm-textarea" placeholder="basic textarea"    disabled></textarea>
            </div>
            <div class="cm-textarea-cont error" style="display: inline-block;">
                <textarea name="" id="" class="cm-textarea" placeholder="basic textarea"></textarea>
                <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
            </div>
        </div>
        <div class="cm-device-search">
            <span class="span">검색</span>
            <div class="default-background common-search-input">
                <img class="search-icon" src="/assets/images/theme/{{THEME}}/icon/search.png">
                <input type="text" class="font-size-14 font-weight-500 search-input-enter" placeholder="입력해주세요.">
            </div>  
            <button type="button" class="device-search-btn">
                <span class="img"></span>
            </button>
        </div>
    </div>
    <div class="b-example-divider"></div>
    <div>
        <div class="cm-checkbox-box">
            <input class="input" type="checkbox" value="" id="checkbox01">
            <label class="span" for="checkbox01">checkbox 전체 hover</label>
        </div>
        <div class="cm-checkbox-box pd-4">
            <input class="input" type="checkbox" value="" id="checkbox02">
        </div>
        <div class="cm-checkbox-box type02">
            <input class="input" type="checkbox" value="" id="checkbox03">
            <label class="span" for="checkbox03">checkbox 박스만 hover(type02)</label>
        </div>
        <div class="cm-checkbox-box type02 pd-4">
            <input class="input" type="checkbox" value="" id="checkbox04">
            <label class="span" for="checkbox04">checkbox 박스만 hover 사이즈 small(type02 pd-4)</label>
        </div>
        <div class="cm-checkbox-box pd-4">
            <input class="input" type="checkbox" value="" id="checkbox05" disabled>
            <label class="span" for="checkbox05">checkbox 박스만 hover 사이즈 small(type02 pd-4)</label>
        </div>
        <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
    </div>
    <div class="b-example-divider"></div>
    <div>
        <div class="radio-box">
            <div class="radio-btn-cont">
                <input type="radio" id="rd01" name="rdBtn" class="radio-input" checked="">
                <label for="rd01" class="span">radio 전체 hover</label>
            </div>
            <div class="radio-btn-cont pd-4">
                <input type="radio" id="rd02" name="rdBtn" class="radio-input">
            </div>
            <div class="radio-btn-cont type02">
                <input type="radio" id="rd03" name="rdBtn" class="radio-input">
                <label for="rd03" class="span">radio 박스만 hover</label>
            </div>
            <div class="radio-btn-cont type02 pd-4">
                <input type="radio" id="rd04" name="rdBtn" class="radio-input">
                <label for="rd04" class="span">radio 박스만 hover small</label>
            </div>
            <div class="radio-btn-cont pd-4">
                <input type="radio" id="rd05" name="rdBtn" class="radio-input" disabled>
            </div>
            <div class="radio-btn-cont ">
                <input type="radio" id="rd06" name="rdBtn" class="radio-input" disabled>
                <label for="rd06" class="span">radio 박스만 hover small</label>
            </div>
        </div>
        <p class="error-text">유효성 검사 에러 메세지 입니다.</p>
    </div>
</form>
`;