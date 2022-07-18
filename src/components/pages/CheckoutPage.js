import React, { useEffect } from 'react'
import './CheckoutPage.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet'
import Header from '../Header'
import Footer from '../Footer'
const CheckoutPage = () => {
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        ShowCart()
    }, [])
    let totalprice = 0
    const userId = JSON.parse(localStorage.getItem("user"))._id
    const ShowCart = async () => {
        let result = await fetch(`https://web-click-api.herokuapp.com/cart/${userId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        });
        result = await result.json();
        console.log(result)
        setCart(result.cartList)
        setLoading(false)

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
            if (response.success) {
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

    return (



        <div>
            <Helmet>
                <title>Checkout</title>
            </Helmet>
         
            <section className="breadcumb py-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center w-100 text-white">Check Out</h1>
                    </div>
                </div>
                <div className="ul-list">
                    <ul className="text-center mt-3">
                        <li className="list-inline-item"><Link to="/" className="text-white">Home</Link></li>
                        <li className="list-inline-item text-white">/</li>
                        <li className="list-inline-item text-white">Check Out</li>
                    </ul>
                </div>
            </section>

            <section className="my-shopping-bag py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="process-cart text-center w-100">
                                <ul className="mb-4">
                                    <li className="list-inline-item"><Link to='/cart' className="text-muted">Cart <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/suruchi-creations/checkout" className="cart-active">Checkout <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/suruchi-creations/checkout-to-ship" className="text-muted">Payment </Link></li>
                                </ul>
                            </div>
                        </div>
                        {
                            (loading) ? <Loader />

                                :

                                <>
                                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 shopping_bag">
                                        <div className="col-12 my-shopping-bag p-3 border rounded">
                                            <span>My Shopping Bag ({cart.length})</span>
                                        </div>

                                        {
                                            cart && cart.map((item, key) => {
                                                totalprice += item.product.price * item.quantity;
                                                return (
                                                    <>
                                                        <div className="row border m-0 mt-3 p-3">
                                                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 left-side_shopping align-self-center">
                                                                <div className="media resm">
                                                                    <img className="mr-4 rounded align-self-center" src={`https://web-click-api.herokuapp.com/filestorage/${item.product.image}`} alt="" />
                                                                    <div className="media-body align-self-center">
                                                                        <Link to={`/detail/${item.product._id}`}><span className="mt-0 d-block"><b>{item.product.title}</b></span></Link>
                                                                        <p className="text-muted mt-2">"*Free Delivery By Suruchi Creation"</p>
                                                                        <ul key={key} className="mt-3">
                                                                            <li className="list-inline-item mr-2"><b>Quantity: </b>{item.quantity}</li>
                                                                            <li className="list-inline-item mr-0"><Link to='/'>Continue Shopping</Link></li>
                                                                            <li className="list-inline-item mr-0">|</li>
                                                                            <li className="list-inline-item mr-0"><a role="button" onClick={() => AddToWishList(item.product._id)}>Move to Wishlist</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 right-side_shopping align-self-center">
                                                                <span><p className="pt-f">₹{item.product.price * item.quantity}</p><sup><del></del></sup></span>
                                                            </div>
                                                        </div>

                                                    </>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 shopping_bag-content p-0">
                                        <div className="under-border border rounded p-3">


                                            <div className="title-header-apply">
                                                <ul>
                                                    <form name="discountfrm" action="" method="post">
                                                        <li className="list-inline-item"><img src="http://www.webclickdigital.info/suruchi-creations/img/coupn.jpg" alt="" title="" /></li>
                                                        <li className="list-inline-item"><input type="text" name="couponcode" id="couponcode" placeholder="Apply Coupon" autoComplete="off" required /></li>

                                                        <li className="list-inline-item float-right align-self-center"> <button name="coupon_code" id="coupon_code"> Apply </button></li>
                                                    </form>
                                                </ul>
                                                <div className="under-list mt-4 pt-3 border-top align-self-center">
                                                    <span className="mb-3 d-block"><b>Price Details ({cart.length})</b></span>
                                                    <ul>
                                                        <li className="list-inline-item w-100">Sub Total <span className="float-right"><b>₹{totalprice}</b></span> </li>
                                                        <li className="list-inline-item w-100">Discount <span className="float-right"><b>₹00.00</b></span> </li>
                                                        <li className="list-inline-item w-100">Delivery Charges  <span className="float-right"><b>00.00</b></span> </li>
                                                        <li className="list-inline-item w-100">Grand Total  <span className="float-right"><b>₹{totalprice}</b></span> </li>
                                                    </ul>
                                                    <div className="proceed-button text-center mt-3">
                                                        <li className="list-inline-item w-100 d-block">
                                                            <Link to="/suruchi-creations/checkout-to-ship" className="text-white d-block">Proceed To Buy</Link>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </>
                        }
                    </div>
                </div>
            </section>
          
        </div>
    )
}

export default CheckoutPage