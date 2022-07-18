import React, { useEffect, useState, useCallback } from 'react'
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
import { getProduct } from '../../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';



const Featured = () => {

    const [toggleHeart, setToggleHeart] = useState("white");
    const [itemPresent, setItemPresent] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
        ShowCart()
        getProducts()
        GetProfile()
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const { loading, error, products } = useSelector((state) => state.products);

    const [product, setProduct] = useState("")
    const getProducts = async () => {
        let response = await fetch("https://web-click-api.herokuapp.com/products", {
            method: "GET"
        })
        response = await response.json()
        console.log(response)
        setProduct(response.productList)
        {

            (response.productList.map((item) => {
                if (item.featured == 1) {

                }

            }))
        }
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
            ShowCart()
            if (result.success) {
                toast.success(result.message, {
                    position: "top-center",
                    autoClose: 1000,
                });
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
        const ItemExist = itemPresent.find((item) => item._id == id);
        console.log(itemPresent)

        if (localStorage.getItem('user')) {
            let user = JSON.parse(localStorage.getItem('user'))._id
            let response = await fetch(`https://web-click-api.herokuapp.com/users/wishlist/${user}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "application/json",
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,

                },
                body: JSON.stringify({ "productId": ItemExist ? console.log("item Exist") : id })
            })

            response = await response.json()
            if (response.success) {
                setToggleHeart("red")
                toast.success(response.message, {
                    position: "top-center",
                    autoClose: 1000,
                });

            }
            else {
                toast.error(response.message, {
                    position: "top-center",
                    autoClose: 1000,
                });

            }

        } else {
            toast.warn("Login to make Wishlist", {
                position: "top-center",
                autoClose: 1000,

            });
        }

    }
    const GetProfile = async () => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem("user"))._id
            let response = await fetch(`https://web-click-api.herokuapp.com/users/${user}`, {
                method: "GET"
            })
            response = await response.json()
            setItemPresent(response.user.wishlist)

        }
    }


    return (

        <>

            <Slider {...settings}>
                {
                    product && product.map((product, index) => {
                        if (product.featured == 0) {
                            return (
                                <div key={index} >

                                    <div className="item m-3">
                                        <Link to={`/detail/${product._id}`}>
                                            <div className="slide-img ">
                                                <img src={`https://web-click-api.herokuapp.com/filestorage/${product.image[0]}`} alt="productimage" title="" className="w-100 main-img rounded" data-tilt="" data-tilt-max="10" style={{ willChange: "transform", transform: "perspective(300px) rotateX(0deg) rotateY(0deg)" }} />
                                            </div>
                                        </Link>

                                        <div className="for-content-side bg-white p-3">
                                            <Link to={`/detail/${product._id}`} className="text-dark font-weight-bold">{product.title}</Link>
                                            <div className="product__items--price">
                                                <span className="current__price">Rs {product.price}</span>
                                                <span className="price__divided"></span>
                                                <span className="old__price"></span>
                                            </div>


                                            <div className="adding-cart mt-3">
                                                <ul className="text-left">
                                                    <li className="list-inline-item"><a role="button" onClick={() => AddToCart(product)}><FontAwesomeIcon icon={faShoppingCart} /> + Add to Cart </a> </li>

                                                    {localStorage.getItem('user')
                                                        ? itemPresent ?
                                                            <li className="list-inline-item"><a role="button" value={toggleHeart} onClick={() => AddToWishList(product._id)}  ><FontAwesomeIcon icon={faHeart}
                                                            /></a></li>

                                                            : <li className="list-inline-item"><a role="button" value={toggleHeart} onClick={() => AddToWishList(product._id)}  ><FontAwesomeIcon icon={faHeart}
                                                            /></a></li>

                                                        : <li className="list-inline-item"><a role="button" value={toggleHeart} onClick={() => AddToWishList(product._id)}  ><FontAwesomeIcon icon={faHeart} /></a></li>
                                                    }

                                                    <li className="list-inline-item"><Link to={`/detail/${product._id}`}><FontAwesomeIcon icon={faEye} /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            )

                        }


                    })
                }

            </Slider>
            <ToastContainer />

        </>
    )
}

export default Featured