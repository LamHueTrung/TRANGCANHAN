import React, { useEffect, useState  } from 'react';

import Header from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import { FaRegCheckCircle } from "react-icons/fa";
import { IoNotificationsCircleOutline } from "react-icons/io5";

import imgEcommerce from '../../../assets/img/WebEcommerce.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../../assets/css/banggia.css';

const ChiTietDonHang = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const [content, setContent] = useState('');
    const [content2, setContent2] = useState('');

    useEffect(() => {
      const initialContent = `
Khách hàng được miễn phí hosting và chi phí sửa chữa, bảo trì trong 1 năm đầu. Tuy nhiên, từ năm thứ 2 trở đi, khách hàng cần phải thanh toán phí hosting với giá trị được ghi trong hợp đồng.\n
Hỗ trợ sửa chữa, bảo trì miễn phí các chức năng, giao diện đã trao đổi trong năm đầu. Những trường hợp thêm chức năng, giao diện mới không được ghi trong hợp đồng sẽ phải trả thêm phí.\n
Từ năm thứ 2 trở đi, mọi nâng cấp, bảo trì trang website điều tính phí và được ghi rõ trong hợp đồng.\n
Giá trị phải trả sẽ thay đổi (tăng, giảm) tuỳ theo thiết kế giao diện và chức năng. Nên giá trị khi mua có thể giảm hoặc tăng thêm.\n
Khi đặt hàng, shop sẽ liên hệ thông qua số điện thoại hoặc zalo (hoặc gặp mặt) với khách hàng để trao đổi chi tiết và thống nhất.\n
Sau khi hoàn thành thoả thuận, bên shop sẽ đưa ra bảng hợp đồng và bên mua phải ký kết.`;
      setContent(initialContent);
      const initialContent2= `
Shop làm website với ý nghĩa là bán sản phẩm cho khách hàng, KHÔNG LÀM DÙM ĐỒ ÁN. Việc trao đổi này mang ý nghĩa shop viết 1 trang website đơn giản phù hợp với làm đồ án. \n
Nếu nhà trường biết sinh viên sử dụng 100% website mua từ trang website vẫn có thể bị đánh rớt. \n
Sau khi mua, sinh viên cần điều chỉnh lại để phù hợp với trường và kế hoạch cũng như đề tài mà sinh viên đã chọn.\n
Sản phẩm chỉ có ý nghĩa làm bài mẫu cho sinh viên phát triển thêm để hoàn thành bài báo cáo của mình. 
      `;
      setContent2(initialContent2);

    }, []);
    return (
        <div className="">
            <Header />
            <div class="container text-center mb-4">
                <div className="row mb-4">
                    <div className="col mt-7rem mb-2">
                        <h2 className="THANKS">
                            CẢM ƠN BẠN ĐÃ TIN TƯỞNG VÀ SỬ DỤNG DỊCH VỤ CỦA SHOP
                        </h2>
                        <h2 className="bang-gia">
                            BẢNG GIÁ THIẾT KẾ WEBSITE
                        </h2>
                    </div>
                </div>
                    <div class="row" data-aos="fade-up">
                        <div class="col-sm">
                            <div class="card border-mo-ta">
                                <img class="card-img-top" src={imgEcommerce} alt="" />
                                <div class="card-body">
                                    <p class="card-text title">THIẾT KẾ WEB BÁN HÀNG</p>
                                    <p class="card-text lance">20 000 000 VNĐ</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Chức năng tuỳ chỉnh theo yêu cầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/> Giao diện tuỳ chỉnh theo yêu cầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Quản lý source web (nếu yêu cầu).</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Có source code trang website.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Miễn phí hosting trong năm đầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Hỗ trợ kỹ thuật miễn phí trong năm đầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Huấn luyện sử dụng trang website.</p>
                                    <p class="card-text chu-thich">Bạn có thể xem mẫu website trong trang SHOP WEB.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card border-mo-ta">
                                <img class="card-img-top" src={imgEcommerce} alt="" />
                                <div class="card-body">
                                    <p class="card-text title">THIẾT KẾ WEB BLOG</p>
                                    <p class="card-text lance">10 000 000 VNĐ</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Chức năng tuỳ chỉnh theo yêu cầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/> Giao diện tuỳ chỉnh theo yêu cầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Quản lý source web (nếu yêu cầu).</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Có source code trang website.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Miễn phí hosting trong năm đầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Hỗ trợ kỹ thuật miễn phí trong năm đầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Huấn luyện sử dụng trang website.</p>
                                    <p class="card-text chu-thich">Bạn có thể xem mẫu website trong trang SHOP WEB.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card border-mo-ta">
                                <img class="card-img-top" src={imgEcommerce} alt="" />
                                <div class="card-body">
                                    <p class="card-text title">THIẾT KẾ WEB TRƯỜNG HỌC</p>
                                    <p class="card-text lance">15 000 000 VNĐ</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Chức năng tuỳ chỉnh theo yêu cầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Có source code trang website.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Có file thuyết trình.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Có giải thích code.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Có tài liệu về ngôn ngữ, famework.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Hướng dẫn vận hành trang website.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Hướng dẫn điều chỉnh trang website.</p>
                                    <p class="card-text chu-thich">Bạn có thể xem mẫu website trong trang SHOP WEB.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" data-aos="fade-up"> 
                        <div class="col-sm">
                            <div class="card border-mo-ta">
                                <img class="card-img-top" src={imgEcommerce} alt="" />
                                <div class="card-body">
                                    <p class="card-text title">THIẾT KẾ WEB ĐỒ ÁN</p>
                                    <p class="card-text lance">500 000 VNĐ</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Chức năng tuỳ chỉnh theo yêu cầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Có source code trang website.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Có file thuyết trình.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Hướng dẫn vận hành trang website.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Hướng dẫn điều chỉnh trang website.</p>
                                    <p class="card-text chu-thich">Bạn có thể xem mẫu website trong trang SHOP WEB.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card border-mo-ta">
                                <img class="card-img-top" src={imgEcommerce} alt="" />
                                <div class="card-body">
                                    <p class="card-text title">THUÊ WEB BÁN HÀNG</p>
                                    <p class="card-text lance">300 000 VNĐ/THÁNG</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Chức năng tuỳ chỉnh theo yêu cầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/> Giao diện tuỳ chỉnh theo yêu cầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Miễn phí hosting trong năm đầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Hỗ trợ kỹ thuật miễn phí trong năm đầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Huấn luyện sử dụng trang website.</p>
                                    <p class="card-text chu-thich">Bạn có thể xem mẫu website trong trang SHOP WEB.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card border-mo-ta">
                                <img class="card-img-top" src={imgEcommerce} alt="" />
                                <div class="card-body">
                                    <p class="card-text title">THUÊ WEB BLOG</p>
                                    <p class="card-text lance">200 000 VNĐ/THÁNG</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Chức năng tuỳ chỉnh theo yêu cầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/> Giao diện tuỳ chỉnh theo yêu cầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Miễn phí hosting trong năm đầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Hỗ trợ kỹ thuật miễn phí trong năm đầu.</p>
                                    <p class="card-text chuc-nang"><FaRegCheckCircle className='icon'/>Huấn luyện sử dụng trang website.</p>
                                    <p class="card-text chu-thich">Bạn có thể xem mẫu website trong trang SHOP WEB.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-ms" data-aos="fade-up">
                            <h2 className="bang-gia">
                                THÔNG TIN BỔ ÍCH
                            </h2>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <span className="mo-ta-chi-tiet">MUA & THUÊ WEBSITE</span>
                        <div className="border-mo-ta">
                            <textarea
                                className="thong-tin-mo-ta"
                                readOnly
                                type="textbox"
                                value={content}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <span className="mo-ta-chi-tiet">WEBSITE LÀM ĐỒ ÁN</span>
                        <div className="border-mo-ta mh-175px">
                            <textarea
                                className="thong-tin-mo-ta"
                                readOnly
                                type="textbox"
                                value={content2}
                            >
                            </textarea>
                        </div>
                    </div>
                    
            </div>
            <Footer />
        </div>
    );
};

export default ChiTietDonHang;
