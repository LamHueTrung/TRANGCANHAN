import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import '../assets/css/base.css';
import '../assets/css/main.css';
import video from '../assets/video/video.mp4';
import AppDesignLogo from '../assets/img/app-design.png';
import DesignLogo from '../assets/img/graphic-designer.png';
import educationLogo from '../assets/img/scholarship.png';
import calendarLogo from '../assets/img/calendar.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Main() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div class="container">
            <div class="row desktop">
                <video src={video} muted autoPlay loop type="video/mp4"></video>
                <div className="container boder-header">
                    <div class="col" data-aos="zoom-in">
                        <div className="border-top text-center">
                            <img
                                className="icon mt-4"
                                src={AppDesignLogo}
                                alt=""
                            />
                            <h2 className="mt-3">
                                Sở hữu website - Đơn giản & Nhanh chóng.
                            </h2>
                            <h2>Website đa dạng - Lựa chọn phong phú.</h2>
                            <h2 className="mb-4">
                                Sở hữu website - Bắt đầu hành trình kinh doanh.
                            </h2>
                            <Link to={`/ShopWeb/`}>
                                <button
                                    type="button"
                                    class="btn-primary btn mb-2"
                                >
                                    Xem ngay
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div class="col" data-aos="zoom-in">
                        <div className="border-top left text-center">
                            <img
                                className="icon mt-4"
                                src={DesignLogo}
                                alt=""
                            />
                            <h2 className="mt-3">
                                {' '}
                                Đơn giản - Tiện lợi - Hiệu quả.
                            </h2>
                            <h2>Website theo yêu cầu - Niềm tin của bạn.</h2>
                            <h2 className="mb-4">
                                Hãy để website của bạn kể chuyện thương hiệu!
                            </h2>
                            <Link to={`/ShopWeb/ThietKeWeb/:slug`}>
                                <button
                                    type="button"
                                    class="btn-primary btn mb-2"
                                >
                                    Xem ngay
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mobile ">
                <video
                    src={video}
                    className=""
                    muted
                    autoPlay
                    loop
                    type="video/mp4"
                ></video>
                <div className="col " data-aos="zoom-in">
                    <div class="card p-3 bg-transparent border-0">
                        <div class="card-body border mt-4 shadow-sm bg-body-tertiary rounded text-center">
                            <h2 className="mt-3">MUA WEBSITE</h2>
                            <img
                                className="icon mt-4"
                                src={AppDesignLogo}
                                alt=""
                            />
                            <h2 className="mt-3">
                                Sở hữu website - Đơn giản & Nhanh chóng.
                            </h2>
                            <h2>Website đa dạng - Lựa chọn phong phú.</h2>
                            <h2 className="mb-4">
                                Sở hữu website - Bắt đầu hành trình kinh doanh.
                            </h2>
                            <button type="button" class="btn-primary btn mb-2">
                                Xem ngay
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in">
                    <div class="card p-3  bg-transparent border-0">
                        <div class="card-body border mt-4 shadow-sm bg-body-tertiary rounded text-center">
                            <h2 className="mt-3">ĐẶT WEBSITE</h2>
                            <img
                                className="icon mt-4"
                                src={DesignLogo}
                                alt=""
                            />
                            <h2 className="mt-3">
                                {' '}
                                Đơn giản - Tiện lợi - Hiệu quả.
                            </h2>
                            <h2>Website theo yêu cầu - Niềm tin của bạn.</h2>
                            <h2 className="mb-4">
                                Hãy để website của bạn kể chuyện thương hiệu!
                            </h2>
                            <button type="button" class="btn-primary btn mb-2">
                                Xem ngay
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in">
                    <div class="card p-3 bg-transparent border-0">
                        <div class="card-body border mt-4 shadow-sm bg-body-tertiary rounded text-center">
                            <h2 className="mt-3">BÀI VIẾT</h2>
                            <img
                                className="icon mt-4"
                                src={calendarLogo}
                                alt=""
                            />
                            <h2 className="mt-3">
                                Mua website khởi đầu kinh doanh nhanh chóng.
                            </h2>
                            <h2>
                                Source code chất lượng, mở ra cơ hội sáng tạo vô
                                tận.
                            </h2>
                            <h2 className="mb-4">
                                Giao dịch an toàn, minh bạch, hỗ trợ tận tình.
                            </h2>
                            <button type="button" class="btn-primary btn mb-2">
                                Xem ngay
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in">
                    <div class="card p-3 bg-transparent border-0">
                        <div class="card-body border mt-4 shadow-sm bg-body-tertiary rounded text-center">
                            <h2 className="mt-3">KHOÁ HỌC</h2>
                            <img
                                className="icon mt-4"
                                src={educationLogo}
                                alt=""
                            />
                            <h2 className="mt-3">
                                {' '}
                                Bắt đầu hành trình sáng tạo web của bạn.
                            </h2>
                            <h2>
                                Nắm vững kiến thức lập trình, thiết kế web trong
                                vài tháng.
                            </h2>
                            <h2 className="mb-4">
                                Học lập trình, thiết kế web - Dễ dàng hơn bạn
                                tưởng!
                            </h2>
                            <button type="button" class="btn-primary btn mb-2">
                                Xem ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row desktop">
                <div className="col" data-aos="zoom-in">
                    <div class="card-body border mt-4 mb-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded text-center">
                        <h2 className="mt-3">BÀI VIẾT</h2>
                        <img className="icon mt-4" src={calendarLogo} alt="" />
                        <h2 className="mt-3">
                            Mua website khởi đầu kinh doanh nhanh chóng.
                        </h2>
                        <h2>
                            Source code chất lượng, mở ra cơ hội sáng tạo vô
                            tận.
                        </h2>
                        <h2 className="mb-4">
                            Giao dịch an toàn, minh bạch, hỗ trợ tận tình.
                        </h2>
                        <button type="button" class="btn-primary btn mb-2">
                            Xem ngay
                        </button>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in">
                    <div class="card-body border mt-4 mb-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded text-center">
                        <h2 className="mt-3">KHOÁ HỌC</h2>
                        <img className="icon mt-4" src={educationLogo} alt="" />
                        <h2 className="mt-3">
                            {' '}
                            Bắt đầu hành trình sáng tạo web của bạn.
                        </h2>
                        <h2>
                            Nắm vững kiến thức lập trình, thiết kế web trong vài
                            tháng.
                        </h2>
                        <h2 className="mb-4">
                            Học lập trình, thiết kế web - Dễ dàng hơn bạn tưởng!
                        </h2>
                        <button type="button" class="btn-primary btn mb-2">
                            Xem ngay
                        </button>
                    </div>
                </div>
            </div>

            <h1 className="mt-3 mb-4 fs-2" data-aos="fade-right">
                WEBSITE NỔI BẬT
            </h1>
            <div class="row" data-aos="fade-up">
                <div class="col-sm-3  mb-3 mb-sm-0">
                    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card-body">
                            <h5 class="card-title">Website Blog</h5>
                            <img
                                src={AppDesignLogo}
                                class="card-img-top"
                                alt=""
                            />
                            <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" class="btn btn-primary float-left">
                                Xem ngay
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card-body">
                            <h5 class="card-title">Website bán hàng</h5>
                            <img
                                src={AppDesignLogo}
                                class="card-img-top"
                                alt=""
                            />

                            <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" class="btn btn-primary float-left">
                                Xem ngay
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 ">
                    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card-body">
                            <h5 class="card-title">Website môn học</h5>
                            <img
                                src={AppDesignLogo}
                                class="card-img-top"
                                alt=""
                            />

                            <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" class="btn btn-primary float-left">
                                Xem ngay
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 ">
                    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card-body">
                            <h5 class="card-title">Website khác</h5>
                            <img
                                src={AppDesignLogo}
                                class="card-img-top"
                                alt=""
                            />

                            <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" class="btn btn-primary float-left">
                                Xem ngay
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="mt-3 mb-4 fs-2" data-aos="fade-right">
                BÀI VIẾT NỔI BẬT
            </h1>
            <div class="row" data-aos="fade-up">
                <div class="col-sm-3  mb-3 mb-sm-0">
                    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card-body">
                            <img
                                src={AppDesignLogo}
                                class="card-img-top"
                                alt=""
                            />
                            <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" class="btn btn-primary float-left">
                                Xem ngay
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 ">
                    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card-body">
                            <img
                                src={AppDesignLogo}
                                class="card-img-top"
                                alt=""
                            />

                            <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" class="btn btn-primary float-left">
                                Xem ngay
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 ">
                    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card-body">
                            <img
                                src={AppDesignLogo}
                                class="card-img-top"
                                alt=""
                            />

                            <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" class="btn btn-primary float-left">
                                Xem ngay
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 ">
                    <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card-body">
                            <img
                                src={AppDesignLogo}
                                class="card-img-top"
                                alt=""
                            />

                            <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" class="btn btn-primary float-left">
                                Xem ngay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;
