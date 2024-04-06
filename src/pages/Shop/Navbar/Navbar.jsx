import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { MdTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../../assets/img/logo-ngang.png';

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    // function to toogle navbar
    const showNav = () => {
        setActive('navBar activeNavbar');
    };
    // function to remove navbar
    const removeNav = () => {
        setActive('navBar');
    };
    return (
        <div>
            <section className="navBarSection">
                <header className="header flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                            <a class="navbar-brand" href="#">
                                <img className="logo" src={logo} alt="" />
                            </a>
                        </a>
                    </div>

                    <div className={active}>
                        <ul className="navLists flex">
                            <li className="navItem">
                                <a href="#" className="navLink">
                                    KHOÁ HỌC
                                </a>
                            </li>
                            <li className="navItem">
                                <a href="#" className="navLink">
                                    BÀI VIẾT
                                </a>
                            </li>
                            <li className="navItem">
                                <Link to={`/ShopWeb/`}>
                                    <a className="navLink">SHOP WEBSITE</a>
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link to={`/ShopWeb/ThietKeWeb/:slug`}>
                                    <a className="navLink">THIẾT KẾ WEBSITE</a>
                                </Link>
                            </li>
                            <li className="navItem">
                                <a href="#" className="navLink">
                                    BẢNG GIÁ
                                </a>
                            </li>
                            <button className="btn">
                                <a href="#">ĐĂNG NHẬP</a>
                            </button>
                        </ul>
                        <div onClick={removeNav} className="closeNavbar">
                            <AiFillCloseCircle className="icon w-100" />
                        </div>
                    </div>
                    <div onClick={showNav} className="toggleNavbar">
                        <GiHamburgerMenu className="icon w-100" />
                    </div>
                </header>
            </section>
        </div>
    );
};

export default Navbar;
