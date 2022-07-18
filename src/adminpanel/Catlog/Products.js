import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

import { Link,NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader'
import Header from '../../../../suruchi/src/adminpanel/pages/Header'
const Products = () => {

    const [loading, setLoading] = useState(false)
   

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }, [])

    useEffect(() => {
        getProducts();
    }, [])
    const [product, setProduct] = useState([])

    const getProducts = async () => {
        let response = await fetch("https://web-click-api.herokuapp.com/products", {
            method: "GET",
        })
        response = await response.json();
        setProduct(response.productList)

    }

    const DeleteProduct = async(id)=>{
        let response = await fetch(`https://web-click-api.herokuapp.com/products/${id}`,{
            method:"DELETE",
            headers:{
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
            }

        })
        response = await response.json()
      
        if(response.success){
            toast.success(response.message,{
                position: "top-center",
                autoClose: 1000,
        })
        getProducts()
        }else{
            toast.error(response.message,{
                position: "top-center",
                autoClose: 1000,
        })

        }
    }

    const handleChange = async (e) => {
        let key = e.target.value;

        if (key) {
            let result = await fetch(`https://web-click-api.herokuapp.com/products/search/${key}`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                }
            })
            result = await result.json();
            console.log(result)
            if (result.success) {
                setProduct(result.product)
            } else {
                toast.error(result.message,{
                    position: "top-center",
                    autoClose: 1000,
            })

            }

        } else {
            getProducts();
        }

    }
    const DeleteAll =async()=>{
        let response = await fetch('https://web-click-api.herokuapp.com/products/deleteall',{
            method:"DELETE",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }

        })
        response = await response.json()
        console.log(response)
        if(response.success){
            toast.success(response.message,{
                position: "top-center",
                autoClose: 1000,
        })
        getProducts()
        }else{
            toast.error(response.message,{
                position: "top-center",
                autoClose: 1000,
        })
        }
    }


    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <Sidebar />
                <div className="right-section">
                    <form name="pageinfo" method="get" >
                        <input type="hidden" name="searchQuery" value="" />
                        <input type="hidden" name="pageno" value="1" />
                    </form>
                    <div className="dashboard-bar">
                        <h2 className="headn-h2">Catalog</h2>
                    </div>

                    {
                        (loading) ? <Loader/>
                    :
                    <div className="main-section">
                        <div className="col-sm-12 col-md-12 col-xs-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Products</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            
                                                <div className="input-group">
                                                    <input type="text" name="searchQuery" className="form-control input-style" placeholder="Search By Products" onChange= {handleChange} />
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-default pull-left" type="submit" name="search" >Search</button>
                                                    </span>
                                                </div>
                                         

                                        </div>

                                        <div className="col-md-1 col-sm-1">
                                            <Link to="/catalog/products/add"><button className="btn btn-primary pull-right" type="button" >Add New</button></Link>
                                        </div>
                                        <div className="col-md-5 col-sm-5">
                                            <a role="button"><button className="btn btn-default doi" type="button" onClick={()=> DeleteAll()}>Delete All <i className="glyphicon glyphicon-export"></i></button></a>
                                           
                                        </div>

                                    </div>
                                    <div className="clearfix"></div>
                                    <table className="table table-bordered" style={{ marginTop: "15px" }}>
                                        <thead >
                                            <tr>
                                                <th>S.No.</th>
                                                <th>Category</th>
                                                <th>Product</th>
                                                <th>Image</th>
                                                <th>Status</th>
                                                <th>Featured</th>
                                                <th>Action</th>
                                                <th><label><input type="checkbox" id="checkAllbox" /></label></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                product && product.map((item,index) => {
                                                    console.log(item)
                                                    return (
                                                        <tr>
                                                            <th scope="row">{index +1}</th>

                                                            <td>{item.category.map(x=> x.title)}</td>
                                                            <td>{item.title}</td>
                                                            <td><img src={`https://web-click-api.herokuapp.com/filestorage/${item.image}`} alt="product Image" height="80" width="100" /></td>
                                                            <td>
                                                                <input type="checkbox" name="status815" id="status815"/>
                                                            </td>
                                                            <td>
                                                                <input type="checkbox" name="featured815" id="featured815"  />
                                                            </td>
                                                            <td>
                                                                <a role="button" title="Delete" class="btn btn-primary btn-xs" onClick={(e)=> DeleteProduct(item._id)} > <FontAwesomeIcon icon={faTrashCan} /> </a>
                                                                <Link to={`/catalog/products/product-edit/${item._id}`} title="Edit" class="btn btn-primary btn-xs"><FontAwesomeIcon icon={faPenToSquare} /></Link>
                                                            </td>
                                                            <th>
                                                                <label><input type="checkbox" class="checkbox"  name="check_status[]" /></label>
                                                            </th>
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
            </div >
            <ToastContainer/>
        </div >
    )
}

export default Products