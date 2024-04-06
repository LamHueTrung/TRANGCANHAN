import React, { useEffect } from 'react';
import './main.css';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsClipboardCheck } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import Home from '../Home/Home';

import img from '../../../assets/img/img (1).jpg';
import img2 from '../../../assets/img/img (2).jpg';
import img3 from '../../../assets/img/img (3).jpg';
import img4 from '../../../assets/img/img (4).jpg';
import img5 from '../../../assets/img/img (5).jpg';
import img6 from '../../../assets/img/img (6).jpg';
import img7 from '../../../assets/img/img (7).jpg';
import img8 from '../../../assets/img/img (8).jpg';
import img9 from '../../../assets/img/img (9).jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Website bán hàng',
        location: 'PHP',
        grade: 'FullStack',
        fees: '$700',
        description:
            ' Website bán điện thoại là một kênh trực tuyến giúp bạn mua sắm điện thoại di động một cách tiện lợi và nhanh chóng. Website bán điện thoại thường cung cấp đa dạng các mẫu điện thoại từ nhiều thương hiệu nổi tiếng như iPhone, Samsung, Oppo, Xiaomi, Realme,... với mức giá cạnh tranh.',
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Website bán hàng',
        location: 'PHP',
        grade: 'FullStack',
        fees: '$700',
        description:
            ' Website bán điện thoại là một kênh trực tuyến giúp bạn mua sắm điện thoại di động một cách tiện lợi và nhanh chóng. Website bán điện thoại thường cung cấp đa dạng các mẫu điện thoại từ nhiều thương hiệu nổi tiếng như iPhone, Samsung, Oppo, Xiaomi, Realme,... với mức giá cạnh tranh.',
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Website bán hàng',
        location: 'PHP',
        grade: 'FullStack',
        fees: '$700',
        description:
            ' Website bán điện thoại là một kênh trực tuyến giúp bạn mua sắm điện thoại di động một cách tiện lợi và nhanh chóng. Website bán điện thoại thường cung cấp đa dạng các mẫu điện thoại từ nhiều thương hiệu nổi tiếng như iPhone, Samsung, Oppo, Xiaomi, Realme,... với mức giá cạnh tranh.',
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Website bán hàng',
        location: 'PHP',
        grade: 'FullStack',
        fees: '$700',
        description:
            ' Website bán điện thoại là một kênh trực tuyến giúp bạn mua sắm điện thoại di động một cách tiện lợi và nhanh chóng. Website bán điện thoại thường cung cấp đa dạng các mẫu điện thoại từ nhiều thương hiệu nổi tiếng như iPhone, Samsung, Oppo, Xiaomi, Realme,... với mức giá cạnh tranh.',
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Website bán hàng',
        location: 'PHP',
        grade: 'FullStack',
        fees: '$700',
        description:
            ' Website bán điện thoại là một kênh trực tuyến giúp bạn mua sắm điện thoại di động một cách tiện lợi và nhanh chóng. Website bán điện thoại thường cung cấp đa dạng các mẫu điện thoại từ nhiều thương hiệu nổi tiếng như iPhone, Samsung, Oppo, Xiaomi, Realme,... với mức giá cạnh tranh.',
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Website bán hàng',
        location: 'PHP',
        grade: 'FullStack',
        fees: '$700',
        description:
            ' Website bán điện thoại là một kênh trực tuyến giúp bạn mua sắm điện thoại di động một cách tiện lợi và nhanh chóng. Website bán điện thoại thường cung cấp đa dạng các mẫu điện thoại từ nhiều thương hiệu nổi tiếng như iPhone, Samsung, Oppo, Xiaomi, Realme,... với mức giá cạnh tranh.',
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Website bán hàng',
        location: 'PHP',
        grade: 'FullStack',
        fees: '$700',
        description:
            ' Website bán điện thoại là một kênh trực tuyến giúp bạn mua sắm điện thoại di động một cách tiện lợi và nhanh chóng. Website bán điện thoại thường cung cấp đa dạng các mẫu điện thoại từ nhiều thương hiệu nổi tiếng như iPhone, Samsung, Oppo, Xiaomi, Realme,... với mức giá cạnh tranh.',
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Website bán hàng',
        location: 'PHP',
        grade: 'FullStack',
        fees: '$700',
        description:
            ' Website bán điện thoại là một kênh trực tuyến giúp bạn mua sắm điện thoại di động một cách tiện lợi và nhanh chóng. Website bán điện thoại thường cung cấp đa dạng các mẫu điện thoại từ nhiều thương hiệu nổi tiếng như iPhone, Samsung, Oppo, Xiaomi, Realme,... với mức giá cạnh tranh.',
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Website bán hàng',
        location: 'PHP',
        grade: 'FullStack',
        fees: '$700',
        description:
            ' Website bán điện thoại là một kênh trực tuyến giúp bạn mua sắm điện thoại di động một cách tiện lợi và nhanh chóng. Website bán điện thoại thường cung cấp đa dạng các mẫu điện thoại từ nhiều thương hiệu nổi tiếng như iPhone, Samsung, Oppo, Xiaomi, Realme,... với mức giá cạnh tranh.',
    },
];
const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="main container section">
            <div className="secContent grid">
                {Data.map(
                    ({
                        id,
                        imgSrc,
                        destTitle,
                        location,
                        grade,
                        fees,
                        description,
                    }) => {
                        return (
                            <div
                                key={id}
                                data-aos="fade-up"
                                className="signleDestination"
                            >
                                <div className="imgeDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="desTitle">{destTitle}</h4>
                                    <span className="containent flex">
                                        <MdLanguage className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}</span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <Link to={`/ShopWeb/ChiTiet/:slug`}>
                                        <button className="btn flex">
                                            XEM NGAY{' '}
                                            <BsClipboardCheck className="icon" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    },
                )}
            </div>
        </section>
    );
};

export default Main;
