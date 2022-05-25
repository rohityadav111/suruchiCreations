import React from 'react'
import img1 from '../../images/IMG-20211022-WA0244-300x300.jpg'
import img2 from '../../images/IMG-20211027-WA0058-300x300.jpg'
import img3 from '../../images/IMG-20211130-WA0137-300x300.jpg'
import img4 from '../../images/IMG-20220117-WA0009-300x300.jpg'
import img5 from '../../images/IMG-20220426-WA0108-300x300.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import img6 from '../../images/heading-shape.png'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import ImageGallery from 'react-image-gallery';
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProductDetail = () => {

    const [products, setProduct] = useState([])
    const [num, setNum] = useState("")



    var productid = "";
    let params = useParams()

    useEffect(() => {
        Productdetail();

    }, []);

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

    const [cart, setCart] = useState([])
    const userId = JSON.parse(localStorage.getItem("user"))._id

    const ShowCart = async () => {
        let result = await fetch(`http://3.110.3.217/cart/${userId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        });
        result = await result.json();
        console.log(result)
        setCart(result.cartList)
    }


    let user = JSON.parse(localStorage.getItem('user'))._id

    const data = {
        productId: products._id,
        userId: user,
        quantity: num

    }


    const AddToCart = async (e, id) => {
        e.preventDefault();
    let result = await fetch("https://web-click-api.herokuapp.com/cart", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
        },
        body: JSON.stringify(data)

    });
    result = await result.json();
    console.log(result)


}

const Productdetail = async () => {
    let result = await fetch(`https://web-click-api.herokuapp.com/products/${params.id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
        }

    });
    result = await result.json();
    console.log(result)
    setProduct(result.product)
}
return (
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
                    <li className="list-inline-item text-white">Product Details</li>
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
                                <span>{products.title} ( Rate : 749/- Per Pcs , Design : 6 Pcs Catalog )</span>
                                <ul>
                                    <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                    <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                    <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                    <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                    <li className="list-inline-item mr-0"><FontAwesomeIcon icon={faStar} /></li>
                                    <li className="list-inline-item ml-2">6 Review</li>
                                </ul>

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

                                <div className="select-quantity mt-4">
                                    <form className="border">
                                        <select value={num} onChange={(e) => setNum(e.target.value)} name="" id="cars">
                                            <option value="Quantity">Quantity</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </form>
                                </div>

                                <div className="add-to-cart-full text-center mt-3">
                                    <a role="button" onClick={AddToCart}>Add To Cart</a>
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
    </>
)
}

export default ProductDetail