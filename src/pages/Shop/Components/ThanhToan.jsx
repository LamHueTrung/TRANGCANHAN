import React, { useEffect } from 'react';
import '../Main/main.css';

import { GiSelfLove } from 'react-icons/gi';
import { IoMdCheckboxOutline } from 'react-icons/io';
import Header from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../../assets/css/chitiet.css';
import '../../../assets/css/thanhtoan.css';
import QR_TT from '../../../assets/img/QR_TT.jpg';

const ThanhToanDonHang = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="">
            <Header />
            <div class="container text-center">
                <div className="row mb-4">
                    <div className="col mt-7rem mb-2">
                        <h2>[THÔNG TIN KHÁCH HÀNG]</h2>
                        <div className="d-flex mt-4">
                            <div className="title">
                                <h2 className="mt-2">Họ tên:</h2>
                                <h2 className="mt-3">Số điện thoại:</h2>
                                <h2 className="mt-3">Email:</h2>
                                <h2 className="mt-3">Công việc:</h2>
                            </div>
                            <div className="info w-70">
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
                        <h2 className="mt-4">[THÔNG TIN CHUYỂN KHOẢN]</h2>
                        <div className="d-flex">
                            <div className="title">
                                <h2>Chủ tài khoản:</h2>
                                <h2>Số tài khoản:</h2>
                                <h2>Ngân hàng:</h2>
                                <h2>Số tiền:</h2>
                                <h2 className="w-100">Nội dung:</h2>
                            </div>
                            <div className="info w-70">
                                <h2>Lâm Huệ Trung </h2>
                                <h2>0770109396411</h2>
                                <h2>Sacombank</h2>
                                <h2>xxxxxxxxx</h2>
                                <h2>LHTS-12345</h2>
                            </div>
                        </div>
                        <div>
                            <img className="w-70" src={QR_TT} alt="" />
                        </div>
                    </div>
                    <div className="col mt-7rem">
                        <h2>[THÔNG TIN ĐƠN HÀNG]</h2>
                        <div class="border border-info p-15px mt-4">
                            <h2>[Mã code: 012345]</h2>
                            <div className="d-flex">
                                <div className="title-thanhtoan">
                                    <h2>Tên website:</h2>
                                    <h2>Phí tải:</h2>
                                    <h2>Ngôn ngữ:</h2>
                                    <h2>Thể loại:</h2>
                                    <h2>Ngày đăng:</h2>
                                    <h2>Loại file</h2>
                                </div>
                                <div className="info-thanhtoan">
                                    <h2>Website bán quần áo</h2>
                                    <h2>200 xu</h2>
                                    <h2>PHP & SQL</h2>
                                    <h2>Website</h2>
                                    <h2>05-03-2024</h2>
                                    <h2>Full code</h2>
                                </div>
                            </div>
                        </div>
                        <div class="border border-info p-15px mt-4">
                            <h2>[THANH TOÁN]</h2>
                            <h2>
                                Vui lòng chuyển khoản đúng THÔNG TIN CHUYỂN
                                KHOẢN. Trường hợp quét mã QR vui lòng nhập số
                                tiền và nội dung chuyển khoản. <br />
                                Sau khi chuyển khoản vui lòng chờ trong giây
                                lát, đơn hàng sẽ tự động cập nhật khi quá trình
                                chuyển khoản thành công.
                            </h2>
                            <h2>[TRƯỜNG HỢP LỖI]</h2>
                            <h2>
                                Vui lòng lưu lại thông tin chuyển khoản và gởi
                                đến mail - lamhuetrung@gmail.com. Chúng tôi sẽ
                                phản hồi trong thời gian sớm nhất. Xin cảm ơn.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ThanhToanDonHang;
