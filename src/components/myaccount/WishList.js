import React, { useEffect, useState } from 'react'
import img1 from '../../images/PHOTO-2022-02-02-12-07-05-300x300.jpg'
import img2 from '../../images/PHOTO-2021-12-16-13-13-19-300x300.jpg'
import img3 from '../../images/PHOTO-2021-12-16-13-13-19-300x300.jpg'
import img4 from '../../images/delete.jpg'
import './WishList.css'
import SocialTags from '../pages/SocialTags'
import Sidebar from './Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Loader from '../Loader/Loader'
import { Helmet } from 'react-helmet'


const WishList = () => {
    const [getWishList, setGetWishList] = useState()
    const [wishlistLength, setWishlitsLength] = useState([])
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([])
    useEffect(() => {
        GetProfile()
        ShowCart()
    }, [])

    const user = JSON.parse(localStorage.getItem("user"))._id
    const GetProfile = async () => {
        let response = await fetch(`https://web-click-api.herokuapp.com/users/${user}`, {
            method: "GET"
        })
        response = await response.json()

        setGetWishList(response.user.wishlist)
        setWishlitsLength(response.user.wishlist.length)
        setLoading(false)

    }
    const RemoveWishList = async (item) => {
        let response = await fetch(`https://web-click-api.herokuapp.com/users/unwishlist/${user}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
            },
            body: JSON.stringify({ "productId": item._id })
        })
        response = await response.json()

        setLoading(true)
        if (response.success) {
            GetProfile()
            toast.success(response.message, {
                position: "top-center",
                autoClose: 1000,

            });
        }

    }



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
            ShowCart()
            if (result.success) {
                toast.success(result.message, {
                    position: "top-center",
                    autoClose: 1000,

                });
                RemoveWishList(product)
                GetProfile()
                setLoading(false)
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


    return (
        <>
            <Helmet>
                <title>WishList</title>
            </Helmet>
          
            <div className="body-content py-5">
                <div className="container">
                    <div className="my-wishlist-page ">
                        <div className="row">

                            <Sidebar />
                            <div className="col-md-8 col-lg-9 profileinfo">



                                <div className="row">

                                    {
                                        (loading) ?
                                            <Stack spacing={2}>
                                                <Skeleton variant="rectangular" width={900} height={100} animation="wave" />
                                                <Skeleton variant="rectangular" width={900} height={100} animation="wave" />
                                                <Skeleton variant="rectangular" width={900} height={100} animation="wave" />
                                                <Skeleton variant="rectangular" width={900} height={100} animation="wave" />
                                            </Stack>
                                            :
                                            <div className="col-12">
                                                {
                                                    (wishlistLength > 0) ?
                                                        <div className="">

                                                            {
                                                                getWishList && getWishList.map((item) => {
                                                                    console.log(item)
                                                                    return (
                                                                        <div className="row your-wishlist ">
                                                                            <div className="col-md-1 col-lg-1 col-sm-12 col-xs-12 ">
                                                                                <div className="styu">
                                                                                    <img src={`https://web-click-api.herokuapp.com/filestorage/${item.image}`} alt="product Image" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                                                                <div className="styu">
                                                                                    <h6><a className="product-name mb-10" href="http://www.webclickdigital.info/suruchi-creations/detail/zaayra-pashmina-prm-rate-775-per-pcs-design-8-pcs-catalog--/">{item.title} </a></h6>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                                                                                <div className="styu">
                                                                                    <div className="product__items--price">
                                                                                        <span className="current__price">₹{item.price}.00</span>
                                                                                        <span className="price__divided"></span>
                                                                                        <span className="old__price"></span>
                                                                                    </div>

                                                                                    <a role='button' onClick={() => RemoveWishList(item)}><span className="stock-status in-stock mb-0 text-white">Remove</span></a>
                                                                                    <button className="btn btn-sm p-0 text-white"><a role="button" onClick={() => AddToCart(item)} class="text-white font-size-wishlist">Add to cart</a></button>


                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        : <h1>Your wishlist is empty</h1>




                                                }

                                            </div>
                                    }


                                </div>


                            </div>
                        </div>
                    </div >
                </div >
            </div >

            <SocialTags />
            <ToastContainer />
            
        </>

    )
}

export default WishList