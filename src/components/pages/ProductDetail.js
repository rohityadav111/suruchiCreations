import React from 'react'
import img1 from '../../images/IMG-20211022-WA0244-300x300.jpg'
import img2 from '../../images/IMG-20211027-WA0058-300x300.jpg'
import img3 from '../../images/IMG-20211130-WA0137-300x300.jpg'
import img4 from '../../images/IMG-20220117-WA0009-300x300.jpg'
import img5 from '../../images/IMG-20220426-WA0108-300x300.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import img6 from '../../images/heading-shape.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import ImageGallery from 'react-image-gallery';
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProductDetails } from '../../actions/productAction'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import { add } from '../../actions/cartAction'
import { ToastContainer, toast } from 'react-toastify';
import Rating from '@mui/material/Rating';
import Header from '../Header'
import Footer from '../Footer'


const ProductDetail = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState("")
    const [products, setProducts] = useState()
    const [user, setUser] = useState("")
    const [getProfile, setGetProfile] = useState()
    let params = useParams()



    useEffect(() => {
        dispatch(getProductDetails(params.id))
        ShowCart()
        getProductDetail()

    }, [dispatch, params.id]);

    useEffect(() => {
        GetProfile()
    }, [])

    const getProductDetail = async () => {
        let response = await fetch(`https://web-click-api.herokuapp.com/products/${params.id}`, {
            method: "GET"
        })
        response = await response.json()
        console.log(response)
        setUser(response.product.reviews.map(userId => userId.user))
        setProducts(response.product)
        setLoading(false)
    }


    const GetProfile = async () => {
        let response = await fetch(`https://web-click-api.herokuapp.com/users/${user.valueOf()}`, {
            method: "GET",
        })
        response = await response.json()
        console.log(response)
        setLoading(false)
        setGetProfile(response)
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
                    quantity: productExist ? productExist.quantity + quantity : quantity
                })

            });
            result = await result.json();
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


    const images = [

        {
            original: img1,
            thumbnail: img1,
            showFullscreenButton: false
        },
        {
            original: img2,
            thumbnail: img2,
            showFullscreenButton: false
        },
        {
            original: img3,
            thumbnail: img3,
            showFullscreenButton: false
        },
        {
            original: img4,
            thumbnail: img4,
            showFullscreenButton: false
        },
        {
            original: img5,
            thumbnail: img5,
            showFullscreenButton: false
        },
    ];



    return (
        <>
        
            {loading ? <Loader /> :

                <>
                    <section className="breadcumb py-5">
                        <div className="container">
                            <div className="row">
                                <h1 className="text-center w-100 text-white">Product Details</h1>
                            </div>
                        </div>
                        <div className="ul-list">
                            <ul className="text-center mt-3">
                                <li className="list-inline-item"><Link to="/" className="text-white">Home</Link></li>
                                <li className="list-inline-item text-white">/</li>
                                <li className="list-inline-item text-white">{products.title}</li>
                            </ul>
                        </div>
                    </section>

                    <section className="product-details py-5 bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 shrink-column">
                                    <div className="row">


                                        <div className="col-xl-4 col-lg-4 col-md-4 co-sm-12 col-xs-12 swiper-division">
                                            <div id="detail">
                                                <div className="product-images demo-gallery">
                                                    <div className="main-img-slider" >
                                                        <ImageGallery items={images}>
                                                            <a data-fancybox="gallery" href="img/IMG-20211022-WA0244-300x300.jpg">
                                                                <img src={img1} className="img-fluid w-100" /></a>

                                                            <a data-fancybox="gallery" href="img/IMG-20211027-WA0058-300x300.jpg">
                                                                <img src={img2} className="img-fluid w-100" /></a>

                                                            <a data-fancybox="gallery" href="img/IMG-20211130-WA0137-300x300.jpg">
                                                                <img src={img3} className="img-fluid w-100" /></a>

                                                            <a data-fancybox="gallery" href="img/IMG-20220117-WA0009-300x300.jpg">
                                                                <img src={img4} className="img-fluid w-100" /></a>

                                                            <a data-fancybox="gallery" href="img/IMG-20220426-WA0108-300x300.jpg">
                                                                <img src={img5} className="img-fluid w-100" /></a>
                                                        </ImageGallery>
                                                    </div>



                                                </div>

                                            </div>

                                        </div>


                                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 details-content align-self-center">
                                            <span>{products.title} ( Rate : 749/- Per Pcs , Design : 6 Pcs Catalog </span>
                                            <div style={{ fontSize: "20px" }}>
                                                Description
                                            </div>
                                            <p>  {products.description})</p>

                                            <Rating name="read-only" value={products.rating} readOnly />

                                            <div className="">
                                                <span className="">({products.numReviews}) Review</span>
                                            </div>
                                            <div className="price-tag">
                                                <span className="font-weight-bold">Price: Rs {products.price}</span>
                                            </div>
                                            <div >
                                                <b className={products.quantity < 1 ? "redColor" : "greenColor"}>
                                                    {products.quantity < 1 ? "OutofStock" : "InStock"}</b>
                                            </div>

                                            <div className="tags-samll mt-2 pop-tags size-small-icon">
                                                <span className="d-block mb-2">Size : * S</span>
                                                <ul>
                                                    <li className="list-inline-item"><a href="#" className="text-dark active-pop">S</a></li>
                                                    <li className="list-inline-item"><a href="#" className="text-dark">M</a></li>
                                                    <li className="list-inline-item"><a href="#" className="text-dark">L</a></li>
                                                    <li className="list-inline-item"><a href="#" className="text-dark">XL</a></li>
                                                </ul>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-6'>

                                                    <div className="select-quantity mt-4">
                                                        {products.quantity > 0 ?
                                                            <select name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required>
                                                                {[...Array(products.quantity).keys()].map((x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>))}


                                                            </select>
                                                            : <span style={{ display: 'flex' }}> OUT OF STOCK  </span>
                                                        }
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="add-to-cart-full text-center mt-3">
                                                <a role="button" onClick={() => AddToCart(products)} disabled={products.quantity === 0} >Add To Cart</a>
                                            </div>

                                            <div className="but-it-now add-to-cart-full text-center mt-3">
                                                <a href="#">Buy It Now</a>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                    {
                        (products.reviews.length > 0) ?

                            <section className="tabs-description py-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-10 midd-center">
                                            <div className="tab">
                                                <ul className="tabs">
                                                    <li><a href="#">Reviews {products.reviews.length}</a></li>
                                                </ul>
                                                <div className="tab_content">
                                                    <div className="tabs_item">
                                                        <div className="pd_decription pd_review">
                                                            <div className="total-review">
                                                                <div className="row">
                                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                                        <div className="rates reviewrate">
                                                                            <div className="rating">
                                                                                <Rating name="read-only" value={products.rating} readOnly />
                                                                            </div>

                                                                            <span className="total_review">Based on 5</span> <span>({products.reviews.length}) customer review </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-review">
                                                                <div className="row">
                                                                    <div id="owl-demo-review" className="owl-carousel">
                                                                        <div className="item" style={{ width: "529px" }}>
                                                                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                                <div className="userss">
                                                                                    <h3><img src="http://www.webclickdigital.info/suruchi-creations/img/profile.png" className="circleimg" />  <span>13-June-2022</span> </h3>
                                                                                    <div className="rating">

                                                                                        <Rating name="read-only" value={products.rating} readOnly />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="userss mt-2 ">
                                                                                    {
                                                                                        (localStorage.getItem('user')) ?

                                                                                            <p className="color">{(JSON.parse(localStorage.getItem('user'))).name}</p>
                                                                                            : null
                                                                                    }



                                                                                    {
                                                                                        (products.reviews > 0) ? <p className="discription w-100">{ }</p>
                                                                                            : null
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            : null
                    }

                    {/*

                    <section className="tabs-description py-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 midd-center">
                                    <div className="tab">


                                        <Tabs >
                                            <ul>
                                                <TabList className="tabs">
                                                    <Tab> <li className=''><a >Description</a></li></Tab>
                                                    <Tab><li><a className=''>Reviews (0)</a></li></Tab>
                                                </TabList>


                                            </ul>

                                            <div className="tab_content">
                                                <TabPanel>
                                                    <div className="tabs_item">
                                                        <h4>Description</h4>
                                                        <ul className="mt-2">
                                                            <li>✔ A.s collection kurti with plazzo ( Rate : 750/- Per Pcs ,design : 7 Pcs catalog )</li>
                                                            <li>✔ Fabric details : Top : crape</li>
                                                            <li>✔ Bottom: cotton with chikankari embroidery</li>
                                                            <li>✔ Dupatta : chiffon print pompom lace and highlight with gota work</li>
                                                            <li>✔ Size : XL, XXL,</li>
                                                            <li>✔ Ready to ship.</li>
                                                            <li>✔ For more queries call or whatsapp @ <a href="tel:+91-9871051648" className="font-weight-bold"> +91-9871051648.. </a></li>
                                                        </ul>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="tabs_item">
                                                        <h4>Reviews</h4>
                                                        <p>There are no reviews yet.</p>
                                                        <span className="font-weight-bold">Be the first to review “A.s collection kurti with plazzo ( 7 Pcs set ,Only full set available )”</span>
                                                        <p>Social connect:</p>
                                                        <div className="rating">
                                                            <ul>
                                                                <li>Your rating *
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <form action="#" method="post">
                                                            <div className="reviews-input">
                                                                <textarea placeholder="Your review *" required="" className="w-100 mb-1 pl-2 pt-2"></textarea>
                                                            </div>

                                                            <div className="reviews-input">
                                                                <input type="" name="" placeholder="Name*" className="w-100 mb-3 pl-2" />
                                                            </div>

                                                            <div className="reviews-input">
                                                                <input type="" name="" placeholder="Email*" className="w-100 mb-3 pl-2" />
                                                            </div>

                                                            <p> Save my name, email, and website in this browser for the next time I comment.</p>

                                                            <div className="reviews-input">
                                                                <ul>
                                                                    <li className="list-inline-item"> <input type="checkbox" name="vehicle2" value="Car" /></li>
                                                                    <li className="list-inline-item"><button>Submit Now</button></li>
                                                                </ul>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    */}

                    <section className="related-product bg-light py-5">
                        <div className="container">
                            <div className="section-title text-center mb-4">
                                <h1>Related Product</h1>
                                <img src={img6} />
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 small-box" data-tilt="" data-tilt-max="10" >
                                    <div className="for-img-side">
                                        <div className="grid">
                                            <figure className="effect-bubba">
                                                <img src={img1} alt="" title="" />
                                                <figcaption>
                                                </figcaption>
                                            </figure>
                                        </div>

                                    </div>
                                    <div className="for-content-side">
                                        <a href="#" className="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                        <div className="product__items--price">
                                            <span className="current__price">₹110</span>
                                            <span className="price__divided"></span>
                                            <span className="old__price">₹78</span>
                                        </div>
                                        <div className="review-star">
                                            <ul>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                            </ul>
                                        </div>

                                        <div className="adding-cart mt-3">
                                            <ul className="text-left">
                                                <li className="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> + Add to Cart </Link> </li>
                                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart} /></a></li>
                                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye} /></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 small-box" data-tilt="" data-tilt-max="10" >
                                    <div className="for-img-side">
                                        <div className="grid">
                                            <figure className="effect-bubba">
                                                <img src={img2} alt="" title="" />
                                                <figcaption>
                                                </figcaption>
                                            </figure>
                                        </div>

                                    </div>
                                    <div className="for-content-side">
                                        <a href="#" className="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                        <div className="product__items--price">
                                            <span className="current__price">₹110</span>
                                            <span className="price__divided"></span>
                                            <span className="old__price">₹78</span>
                                        </div>
                                        <div className="review-star">
                                            <ul>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                            </ul>
                                        </div>

                                        <div className="adding-cart mt-3">
                                            <ul className="text-left">
                                                <li className="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> + Add to Cart </Link> </li>
                                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart} /></a></li>
                                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye} /></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 small-box" data-tilt="" data-tilt-max="10" style={{ willChange: "transform", transform: " perspective(300px) rotateX(0deg) rotateY(0deg)" }}>
                                    <div className="for-img-side">
                                        <div className="grid">
                                            <figure className="effect-bubba">
                                                <img src={img3} alt="" title="" />
                                                <figcaption>
                                                </figcaption>
                                            </figure>
                                        </div>

                                    </div>
                                    <div className="for-content-side">
                                        <a href="#" className="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                        <div className="product__items--price">
                                            <span className="current__price">₹110</span>
                                            <span className="price__divided"></span>
                                            <span className="old__price">₹78</span>
                                        </div>
                                        <div className="review-star">
                                            <ul>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                            </ul>
                                        </div>

                                        <div className="adding-cart mt-3">
                                            <ul className="text-left">
                                                <li className="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> + Add to Cart </Link> </li>
                                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart} /></a></li>
                                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye} /></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 small-box" data-tilt="" data-tilt-max="10" >
                                    <div className="for-img-side">
                                        <div className="grid">
                                            <figure className="effect-bubba">
                                                <img src={img4} alt="" title="" />
                                                <figcaption>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <img src="img/IMG-20211027-WA0058-300x300.jpg" alt="" title="" className="w-100" />
                                    </div>
                                    <div className="for-content-side">
                                        <a href="#" className="text-dark font-weight-bold">Oversize Cotton Dress</a>
                                        <div className="product__items--price">
                                            <span className="current__price">₹110</span>
                                            <span className="price__divided"></span>
                                            <span className="old__price">₹78</span>
                                        </div>
                                        <div className="review-star">
                                            <ul>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                            </ul>
                                        </div>

                                        <div className="adding-cart mt-3">
                                            <ul className="text-left">
                                                <li className="list-inline-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> + Add to Cart </Link> </li>
                                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faHeart} /></a></li>
                                                <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faEye} /></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <ToastContainer />
                </>
            }
            
        </>
    )
}

export default ProductDetail