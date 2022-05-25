import React, { useEffect, useState } from 'react'
import img1 from '../../images/winter-collection-ladies.jpg'
import img2 from '../../images/3.jpg'
import img3 from '../../images/2.jpg'
import img4 from '../../images/heading-shape.png'
import img5 from '../../images/IMG-20220428-WA0044-300x300.jpg'
import img6 from '../../images/IMG-20220428-WA0121-300x300.jpg'
import img7 from '../../images/IMG-20220428-WA0020-300x300.jpg'
import img8 from '../../images/IMG-20220428-WA0068-300x300.jpg'
import img9 from '../../images/IMG-20220428-WA0061-300x300.jpg'
import img10 from '../../images/IMG-20220420-WA0242-300x300.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { ToastContainer, toast } from 'react-toastify';
import { getProduct } from '../../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'



const Featured = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getProduct())
    }, [dispatch])


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const { loading, error, products } = useSelector((state) => state.products);

    return (

        <>
        <Slider {...settings}>
            {
                products && products.map((product) => {
                    console.log(product)
                    return (
                        <div >
                            <div className="item m-3">
                                <div className="slide-img ">
                                    <img src={'https://web-click-api.herokuapp.com/filestorage/' + product.image.replace("uploads/images/", "")} alt="productimage" title="" className="w-100 main-img rounded" data-tilt="" data-tilt-max="10" style={{ willChange: "transform", transform: "perspective(300px) rotateX(0deg) rotateY(0deg)" }} />
                                </div>

                                <div className="for-content-side bg-white p-3">
                                    <a href="#" className="text-dark font-weight-bold">{product.title}</a>
                                    <div className="product__items--price">
                                        <span className="current__price">Rs {product.price}</span>
                                        <span className="price__divided"></span>
                                        <span className="old__price">₹70</span>
                                    </div>
                                    <div className="review-star">
                                        <ul>
                                            <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                            <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                            <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                            <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                            <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                        </ul>
                                    </div>

                                    <div className="adding-cart mt-3">
                                        <ul className="text-left">
                                            <li className="list-inline-item"><Link to={`/detail/${product._id}`}><FontAwesomeIcon icon={faShoppingCart} /> + Add to Cart </Link> </li>
                                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart} /></a></li>
                                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye} /></a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>  </div>
                    )




                })
            }

</Slider>
        </>
    )
}

export default Featured