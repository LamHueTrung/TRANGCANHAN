import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { IoMdLogIn } from 'react-icons/io';
import logo from '../assets/img/logo-ngang.png';
import '../assets/css/base.css';
import '../assets/css/footer.css';
import video from '../assets/video/video (2).mp4';
import { FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsChevronRight } from 'react-icons/bs';
import Face from '../assets/img/facebook.png';
import Youtu from '../assets/img/youtube.png';
import Tiktok from '../assets/img/tik-tok.png';
import Gmail from '../assets/img/gmail.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
function Footer() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const currentYear = new Date().getFullYear();
    return (
        <section className="footer">
            <div className="videoDiv">
                <video
                    className="w-100"
                    src={video}
                    loop
                    autoPlay
                    muted
                    type="video/mp4"
                ></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>LIÊN HỆ THIẾT KẾ WEBSITE</small>
                        <h2> QUA SỐ ĐIỆN THOẠI </h2>
                    </div>
                    <div className="inputDiv flex">
                        <input
                            type="text"
                            data-aos="fade-up"
                            placeholder="Nhập số điện thoại"
                        />
                        <button
                            data-aos="fade-up"
                            className="btn flex"
                            type="submit"
                        >
                            GỬI <FiSend className="icon w-100" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <img
                                    data-aos="fade-up"
                                    className="logo"
                                    src={logo}
                                />
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Website của Lâm Huệ Trung - nơi đan xen giữa đam mê
                            và kỹ năng, hứa hẹn sẽ mang đến cho bạn những trải
                            nghiệm thú vị và bổ ích. Hãy truy cập website để
                            khám phá những điều mới mẻ và kết nối với con người
                            đầy nhiệt huyết này!
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <img src={Face} className="icon-ft " />
                            <img src={Youtu} className="icon-ft " />
                            <img src={Tiktok} className="icon-ft " />
                            <img src={Gmail} className="icon-ft " />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="linkGroup"
                        >
                            <span className="groupTitle">MUA WEBSITE</span>

                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Source code
                            </li>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Mẫu website
                            </li>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Thanh toán
                            </li>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Bài viết
                            </li>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="4000"
                            className="linkGroup"
                        >
                            <span className="groupTitle">YÊU CẦU THIẾT KẾ</span>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Bảng giá
                            </li>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Liên hệ
                            </li>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Xem mẫu
                            </li>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Quyền lợi
                            </li>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="5000"
                            className="linkGroup"
                        >
                            <span className="groupTitle">KHOÁ HỌC</span>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Lập trình cơ bản
                            </li>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Lập trình website
                            </li>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Kiến thức khác
                            </li>
                            <li className="footerList flex">
                                <BsChevronRight className="icon" />
                                Bài viết
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>THIẾT KẾ WEBSITE ĐƠN GIẢN - GIÁ TỐT</small>
                        <small>@ COPYRIGHTS - LÂM HUỆ TRUNG</small>
                        <small>{currentYear}</small>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;
