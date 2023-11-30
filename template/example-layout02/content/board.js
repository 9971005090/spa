export const html = `
<style>
.common-cont{ display:flex; flex-direction:column; gap:20px; padding:30px 0; }
.common-cont > div{ padding: 0 30px; }
.b-example-divider { width: 100%; height: 2.5rem; background-color: rgba(0, 0, 0, .1); border: solid rgba(0, 0, 0, .15); border-width: 1px 0; box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, .1), inset 0 0.125em 0.5em rgba(0, 0, 0, .15); }
</style>
<div class="common-cont">
    <div>
        <div class="cm-table-wrap">
            <div class="cm-table-cont">
                <div class="cm-colgroup">
                    <div style="width:5%"></div>
                    <div style="width:70%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                </div>
                <div class="cm-thead">
                    <div class="cm-tr">
                        <p class="cm-th">번호</p>
                        <p class="cm-th">내용</p>
                        <p class="cm-th">작성자</p>
                        <p class="cm-th">작성일</p>
                        <p class="cm-th">상태</p>
                    </div>
                </div>
                <div class="cm-tbody">
                    <div class="cm-tr">
                        <p class="cm-td">1</p>
                        <p class="cm-td">sd</p>
                        <p class="cm-td">ss</p>
                        <p class="cm-td">33</p>
                        <p class="cm-td">55</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">2</p>
                        <p class="cm-td">11</p>
                        <p class="cm-td">234</p>
                        <p class="cm-td">2343</p>
                        <p class="cm-td">644</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">3</p>
                        <p class="cm-td">1234234</p>
                        <p class="cm-td">112315233</p>
                        <p class="cm-td">579087980</p>
                        <p class="cm-td">127fgh</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="b-example-divider"></div>
    <div>
        <div class="cm-table-wrap fix-width scroll-bar">
            <div class="cm-table-cont">
                <div class="cm-colgroup">
                    <div style="width:5%"></div>
                    <div style="width:70%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                </div>
                <div class="cm-thead">
                    <div class="cm-tr">
                        <p class="cm-th">번호</p>
                        <p class="cm-th">내용</p>
                        <p class="cm-th">작성자</p>
                        <p class="cm-th">작성일</p>
                        <p class="cm-th">상태</p>
                    </div>
                </div>
                <div class="cm-tbody">
                    <div class="cm-tr">
                        <p class="cm-td">1</p>
                        <p class="cm-td">sd</p>
                        <p class="cm-td">ss</p>
                        <p class="cm-td">33</p>
                        <p class="cm-td">55</p>
                    </div>
                    <div class="cm-tr" style="height: 8px;"></div>
                    <div class="cm-tr">
                        <p class="cm-td">2</p>
                        <p class="cm-td">11</p>
                        <p class="cm-td">234</p>
                        <p class="cm-td">2343</p>
                        <p class="cm-td">644</p>
                    </div>
                    <div class="cm-tr" style="height: 8px;"></div>
                    <div class="cm-tr">
                        <p class="cm-td">3</p>
                        <p class="cm-td">1234234</p>
                        <p class="cm-td">112315233</p>
                        <p class="cm-td">579087980</p>
                        <p class="cm-td">127fgh</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="b-example-divider"></div>
    <div>
        <div class="cm-table-wrap">
            <div class="cm-table-cont">
                <div class="cm-colgroup">
                    <div style="width:5%"></div>
                    <div style="width:70%"></div>
                    <div class="m-d-none" style="width:10%"></div>
                    <div class="m-d-none" style="width:10%"></div>
                    <div style="width:5%"></div>
                </div>
                <div class="cm-thead">
                    <div class="cm-tr">
                        <p class="cm-th">번호</p>
                        <p class="cm-th">내용</p>
                        <p class="cm-th m-d-none">작성자</p>
                        <p class="cm-th m-d-none">작성일</p>
                        <p class="cm-th">상태</p>
                    </div>
                </div>
                <div class="cm-tbody">
                    <div class="cm-tr">
                        <p class="cm-td">1</p>
                        <p class="cm-td">sd</p>
                        <p class="cm-td m-d-none">ss</p>
                        <p class="cm-td m-d-none">33</p>
                        <p class="cm-td">55</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">2</p>
                        <p class="cm-td">11</p>
                        <p class="cm-td m-d-none">234</p>
                        <p class="cm-td m-d-none">2343</p>
                        <p class="cm-td">644</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">3</p>
                        <p class="cm-td">1234234</p>
                        <p class="cm-td m-d-none">112315233</p>
                        <p class="cm-td m-d-none">579087980</p>
                        <p class="cm-td">127fgh</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="b-example-divider"></div>
    <div>
        <div class="cm-table-wrap transform-card-view">
            <div class="cm-table-cont">
                <div class="cm-colgroup">
                    <div style="width:5%"></div>
                    <div style="width:70%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                </div>
                <div class="cm-thead">
                    <div class="cm-tr">
                        <p class="cm-th">번호</p>
                        <p class="cm-th">내용</p>
                        <p class="cm-th">작성자</p>
                        <p class="cm-th">작성일</p>
                        <p class="cm-th">상태</p>
                    </div>
                </div>
                <div class="cm-tbody">
                    <div class="cm-tr">
                        <p class="cm-td">1</p>
                        <p class="cm-td">내용11111</p>
                        <p class="cm-td">작성자1</p>
                        <p class="cm-td">작성일1</p>
                        <p class="cm-td">상태1</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">2</p>
                        <p class="cm-td">내용22222</p>
                        <p class="cm-td">작성자222</p>
                        <p class="cm-td">작성일2</p>
                        <p class="cm-td">상태2</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">3</p>
                        <p class="cm-td">내용333</p>
                        <p class="cm-td">작성자3</p>
                        <p class="cm-td">작성일3</p>
                        <p class="cm-td">상태3</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">4</p>
                        <p class="cm-td">내용444444</p>
                        <p class="cm-td">작성자4</p>
                        <p class="cm-td">작성일4</p>
                        <p class="cm-td">상태4</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">5</p>
                        <p class="cm-td">내용555555</p>
                        <p class="cm-td">작성자5</p>
                        <p class="cm-td">작성일5</p>
                        <p class="cm-td">상태5</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="b-example-divider"></div>
    <div>
        <div class="cm-table-wrap card-view">
            <div class="cm-table-cont">
                <div class="cm-colgroup">
                    <div style="width:5%"></div>
                    <div style="width:70%"></div>
                    <div style="width:10%"></div>
                    <div style="width:10%"></div>
                </div>
                <div class="cm-thead">
                    <div class="cm-tr">
                        <p class="cm-th">번호</p>
                        <p class="cm-th">내용</p>
                        <p class="cm-th">작성자</p>
                        <p class="cm-th">작성일</p>
                        <p class="cm-th">상태</p>
                    </div>
                </div>
                <div class="cm-tbody">
                    <div class="cm-tr">
                        <p class="cm-td">1</p>
                        <p class="cm-td">내용11111</p>
                        <p class="cm-td">작성자1</p>
                        <p class="cm-td">작성일1</p>
                        <p class="cm-td">상태1</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">2</p>
                        <p class="cm-td">내용22222</p>
                        <p class="cm-td">작성자222</p>
                        <p class="cm-td">작성일2</p>
                        <p class="cm-td">상태2</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">3</p>
                        <p class="cm-td">내용333</p>
                        <p class="cm-td">작성자3</p>
                        <p class="cm-td">작성일3</p>
                        <p class="cm-td">상태3</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">4</p>
                        <p class="cm-td">내용444444</p>
                        <p class="cm-td">작성자4</p>
                        <p class="cm-td">작성일4</p>
                        <p class="cm-td">상태4</p>
                    </div>
                    <div class="cm-tr">
                        <p class="cm-td">5</p>
                        <p class="cm-td">내용555555</p>
                        <p class="cm-td">작성자5</p>
                        <p class="cm-td">작성일5</p>
                        <p class="cm-td">상태5</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;