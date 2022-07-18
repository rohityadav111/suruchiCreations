import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faStar, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faVimeo, faPinterest, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import img1 from '../../images/IMG-20211027-WA0058-300x300.jpg'
import img2 from '../../images/PHOTO-2020-10-02-09-38-55_1-e1604749422848-300x300.jpg'
import img3 from '../../images/PHOTO-2022-02-17-11-34-28-300x300.jpg'
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink, Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../Loader/Loader'
import './CategoryProducts.css'
import Pagination from 'react-js-pagination'
import { Helmet } from 'react-helmet';


const CategoryProducts = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState("")
    const [page, setPage] = useState("")
    const [category, setCategory] = useState([])
    const [price, setPrice] = ([0, 25000])
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        GetProducts()

    }, [product])

    useEffect(() => {
        GetCategoryList()
    }, [])

    const priceHandler = (event, newPrice) => {
        console.log(newPrice)

    }

    const GetCategoryList = async () => {
        let response = await fetch("https://web-click-api.herokuapp.com/category", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
            }
        })
        response = await response.json()
        setLoading(false)
        setCategory(response.categorytList)


    }

    const [cart, setCart] = useState([])

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
        console.log(cart)

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

    let params = useParams()
    const param = Object.values(params)
    const GetProducts = async () => {
        let response = await fetch(`https://web-click-api.herokuapp.com/products/?categoryId=${param}&page=${currentPage}&limit=${6}`, {
            method: "GET",

        })
        response = await response.json()

        setProduct(response.productList.docs)
        setPage(response.productList)
        setLoading(false)
    }

    const currentPageHandler = (e) => {
        setCurrentPage(e)

    }



    return (

        <>


            {
                (loading) ? <Loader />
                    :
                    <>

                        <section className="breadcumb py-5">
                            <div className="container">
                                <div className="row">
                                    <h1 role="button" className="text-center w-100 text-white" >Our Products</h1>
                                </div>
                            </div>
                            <div className="ul-list">
                                <ul className="text-center mt-3">
                                    <li className="list-inline-item"><a href="#" className="text-white">Home</a></li>
                                    <li className="list-inline-item text-white">/</li>
                                    <li className="list-inline-item text-white"></li>
                                </ul>
                            </div>
                        </section>

                        <section className="our-products py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 side_bar-panel">
                                        <span className="text-uppercase font-weight-bold">Filter By : </span>
                                        <ul className="accordion-menu">
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography sx={{ width: '100%', flexShrink: 20, color: "#ce155a" }}> <div className="font-weight-bold"> Product Type </div></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        {
                                                            category && category.slice(0, 5).map((element, index) => {

                                                                return (

                                                                    <ul className="category" key={index}>
                                                                        <li >
                                                                            <NavLink to={`/suruchi-creations/products/${element._id}`}
                                                                            >{element.title}</NavLink>
                                                                        </li>
                                                                    </ul>
                                                                )
                                                            })
                                                        }

                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                          
                                        </ul>
                                    </div>

                                    <div className="col-xl-9 col-9 col-md-9 col-sm-12 col-xs-12 product-_side">
                                        <div className="row">

                                            {
                                                product && product.map((element, index) => {
                                                    return (
                                                        <>
                                                            <div key={index} className="col-xl-4 our-product col-md-3 col-sm-12 col-xs-12 product-box " data-tilt="" data-tilt-max="10" >
                                                                <div className="for-img-side img-hover-zoom">
                                                                    <div className="grid">
                                                                        <figure className="effect-bubba">
                                                                            <img src={`https://web-click-api.herokuapp.com/filestorage/${element.image}`} alt="productimage" title="" />
                                                                            <figcaption>
                                                                            </figcaption>
                                                                        </figure>
                                                                    </div>
                                                                </div>

                                                                <div className="text-side">
                                                                    <p> {element.title}  </p>
                                                                    <ul className="w-100 d-block mt-3">
                                                                        <li className="list-inline-item text-left text-dark">Rs {element.price}</li>
                                                                        <li className="list-inline-item text-right review-star float-right">
                                                                            <FontAwesomeIcon icon={faStar} />
                                                                            <FontAwesomeIcon icon={faStar} />
                                                                            <FontAwesomeIcon icon={faStar} />
                                                                            <FontAwesomeIcon icon={faStar} />
                                                                            <FontAwesomeIcon icon={faStar} />
                                                                        </li>
                                                                    </ul>
                                                                    <div className="size">
                                                                        <span>Size : S</span>
                                                                    </div>

                                                                    <div className="tags-samll mt-2">
                                                                        <ul>
                                                                            <li className="list-inline-item"><a href="#" className="text-dark">S</a></li>
                                                                            <li className="list-inline-item"><a href="#" className="text-dark">M</a></li>
                                                                            <li className="list-inline-item"><a href="#" className="text-dark">L</a></li>
                                                                            <li className="list-inline-item"><a href="#" className="text-dark">XL</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <div className="buttons-concept mt-4">
                                                                    <ul>
                                                                        <li className="list-inline-item">
                                                                            <Link to={`/detail/${element._id}`} className="bg-transparent  border font-weight-bold py-2 px-4 rounded" data-toggle="modal" data-target=".bd-example-modal-sm">Quick View</Link></li>

                                                                        <li className="list-inline-item"><a role="button"
                                                                            className="font-weight-bold border py-2 px-4 rounded text-white"
                                                                            onClick={() => AddToCart(element)}
                                                                        >Add To Cart</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>


                                                        </>
                                                    )

                                                })
                                            }


                                            {
                                                (page.totalDocs > 6) ?
                                                    
                                                            <div className="custom-pagination w-100 d-flex justify-content-center mt-4">
                                                                <ul className="pagination text-center w-100 d-block">
                                                                    <Pagination
                                                                        activePage={currentPage}
                                                                        itemsCountPerPage={page.limit}
                                                                        totalItemsCount={page.totalDocs}
                                                                        onChange={currentPageHandler}
                                                                        nextPageText=">"
                                                                        prevPageText="<"
                                                                        lastPageText='Last'
                                                                        itemClass="page-item"
                                                                        linkClass='page-link'
                                                                        activeClass='pageItemActive'
                                                                        activeLinkClass='pageLinkActive'

                                                                    />
                                                                </ul>
                                                          
                                                    </div>
                                                    : null

                                            }
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>
                    </>

            }
            <ToastContainer />
           
        </>

    )
}

export default CategoryProducts