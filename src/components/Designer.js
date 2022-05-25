import React from 'react'
import img1 from '../images/heading-shape.png'
import img2 from '../images/IMG-20220121-WA0046-1-300x300.jpg'
import img3 from '../images/IMG-20220412-WA0108-300x300.jpg'
import img4 from '../images/PHOTO-2021-12-16-13-13-19-300x300.jpg'
import img5 from '../images/IMG-20220407-WA0074-300x300.jpg'
import img6 from '../images/IMG-20220330-WA0038-300x300.jpg'
import img7 from '../images/IMG-20220221-WA0061-300x300.jpg'
import img8 from '../images/IMG-20220302-WA0012-300x300.jpg'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import useState from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faHeart, faEye,faStar} from '@fortawesome/free-solid-svg-icons';

const Designer = () => {
    

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

    let user = JSON.parse(localStorage.getItem('user'))._id;
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
            <section class="design-choice py-5">
                <div class="container">
                    <div class="section-title text-center mb-3">
                        <h3>Designer Choice</h3>
                        <img src={img1} />
                    </div>
                    
                       <Slider {...settings}>

                            <div class="item m-2">
                                <div class="img-hover-zoom">
                                    <img src=
                                    {img2} alt="" title="" class="w-100"/>
                                </div>

                                <div class="for-content-side">
                                    <a href="#" class="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                    <div class="product__items--price">
                                        <span class="current__price">₹110</span>
                                        <span class="price__divided"></span>
                                        <span class="old__price">₹78</span>
                                    </div>
                                    <div class="review-star">
                                        <ul>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        </ul>
                                    </div>

                                    <div class="adding-cart mt-3">
                                        <ul class="text-left">
                                            <li class="list-inline-item"><Link to="/cart"> <FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div class="item m-2">
                                <div class="img-hover-zoom">
                                    <img src={img3} alt="" title="" class="w-100"/>
                                </div>

                                <div class="for-content-side">
                                    <a href="#" class="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                    <div class="product__items--price">
                                        <span class="current__price">₹110</span>
                                        <span class="price__divided"></span>
                                        <span class="old__price">₹78</span>
                                    </div>
                                    <div class="review-star">
                                        <ul>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        </ul>
                                    </div>

                                    <div class="adding-cart mt-3">
                                        <ul class="text-left">
                                            <li class="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="item m-2">
                                <div class="img-hover-zoom">
                                    <img src={img4} alt="" title="" class="w-100"/>
                                </div>

                                <div class="for-content-side">
                                    <a href="#" class="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                    <div class="product__items--price">
                                        <span class="current__price">₹110</span>
                                        <span class="price__divided"></span>
                                        <span class="old__price">₹78</span>
                                    </div>
                                    <div class="review-star">
                                        <ul>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        </ul>
                                    </div>

                                    <div class="adding-cart mt-3">
                                        <ul class="text-left">
                                            <li class="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="item m-2">
                                <div class="img-hover-zoom">
                                    <img src={img5} alt="" title="" class="w-100"/>
                                </div>

                                <div class="for-content-side">
                                    <a href="#" class="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                    <div class="product__items--price">
                                        <span class="current__price">₹110</span>
                                        <span class="price__divided"></span>
                                        <span class="old__price">₹78</span>
                                    </div>
                                    <div class="review-star">
                                        <ul>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        </ul>
                                    </div>

                                    <div class="adding-cart mt-3">
                                        <ul class="text-left">
                                            <li class="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div class="item m-2">
                                <div class="img-hover-zoom">
                                    <img src={img6} alt="" title="" class="w-100"/>
                                </div>

                                <div class="for-content-side">
                                    <a href="#" class="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                    <div class="product__items--price">
                                        <span class="current__price">₹110</span>
                                        <span class="price__divided"></span>
                                        <span class="old__price">₹78</span>
                                    </div>
                                    <div class="review-star">
                                        <ul>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        </ul>
                                    </div>

                                    <div class="adding-cart mt-3">
                                        <ul class="text-left">
                                            <li class="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="item m-2">
                                <div class="img-hover-zoom">
                                    <img src={img7} alt="" title="" class="w-100"/>
                                </div>

                                <div class="for-content-side">

                                    <a href="#" class="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                    <div class="product__items--price">
                                        <span class="current__price">₹110</span>
                                        <span class="price__divided"></span>
                                        <span class="old__price">₹78</span>
                                    </div>
                                    <div class="review-star">
                                        <ul>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        </ul>
                                    </div>

                                    <div class="adding-cart mt-3">
                                        <ul class="text-left">
                                            <li class="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div class="item m-2">
                                <div class="img-hover-zoom">
                                    <img src={img8} alt="" title="" class="w-100"/>
                                </div>

                                <div class="for-content-side">
                                    <a href="#" class="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                    <div class="product__items--price">
                                        <span class="current__price">₹110</span>
                                        <span class="price__divided"></span>
                                        <span class="old__price">₹78</span>
                                    </div>
                                    <div class="review-star">
                                        <ul>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                            <li class="list-inline-item mr-0"><FontAwesomeIcon icon={faStar}/></li>
                                        </ul>
                                    </div>

                                    <div class="adding-cart mt-3">
                                        <ul class="text-left">
                                            <li class="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> + Add to Cart </Link> </li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                                            <li class="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye}/></a></li>
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

export default Designer