import React, { useEffect, useCallback } from 'react'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const MyOrderCard = (props) => {
    const [product, setProduct] = useState("")
    useEffect(() => {
        productDetail()
    }, [])

    let price = 0;

    const productDetail = useCallback(async () => {
        let response = await fetch(`https://web-click-api.herokuapp.com/products/${props.product_id}`, {
            method: "GET",

        })
        response = await response.json()

        setProduct(response.product)
    }, [`https://web-click-api.herokuapp.com/products/${props.product_id}`])
    price += props.price * props.quantity;


    return (


        <>

            <div className="col-lg-2 col-md-2 col-sm-12 col-sm-12">
                <div className="wishlistitemimg">  <img src="http://www.webclickdigital.info/suruchi-creations/uploads/products/1653482437img-20220514-wa0014jpg" className="image product-thumbnail pt-40 text-center" style={{ height: "100px", width: "100%" }} alt="imga" /> </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-sm-12">
                <div className="product-name window-will"><Link to={`/detail/${product._id}`}>{product.title}</Link></div>
                <div className="price">{props.price}.00 X {props.quantity} = Rs {price}.00</div>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12 col-sm-12">
                <div className="btnmyorder">
                    <Link to={`/suruchi-creations/review/${product._id}`} className="btn-upper p-0 btn btn-default" data-toggle="modal" data-target="#myReview827" >Write A review</Link>
                </div>

            </div>




        </>

    )
}

export default MyOrderCard
