import React from 'react'
import Sidebar from './Sidebar'
import { Navigate, useParams, useNavigate } from 'react-router'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Header';
import Footer from '../Footer';

const ReviewForm = () => {
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")

    let navigate = useNavigate()
    const params = useParams()
    console.log(params)
    let userId = JSON.parse(localStorage.getItem('user'))._id
    const data = { userId, "comment": comment, "rating": rating }
    const ProductReview = async (e) => {
        e.preventDefault();
        let response = await fetch(`https://web-click-api.herokuapp.com/products/review/${params.id}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        response = await response.json()
        if (response.success) {
            toast.success(response.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            navigate('/suruchi-creations/my-orders')
        } else {
            toast.error(response.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }

    }

    return (
 
            <div className="body-content py-5">
                <div className="container">
                    <div className="my-wishlist-page ">
                        <div className="row">
                            <Sidebar />

                            <div className="col-md-8 col-lg-9 profileinfo manage-address border p-4">
                                <div className=" model_design" id="myReview827" role="dialog">

                                    <div className="">
                                        <div >
                                            <div className="">
                                                <div className="">
                                                    <div>
                                                        <h4 className="text-capitalize text-center w-100">Write a Review</h4>
                                                    </div>

                                                </div>
                                                <div className="">
                                                    <form onSubmit={ProductReview}>

                                                        <select className="form-control select-option" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} required>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                        <div className="form-group">
                                                            <textarea className="form-control pt-3" placeholder="Review" rows="5" name="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                                        </div>
                                                        <button type="submit" className="btn my-order-btn p-0 btn-warning">Submit</button>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div >


                        </div>

                    </div >

                </div >

            </div >
        
    )
}

export default ReviewForm