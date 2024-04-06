import { Link, useNavigate } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';
import logo from '../assets/img/logo-ngang.png';
import '../assets/css/header.css';
import '../assets/css/base.css';
function Header() {
    const navigate = useNavigate();
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary mx-auto">
            <div class="container-fluid w-80">
                <a class="navbar-brand" href="#">
                    <img className="logo" src={logo} alt="" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 col-6">
                        <li class="nav-item">
                            <a
                                class="nav-link text-white active"
                                aria-current="page"
                                href="#"
                            >
                                KHOÁ HỌC
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">
                                BÀI VIẾT
                            </a>
                        </li>
                        <li class="nav-item">
                            <Link to={`/ShopWeb/`}>
                                <a class="nav-link text-white" href="#">
                                    SHOP WEB
                                </a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link disabled text-white"
                                aria-disabled="true"
                            >
                                BẢNG GIÁ
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link disabled text-white login-mobile"
                                aria-disabled="true"
                            >
                                ĐĂNG NHẬP
                            </a>
                        </li>
                    </ul>
                    <form class="col-6" role="search">
                        <button
                            class="btn btn-outline-login search-input w-35 text-white login float-right"
                            type="submit"
                        >
                            <IoMdLogIn />{' '}
                            <span className="fs-login">Log In</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default Header;
