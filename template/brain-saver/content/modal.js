export const html = `
    <style>
    .common-cont{ display:flex; flex-direction:column; gap:20px; padding:30px; }
    </style>
    <div class="common-cont">
        <button type="button" class="modal-btn cm-btn cm-btn-large cm-btn-full-default">모달창 오픈 버튼</button>
    </div>
`;

export const modalHtml = `
    <div class="cm-modal-cont" id="common-modal">
        <div class="cm-modal-header">header</div>
        <div class="cm-modal-section">
            <p>공통 모달</p>
            <button class="cm-btn cm-btn-middle cm-btn-default btn-modal-confirm">확인</button>
        </div>
    </div>
`;