import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ShippingPage.css'
import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../Loader/Loader';
import Header from '../Header';
import Footer from '../Footer';
const Shippingpage = () => {
    const [totalprice, setTotalPrice] = useState(0)
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true)
    let price = 0;
    let navigate = useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [cart, setCart] = useState([])
    const [add_type, setType] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState({
        city: "",
        pinCode: "",
        street: "",
        houseNumber: "",
    })

    const handleAddress = (e) => {
        const newdata = { ...address }
        newdata[e.target.name] = e.target.value
        setAddress(newdata)
    }

    let user = JSON.parse(localStorage.getItem('user'))._id
    const [getAddress, setGetAddress] = useState([])
    useEffect(() => {
        AddressList();
        ShowCart()
    }, [])

    const [selectAddress, setSelectAddress] = useState([])
    const selectedAddress = (adr) => {
        setSelectAddress(adr)
    }


    const addAddress = async (e) => {
        e.preventDefault()

        const data = {
            user, name, phone, add_type, address
        }

        let response = await fetch("https://web-click-api.herokuapp.com/shipaddress", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,

            },
            body: JSON.stringify(data)
        })
        response = await response.json()

        if (response.success) {
            toast.success(response.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            handleClose()

            AddressList()

        }
        else {
            toast.error(response.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }

    }
    console.log(selectAddress)
    const AddressList = async () => {
        let result = await fetch(`https://web-click-api.herokuapp.com/shipaddress/${user}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        });
        result = await result.json();
        console.log(result)
        setGetAddress(result.shippingAddressList)

    }
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
        setLoading(false)


    }

    cart && cart.map((item) => {
        price += item.product.price * item.quantity
    });
    let data = {
        userId: user,
        shippingAddressId: selectAddress,
        grossTotal: price
    }



    const PlaceOrder = async (e) => {
        e.preventDefault()
        let response = await fetch("https://web-click-api.herokuapp.com/order", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('Token'))}`
            },
            body: JSON.stringify(data)
        })
        response = await response.json()

        if (response.success) {
            toast.success(response.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate('/suruchi-creations/success-msg')
        }
        else {
            toast.error("All Values required", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }
    return (
        <>
       
            <section className="breadcumb py-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center w-100 text-white">Shipping</h1>
                    </div>
                </div>
                <div className="ul-list">
                    <ul className="text-center mt-3">
                        <li className="list-inline-item"><Link to="/" className="text-white">Home</Link></li>
                        <li className="list-inline-item text-white">/</li>
                        <li className="list-inline-item text-white">Shipping</li>
                    </ul>
                </div>
            </section>

            <section className="my-shopping-bag py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="process-cart text-center w-100">
                                <ul className="mb-4">
                                    <li className="list-inline-item"><Link to="/cart" className="text-muted">Cart <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/suruchi-creations/checkout/" className="text-muted">Checkout <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>

                                    <li className="list-inline-item"><Link to="/suruchi-creations/checkout-to-ship" className="text-muted">Payment </Link></li>
                                </ul>
                            </div>
                        </div>

                        {
                            (loading) ? <Loader />

                                :

                                <>
                                    <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-xs-12 shopping_bag">
                                        <div className="col-12 my-shopping-bag p-3 border rounded text-center">


                                            <div style={{ float: "left", width: "720px", margin: "0px auto", textAlign: 'center' }}>
                                                <h4>Select Delivery Address</h4>
                                                <p>Default Address</p>
                                            </div>

                                            <div className=" half-input-button text-center mt-3" style={{ margin: "0px !important" }}>
                                                <button type="submit" name="submit_shipping" className="text-center " onClick={handleShow}>Add Address</button>
                                            </div>

                                        </div>


                                        {
                                            (getAddress.length > 0) ?


                                                <form name="paypalfrm" id="paypalfrm">
                                                    <div className="row border m-0 mt-3 p-3">

                                                        {
                                                            getAddress && getAddress.map((element, key) => {
                                                                return (
                                                                    <div key={key} className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 half-shopping">
                                                                        <div className="border text-center">
                                                                            <ul >
                                                                                <li ><input type="radio" name='shippingAddress' defaultChecked={element._id}
                                                                                    onClick={() => selectedAddress(element._id)} /></li>
                                                                                <li><b>{element.name}</b></li>
                                                                                <li>{element.address.houseNumber}, {element.address.street} <br />
                                                                                    {element.address.city} - {element.address.pinCode}</li>
                                                                                <li>Mobile: {element.phone}</li>
                                                                                <li>Pay on Delivery available</li>
                                                                                <li>Payment Gateway Intergration</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                )

                                                            })
                                                        }

                                                    </div>
                                                </form>
                                                :
                                                <div className="row border m-0 mt-3 p-3">
                                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 half-shopping'>
                                                        <div className="border text-center">
                                                            <li>You do not have added any delivery address</li>
                                                        </div>
                                                    </div>

                                                </div>

                                        }

                                        {/*
                            <section className="form-address-change mt-5">
                                <form onSubmit={addAddress}>
                                    <div className="row mt-4">
                                        <div className="row w-100 mt-4 m-0">
                                            <span className="w-100 text-center mb-4">Address</span>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 half-input">
                                                <input type="text"
                                                    className="w-100"
                                                    name="name"
                                                    placeholder="Name*"
                                                    required="required"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 half-input">
                                                <input type="number"
                                                    className="w-100"
                                                    name="phone"
                                                    placeholder="Mobile No*"
                                                    required="required"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}

                                                />
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 half-input">
                                                <input type="text"
                                                    className="w-100"
                                                    name="houseNumber"
                                                    placeholder="Flat, House no., Building..*"
                                                    required="required"
                                                    value={address.houseNumber}
                                                    onChange={(e) => handleAddress(e)}

                                                />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 half-input">
                                                <input type="text"
                                                    className="w-100"
                                                    name="street"
                                                    placeholder="Area, Colony, Street, Village*"
                                                    required="required"
                                                    value={address.street}
                                                    onChange={(e) => handleAddress(e)}

                                                />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 half-input">
                                                <input type="text"
                                                    className="w-100"
                                                    name="city" placeholder="City/Town*"
                                                    required="required"
                                                    value={address.city}
                                                    onChange={(e) => handleAddress(e)}

                                                />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 half-input">
                                                <input type="number"
                                                    className="w-100" name="pinCode"
                                                    placeholder="Pin Code*"
                                                    required="required"
                                                    value={address.pinCode}
                                                    onChange={(e) => handleAddress(e)}

                                                />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 half-input">
                                                <select className="p-1 border" name="add_type" id="addressType" value={add_type} onChange={(e) => setType(e.target.value)}>
                                                    <option value="">Address Type</option>
                                                    <option value="Home">Home</option>
                                                    <option value="Office">Office</option>

                                                </select>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 half-input-button text-center mt-3">
                                                <button type="submit" name="submit_shipping" className="text-center ">Add Address</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </section>
                                */}

                                        <div className="col-12 my-shopping-bag p-3 border rounded text-center select_payment-method shopping_bag mt-2">
                                            <h4 className="mb-4">Select Payment Method</h4>
                                            <form name="paymentfrm" >
                                                <input type="hidden" name="shipping_id" id="shipping_id" value="1" />
                                                <ul>
                                                    <li className="list-inline-item"><input type="radio" defaultChecked id="payment_method" className="mr-2" required /><p><b>Direct bank transfer</b></p>
                                                    </li>

                                                </ul>
                                            </form>
                                        </div>
                                        <div className="payment-Terms mt-1">
                                            <p className="text-justify">What are Payment Terms? Payment terms are the terms that govern the payment portion of a sale. They govern specific details such as the type and amount of payment expected, discounts offered, how the buyer can make the payment, under what conditions your company may assess late charges and more.</p>
                                        </div>


                                    </div>


                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 shopping_bag-content p-0">
                                        <div className="under-border border rounded p-3">
                                          

                                                {
                                                    cart && cart.map((item) => {
                                                        console.log(item)


                                                        return (

                                                            <>
                                                              <div className="row border-bottom pb-3 mb-3">
                                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-6 media-type">
                                                                    <div className="media-body align-self-center">
                                                                        <span className="mt-0"> <a href="#" className="font-weight-bold">{item.product.title}</a> </span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-6 price-type align-self-center">
                                                                    <div className="row">
                                                                        <div className="col-md-8 col-sm-6">
                                                                            <div className="media sis">
                                                                                <img className="rounded" src={`https://web-click-api.herokuapp.com/filestorage/${item.product.image}`} alt="" title="" />
                                                                                <div className="cart-up">
                                                                                    <p className="text-white">{item.quantity}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4 col-sm-6 fsb">
                                                                            <p className="font-weight-bold" >₹{item.product.price}.00</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                </div>


                                                            </>
                                                        )
                                                    })


                                                }



                                     
                                        </div>
                                        <br />


                                        <div className="under-border border rounded p-3">
                                            <div className="title-header-apply">
                                                <div className="under-list align-self-center">
                                                    <span className="mb-3 d-block"><b>Price Details ({cart.length} items)</b></span>
                                                    <ul>
                                                        <li className="list-inline-item w-100">Sub Total <span className="float-right"><b>₹{price}.00</b></span> </li>
                                                        <li className="list-inline-item w-100">Discount <span className="float-right"><b>₹0.00</b></span> </li>
                                                        <li className="list-inline-item w-100">Delivery Charges  <span className="float-right"><b>0.00</b></span> </li>
                                                        <li className="list-inline-item w-100">Grand Total  <span className="float-right"><b>₹{price}.00</b></span> </li>
                                                    </ul>
                                                    <div className="proceed-button text-center mt-3">
                                                        <li className="list-inline-item w-100 d-block"><Link to="/" className="text-white d-block" onClick={PlaceOrder}>Proceed To Buy</Link></li>
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


            <div className="modal fade modalcoship" id="basicExampleModal" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <Modal show={show}>
                        <div className="modal-content">
                            <Modal.Header className="modal-header">
                                <Modal.Title className='text-center text-capitalize w-100'>
                                    <h3 className="text-center text-capitalize w-100">Add Address </h3>
                                </Modal.Title>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}> <span aria-hidden="true">&times;</span> </button>
                            </Modal.Header>
                        </div>
                        <Modal.Body className="modal-body">
                            <div className="my-wishlist-page buynowpage ">
                                <div className="row">
                                    <div className="col-12 profileinfo manage-address">
                                        <div className="bordarea">

                                            <div className="profilelist">
                                                <div className="row">
                                                    <div className="col-md-12 col-12">
                                                        <form onSubmit={addAddress} >
                                                            <div className="box">
                                                                <h4 className="text-capitalize edit-heading mb-4">Contact Details</h4>
                                                                <div className="form-group row">
                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="name"
                                                                            placeholder="Name*"
                                                                            required="required"
                                                                            value={name}
                                                                            onChange={(e) => setName(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="phone"
                                                                            placeholder="Mobile No*"
                                                                            required="required"
                                                                            value={phone}
                                                                            onChange={(e) => setPhone(e.target.value)}
                                                                        />
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div className="box">
                                                                <h4 className="text-capitalize mb-4">Address</h4>
                                                                <div className="form-group row">
                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="houseNumber"
                                                                            placeholder="Flat, House no.*"
                                                                            required="required"
                                                                            value={address.houseNumber}
                                                                            onChange={(e) => handleAddress(e)}


                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="street"
                                                                            placeholder="Area, Colony, Street, Village*"
                                                                            required="required"
                                                                            value={address.street}
                                                                            onChange={(e) => handleAddress(e)}

                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="city"
                                                                            placeholder="City/Town*"
                                                                            required="required"
                                                                            value={address.city}
                                                                            onChange={(e) => handleAddress(e)}
                                                                        />
                                                                    </div>

                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="pinCode"
                                                                            value={address.pinCode}
                                                                            onChange={(e) => handleAddress(e)}
                                                                            placeholder="Pin Code*" required="required" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">

                                                                    <div className="col-md-6 col-xs-12">
                                                                        <select className="form-control" name="add_type" value={add_type} onChange={(e) => setType(e.target.value)} required >
                                                                            <option value="">Address Type</option>
                                                                            <option value="Home">Home</option>
                                                                            <option value="Office">Office</option>

                                                                        </select>
                                                                    </div>
                                                                </div>



                                                                <div className="change-name-btn update-btn text-center w-100">
                                                                    <button type="submit" className="btn btn-warning p-0 btn btn-warning">Add address</button></div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
           
        </>
    )
}

export default Shippingpage