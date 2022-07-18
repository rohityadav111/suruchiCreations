import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Header from '../pages/Header';
import axios from 'axios';


const AddProduct = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [slug, setSlug] = useState("")
    const [description, setDescription] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [quantity, setQuantity] = useState("")
    const [image, setImage] = useState([])
    const [meta_title, set_meta_title] = useState("")
    const [meta_keyword, set_meta_keyword] = useState("")
    const [meta_description, set_meta_description] = useState("")

    let navigate = useNavigate()


    const handleChange = (e) => {
        setImage(e.target.files[0]);
    }

    const formData = new FormData();
    formData.append('title', title)
    formData.append('price', price)
    formData.append('slug', slug)
    formData.append('image', image)
    formData.append('description', description)
    formData.append('categoryId', categoryId)
    formData.append('quantity', quantity)
    formData.append('meta_title', meta_title)
    formData.append('meta_keyword', meta_keyword)
    formData.append('meta_description', meta_description)

    async function postData(e, url = 'https://web-click-api.herokuapp.com/products', data = formData) {
        e.preventDefault();

        const result = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: data
        }).then((result) => result.json())

        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 1000,

            })
            navigate("/catalog/products")

        } else {
            toast.error(result.message, {
                position: "top-center",
                autoClose: 1000,

            })

        }

    }

    const [category, setCategory] = useState([])

    useEffect(() => {
        categoryList()
    }, [])

    const categoryList = async () => {
        await axios.get("https://web-click-api.herokuapp.com/category", {

        }).then((response)=>{
            setCategory(response.data.categorytList)
        })
    }

    console.log(categoryId)
    return (
        <>
            <Header />

            <div className='container-fluid'>
                <Sidebar />
                <div className="right-section">

                    <div className="dashboard-bar">
                        <h2 className="headn-h2">Catalog</h2>
                    </div>

                    <div className="main-section">
                        <div className="col-md-12 col-sm-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Products</h3>
                                </div>
                                <div className='row'>
                                    <div className="panel-body" style={{ padding: "30px" }}>
                                        <form onSubmit={postData}>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Category </label>
                                                    <div className="select-quantity mt-1">
                                                        <select className="form-control" name="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} >
                                                            <option>Select Category</option>

                                                            {
                                                                category && category.map((element) => {
                                                                    return (
                                                                        <>
                                                                            <option value={element._id}>{element.title}</option>
                                                                        </>
                                                                    )

                                                                })
                                                            }
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Product Name</label>
                                                    <input type="text" className="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Slug</label>
                                                    <input type="text" className="form-control" name="slug" value={slug} onChange={(e) => setSlug(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Quantity</label>
                                                    <input type="text" className="form-control" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Price</label>
                                                    <input type="text" className="form-control" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Featured Images</label>
                                                    <input className="btn btn-default" type="file" name="image" style={{ width: "100%" }} onChange={handleChange} />

                                                    <span className="red" style={{ color: "red" }}><font size="2" width="bold">[ Size : 217*250 ]px</font></span>
                                                </div>
                                            </div>


                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                                <label htmlFor="exampleInputEmail1">Description</label>
                                                <textarea name="description" className="form-control ckeditor" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Meta Title</label>
                                                    <input type="text" className="form-control" name="meta_title" value={meta_title} onChange={(e) => set_meta_title(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Meta Keyword</label>
                                                    <input type="text" className="form-control" name="meta_keyword" value={meta_keyword} onChange={(e) => set_meta_keyword(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-1">
                                                <label htmlFor="exampleInputEmail1">Meta Description</label>
                                                <textarea name="meta_description" className="form-control ckeditor" rows="3" value={meta_description} onChange={(e) => set_meta_description(e.target.value)}></textarea>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <a href="products_mgmt.php" className="btn btn-primary pull-right">Cancel</a>
                                                <button type="submit" className="right btn btn-primary pull-right"> Add </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>


    )
}

export default AddProduct