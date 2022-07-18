import React from 'react'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
import Header from '../pages/Header';
const AdminCategories = () => {

    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        categoryList()
    }, [])

    const categoryList = async () => {
         axios.get("https://web-click-api.herokuapp.com/category", {
        }).then((response) => {
            setCategory(response.data.categorytList)
            setLoading(false)
        })
    }

    const Deletecategory = async (catId) => {
        let result = await fetch(`https://web-click-api.herokuapp.com/category/${catId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        })
        result = await result.json();
        console.log(result)
        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 1000,
            })
            categoryList();
        }
    }
    const DeleteAllCategories = async () => {
        let response = await fetch('https://web-click-api.herokuapp.com/category/deleteall', {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        })
        response = await response.json()
        console.log(response)
        if (response.success) {
            toast.success(response.message, {
                position: "top-center",
                autoClose: 1000,
            })
            categoryList();
        } else {
            toast.error(response.message, {
                position: "top-center",
                autoClose: 1000,
            })

        }
    }

    return (
        <>
        <Header/>
       
        <div className="container-fluid">
            <Sidebar />
            <div className="right-section">
                <form name="pageinfo" method="get" action="">
                    <input type="hidden" name="searchQuery" />
                    <input type="hidden" name="pageno" />
                </form>
                <div className="dashboard-bar">
                    <h2 className="headn-h2">Catalog</h2>
                </div>

                {
                    (loading) ? <Loader />
                        :

                        <div className="main-section">
                            <div className="col-sm-12 col-md-12 col-xs-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Categories</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-sm-4">

                                                <div className="input-group">
                                                    <input style={{ border: "1px solid #d3d3d3", height: "38.5px" }} type="text" name="searchQuery" className="form-control" placeholder="Search By Category" required />
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-default" type="submit" name="search">Search</button>
                                                    </span>

                                                </div>

                                            </div>

                                            <div className="col-sm-3">
                                                <Link to='/catalog/products/category'><button className="btn btn-primary center-block" type="button">Add New</button></Link>
                                            </div>
                                            <div className="col-sm-5">
                                                <a role='button'><button className="btn btn-default doi" type="button" onClick={() => DeleteAllCategories()}>Delete All</button></a>

                                            </div>

                                        </div>
                                        <div className="clearfix"></div>
                                        <table className="table table-bordered" style={{ marginTop: "15px" }}>
                                            <thead style={{ background: "#d6d6d7" }}>
                                                <tr>
                                                    <th>S.No.</th>
                                                    <th>Category</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                    <th><label><input type="checkbox" /></label></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    category && category.map((element, index) => {

                                                        return (
                                                            <tr key={index}>

                                                                <td>{index + 1}</td>
                                                                <td>{element.title}</td>
                                                                <td>{element.status}</td>
                                                                <td>
                                                                    <a role="button" className="btn btn-primary btn-xs" onClick={() => Deletecategory(element._id)}> <FontAwesomeIcon icon={faTrashCan} /> </a>
                                                                    <Link to={`/catalog/products/category-edit/${element._id}`} title="Edit" className="btn btn-primary btn-xs"><FontAwesomeIcon icon={faPenToSquare} /> </Link>
                                                                </td>
                                                                <td></td>
                                                                <td></td>


                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>
                }

            </div>
            <ToastContainer />
        </div >
        </>
    )
}

export default AdminCategories