
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import Header from '../pages/Header';

const AddCategory = () => {
    let navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [meta_title, setMeta_title] = useState("")
    const [meta_keyword, setMeta_keyword] = useState("")
    const [meta_description, setMeta_description] = useState("")
    const [image, setImage] = useState("")

    const formData = new FormData()
    const Add = async (e) => {
        e.preventDefault()
        formData.append('title', title)
        formData.append('slug', slug)
        formData.append('meta_title', meta_title)
        formData.append('image', image)
        formData.append('meta_keyword', meta_keyword)
        formData.append('meta_description', meta_description)

        let result = await fetch("https://web-click-api.herokuapp.com/category", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            },
            body: formData

        })
        result = await result.json()
        console.log(result)

        if(result.success){
            toast.success(result.message,{
                position: "top-center",
                autoClose: 1000,
        })
            navigate("/admin-catalog/categories")
          
        }else{
            toast.error(result.message,{
                position: "top-center",
                autoClose: 1000,
        })

        }
    }

    const handleChange = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <>
        <Header/>
       
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
                                <h3 className="panel-title">Add Category</h3>
                            </div>
                            <div className="panel-body" style={{ padding: "30px" }}>
                                <div className='row'>

                                    <form onSubmit={Add} >
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label>Category Name</label>
                                                <input type="text"
                                                    className='form-control'
                                                    name="title"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Slug</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="title"
                                                    name="slug"
                                                    value={slug}
                                                    onChange={(e) => setSlug(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label>Category Image</label>
                                                <input
                                                    className="btn btn-default"
                                                    type="file"
                                                    name="image"
                                                    style={{ width: "100%" }}
                                                    onChange={handleChange}
                                                />

                                                <span className="red" style={{ color: "red" }}><font size="2" width="bold">[ Size : 217*250 ]px</font></span>
                                            </div>
                                        </div>


                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div className="form-group">
                                            <label>Meta Title</label>
                                            <input type="text"
                                                className="form-control"
                                                id="meta_title"
                                                name="meta_title"
                                                value={meta_title}
                                                onChange={(e) => setMeta_title(e.target.value)} />
                                        </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label>Meta Keyword</label>
                                                <textarea name="meta_keyword"
                                                    id="meta_keyword"
                                                    className="form-control"
                                                    rows="3"
                                                    value={meta_keyword}
                                                    onChange={(e) => setMeta_keyword(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label>Meta Description</label>
                                                <textarea name="meta_description"
                                                    id="meta_description"
                                                    className="form-control"
                                                    rows="3"
                                                    value={meta_description}
                                                    onChange={(e) => setMeta_description(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <a href="" className="btn btn-primary pull-right">Cancel</a>
                                            <button type="submit" name="submit" value="add" className="right btn btn-primary pull-right"> Add </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
        </>


    )
}

export default AddCategory