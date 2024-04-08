import {Link, useNavigate } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

import '../../assets/css/storyhome.css';
import '../../assets/css/main.css';
import '../../assets/css/base.css';

import { FaHeart } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";
function Story() {
    return (
        <div className="">
            <Header />
            <div class="container pd-005 ">
                <div class="row">
                    <div class="col-3 mb-4 mt-4">
                        <ul class="list-group">
                            <Link to={`/BaiViet/`}>
                                <li class="list-group-item menu">Tất cả bài viết</li>
                            </Link>
                            <Link to={`/BaiViet/`}>
                                <li class="list-group-item menu">Tin học văn phòng</li>
                            </Link>
                            <Link to={`/BaiViet/`}>
                                <li class="list-group-item menu">Lập trình</li>
                            </Link>
                            <Link to={`/BaiViet/`}>
                                <li class="list-group-item menu">Bài tập luyện code</li>
                            </Link>
                            <Link to={`/BaiViet/`}>
                                <li class="list-group-item menu">Bài viết khác khác</li>
                            </Link>
                        </ul>
                        <ul class="list-group mt-2">
                            <Link>
                                <li class="list-group-item menu">Bài viết đã thích</li>
                            </Link>
                            <Link>
                                <li class="list-group-item menu">Bài viết của bạn</li>
                            </Link>
                        </ul>
                    </div>

                    <div class="col-sm mt-4 mb-4">
                        <div className="container">
                            <div className="row-sm" data-aos="zoom-in">
                                <h2 className="story-title">RESTful API là gì? Cách thiết kế RESTful API</h2>
                                <span className='user-story'>
                                    <img className='avt-user' src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/403620452_1481526516026118_6855197614467344014_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqefGS0z5KdSa_-9QuV2OPPGrdzVPmrhE8at3NU-auEQUqOgPwraabbrvoip8nEddkqTFd0QBVVCUG6wFNT0js&_nc_ohc=7D3vp7yhMwsAb7vWeho&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAsQYTo5p1aIByHxk_Lf038wlXHNCFjJvtH-rYA6g3Zuw&oe=6619E116" alt="" />
                                    <span className='user-name'>Lâm Huệ Trung</span>
                                </span>
                                <div className='d-flex mt-2'>
                                    <span className='dated-story d-block w-100'>06/03/2024</span>
                                    <span><FaHeart className='love-icon'/></span>
                                </div>
                                {/* <iframe className='video-story mt-2' width="100%" height="400px" src="https://www.youtube.com/embed/dk6ZFR_Ebkg?si=gPj4u9NbyaX0n3H9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                                <img className='mt-2 w-100 mb-4' src="https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f3685814.png" alt="" />
                                <textarea className="content" rows={15} readOnly>
                                Hí ae, tôi cũng tên Sơn nhưng mà là newbie còn ông Sơn kia thì trùm rồi :))). Tôi cũng vừa mới đến với lập trình,tôi là sv năm 1. Sau khi nghe truyền thuyết thằng anh sinh năm 96 học cơ khí bách khoa, tôi đã lao đầu ngay vào học code vì nghe bảo ngành được xã hội trọng dụng, nhắc đến là gái chảy nước( một phần là sợ bị tụt hậu-nghe đồn là ngành IT đào thải nhanh lắm). Khoảng thời gian trước đó việc tìm hiểu học về web tôi còn khá lơ mơ vì trên mạng người ta chỉ loạn cả lên ( không có lộ trình rõ ràng). Đó là khi F8 của anh Sơn xuất hiện, với lộ trình rõ ràng, bài học được chia ra rạch ròi, course-mate khá là tậm tâm giúp đỡ. Tôi đã có câu hỏi ngớ ngấn nhu bao anh em khác, đó là web này trả phí hả anh Sơn. Tôi cũng khác bất ngờ về việc một người bỏ khác nhiều công sức, làm việc nghiệm túc nhưng lại không thu phí. F8 cho ta một con đường rõ ràng, không lan man, có thế tiết kiệm được vài tháng đến cả năm. Tôi hy vọng ae học và phát triển cộng đồng này nhiệt tình đề không phí công ông anh Sơn Đặng nhé. Nếu ai hỏi tôi nên học khóa front-end nào cho begginer tôi chắc chắn sẽ recommend F8. Tus này mục đích chủ yếu test thử tính năng Blog :).
                                </textarea>
                            </div>
                        </div>                           
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Story;
