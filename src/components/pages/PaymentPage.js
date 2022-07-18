import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';


const PaymentPage = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        ShowCart();
    }, [])

    let totalprice = 0;
    let user = JSON.parse(localStorage.getItem('user'))._id
    const ShowCart = async () => {

        let result = await fetch(`https://web-click-api.herokuapp.com/cart/${user}`, {
            method: "GET",
            headers: {
                
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        });
        result = await result.json();
        console.log(result)
        setCart(result.cartList)


    }

    let data  ={
        userId: user,
        shippingAddressId:""
    }

    const PlaceOrder =async(e)=>{
        e.preventDefault()
        let response = await fetch("https://web-click-api.herokuapp.com/order",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': "application/json",
                Authorization :`Bearer ${JSON.parse(localStorage.getItem('Token'))}`
            },
            body: JSON.stringify()
        })

    }


    return (
        <>
      
            <section className="my-shopping-bag py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="process-cart text-center w-100">
                                <ul className="mb-4">
                                    <li className="list-inline-item"><a href="http://www.webclickdigital.info/suruchi-creations/cart/" className="text-muted">Cart <i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a href="http://www.webclickdigital.info/suruchi-creations/checkout/" className="text-muted">Checkout <i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a href="http://www.webclickdigital.info/suruchi-creations/checkout-to-ship/" className="text-muted">Shipping <i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                    <li className="list-inline-item"><a href="http://www.webclickdigital.info/suruchi-creations/checkout-to-payment/" className="cart-active">Payment </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 shopping_bag">
                            <div className="col-12 my-shopping-bag p-3 border rounded text-center select_payment-method">
                                <h4 className="mb-4">Select Payment Method</h4>
                                <form name="paymentfrm" >
                                    <input type="hidden" name="shipping_id" id="shipping_id" value="1" />
                                    <ul>
                                        <li className="list-inline-item"><input type="radio" checked name="payment_method" id="payment_method" value="cod" className="mr-2" required /><p><b>Direct bank transfer</b></p>
                                        </li>

                                    </ul>
                                </form>
                            </div>
                            <div className="payment-Terms">
                                <p className="text-justify">What are Payment Terms? Payment terms are the terms that govern the payment portion of a sale. They govern specific details such as the type and amount of payment expected, discounts offered, how the buyer can make the payment, under what conditions your company may assess late charges and more.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 shopping_bag-content p-0">
                            <div className="under-border border rounded p-3">
                                <div className="row border-bottom pb-3">

                                    {
                                        cart && cart.map((item) => {
                                            totalprice += item.quantity * item.product.price
                                            return(
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 media-type">
                                                <div className="media-body align-self-center">
                                                    <span className="mt-0"> <a href="#" className="font-weight-bold">{item.product.title}</a> </span>
                                                </div>
                                            </div>)

                                        })
                                    }

                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 price-type align-self-center">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="media sis">
                                                    <img className="rounded" src="http://www.webclickdigital.info/suruchi-creations/img/small-product7.png" alt="" title="" />
                                                    <div className="cart-up">
                                                        <p className="text-white">{cart.length}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 fsb">
                                                <p className="font-weight-bold">₹{totalprice}.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12">
                            <div className="under-border border rounded p-3">
                                <div className="title-header-apply">
                                    <div className="under-list align-self-center">
                                        <span className="mb-3 d-block"><b>Price Details ({cart.length})</b></span>
                                        <ul>
                                            <li className="list-inline-item w-100">Sub Total <span className="float-right"><b>₹{totalprice}.00</b></span> </li>
                                            <li className="list-inline-item w-100">Discount <span className="float-right"><b>₹0.00</b></span> </li>
                                            <li className="list-inline-item w-100">Delivery Charges  <span className="float-right"><b>00.00</b></span> </li>
                                            <li className="list-inline-item w-100">Grand Total  <span className="float-right"><b>₹{totalprice}.00</b></span> </li>
                                        </ul>
                                        <div className="proceed-button text-center mt-3">
                                            <li className="list-inline-item w-100 d-block"><Link to="/suruchi-creations/success-msg" className="text-white d-block">Proceed To Pay</Link></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </>
    )
}

export default PaymentPage