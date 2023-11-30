export const html = `
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">

<style>
.common-cont{ display:flex; flex-direction:column; gap:20px; padding:30px 0; }
.b-example-divider { width: 100%; height: 3rem; background-color: rgba(0, 0, 0, .1); border: solid rgba(0, 0, 0, .15); border-width: 1px 0; box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, .1), inset 0 0.125em 0.5em rgba(0, 0, 0, .15); }
.btns-wrap{ display: flex; gap:16px; flex-direction: column; }
.btns-wrap>div{ display:flex; gap:16px; }
.btns-cont{ display: flex; flex-direction: column; }
xmp{ background:#000; color:#fff; }
</style>
<div class="common-cont" style="padding: 0 30px;">
    <div class="btns-wrap">
        <div>
            <button type="button" class="cm-btn cm-btn-default cm-btn-small">소</button>
            <button type="button" class="cm-btn cm-btn-default cm-btn-middle">버튼 중</button>
            <button type="button" class="cm-btn cm-btn-default cm-btn-large">버튼 대</button>
        </div>
        <div>
            <button type="button" class="cm-btn cm-btn-n-default cm-btn-auto px-8">버튼 width auto padding auto</button>
            <button type="button" class="cm-btn cm-btn-n-default cm-btn-auto-small">버튼 width auto padding small</button>
            <button type="button" c lass="cm-btn cm-btn-n-default cm-btn-auto-large">버튼 width auto padding large</button>
        </div>
        <div>
            <button type="button" class="cm-btn cm-btn-default cm-btn-auto-large">default 버튼</button>
            <button type="button" class="cm-btn cm-btn-default cm-btn-auto-large selected" disabled>default 버튼 selected</button>
            <button type="button" class="cm-btn cm-btn-full-default cm-btn-auto-large">default 풀컬러 버튼</button>
        </div>
        <div>
            <button type="button" class="cm-btn cm-btn-n-default cm-btn-auto-large">default negative 버튼</button>
            <button type="button" class="cm-btn cm-btn-n-default cm-btn-auto-large selected">default negative 버튼 selected</button>
            <button type="button" class="cm-btn cm-btn-full-n-default cm-btn-auto-large">default 풀컬러 negative 버튼</button>
        </div>
        <div>
            <p>icon 은 css 에서 style로 이미지 변경하며, svg 파일로 색상 변경 가능</p>
            <div class="d-flex" style="gap:16px;">
                <button type="button" class="cm-btn cm-btn-icon-small cm-btn-default">
                    <span class="icon"></span>
                    <span class="txt">small</span>
                </button>
                <button type="button" class="cm-btn cm-btn-icon-large cm-btn-default">
                    <span class="icon"></span>
                    <span class="txt">large</span>
                </button>
                <button type="button" class="cm-btn cm-btn-icon-large cm-btn-default selected">
                    <span class="icon"></span>
                    <span class="txt">large</span>
                </button>
            </div>
        </div>
        <div>
            <button type="button" class="cm-btn cm-btn-icon-large cm-btn-default" disabled>
                <span class="icon"></span>
                <span class="txt">disabled</span>
            </button>
            <button type="button" class="cm-btn cm-btn-default cm-btn-auto px-8" disabled>disabled</button>
        </div>
    </div>
    <div class="page-nav">
        <a href="javascript:void();" class="page-nav-link">
            <span class="xi-home"></span>
        </a>
        <span class="icon xi-angle-right"></span>   
        <a href="javascript:void();" class="page-nav-link">Main</a>
    </div>
    <div class="pagination"></div>
</div>
`;