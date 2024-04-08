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
                                <h2 className="story-title">Đệ Quy | Tính Sum = X+X^1+X^2+...+X^n không dùng for, while, do-while | LHT</h2>
                                <span className='user-story'>
                                    <img className='avt-user' src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/403620452_1481526516026118_6855197614467344014_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqefGS0z5KdSa_-9QuV2OPPGrdzVPmrhE8at3NU-auEQUqOgPwraabbrvoip8nEddkqTFd0QBVVCUG6wFNT0js&_nc_ohc=7D3vp7yhMwsAb7vWeho&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAsQYTo5p1aIByHxk_Lf038wlXHNCFjJvtH-rYA6g3Zuw&oe=6619E116" alt="" />
                                    <span className='user-name'>Lâm Huệ Trung</span>
                                </span>
                                <div className='d-flex mt-2'>
                                    <span className='dated-story d-block w-100'>06/03/2024</span>
                                    <h2 className='views w-30'>3700k views</h2>
                                    <span><FaHeart className='love-icon'/></span>
                                </div>
                                <iframe className='video-story mt-2' width="100%" height="400px" src="https://www.youtube.com/embed/P8gZ5trNXnw?si=96GYg7a3Kc5x4wlR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                               <textarea className="content" rows={35} readOnly>
                               Nơi căn tủ nhỏ ở phòng khách nhà tôi, có bày một con búp bê Matryoshka nhỏ nhắn với những nét vẽ mềm mại, đáng yêu. Khi còn nhỏ tôi thường đem ra khoe với chúng bạn và đố xem sâu trong thân búp bê mẹ, sẽ là bao nhiêu búp bê con khác. Con búp bê Matryoshka vẫn còn đó, nom trông cũ đi nhiều, nhưng sự thích thú của tôi lại không hề giảm. Giờ, thay vì đem ra nghịch chơi, tôi lại lấy nó làm ví dụ cho một khái niệm rất căn bản trong bất kỳ ngôn ngữ lập trình nào – khái niệm “đệ quy”.

Nếu thấy khó hiểu với khái niệm đệ quy, hãy liên tưởng đến búp bê Matryoshka

Trong bài dịch này ta hãy cùng tìm hiểu về các đặc điểm của đệ quy và học cách sử dụng đệ quy để giải quyết vấn đề với ngôn ngữ lập trình Java.

1. Hiểu đơn giản đệ quy là gì?
Trước tiên ta cần hiểu phương thức trước, trong lập trình, phương thức là tập hợp các lệnh với tham số truyền vào để máy tính thao tác lệnh theo ý muốn của người viết, đệ quy xảy ra khi người viết các phương thức tự gọi (hoạc định nghĩa lại) chính nó.


Giải thích:

Bạn truyền một tham số n vào phương thức sum(), lệnh trong phương thức sum sẽ trả về tham số n bạn truyền vào khi chạy hết chương trình “return n”.
Để đến được bước đó, chương trình sẽ chạy qua các lệnh điều kiện “” để định nghĩa lại phương thức sum một lần nữa “sum(n-1) + n”, phương thức mới sẽ khiến giá trị n sẽ thay đổi theo từng vòng của điều kiện cho đến khi không còn thỏa mãn điều kiện được cho.
Khi chương trình “return n” thì n chính là giá trị đã được tính ở phương thức ta đặt điều kiện bên trên.
Như vậy, hai yếu tố cần để tiến hành một phương thức đệ quy là:

Có điều kiện dừng: Xác định quy luật của phương thức và tìm giá trị cụ thể khi thỏa mãn một điều kiện nhất định, ở bước này vẫn chưa có phương thức đệ quy nào được gọi.
Phương thức đệ quy: Phương thức đệ quy sẽ gọi lại chính nó cho đến khi nó trả về điều kiện dừng ở bước 1.
​Tưởng tượng, mỗi lần bạn sử dụng đệ quy, chương trình chạy một vòng và bộ nhớ Stack sẽ được chồng thêm một lớp dữ liệu, tình trạng lãng phí bộ nhớ rất dễ xảy ra nếu bạn không phân tích kỹ các vòng chạy đệ quy để có tính toán hợp lý. Vấn đề trên có thể giải quyết bằng cách “tối ưu hóa đòn bẩy đệ quy đuôi”.

Viết code bất cẩn, sẽ có n số khung đệ quy ghi đè lên bộ nhớ Stack

2. Đệ quy đuôi và đệ quy đầu
Vậy câu hỏi đặt ra là đệ quy đuôi khác với đệ quy đầu ở đâu. Chúng ta gọi là đệ quy đuôi khi phương thức đệ quy được đặt ở cuối, sau khi chương trình chạy qua điều kiện dừng. Còn lại thì ta gọi đó là đệ quy đầu. Ví dụ, phương thức ở phần 2 là đệ quy đầu, giờ hãy cùng tiếp tục biến đổi một chút và ta có phương thức đệ quy đuôi tính lũy tiến từ currentSum đến n:
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
