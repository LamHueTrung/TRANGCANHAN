import React, { useEffect } from 'react';
import '../Main/main.css';

import { GiSelfLove } from 'react-icons/gi';
import { FaCheck } from 'react-icons/fa';
import Header from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import img from '../../../assets/img/img (1).jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../../assets/css/thietkeweb.css';

const ChiTietDonHang = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="">
            <Header />
            <div class="container text-center">
                <div className="row mb-4">
                    <div className="col mt-7rem mb-2">
                        <h2 className="THANKS">
                            CẢM ƠN BẠN ĐÃ TIN TƯỞNG VÀ SỬ DỤNG DỊCH VỤ CỦA SHOP
                        </h2>
                        <h2>[THÔNG TIN KHÁCH HÀNG]</h2>
                        <div className="d-flex mt-4">
                            <div className="title">
                                <h2 className="mt-2">Họ tên:</h2>
                                <h2 className="mt-3">Số điện thoại:</h2>
                                <h2 className="mt-3">Email:</h2>
                                <h2 className="mt-3">Công việc:</h2>
                            </div>
                            <div className="info w-75">
                                <h2>
                                    <input
                                        className="w-100"
                                        type="text"
                                        placeholder="Họ tên người mua"
                                    />
                                </h2>
                                <h2>
                                    <input
                                        className="w-100"
                                        type="text"
                                        placeholder="Số điện thoại"
                                    />
                                </h2>
                                <h2>
                                    <input
                                        className="w-100"
                                        type="text"
                                        placeholder="Địa chỉ Email"
                                    />
                                </h2>
                                <h2>
                                    <input
                                        className="w-100"
                                        type="text"
                                        placeholder="Học sinh, công ty, v.v"
                                    />
                                </h2>
                            </div>
                        </div>
                        <h2 className="mt-4">[THÔNG TIN ĐẶT HÀNG]</h2>
                        <div className="d-flex mt-4">
                            <div className="title">
                                <h2 className="mt-2">Loại website:</h2>
                                <h2 className="mt-3">Nội dung chính:</h2>
                                <h2 className="mt-3">Mô tả chi tiết:</h2>
                            </div>
                            <div className="info w-70">
                                <h2>
                                    <input
                                        className="w-100"
                                        type="text"
                                        placeholder="Bán hàng, blog, v.v"
                                    />
                                </h2>
                                <h2>
                                    <input
                                        className="w-100"
                                        type="text"
                                        placeholder="Điện thoại, quần áo, giới thiệu sản phẩm, v.v"
                                    />
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-mo-ta w-95">
                                <textarea className="thong-tin-mo-ta-dat-hang"></textarea>
                            </div>
                        </div>
                        <div className="float-left">
                            <button type="button" class="btn btn-danger mt-2">
                                <FaCheck className="mr-4" />
                                Đặt hàng
                            </button>
                        </div>
                        <div></div>
                    </div>
                    <div className="col mt-7rem">
                        <h2>[BẢNG GIÁ CHUNG]</h2>
                        <div class="border border-info p-15px mt-4">
                            <div className="d-flex">
                                <div className="title-thanhtoan">
                                    <h2>Loại website:</h2>
                                    <h2>Giá bán chung:</h2>
                                    <h2>Giá thuê:</h2>
                                    <h2>Chức năng:</h2>
                                    <h2>Quyền lợi:</h2>
                                </div>
                                <div className="info-thanhtoan">
                                    <h2>BÁN HÀNG</h2>
                                    <h2>20.000.000vnđ</h2>
                                    <h2>300.000vnđ/tháng</h2>
                                    <h2>Liên hệ để trao đổi.</h2>
                                    <h2>Khắc phục lỗi miễn phí năm đầu.</h2>
                                    <h2>Quản lý source (nếu yêu cầu).</h2>
                                    <h2>Có source code trang website.</h2>
                                    <h2>Huấn luyện sử dụng trang website.</h2>
                                </div>
                            </div>
                        </div>
                        <div class="border border-info p-15px mt-4">
                            <div className="d-flex">
                                <div className="title-thanhtoan">
                                    <h2>Loại website:</h2>
                                    <h2>Giá bán chung:</h2>
                                    <h2>Giá thuê:</h2>
                                    <h2>Chức năng:</h2>
                                    <h2>Quyền lợi:</h2>
                                </div>
                                <div className="info-thanhtoan">
                                    <h2>BLOG</h2>
                                    <h2>10.000.000vnđ</h2>
                                    <h2>200.000vnđ/tháng</h2>
                                    <h2>Liên hệ để trao đổi.</h2>
                                    <h2>Khắc phục lỗi miễn phí năm đầu.</h2>
                                    <h2>Quản lý source (nếu yêu cầu).</h2>
                                    <h2>Có source code trang website.</h2>
                                    <h2>Huấn luyện sử dụng trang website.</h2>
                                </div>
                            </div>
                        </div>
                        <div class="border border-info p-15px mt-4">
                            <div className="d-flex">
                                <div className="title-thanhtoan">
                                    <h2>Loại website:</h2>
                                    <h2>Giá bán chung:</h2>
                                    <h2>Chức năng:</h2>
                                    <h2>Quyền lợi:</h2>
                                </div>
                                <div className="info-thanhtoan">
                                    <h2>ĐỒ ÁN</h2>
                                    <h2>500.000vnđ</h2>
                                    <h2>Liên hệ để trao đổi.</h2>
                                    <h2>Có hoàn toàn source code.</h2>
                                    <h2>Có tài liệu tham khảo.</h2>
                                    <h2>File ppt thuyết trình.</h2>
                                    <h2>
                                        Có file chi tiết về ngôn ngữ, cách thức
                                        vận hành, các thành phần, cách thức điều
                                        chỉnh, chú thích trong code.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ChiTietDonHang;
