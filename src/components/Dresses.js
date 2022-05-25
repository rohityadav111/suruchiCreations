import React from 'react'
import img1 from '../images/heading-shape.png'
import img2 from '../images/IMG-20220415-WA0110-300x300.jpg'
import img3 from '../images/PHOTO-2022-02-17-11-34-28-300x300.jpg'
import img4 from '../images/PHOTO-2022-02-02-12-07-05-300x300.jpg'
import img5 from '../images/IMG-20220127-WA0029-300x300.jpg'
import img6 from '../images/IMG-20220117-WA0009-300x300.jpg'
import img7 from '../images/IMG-20211130-WA0137-300x300.jpg'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faHeart, faEye,faStar} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import useState from 'react'
const Dresses = () => {


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    {/*

        const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    const [num, setNum] = useState(1)
    let userId = JSON.parse(localStorage.getItem('user'))
    const ShowCart = async () => {
        let result = await fetch(`http://3.110.3.217/cart/${userId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        });
        result = await result.json();
        setCart(result.cartList.length)
    }

    
    // -------------------------------------------ADD TO CART API -------------------------//

    let user = JSON.parse(localStorage.getItem('user'))
    const data = {
        productId: products._id,
        userId: user,
        quantity: num

    }

    const AddToCart = async (e) => {
        e.preventDefault();

        let result = await fetch("http://3.110.3.217/cart", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            },
            body: JSON.stringify(data)

        });
        result = await result.json();

        if (result.success) {
          
            ShowCart();
        } else {
           
        }

    }


    //---------------------------------------CLOSE-----------------------------------------------------/// 
*/}

    return (
        <>
       
            <section className="design-choice py-5">
                <div className="container">
                    <div className="section-title text-center mb-3">
                        <h3>Dresses</h3>
                        <img src={img1} />
                    </div>
                    
                    <Slider {...settings}>


                        <div className="item m-2">
                            <div className="img-hover-zoom">
                                <img src={img2} alt="" title="" className="w-100" />
                            </div>

                            <div className="for-content-side">
                                <a href="#" className="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                <div className="product__items--price">
                                    <span className="current__price">₹110</span>
                                    <span className="price__divided"></span>
                                    <span className="old__price">₹78</span>
                                </div>
                                <div className="review-star">
                                    <ul>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                    </ul>
                                </div>

                                <div className="adding-cart mt-3">
                                    <ul className="text-left">
                                        <li className="list-inline-item"><Link to="/cart" ><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="item m-2">
                            <div className="img-hover-zoom">
                                <img src={img3} alt="" title="" className="w-100" />
                            </div>

                            <div className="for-content-side">
                                <a href="#" className="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                <div className="product__items--price">
                                    <span className="current__price">₹110</span>
                                    <span className="price__divided"></span>
                                    <span className="old__price">₹78</span>
                                </div>
                                <div className="review-star">
                                    <ul>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                    </ul>
                                </div>

                                <div className="adding-cart mt-3">
                                    <ul className="text-left">
                                        <li className="list-inline-item"><Link to="/cart" ><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="item m-2">
                            <div className="img-hover-zoom">
                                <img src={img4} alt="" title="" className="w-100" />
                            </div>

                            <div className="for-content-side">
                                <a href="#" className="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                <div className="product__items--price">
                                    <span className="current__price">₹110</span>
                                    <span className="price__divided"></span>
                                    <span className="old__price">₹78</span>
                                </div>
                                <div className="review-star">
                                    <ul>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                    </ul>
                                </div>

                                <div className="adding-cart mt-3">
                                    <ul className="text-left">
                                        <li className="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="item m-2">
                            <div className="img-hover-zoom">
                                <img src={img5} alt="" title="" className="w-100" />
                            </div>

                            <div className="for-content-side">
                                <a href="#" className="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                <div className="product__items--price">
                                    <span className="current__price">₹110</span>
                                    <span className="price__divided"></span>
                                    <span className="old__price">₹78</span>
                                </div>
                                <div className="review-star">
                                    <ul>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                    </ul>
                                </div>

                                <div className="adding-cart mt-3">
                                    <ul className="text-left">
                                        <li className="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="item m-2">
                            <div className="img-hover-zoom">
                                <img src={img6} alt="" title="" className="w-100" />
                            </div>

                            <div className="for-content-side">
                                <a href="#" className="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                <div className="product__items--price">
                                    <span className="current__price">₹110</span>
                                    <span className="price__divided"></span>
                                    <span className="old__price">₹78</span>
                                </div>
                                <div className="review-star">
                                    <ul>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                    </ul>
                                </div>

                                <div className="adding-cart mt-3">
                                    <ul className="text-left">
                                        <li className="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="item m-2">
                            <div className="img-hover-zoom">
                                <img src={img7} alt="" title="" className="w-100" />
                            </div>

                            <div className="for-content-side">
                                <a href="#" className="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                <div className="product__items--price">
                                    <span className="current__price">₹110</span>
                                    <span className="price__divided"></span>
                                    <span className="old__price">₹78</span>
                                </div>
                                <div className="review-star">
                                    <ul>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                    </ul>
                                </div>

                                <div className="adding-cart mt-3">
                                    <ul className="text-left">
                                        <li className="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                        <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </Slider>
                </div>
            </section>
           
          

        </>
    )
}

export default Dresses