import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import img1 from '../images/heading-shape.png'
import img2 from '../images/IMG-20220428-WA0044-300x300.jpg'
import img3 from '../images/IMG-20220428-WA0121-300x300.jpg'
import img4 from '../images/IMG-20220428-WA0068-300x300.jpg'
import img5 from '../images/IMG-20220428-WA0061-300x300.jpg'
import img6 from '../images/IMG-20220428-WA0061-300x300.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const CottonCollecton = () => {
    const [getcategory, setCategory] = useState("")
    const [product, setProduct] = useState("")
    useEffect(() => {
        GetProducts()
    }, [product])

    useEffect(() => {
        ShowCart()
        GetCategory()
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    const GetCategory = async () => {
        let result = await fetch('https://web-click-api.herokuapp.com/category', {
            method: "GET"
        })
        result = await result.json()
        setCategory(result.categorytList)
    }



    const id1 = getcategory && getcategory.map((item) => {
        if (item.featured == 1) {
            return (
                console.log(item.title)
            )
        }

    })

    const id = "62aadf88708de0b1870ab689"


    const GetProducts = async () => {
        let response = await fetch(`https://web-click-api.herokuapp.com/products/?categoryId=${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        })
        response = await response.json();
        setProduct(response.productList)
    }

    const [cart, setCart] = useState([])
    const ShowCart = async () => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem("user"))._id
            let result = await fetch(`https://web-click-api.herokuapp.com/cart/${user}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                }
            });
            result = await result.json();
            setCart(result.cartList)
        }
        else {

        }
    }

    const AddToCart = async (product) => {
        if (localStorage.getItem('user')) {
            const productExist = cart.find((item) => item.product._id == product._id);
            const user = JSON.parse(localStorage.getItem("user"))._id
            let result = await fetch("https://web-click-api.herokuapp.com/cart", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "application/json",
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                },
                body: JSON.stringify({
                    productId: product._id,
                    userId: user,
                    quantity: productExist ? productExist.quantity + 1 : 1
                })

            });
            result = await result.json();
            console.log(result)
            if (result.success) {
                toast.success(result.message, {
                    position: "top-center",
                    autoClose: 1000,

                });
                ShowCart();
            } else {

            }
        }

        else {
            toast.warn("Login to Add Item", {
                position: "top-center",
                autoClose: 1000,

            });
        }
    }

    const AddToWishList = async (id) => {
        if (localStorage.getItem('user')) {
            let user = JSON.parse(localStorage.getItem('user'))._id
            let response = await fetch(`https://web-click-api.herokuapp.com/users/wishlist/${user}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "application/json",
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,

                },
                body: JSON.stringify({ "productId": id })
            })
            response = await response.json()
            console.log(response)
            if (response.success) {
                toast.success(response.message, {
                    position: "top-center",
                    autoClose: 1000,

                });
            }
            else {

            }

        } else {
            toast.warn("Login to make Wishlist", {
                position: "top-center",
                autoClose: 1000,

            });
        }

    }

    return (
        <>
            <section className="cottom-collections py-5 bg-light">
                <div className="container">
                    <div className="section-title text-center mb-3">
                        <h1>Cotton Collections</h1>
                        <img src={img1} />
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 product-carousel">
                            <Slider {...settings}>

                                {
                                    product && product.map((element, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="item m-2">
                                                    <Link to={`/detail/${element._id}`}>
                                                        <div className="slide-img">
                                                            <img src={`https://web-click-api.herokuapp.com/filestorage/${element.image}`} alt="" title="" className="w-100 main-img rounded" data-tilt="" data-tilt-max="10" />
                                                        </div>
                                                    </Link>

                                                    <div className="for-content-side bg-white p-3">
                                                        <Link to={`/detail/${element._id}`} className="text-dark font-weight-bold">{element.title}</Link>
                                                        <div className="product__items--price">
                                                            <span className="current__price">{element.price}</span>
                                                            <span className="price__divided"></span>



                                                            <span className="old__price"></span>
                                                        </div>


                                                        <div className="adding-cart mt-3">
                                                            <ul className="text-left">
                                                                <li className="list-inline-item"><a role='button' onClick={() => AddToCart(element)}><FontAwesomeIcon icon={faShoppingCart} /> + Add to Cart </a> </li>
                                                                <li className="list-inline-item"><a role="button" onClick={() => AddToWishList(element._id)}><FontAwesomeIcon icon={faHeart} /></a></li>
                                                                <li className="list-inline-item"><Link to={`/detail/${element._id}`}><FontAwesomeIcon icon={faEye} /></Link></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }






                            </Slider>
                        </div>





                    </div>
                </div>

            </section>
        </>
    )
}

export default CottonCollecton