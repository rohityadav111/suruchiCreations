import React from 'react'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Header from '../pages/Header';

const Editcategory = () => {
    const params = useParams()
    let navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [meta_title, setMeta_title] = useState("")
    const [meta_keyword, setMeta_keyword] = useState("")
    const [meta_description, setMeta_description] = useState("")
    const [image, setImage] = useState([])

    const handleChange = (e) => {
        setImage(e.target.files[0]);
    }

    useEffect(() => {
        categoryList()
    }, [])

    const categoryList = async () => {
        let result = await fetch("https://web-click-api.herokuapp.com/category", {
            method: "GET",
        });

        result = await result.json()

        {
            (result.categorytList.map((element) => {
                if (params.id == element._id) {
                    setTitle(element.title);
                    setSlug(element.slug);
                    setImage(element.image)
                    setMeta_title(element.meta_title);
                    setMeta_keyword(element.meta_keyword);
                    setMeta_description(element.meta_description)


                }

            }));

        }

    }

    const UpdateCategory = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('slug', slug)
        formData.append('meta_title', meta_title)
        formData.append('image', image)
        formData.append('meta_keyword', meta_keyword)
        formData.append('meta_description', meta_description)
        let response = await fetch(`https://web-click-api.herokuapp.com/category/${params.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
            },
            body: formData
        })
        response = await response.json()
        if (response.success) {
            toast.success(response.message, {
                position: "top-center",
                autoClose: 1000,
            })
            navigate('/admin-catalog/categories')
        } else {
            toast.error(response.message, {
                position: "top-center",
                autoClose: 1000,
            })

        }

    }
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
                                    <h3 className="panel-title">Update Category</h3>
                                </div>

                                <div className="panel-body" style={{ padding: "30px" }}>
                                    <div className='row'>
                                        <form onSubmit={UpdateCategory} >
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label>Category Name</label>
                                                    <input type="text"
                                                        className='form-control'
                                                        name="title"
                                                        defaultValue={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Slug</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="title"
                                                        name="slug"
                                                        defaultValue={slug}
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
                                                        defaultValue={image}
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
                                                    defaultValue={meta_title}
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
                                                        defaultValue={meta_keyword}
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
                                                        defaultValue={meta_description}
                                                        onChange={(e) => setMeta_description(e.target.value)}></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <Link to="/catalog/categories" className="btn btn-primary pull-right">Cancel</Link>
                                                <button type="submit" className="right btn btn-primary pull-right">Update</button>
                                            </div>
                                            <ToastContainer />
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Editcategory
