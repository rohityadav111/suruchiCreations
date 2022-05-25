import React from 'react'

import paypal from '../images/paypal.jpg'
import visa from '../images/visa.jpg'
import amazon from '../images/amazon.jpg'
import masterCard from '../images/mastercard.jpg'
import SSl from '../images/SSL-Seal.png'
import logo from '../images/suruchi-creations-logo-1.png'
import whatsapp from '../images/whats-app.png'
import GotoTop from '../images/top.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import img from '../images/icon-1.png'
import img2 from '../images/icon-3.png'
import img3 from '../images/icon-2.png'
import img4 from '../images/icon-4.png'
import { Link } from 'react-router-dom'



const Footer = () => {

    const topScroll =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <>
       
            <section className="paytem-method bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 paytem_box text-center">
                            <div className="for-img">
                                <img src={img} alt="" title="" />
                            </div>

                            <span className="mt-2 d-block">Worldwide Delivery</span>
                            <p>We deliver everywhere in the world, just you need to ask for availability.</p>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 paytem_box text-center">
                            <div className="for-img">
                                <img src={img2} alt="" title="" />
                            </div>

                            <span className="mt-2 d-block">24*7 Support</span>
                            <p>Our customer care lines are always available for your instant support and care.</p>
                        </div>


                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 paytem_box text-center">
                            <div className="for-img">
                                <img src={img3} alt="" title="" />
                            </div>

                            <span className="mt-2 d-block">Pay Online</span>
                            <p>Our customer care lines are always available for your instant support and care.</p>
                        </div>


                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 paytem_box text-center">
                            <div className="for-img">
                                <img src={img4} alt="" title="" />
                            </div>

                            <span className="mt-2 d-block">Free Delivery </span>
                            <p>Our customer care lines are always available for your instant support and care.</p>
                        </div>


                    </div>
                </div>
            </section>
            <footer className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 large-widget">
                            <div className="row">

                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 logo_side">
                                    <Link to="/"><img src={logo} alt="" title="" className="w-100 mb-3" /></Link>

                                    <div className="address-side">
                                        <p className="mb-2">Address: 628, Gali Ghanteshwar, Katra Neel, Chandni Chowk, Delhi 110006</p>
                                    </div>

                                    <div className="show-map mb-2">
                                        <a href="https://www.google.com/maps?ll=28.657763,77.224833&z=16&t=m&hl=en&gl=IN&mapclient=embed&q=628,+Gali+Ghanteshwar+Bagh+Deewar,+Katra+Neel,+Old+Delhi+New+Delhi,+Delhi+110006" target="_blank" className="font-italic"><ins>Show On Map</ins></a>
                                    </div>

                                    <div className="footer-social-media">
                                        <ul>
                                            <li className="list-inline-item"><a href="https://www.facebook.com/suruchicreations/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                            <li className="list-inline-item"><a href="https://www.facebook.com/suruchicreations/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                            <li className="list-inline-item"><a href="https://www.facebook.com/suruchicreations/" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 need-help">
                                    <span>Need Help ?</span>
                                    <div className="media mt-4">
                                        <FontAwesomeIcon className="mr-3 mt-2" icon={faPhone} />
                                        <div className="media-body">
                                            <p className="mt-0 d-block"> Call Us Now</p>
                                            <a href="tel:011 23993842">011 23993842, </a>
                                            <a href="tel:+91 9871051648">+91 9871051648, <br /></a>
                                            <a href="tel:+91 9818713648">+91 9818713648</a>
                                        </div>
                                    </div>

                                    <div className="border-top-custom mt-3 pt-3">
                                        <ul>
                                            <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:suruchiprints.delhi@gmail.com" title="">suruchiprints.delhi@gmail.com</a> </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 large-widget">
                            <div className="row">

                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-sx-12 quick-links">
                                    <span className="font-weight-bold mb-2 d-block">Quick Links</span>
                                    <ul>
                                        <li><a href="#" className=""><FontAwesomeIcon icon={faAngleRight} /> Company Profile</a></li>
                                        <li><Link to="/our-products" className=""><FontAwesomeIcon icon={faAngleRight} /> Our Products</Link></li>
                                        <li><a href="#" className=""><FontAwesomeIcon icon={faAngleRight} /> Sitemap</a></li>
                                        <li><a href="#" className=""><FontAwesomeIcon icon={faAngleRight} /> Brands</a></li>
                                        <li><a href="#" className=""><FontAwesomeIcon icon={faAngleRight} /> Our Presence</a></li>
                                        <li><Link to="/contact-us" className=""><FontAwesomeIcon icon={faAngleRight} /> Contact Us</Link></li>
                                    </ul>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-sx-12 quick-links">
                                    <span className="font-weight-bold mb-2 d-block">Our Products</span>
                                    <ul>
                                        <li><a href="#" className=""><FontAwesomeIcon icon={faAngleRight} /> Georgette Collection</a></li>
                                        <li><a href="#" className=""><FontAwesomeIcon icon={faAngleRight} /> Heavy Designer Collection</a></li>
                                        <li><a href="#" className=""><FontAwesomeIcon icon={faAngleRight} /> Cotton Collection</a></li>
                                        <li><a href="#" className=""><FontAwesomeIcon icon={faAngleRight} /> Pakistani Collection</a></li>
                                        <li><a href="#" className=""><FontAwesomeIcon icon={faAngleRight} /> Kurti</a></li>
                                        <li><a href="#" className=""><FontAwesomeIcon icon={faAngleRight} /> Lehenga</a></li>
                                    </ul>
                                </div>

                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-sx-12 quick-links">
                                    <span className="font-weight-bold mb-2 d-block">Subscribe Newsletter</span>
                                    <form >
                                        <div className="footer-filed">
                                            <input type="" name="" placeholder="Email*" required="" className="w-100 pl-2" />
                                        </div>

                                        <div className="footer-filed-btn">
                                            <button className="border-0 w-100 mt-3 text-white">Subscribe Now</button>
                                        </div>
                                    </form>

                                    <div className="payment mt-3 align-self-center">
                                        <ul>
                                            <li className="list-inline-item"><img className="rounded" src={paypal} alt="" title="" /></li>
                                            <li className="list-inline-item"><img className="rounded" src={visa} alt="" title="" /></li>
                                            <li className="list-inline-item"><img className="rounded" src={masterCard} alt="" title="" /></li>
                                            <li className="list-inline-item"><img className="rounded" src={amazon} alt="" title="" /></li>
                                            <li className="list-inline-item"><img className="rounded" src={SSl} alt="" title="" /></li>
                                        </ul>
                                    </div>

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <section className="copy-right">
                <div className="container">
                    <div className="row">
                        <div className="col-12 copy-right_inner pt-2 pb-1">
                            <p className="text-center w-100 mb-0 pb-0 text-white">Copyright © 2022 Suruchi Creations | All Rights Reserved.  Website Designed &amp; SEO By Webclick® Digital Pvt. Ltd. <a href="https://www.webclickindia.com" className="font-weight-bold text-white" target="_blank" title="Website Designing Company in Delhi India">Website Designing Company India.</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <button onClick={topScroll}>
            <img src={GotoTop} id="toTop" title="Go To Top" alt="Go To Top" />
            </button>

            <div className="whats-app-icon ">
                <a href="https://api.whatsapp.com/send?phone=919871051648&amp;text=Hello%20Suruchi%20Creations%2C%20would%20like%20to%20know%20more%20details%20about%20your%20products%2C%20Please%20send%20more%20details." target="_blank"><img src={whatsapp} className="blink" alt="Whatsapp" title="Whatsapp" /></a>
            </div>
           
        </>


    )
}

export default Footer