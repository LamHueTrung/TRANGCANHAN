import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Main/main.css';

import { GiSelfLove } from 'react-icons/gi';
import { IoMdCheckboxOutline } from 'react-icons/io';
import Header from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import img from '../../../assets/img/img (1).jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../../assets/css/chitiet.css';

const ChiTietDonHang = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="">
            <Header />
            <div class="container text-center">
                <div className="row ">
                    <div className="col mt-7rem">
                        <div class="card">
                            <img src={img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Website bán quần áo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-7rem">
                        <h2>[Mã code: 012345]</h2>
                        <div className="d-flex">
                            <div className="title">
                                <h2>Phí tải:</h2>
                                <h2>Ngôn ngữ:</h2>
                                <h2>Thể loại:</h2>
                                <h2>Ngày đăng:</h2>
                                <h2>Loại file</h2>
                            </div>
                            <div className="info">
                                <h2>200 xu</h2>
                                <h2>PHP & SQL</h2>
                                <h2>Website</h2>
                                <h2>05-03-2024</h2>
                                <h2>Full code</h2>
                            </div>
                            <div className="button-chitiet">
                                <button
                                    type="button"
                                    class="btn btn-danger mt-2"
                                >
                                    {' '}
                                    <GiSelfLove />
                                    Yêu thích
                                </button>
                                <Link to={`/ShopWeb/ThanhToan/:slug`}>
                                    <button
                                        type="button"
                                        class="btn btn-success mt-2"
                                    >
                                        Mua Ngay
                                    </button>
                                </Link>
                                <button
                                    type="button"
                                    class="btn btn-secondary mt-2"
                                >
                                    Xem Demo
                                </button>
                            </div>
                        </div>
                        <div class="border border-info p-15px mt-4">
                            <div className="d-flex">
                                <h2 className="w-50">
                                    <IoMdCheckboxOutline /> Code đã kiểm thử
                                </h2>
                                <h2 className="w-50">
                                    <IoMdCheckboxOutline /> Không chứa mã độc
                                </h2>
                            </div>
                            <div className="d-flex">
                                <h2 className="w-50">
                                    <IoMdCheckboxOutline /> Có demo thực tế
                                </h2>
                                <h2 className="w-50">
                                    <IoMdCheckboxOutline /> Có hướng dẫn cài đặt
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <span className="mo-ta-chi-tiet">MÔ TẢ CHI TIẾT</span>
                    <div className="border-mo-ta">
                        <textarea
                            className="thong-tin-mo-ta"
                            readOnly
                        ></textarea>
                    </div>
                </div>
                <div className="row">
                    <span className="huong-dan-cai-dat">HƯỚNG DẪN CÀI ĐẶT</span>
                    <div className="border-mo-ta">
                        <textarea
                            className="thong-tin-mo-ta"
                            readOnly
                        ></textarea>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ChiTietDonHang;
