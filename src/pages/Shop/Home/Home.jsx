import React, { useEffect } from 'react';
import './home.css';
import video from '../../../assets/video/video.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import { IoIosSearch } from 'react-icons/io';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <section className="home">
                <div className="overlay"></div>
                <video src={video} muted autoPlay loop type="video/mp4"></video>
                <div className="homeContent container">
                    <div className="textDiv">
                        <span data-aos="fade-up" className="smallText">
                            Thiết kế website
                        </span>
                        <h1 data-aos="fade-up" className="homeTitle">
                            TÌM KIẾM WEBSITE PHÙ HỢP
                        </h1>
                    </div>
                    <div data-aos="fade-up" className="cardDiv grid">
                        <div className="destinationInput">
                            <label htmlFor="city">Chọn kiểu </label>
                            <div className="input flex">
                                <select className="input select" name="" id="">
                                    <option value="">BLOG</option>
                                    <option value="">BÁN HÀNG</option>
                                    <option value="">KHÁC</option>
                                </select>
                            </div>
                        </div>

                        <div className="dateInput">
                            <label htmlFor="date">Lựa chọn ngôn ngữ</label>
                            <div className="input flex">
                                <select className="input select" name="" id="">
                                    <option value="">PHP & SQL</option>
                                    <option value="">REATJS</option>
                                    <option value="">NODEJS</option>
                                </select>
                            </div>
                        </div>

                        <div className="priceInput">
                            <div className="label_total flex">
                                <label htmlFor="price">Chọn giá:</label>
                                <h3 className="total">10.000.000vnđ</h3>
                            </div>
                            <div className="input flex">
                                <input type="range" max="5000" min="1000" />
                            </div>
                        </div>

                        <div className="searchOptions flex">
                            <HiFilter className="icon" />
                            <span>TÌM KIẾM</span>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="homeFooterIcons flex">
                        <div className="rightIcons">
                            <FiFacebook className="icon" />
                            <AiOutlineInstagram className="icon" />
                            <SiZalo className="icon" />
                        </div>
                        <div className="leftIcons">
                            <BsListTask className="icon" />
                            <TbApps className="icon" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
