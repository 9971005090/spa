export const html =`
<div class="container-fluid px-0">
    <!-- 상단 영상 -->
    <div class="video_wrap">
        <div>
            <img src="https://seerstech.com/img/txt_kr1.svg" alt="이미지" class="txt_en1">
        </div>
        <div class="video_txt">
            <p class="vi_txt1" data-aos="fade-up">We Make Medicine Smarter</p>
            <p class="vi_txt2" data-aos="fade-up" data-aos-delay="300">진료에 스마트를 더<span class="fc_primary ">+</span>하다 </p>
            <p class="vi_txt3" data-aos="fade-up" data-aos-delay="400">환자의 진료 전주기에 걸쳐 씨어스의 기술이 함께합니다. </p>
        </div>
        <video autoplay loop muted playsinline src="https://seerstech.com/img/movie.mp4" type="video/mp4" class="video_none"></video>
    </div>
    <div class="video_wrap_m">
        <div class="video_txt">
            <p class="vi_txt1">We Make Medicine Smarter</p>
            <p class="vi_txt2">진료에 스마트를 더<span class="fc_primary ">+</span>하다 </p>
            <p class="vi_txt3">환자의 진료 전주기에 걸쳐 씨어스의 기술이 함께합니다. </p>
        </div>
        <!--<img src="https://seerstech.com/img/movie_mo.gif" alt="모바일용">-->
        <video id="movie_m" width="100%" height="auto" autoplay loop muted playsinline>
            <source src="https://seerstech.com/img/movie_m_kr.mp4?version=20230509" type="video/mp4">
        </video>
    </div>

    <!-- 제품 슬라이드 -->
    <div class="main_slide" data-aos="fade-down">
        <div class="main_slide_l">
            <h2 class="tit_h2 ff_pop d-none d-lg-block">End-to-End<br>Solutions for Remote<br>Patient Monitoring</h2>
            <h2 class="tit_h2 ff_pop d-block d-lg-none">End-to-End Solution<br>for Remote Patient Monitoring</h2>
            <p class="fs_20 fs_18m mt-3">씨어스는 웨어러블 의료기기를 이용한 <br>진단과 모니터링 솔루션을 제공합니다.</p>
            <div class="main_slide_btn">
                <a class="prev" id="aro1_prev"><img src="https://seerstech.com/img/arrow2_l.png" alt="prev"></a>
                <a class="next" id="aro1_next"><img src="https://seerstech.com/img/arrow2_r.png" alt="next"></a>
            </div>
        </div>


        <div class="slider variable-width">

            <div>
                <img src="https://seerstech.com/img/main_img7.png" alt="" />
                <p class="main_slide_txt  ">모니터링 대시보드</p>
            </div>
            <div>
                <img src="https://seerstech.com/img/main_img8.png" alt="" />
                <p class="main_slide_txt">진단리포트</p>
            </div>
            <div>
                <img src="https://seerstech.com/img/main_img9.png?v=20230512" alt="" />
                <p class="main_slide_txt">게이트웨이</p>
            </div>
            <div>
                <img src="https://seerstech.com/img/main_img10.png" alt="" />
                <p class="main_slide_txt">웨어러블 심전도(ECG) 패치</p>
            </div>
            <div>
                <img src="https://seerstech.com/img/main_img11.png" alt="" />
                <p class="main_slide_txt">웨어러블 체온 패치</p>
            </div>
            <div>
                <img src="https://seerstech.com/img/main_img12.png" alt="" />
                <p class="main_slide_txt">웨어러블 산소포화도(SpO2) 센서</p>
            </div>
            <div>
                <img src="https://seerstech.com/img/main_img13.png" alt="" />
                <p class="main_slide_txt">진단 지원 소프트웨어</p>
            </div>
            <div>
                <img src="https://seerstech.com/img/main_img14.png" alt="" />
                <p class="main_slide_txt">의료 인공지능</p>
            </div>

        </div>


    </div>
    <script>
        $('.variable-width').slick({
            dots: false,
            arrows: true,
            prevArrow: $('#aro1_prev'),
            nextArrow: $('#aro1_next'),
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 400,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
            responsive: [{
                breakpoint: 576,
                settings: {
                    centerMode: true,
                }
            }]
        });
    </script>

    <!-- 솔루션 -->
    <div class="main_solution12">
        <img src="https://seerstech.com/img/main_bg01.jpg" alt="" style="width:100%" />
    </div>
    <div class="main_solution1">
        <div class="container">
            <p class="oursol">OUR SOLUTIONS</p>
            <p data-aos="zoom-in"><img src="https://seerstech.com/img/txt_mobi.png?v=20230405" alt="mobi로고" class="m_solution_l" /></p>
            <p data-aos="zoom-in" class="m_solution_tit2">웨어러블 심전도 분석 솔루션</p>
            <div class="d-flex msol1" style="display:flex;">
                <div data-aos="flip-left">
                    <p><img src="https://seerstech.com/img/msol01.png" alt="" /></p>
                    <div><b class="d-block m_solution_tit">웨어러블 심전도 패치</b>
                        <p>국내에서 가장 많이 선택된<br>
                            웨어러블 심전도 패치</p>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-delay="200">
                    <p><img src="https://seerstech.com/img/msol02.png" alt="" /></p>
                    <div><b class="d-block m_solution_tit"> 판독 프로그램</b>
                        <p>임상으로 증명된<br>
                            AI 기반 판독 프로그램</p>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-delay="300">
                    <p><img src="https://seerstech.com/img/msol03.png" alt="" /></p>
                    <div><b class="d-block m_solution_tit">분석 리포트</b>
                        <p>부정맥 진단을 위한 <br>
                            심전도 분석 리포트
                        </p>
                    </div>
                </div>
            </div>

            <div class="text-center" data-aos="zoom-in">
                <a href="javascript:;" class="btn_st1"><span class="ff_pop">View more <img src="https://seerstech.com/img/arrow1.png" alt="" /></span></a>
            </div>

        </div>

    </div>
    <div class="main_solution12">
        <img src="https://seerstech.com/img/main_bg03.jpg" alt="" style="width:100%" />
    </div>
    <div class="main_solution2">
        <div class="container">
            <p data-aos="zoom-in"><img src="https://seerstech.com/img/txt_thync.svg?v=20230405" alt="thync로고" class="m_solution_l" /></p>
            <p data-aos="zoom-in" class="m_solution_tit2">실시간 입원 환자 모니터링 솔루션</p>
            <div class="d-flex msol1 msol2">
                <div data-aos="flip-left">
                    <p><img src="https://seerstech.com/img/msol04.png" alt="" /></p>
                    <div><b class="d-block m_solution_tit fc_or_l">생체신호 모니터링 시스템</b>
                        <p>병실과 병동을 실시간 연결하는<br>
                            생체신호 모니터링 시스템</p>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-delay="200">
                    <p><img src="https://seerstech.com/img/msol05.png" alt="" /></p>
                    <div><b class="d-block m_solution_tit fc_or_l">스마트 의료 환경</b>
                        <p>사물인터넷(IoT)과 센서를 이용한<br>
                            스마트 의료 환경 구축</p>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-delay="200">
                    <p><img src="https://seerstech.com/img/msol06.png" alt="" /></p>
                    <div><b class="d-block m_solution_tit fc_or_l">AI 분석 시스템</b>
                        <p>환자의 상태 변화 추이를 탐색하는<br>
                            AI 분석 시스템 탑재</p>
                    </div>
                </div>
            </div>

            <div class="text-center" data-aos="zoom-in">
                <a href="javascript:;" class="btn_st1"><span class="ff_pop">View more <img src="https://seerstech.com/img/arrow1.png" alt="" /></span></a>
            </div>

        </div>

    </div>
    <div class="main_solution12">
        <img src="https://seerstech.com/img/main_bg04.jpg" alt="" style="width:100%" />
    </div>

    <div class="container">
        <div class="  main_new_wrap">
            <div class="main_new_txt" data-aos="zoom-in">
                <img src="https://seerstech.com/img/ico_mike.png" alt="" /><br>
                <h2 class="tit_h2 mt-3">
                    언론과 함께하는<br>
                    씨어스 소식<span class="fc_primary">.</span></h2>
                <!-- <p class="fs_22 fs_18m mt-4">씨어스는 언제나 스마트의료시스템 혁신에 앞장섭니다.</p> -->
                <p><a href="javascript:;" class="btn_st2">View more <span class="bg-primary
                text-white  rounded-circle"><i class="fa fa-arrow-right fs_14"></i></span></a></p>
            </div>
            <div id="main_new_box">
                <div class="main_new aos-init" data-aos="fade-down" data-aos-delay="300" data-aos-duration="500">
                    <div class=" ">
                        <div class="new_box">
                            <p class=""><span class="deco fs_14 bg_or px-3 py-2 rounded fc_primary">보도자료</span> </p>
                            <p class="line_text mt-2 mb-4 fs_22 fw_600 fs_18m">씨어스 "하루에 500~600명 모비케어로 검사... 8월 초 상장 예비심사 진행"</p>
                            <a href="javascript:;">
                                <div class="rect2">
                                    <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                    <img src="https://seerstech.com/img/blank_img.jpg" alt="씨어스 " 하루에="" 500~600명="" 모비케어로="" 검사...="" 8월="" 초="" 상장="" 예비심사="" 진행""="">
                                </div>
                            </a>
                        </div>
                        <div class="new_box">
                            <p class=""><span class="deco fs_14 bg_or px-3 py-2 rounded fc_primary">보도자료</span> </p>
                            <p class="line_text mt-2 mb-4 fs_22 fw_600 fs_18m">"웨어러블 심전도 검사기로 우울증·난임 치료 돕는다"</p>
                            <a href="javascript:;">
                                <div class="rect2">
                                    <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                    <img src="https://seerstech.com/images/uploads/pt_file1_35.jpg" alt="" 웨어러블="" 심전도="" 검사기로="" 우울증·난임="" 치료="" 돕는다""="">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class=" ">
                        <div class="new_box">
                            <p class=""><span class="deco fs_14 bg_or px-3 py-2 rounded fc_primary">보도자료</span> </p>
                            <p class="line_text mt-2 mb-4 fs_22 fw_600 fs_18m">“웨어러블 심전도 기기, 심방세동 선별검사 대안으로 기대”</p>
                            <a href="javascript:;">
                                <div class="rect2">
                                    <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                    <img src="https://seerstech.com/images/uploads/pt_file1_34.jpg" alt="“웨어러블 심전도 기기, 심방세동 선별검사 대안으로 기대”">
                                </div>
                            </a>
                        </div>
                        <div class="new_box">
                            <p class=""><span class="deco fs_14 bg_or px-3 py-2 rounded fc_primary">보도자료</span> </p>
                            <p class="line_text mt-2 mb-4 fs_22 fw_600 fs_18m">화순전남대병원, ' 미래 의료연구단' 만들고 디지털 헬스케어 준비</p>
                            <a href="javascript:;">
                                <div class="rect2">
                                    <img src="https://seerstech.com/img/bb_img.png" alt="hover효과" class="hoverimg">
                                    <img src="https://seerstech.com/images/uploads/pt_file1_33.jpg" alt="화순전남대병원, ' 미래 의료연구단' 만들고 디지털 헬스케어 준비">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
`;