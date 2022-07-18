import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './OrderSuccess.css'

const OrderSuccess = () => {

    const [orderDetails, setOrderDetails] = useState("")

    useEffect(()=>{
        GetOrder() 
    },[])
    const GetOrder =async()=>{
        let response = await fetch("https://web-click-api.herokuapp.com/order",{
            method:"GET",
            headers:{
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        })
        response = await response.json()
        console.log(response)
        setOrderDetails(response.orderList.map(item=> item.orderId).reverse())

    }
    console.log(orderDetails)

    let user = JSON.parse(localStorage.getItem('user')).name
   
    return (
        <div>
           
            <section className="cstmr-lgn py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 co-lg-12 col-md-12 col-sm-12 col-xs-12 text-center p-0">
                            <div className="success-d">
                                <div className="succes-content">
                                    <h1>Hi {user} ! Your Order has been received</h1>
                                    <p><b>Thank you for placing your order!</b></p>
                                    <p className="fnt-sz">Your order number is <b>SCO{orderDetails[0]} </b>
                                        You will receive a confirmation email with
                                        details of your order <br/>
                                            and a link to track its progress.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 co-lg-12 col-md-12 col-sm-12 col-xs-12 text-center p-0">
                            <div className="success-d">
                                <div className="succes-content">
                                    <h1 className="text-uppercase">Our bank details:</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="success-d w-100">
                            <div className="succes-content">
                                <div className="row">
                                    <div className="col-xl-4 co-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                        <div><b>BANK:</b></div>
                                        <div>HDFC</div>
                                    </div>
                                    <div className="col-xl-4 co-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                        <div><b>ACCOUNT NUMBER:</b></div>
                                        <div>50200007362931</div>
                                    </div>
                                    <div className="col-xl-4 co-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                        <div><b>IFSC:</b></div>
                                        <div>HDFC0000553</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default OrderSuccess