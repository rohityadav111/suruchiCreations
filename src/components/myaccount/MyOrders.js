import React, { useCallback, useEffect } from 'react'
import { useState } from 'react';
import Sidebar from './Sidebar';
import './MyOrders.css'
import MyOrderCard from './MyOrderCard';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
const MyOrders = () => {
  const [getOrder, setgetOrder] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    GetOrder();
  }, [])

  const userId = JSON.parse(localStorage.getItem("user"))._id
  const GetOrder = useCallback(async () => {
    let response = await fetch(`https://web-click-api.herokuapp.com/order?userId=${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
      }
    })
    response = await response.json()
    console.log(response)
    setgetOrder(response.orderList)
    setLoading(false)

  }, [`https://web-click-api.herokuapp.com/order?userId=${userId}`])




  return (

    <>
      <Helmet>
        <title>My Orders</title>
      </Helmet>

      {
        (localStorage.getItem('user')) ?

          <div className="body-content py-5">
            <div className="container">
              <div className="my-wishlist-page ">
                <div className="row">
                  <Sidebar />


                  <div className="col-md-8 col-lg-9 my-wishlist my-order">


                    <>
                      {
                        (loading) ?
                          <Stack spacing={2}>
                            <Skeleton variant="rectangular" width={900} height={100} animation="wave" />
                            <Skeleton variant="rectangular" width={900} height={100} animation="wave" />
                            <Skeleton variant="rectangular" width={900} height={100} animation="wave" />
                          </Stack>

                          :
                          <>
                            {
                              (getOrder.length > 0) ?
                                <div className="table-responsive">
                                  <table className="table">
                                    <tbody>
                                      {getOrder.length > 0 && getOrder.map((item, index) => {

                                        return (
                                          <tr className="wishlistarea mb-4 d-block">
                                            <td className="w-100 d-block order-placed">
                                              <div className="orderheader">
                                                <div className="row">
                                                  <div className="col-6">
                                                    <h6>order placed: <span>{item.createdAt.substring(0, 10)}</span></h6>
                                                  </div>
                                                  <div className="col-6">
                                                    <h6 className="text-center w-100 d-block order-status">order status: <span>{item.status}</span></h6>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="ordermain pb5">
                                                <div className="row">
                                                  <div className="col-lg-8 col-md-12 xol-sm-12 col-xs-12">
                                                    <ul className="myorderdelivered">
                                                      <li className="myordertxt"> <b>Delivered:</b> <span> 09-June-2022 </span> </li>
                                                      <li className="myordertxt"> <b>OrderId:</b> <span>SCO{item.orderId}</span>  </li>
                                                    </ul>
                                                  </div>
                                                  <div className="col-lg-4 col-md-12 xol-sm-12 col-xs-12">
                                                    <div className="btnmyorder">
                                                      <ul>
                                                        <li></li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="ordermain ordermainimg mt-2">

                                                  <div className="row">
                                                    {item.orderItems.map((card, index) => {

                                                      return (
                                                        <MyOrderCard product_id={card.product} key={index} quantity={card.quantity} price={card.price} />

                                                      )
                                                    }





                                                    )}

                                                    <div className='text-end'>
                                                      <b>Gross Total: {item.grossTotal}.00</b>
                                                    </div>
                                                  </div >
                                                </div>

                                                {/*

                                              <div className="col-lg-2 col-md-2 col-sm-12 col-sm-12">
                                                <div className="wishlistitemimg">  <img src="http://www.webclickdigital.info/suruchi-creations/uploads/products/1653482437img-20220514-wa0014jpg" className="image product-thumbnail pt-40 text-center" style={{ height: "100px", width: "100%" }} alt="imga" /> </div>
                                              </div>
                                              <div className="col-lg-8 col-md-8 col-sm-12 col-sm-12">
                                                <div className="product-name window-will"><a href="http://www.webclickdigital.info/suruchi-creations/detail/gulhaar-vol-3-mumtaz--rate--890-per-pcs--design--10-pcs-catalog--/">{item.orderId}</a></div>
                                                <div className="price">Rs {item.grossTotal}.00</div>
                                              </div>
                                              <div className="col-lg-2 col-md-12 col-sm-12 col-sm-12">
                                                <div className="btnmyorder">
                                                  <Link to={`/suruchi-creations/review/${item._id}`} className="btn-upper p-0 btn btn-default" data-toggle="modal" data-target="#myReview827" >Write A review</Link>
                                                </div>

                                              </div>

                                  */}











                                              </div>
                                            </td>

                                          </tr>


                                        )
                                      }

                                      )}
                                    </tbody>

                                  </table>
                                </div>


                                : <h1>No Order Found</h1>



                            }

                          </>

                      }
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>

          : <Navigate to="/login"></Navigate>
      }
    
    </>

  )
}

export default MyOrders