import React, { useState } from 'react'
import img from '../../images/suruchi-creations-logo-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Checkout = () => {
    const [cart, setCart] = useState([])

    const [name, setName] = useState("")
    const [add_type, setType] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [input, setInput] = useState("")

    console.log(input)

    var totalprice = 0;
    useEffect(() => {
        ShowCart();
        Address();
    }, []);

    const userId = JSON.parse(localStorage.getItem("user"))._id

    const ShowCart = async () => {
        let result = await fetch(`https://web-click-api.herokuapp.com/cart/${userId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        });
        result = await result.json();

        setCart(result.cartList)


    }

    const CheckoutHandle = async (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('name', name);
        formData.append('add_type', add_type);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('user', userId);


        const endpoint = "https://web-click-api.herokuapp.com/shipaddress";
        let result = await fetch(endpoint, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
            },
            body: formData

        }).then((result) => result.json())
        console.log(result)

        if (result.success) {

        } else {

        }
    }


    const [getAddress, setGetAddress] = useState([])

    const Address = async () => {
        let result = await fetch(`https://web-click-api.herokuapp.com/shipaddress/${userId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        });
        result = await result.json();
        console.log(result)
        setGetAddress(result.shippingAddressList)


    }

    return (
        <>
            <section className="breadcumb py-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center w-100 text-white">Cart</h1>
                    </div>
                </div>
                <div className="ul-list">
                    <ul className="text-center mt-3">
                        <li className="list-inline-item"><a href="#" className="text-white">Home</a></li>
                        <li className="list-inline-item text-white">/</li>
                        <li className="list-inline-item text-white">Cart</li>
                    </ul>
                </div>
            </section>

            <section className="checkout py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 check-infomation p-0">

                            <div className="logo-and-list">
                                <a href="#"><img src={img} alt="" title="" className="w-50 mb-3" /></a>
                                <ul>
                                    <li className="list-inline-item"> <a href="#" className="activeChecout font-weight-bold">Cart</a></li>
                                    <li className="list-inline-item text-muted"><FontAwesomeIcon icon={faAngleRight} /> Information</li>
                                    <li className="list-inline-item text-muted"><FontAwesomeIcon icon={faAngleRight} /> Shipping</li>
                                    <li className="list-inline-item text-muted"><FontAwesomeIcon icon={faAngleRight} /> Payment</li>
                                </ul>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6 left-content align-self-center p-0">
                                    <span>Contact information</span>
                                </div>

                                <div className="col-md-6 login-left align-self-center text-right">
                                    <span>Already have an account? <Link to='/login'> Log in </Link></span>
                                </div>


                                <div className="check-input">
                                    <input type="" name="" placeholder="Email or mobile phone mumber" className="w-100 pl-2" />
                                </div>
                                <div className="check-box mt-3">
                                    <ul>
                                        <li className="list-inline-item mr-0">  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></li>
                                        <li className="list-inline-item">Email me with news and offers</li>
                                    </ul>
                                </div>

                                <div className="check-box mt-3">
                                    <ul className="ml-3">


                                        {
                                            getAddress && getAddress.map((element) => {
                                                return (
                                                    <>
                                                        <li className="list-inline-item mr-1">
                                                            <input type="radio"  name='shippingAddress'
                                                                    value={input} onChange={(e)=>setInput(e.target.value)}   />
                                                                    
                                                        </li>
                                                        <li className='list-inline-item mr-1'>{element.name}</li>
                                                        <li className='list-inline-item mr-1'>{element.phone}</li>
                                                        <li className='list-inline-item mr-1'>{element.address}</li>
                                                       
                                                        
                                                        
                                                        <br/>
                                                       
                                                       
                                                    </>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-12 shipping_cart">

                                        <span>Shipping address</span>

                                        <div className="row">
                                            <form onSubmit={CheckoutHandle}>
                                                <div className="col-md-6 input-left">
                                                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="First name (optional)" required="" className="w-100" />
                                                </div>

                                                <div className="col-md-6 input-left">
                                                    <input type="" name="" placeholder="Last name" required="" className="w-100" />
                                                </div>

                                                <div className="col-md-12 input-left">
                                                    <input type="text" name="add_type" value={add_type} onChange={e => setType(e.target.value)} placeholder="Address Type " required="" className="w-100" />
                                                </div>

                                                <div className="col-md-12 input-left">
                                                    <input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" required="" className="w-100" />
                                                </div>

                                                <div className="col-md-12 input-left">
                                                    <input type="text" name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" required="" className="w-100" />
                                                </div>

                                                <div className="col-md-12 input-left mt-3">
                                                    <ul>
                                                        <li className="list-inline-item"><button type='submit'>Save Address</button></li>

                                                    </ul>

                                                </div>
                                            </form>

                                            <div className="col-md-12 input-left mt-3">
                                                <ul><Link to="/">
                                                    <li className="list-inline-item"><button>  Continue To Shipping </button></li>
                                                </Link>
                                                    <Link to="/cart">
                                                        <li className="list-inline-item"><a href="#">Return to cart</a></li>
                                                    </Link>
                                                </ul>

                                            </div>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-xs-12 check-gift-cart-line"></div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 check-gift-cart">

                            {
                                cart && cart.map((item) => {
                                    totalprice += item.product.price * item.quantity;
                                    return (
                                        <>
                                            <div className="row border-bottom pb-3 mb-3">
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 media-type">
                                                    <div className="media">
                                                        <img className="rounded" src={'http://3.110.3.217/filestorage/' + item.product.image.replace("uploads/images/", "")} alt="" title="" />
                                                        <div className="cart-up">
                                                            <p className="text-white">{item.quantity}</p>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <span className="mt-0"> <a href="#" className="font-weight-bold">{item.product.title}</a> </span>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 price-type align-self-center">
                                                    <p className="font-weight-bold">Rs {item.product.price * item.quantity}.00</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }


                            <div className="discount-card text-center">
                                <form action="#" method="post">
                                    <ul>
                                        <li className="list-inline-item"><input type="" name="" value="" required="" placeholder="Gift card or discount code" /></li>
                                        <li className="list-inline-item"><button className="border-0 text-white">Apply Now</button></li>
                                    </ul>
                                </form>
                            </div>

                            <div className="row mt-4">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 subtotal_checks mb-2">
                                    <p>Subtotal</p>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 subtotal_checks text-right mb-2">
                                    <p>Rs {totalprice}.00</p>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 subtotal_checks">
                                    <p>Shipping</p>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 subtotal_checks text-right">
                                    <p>Calculated at next step</p>
                                </div>
                            </div>

                            <div className="row mt-4 border-top pt-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 subtotal_checks">
                                    <p>Total</p>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 subtotal_checks text-right">
                                    <p className="font-weight-bold">Rs {totalprice}.00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout