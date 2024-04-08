import {Link, useNavigate } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

import '../../assets/css/storyhome.css';
import '../../assets/css/main.css';
import '../../assets/css/base.css';

import { MdOutlineNavigateNext } from "react-icons/md";
function Story() {
    return (
        <div className="">
            <Header />
            <div class="container pd-005 ">
                <div class="row">
                    <div class="col-3 mb-4 mt-4" data-aos="fade-right"> 
                        <ul class="list-group">
                            <li class="list-group-item menu">Tất cả bài viết</li>
                            <li class="list-group-item menu">Tin học văn phòng</li>
                            <li class="list-group-item menu">Lập trình</li>
                            <li class="list-group-item menu">Bài tập luyện code</li>
                            <li class="list-group-item menu">Bài viết khác khác</li>
                        </ul>
                        <ul class="list-group mt-2">
                            <li class="list-group-item menu">Bài viết đã thích</li>
                            <li class="list-group-item menu">Bài viết của bạn</li>
                        </ul>
                    </div>

                    <div class="col-sm mt-4 mb-4">
                        
                        <ul class="list-group">
                            <li class="list-group-item d-flex mb-2"  data-aos="fade-up">
                                <img className='img-story w-15' src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/169249/Originals/website-la-gi-01.jpeg" alt="" />
                                <div className='content-story'>
                                    <span className='dated-story d-block w-100'>06/03/2024</span>
                                    <h2 className='mt-3'>RESTful API là gì? Cách thiết kế RESTful API</h2>
                                    <span className='user-story'>
                                        <img className='avt-user' src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/403620452_1481526516026118_6855197614467344014_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqefGS0z5KdSa_-9QuV2OPPGrdzVPmrhE8at3NU-auEQUqOgPwraabbrvoip8nEddkqTFd0QBVVCUG6wFNT0js&_nc_ohc=7D3vp7yhMwsAb7vWeho&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAsQYTo5p1aIByHxk_Lf038wlXHNCFjJvtH-rYA6g3Zuw&oe=6619E116" alt="" />
                                        <span className='user-name'>Lâm Huệ Trung</span>
                                    </span>
                                </div>
                                <Link className='next-story' to={`/BaiViet/Chitiet/:slug`}><MdOutlineNavigateNext /></Link>
                            </li>
                            <li class="list-group-item d-flex mb-2 "  data-aos="fade-up">
                                <img className='img-story w-15' src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/169249/Originals/website-la-gi-01.jpeg" alt="" />
                                <div className='content-story'>
                                    <span className='dated-story d-block w-100'>06/03/2024</span>
                                    <h2 className='mt-3'>Đệ Quy | Tính Sum = X+X^1+X^2+...+X^n không dùng for, while, do-while | LHT</h2>
                                    <span className='user-story'>
                                        <img className='avt-user' src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/403620452_1481526516026118_6855197614467344014_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqefGS0z5KdSa_-9QuV2OPPGrdzVPmrhE8at3NU-auEQUqOgPwraabbrvoip8nEddkqTFd0QBVVCUG6wFNT0js&_nc_ohc=7D3vp7yhMwsAb7vWeho&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAsQYTo5p1aIByHxk_Lf038wlXHNCFjJvtH-rYA6g3Zuw&oe=6619E116" alt="" />
                                        <span className='user-name'>Lâm Huệ Trung</span>
                                    </span>
                                </div>
                                <Link className='next-story' to={`http://localhost:3000/BaiViet/ChitietVideo/:slug`}><MdOutlineNavigateNext /></Link>
                            </li>
                            <li class="list-group-item d-flex mb-2 "  data-aos="fade-up">
                                <img className='img-story w-15' src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/169249/Originals/website-la-gi-01.jpeg" alt="" />
                                <div className='content-story'>
                                    <span className='dated-story d-block w-100'>06/03/2024</span>
                                    <h2 className='mt-3'>RESTful API là gì? Cách thiết kế RESTful API</h2>
                                    <span className='user-story'>
                                        <img className='avt-user' src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/403620452_1481526516026118_6855197614467344014_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqefGS0z5KdSa_-9QuV2OPPGrdzVPmrhE8at3NU-auEQUqOgPwraabbrvoip8nEddkqTFd0QBVVCUG6wFNT0js&_nc_ohc=7D3vp7yhMwsAb7vWeho&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAsQYTo5p1aIByHxk_Lf038wlXHNCFjJvtH-rYA6g3Zuw&oe=6619E116" alt="" />
                                        <span className='user-name'>Lâm Huệ Trung</span>
                                    </span>
                                </div>
                                <Link className='next-story' to={`/BaiViet/Chitiet/:slug`}><MdOutlineNavigateNext /></Link>
                            </li>
                            <li class="list-group-item d-flex mb-2 "  data-aos="fade-up">
                                <img className='img-story w-15' src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/169249/Originals/website-la-gi-01.jpeg" alt="" />
                                <div className='content-story'>
                                    <span className='dated-story d-block w-100'>06/03/2024</span>
                                    <h2 className='mt-3'>RESTful API là gì? Cách thiết kế RESTful API</h2>
                                    <span className='user-story'>
                                        <img className='avt-user' src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/403620452_1481526516026118_6855197614467344014_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqefGS0z5KdSa_-9QuV2OPPGrdzVPmrhE8at3NU-auEQUqOgPwraabbrvoip8nEddkqTFd0QBVVCUG6wFNT0js&_nc_ohc=7D3vp7yhMwsAb7vWeho&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAsQYTo5p1aIByHxk_Lf038wlXHNCFjJvtH-rYA6g3Zuw&oe=6619E116" alt="" />
                                        <span className='user-name'>Lâm Huệ Trung</span>
                                    </span>
                                </div>
                                <Link className='next-story' to={`/BaiViet/Chitiet/:slug`}><MdOutlineNavigateNext /></Link>
                            </li>
                        </ul>
                        <nav aria-label="Page navigation mt-4" data-aos="fade-up">
                            <ul class="pagination">
                                <li class="page-item mr-4">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                                </li>
                                <li class="page-item mr-4"><a class="page-link" href="#">1</a></li>
                                <li class="page-item mr-4">
                                <a class="page-link mr-4" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Story;
