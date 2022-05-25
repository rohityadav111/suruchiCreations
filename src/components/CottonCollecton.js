import React from 'react'
import Slider from "react-slick";
import img1 from '../images/heading-shape.png'
import img2 from '../images/IMG-20220428-WA0044-300x300.jpg'
import img3 from '../images/IMG-20220428-WA0121-300x300.jpg'
import img4 from '../images/IMG-20220428-WA0068-300x300.jpg'
import img5 from '../images/IMG-20220428-WA0061-300x300.jpg'
import img6 from '../images/IMG-20220428-WA0061-300x300.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faHeart, faEye,faStar} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useState from 'react'

const CottonCollecton = () => {
   
   

    var settings = {
        dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
        
    };


    return (
        <>
            <section class="cottom-collections py-5 bg-light">
                <div class="container">
                    <div class="section-title text-center mb-3">
                        <h1>Cotton Collections</h1>
                        <img src={img1} />
                    </div>
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 product-carousel">
                        <Slider {...settings}>
                                <div class="item m-2">
                                    <div class="slide-img">
                                        <img src={img2} alt="" title="" class="w-100 main-img rounded" data-tilt="" data-tilt-max="10" />
                                    </div>

                                    <div class="for-content-side bg-white p-3">
                                        <a href="#" class="text-dark font-weight-bold">cotton size suit</a>
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
                                    <div class="slide-img">
                                        <img src={img3} alt="" title="" class="w-100 main-img rounded" data-tilt="" data-tilt-max="10" />
                                    </div>

                                    <div class="for-content-side bg-white p-3">
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
                                    <div class="slide-img">
                                        <img src={img4} alt="" title="" class="w-100 main-img rounded" data-tilt="" data-tilt-max="10" />
                                    </div>

                                    <div class="for-content-side bg-white p-3">
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
                                    <div class="slide-img">
                                        <img src={img6} alt="" title="" class="w-100 main-img rounded" data-tilt="" data-tilt-max="10" />
                                    </div>

                                    <div class="for-content-side bg-white p-3">
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
                                    <div class="slide-img">
                                        <img src={img5} alt="" title="" class="w-100 main-img rounded" data-tilt="" data-tilt-max="10"/>
                                    </div>

                                    <div class="for-content-side bg-white p-3">
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





                        </div>
                    </div>
               
            </section>
        </>
    )
}

export default CottonCollecton