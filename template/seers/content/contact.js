export const html =`    
    <div class="container-fluid">
        <div class="sub_pg">
            <div class="container-md">
                <div>
                    <button type="button" class="cm-btn cm-btn-icon-small borad_back_btn">
                        <span class="icon fa fa-arrow-left"></span>
                        <span class="txt">Back to list</span>
                    </button>
                </div>
                <div id="qna_form_box">
                    <form method="post" name="frm_qna" id="frm_qna" action="../qna_update_inc.php" target="hidden_ifrm"
                        enctype="multipart/form-data">
                        <input type="hidden" name="act" id="act" value="qna_input">
                        <input type="hidden" name="qt_type" id="qt_type" value="6">
                        <div class="write_box">
                            <h4 class="tit_h4">기타</h4>
                            <!--문의 카테고리 나오기 -->
                            <h5 class="tit_h5 mt-5">기본 정보</h5>
                            <div class="row   pb-5">
                                <div class="ip_wr col-12 col-md-3">
                                    <div class="ip_tit ">
                                        <h5>이름 </h5>
                                    </div>
                                    <div class="cm-input-cont">
                                        <input type="text" class="cm-input-text" placeholder="이름을 입력하세요." autocomplete="off">
                                        <p class="error-text">이름을 입력하세요.</p>
                                    </div>
                                </div>
                                <div class="ip_wr col-12 col-md-3">
                                    <div class="ip_tit">
                                        <h5>이메일</h5>
                                    </div>
                                    <div class="cm-input-cont">
                                        <input type="text" class="cm-input-text" placeholder="이메일을 입력하세요." autocomplete="off">
                                        <p class="error-text">Please enter your email.</p>
                                    </div>
                                </div>
                                <div class="ip_wr col-12 col-md-3">
                                    <div class="ip_tit">
                                        <h5>회사명 </h5>
                                    </div>
                                    <div class="cm-input-cont">
                                        <input type="text" class="cm-input-text" placeholder="회사명을 입력하세요." autocomplete="off">
                                        <p class="error-text">회사명 또는 병원명을 입력해주세요.</p>
                                    </div>
                                </div>
                                <input type="hidden" name="qt_country" id="qt_country" value="162">
                            </div>

                            <h5 class="tit_h5 mt-5 mb-3">무엇에 대해 문의하고 싶으신가요? </h5>
                            <div class="cm-textarea-cont mt-4" style="display: inline-block;">
                                <textarea name="" id="" class="cm-textarea"  placeholder="문의사항을 입력해주세요." ></textarea>
                            </div>
                            <div class="pt-5">
                                <h5 class="tit_h5 mt-5">다음 사항을 확인해 주십시오</h5>
                                <div class="rounded-lg border bg_lgr p-5 demo_alim fs_16 mt-4">

                                    <div>
                                        <table width="100%" class="table_01">
                                            <tbody>
                                                <tr>
                                                    <th>수집항목</th>
                                                    <td class="text-left">성명, 전화번호, 전자우편 주소, 소속, 국가, 질의 내용</td>
                                                </tr>
                                                <tr>
                                                    <th>수집항목</th>
                                                    <td class="text-left">질의 답변 및 문의 처리</td>
                                                </tr>
                                                <tr>
                                                    <th>보유기간</th>
                                                    <td class="text-left">관계 법령의 규정에 따라 보존할 의무가 있는 경우가 아닌 한, 질의를 제출한
                                                        날로부터 3년간</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div class="mt-5">귀하는 위와 같은 개인정보의 수집·이용을 거부할 권리가 있으나, 동의하지 않을 경우 일부 서비스를 제공받으실 수
                                            없습니다.
                                        </div>
                                        <div class="mt-5">(주)씨어스테크놀로지(이하 ‘회사’)는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와
                                            관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                                            ○ 본 개인정보처리방침은 2022년 12월 1일부로 시행됩니다.
                                        </div>
                                        <div class="mt-5">
                                            <h6 class="tit_h6">제1조(개인정보의 처리 목적)</h6>
                                            회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
                                            변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br><br>
                                            1. 웹사이트상 서비스 제공<br>
                                            • 질의 답변 및 문의 처리<br>
                                            • 데모 신청에 대한 답변 및 처리<br><br>

                                            2. 민원사무 처리: 솔루션 및 제품 등에 관한 문의 대응, 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과
                                            통보 등의 목적으로 개인정보를 처리합니다.<br><br>

                                            3. 인재 채용: 지원자의 신원 및 학·경력의 확인, 채용 여부의 결정 및 통지, 채용 시 고용계약 체결 및 유지를 위한 제반 업무,
                                            기타 채용 관련 업무를 목적으로 개인정보를 처리합니다.<br><br>

                                            4. 미디어 활동: 보도자료 배포, 인터뷰 등을 목적으로 개인정보를 처리합니다.<br><br>

                                            5. 법적·행정적 의무 이행: 의료법·의료기기법·생명윤리 및 안전에 관한 법률 등 관계법령에 따른 임상연구, 부작용
                                            보고 및 자료제출의무의 이행, 의료기기 거래에 관한 공정경쟁규약에 의한 자문/강연 신고의무 이행, 법인세·부가가치세 등 각종 세금의 신고
                                            및 납부, 영수증·세금계산서의 발급·교부 등 법령 및 그에 근거한 행정관청·관계기관등의 명령·처분 등에 따라 회사에 부과되는 각종
                                            법적·행정적 의무의 이행을 목적으로 개인정보를 처리합니다.<br>
                                            한편, 회사는 개인정보 보호법에 따라, 정보주체에게 불이익이 발생하는지 여부, 암호화 등 안전성 확보에 필요한 조치를 하였는지 여부 등을
                                            고려하여, 당초 수집 목적과 합리적으로 관련된 범위 내에서 개인정보를 이용·제공할 수 있습니다. 구체적인 고려사항은 다음과 같으며,
                                            회사는 개인정보 보호법 등 관련 법령, 개인정보의 이용제공 목적, 개인정보가 이용·제공되는 방식, 이용·제공하려는 개인정보 항목,
                                            정보주체가 동의한 사실이 있거나 정보주체에게 고지공개된 사항이 있는 경우 그 내용, 이용·제공에 따라 정보주체에게 미치는 영향, 대상
                                            정보를 보호하기 위해 취해져 있는 조치 등을 포함한 제반 사정을 종합하여 이용제공할 것인지 여부를 신중히 판단할 것입니다:<br>
                                            • 당초 수집 목적과 관련성이 있는지 여부<br>
                                            • 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때 개인정보의 추가적인 이용 또는 제공에 대한 예측가능성이 있는지 여부<br>
                                            • 정보주체의 이익을 부당하게 침해하는지 여부<br>
                                            • 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지 여부
                                        </div>
                                        <div class="mt-5">
                                            <h6 class="tit_h6">제2조(개인정보의 처리 및 보유 기간)</h6>
                                            1. 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서
                                            개인정보를 처리·보유합니다.<br>
                                            2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br>
                                            • 웹사이트상 서비스 제공<br>
                                            ! 질의 답변 및 문의 처리: 질의 제출일로부터 3년간<br>
                                                ! 데모 신청에 대한 답변 및 처리: 데모 신청일로부터 3년간<br>
                                                • 민원사무 처리: 수집일로부터 3년간<br>
                                                • 인재 채용: 채용 여부 확정일로부터 1년간<br>
                                                • 미디어 활동: 수집일로부터 3년간<br>
                                                • 법적·행정적 의무 이행: 관련 법령에서 정한 의무의 이행이 완료될 때까지<br><br>
                                                3. 또한, 회사는 상법, 통신비밀보호법 등 관련 법령에 따라 개인정보보호가 필요한 경우 관련 법령에 명시된 보유 및 이용 기간 동안
                                                해당 정보를 보유합니다.<br>
                                                • 회사의 영업에 관한 중요서류<br>
                                                ! 보존 근거: 상법<br>
                                                ! 보존 기간: 10년<br><br>
                                                • 웹사이트 방문기록<br>
                                                ! 보존 근거: 통신비밀보호법<br>
                                                ! 보존 기간: 3개월
                                            </div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제3조(개인정보의 제3자 제공)</h6>회사는 원칙적으로 개인정보를 본 처리방침 제1조에서 명시한 범위
                                                내에서 처리하며, 정보주체의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다. 다만, 아래 각 항의
                                                경우에는 예외로 합니다.<br>
                                                • 정보주체가 사전에 제3자 제공 및 공개에 동의한 경우<br>
                                                • 법령 등에 의해 제공이 요구되거나 허용되는 경우
                                            </div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제4조(개인정보처리 수탁)</h6>1. 회사는 데모 제공의 목적으로 서비스 이용자가 서비스 이용과정에서
                                                입력한 환자의 정보를 처리합니다.<br>
                                                2. 회사는 시스템상 저장된 환자의 정보를 이용자에 대한 서비스 제공기간 동안 보유 및 처리합니다.<br>
                                                3. 서비스 제공과 관련된 이용자의 개인정보 처리 현황은 각 서비스별 개인정보 처리방침에서도 확인하실 수 있습니다.
                                            </div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제5조(정보주체 및 법정대리인의 권리, 의무 및 그 행사방법)</h6>
                                                1. 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다. 단, 관계법령에서 정한 의무사항이
                                                있으면 권리 행사가 제한될 수 있습니다.<br>
                                                • 개인정보 열람요구<br>
                                                • 오류 등이 있을 경우 정정 요구<br>
                                                • 삭제요구<br>
                                                • 처리정지 요구<br>
                                                • 동의 철회권 행사<br><br>
                                                2. 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 아래 기재된 주소로 서면제출, 전자우편,
                                                모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다. 다만, 동의 철회권의 행사는 귀하가 동의
                                                표시한 방법과 같은 방법으로도 하실 수 있습니다.<br>
                                                • 주소: 경기도 성남시 분당구 성남대로 331번길 8, 1401호 (정자동, 킨스타워)<br>
                                                • 전자우편 주소: contact@seerstech.com<br>
                                                • 팩스번호: 031-8023-9812<br><br>
                                                3. 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를
                                                이용하거나 제공하지 않습니다.<br><br>
                                                4. 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이경우 개인정보 보호법
                                                시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.<br><br>
                                                5. 회사는 정보주체 또는 대리인이 제1항에 따른 권리를 행사한 경우 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다
                                            </div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제6조(처리하는 개인정보의 항목)</h6>1. 회사는 다음의 개인정보 항목을 처리하고 있습니다.<br>
                                                • 질의 답변 및 문의 처리: 성명, 전화번호, 전자우편 주소, 소속, 국가, 질의 내용<br>
                                                • 데모 신청에 대한 답변 및 처리: 성명, 전화번호, 전자우편 주소, 소속, 국가/지역, 신청 내역, 질의 내용<br>
                                                • 인재 채용: 성명, 전화번호, 전자우편 주소, 이력서, 포트폴리오, 기타 지원자가 수집에 동의한 정보<br><br>
                                                2. 회사는 제1호의 개인정보는 다음과 같은 방법 또는 과정을 통하여 수집합니다.<br>
                                                • 웹사이트상 서비스 신청 과정에서 수집<br>
                                                • 입사지원자의 입사지원을 통하여 수집<br>
                                                • 기판매 의료기기에 대한 부작용 보고(민원 제공) 과정에서 수집
                                            </div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제7조(개인정보의 파기절차 및 파기방법)</h6>
                                                1. 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.<br>
                                                2. 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
                                                하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장
                                                소를 달리하여 일정 기간 보존 후 즉시 파기합니다.<br>
                                                3. 개인정보 파기의 절차 및 방법은 다음과 같습니다.<br>
                                                • 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.<br>
                                                • 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                                            </div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제 8조(개인정보의 안전성 확보 조치)</h6>
                                                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.<br>
                                                1. 정기적인 자체 감사 실시: 개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.<br>
                                                2. 개인정보 취급 직원의 최소화 및 교육: 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을
                                                시행하고 있습니다.<br>
                                                3. 내부관리계획의 수립 및 시행: 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.<br>
                                                4. 해킹 등에 대비한 기술적 대책: 회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을
                                                설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고
                                                있습니다.<br>
                                                5. 개인정보의 암호화: 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일
                                                및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.<br>
                                                6. 접속기록의 보관 및 위변조 방지: 개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고 있으며,다만, 5만명 이상의
                                                정보주체에 관하여 개인정보를 추가하거나, 고유식별정보 또는 민감정보를 처리하는 경우에는 2년이상 보관, 관리하고 있습니다. 또한,
                                                접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.<br>
                                                7. 개인정보에 대한 접근 제한: 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한
                                                접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.<br>
                                                8. 문서보안을 위한 잠금장치 사용: 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.<br>
                                                9. 비인가자에 대한 출입 통제: 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고
                                                있습니다.
                                            </div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제9조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)</h6>
                                                1. 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를
                                                사용합니다.<br>
                                                2. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며
                                                이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.<br>
                                                • 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여
                                                이용자에게 최적화된 정보 제공을 위해 사용됩니다.<br>
                                                • 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할
                                                수 있습니다.<br>
                                                • 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.<br>
                                                3. 정보주체는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 정보주체는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를
                                                허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. 정보주체가 사용하는 웹 브라우저의
                                                옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
                                            </div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제10조(개인정보 보호책임자)</h6>
                                                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이
                                                개인정보 보호책임자를 지정하고 있습니다.<br>
                                                • 개인정보 보호책임자<br>
                                                성명: 강대엽<br>
                                                소속 및 직책: 사업본부 본부장 이사<br>
                                                전화번호 및 이메일주소: 031-8023-9811 / david.kang@seerstech.com<br>
                                                정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
                                                개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                                            </div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제11조(정보주체의 권익침해에 대한 구제방법)</h6>
                                                정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을
                                                신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
                                            </div>
                                            <div class="mt-5">1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)<br>
                                                2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)<br>
                                                3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)<br>
                                                4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</div>
                                            <div class="mt-5">「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지
                                                등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는
                                                행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.<br>
                                                ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.</div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제12조(제3자 링크에 관한 사항)</h6>
                                                회사 홈페이지는 제3자의 웹사이트, 플러그 인(plug-in), 응용 프로그램에 대한 링크를 포함할 수 있습니다. 정보주체가 링크를
                                                클릭하거나 연결하는 경우, 제3자가 정보주체의 개인정보를 수집하거나 이용하게 될 수 있습니다.<br>
                                                회사는 이러한 제3자의 웹사이트, 플러그 인(plug in), 응용 프로그램을 제어하고 있지 않으며, 제3자의 개인정보처리에 대한 책임을
                                                지지 않습니다.
                                            </div>
                                            <div class="mt-5">
                                                <h6 class="tit_h6">제13조(개인정보 처리방침 변경)</h6>
                                                1. 이 개인정보처리방침은 2022년 12월 1일부터 적용됩니다.<br>
                                                2. 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
                                            </div>

                                            <!-- 2023.08.18 홈페이지 수정사항 전달<2023-08-18 (금) 오후 4:52>/ edit by zaid, 2023-08-23 -->
                                            <div style="margin-left: 20px;">
                                                • 개정 일자: 2022. 12. 1.
                                            </div>
                                    </div>

                                    <!-- demo.php // Inquiry_write.php // policy.php--> <!--개인정보처리/방침 -->
                                </div>
                                <div class="mt-3">
                                    <div class="cm-checkbox-box type02 pd-4">
                                        <input class="input" type="checkbox" value="" id="checkbox04">
                                        <label class="span" for="checkbox04">개인정보 수집 및 이용 동의(필수) <span class="fc_primary ">*</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            <button type="button" class="cm-btn cm-btn-full-default cm-btn-large">제출</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
`;