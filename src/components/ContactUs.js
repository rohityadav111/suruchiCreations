import React from 'react'
import SocialTags from './pages/SocialTags'


const ContactUs = () => {
    return (
        <>
        
            <section className="breadcumb py-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center w-100 text-white">Contact Us</h1>
                    </div>
                </div>
                <div className="ul-list">
                    <ul className="text-center mt-3">
                        <li className="list-inline-item"><a href="#" className="text-white">Home</a></li>
                        <li className="list-inline-item text-white">/</li>
                        <li className="list-inline-item text-white">Contact Us</li>
                    </ul>
                </div>
            </section>
            <section className="ttm-row conatact-section ttm-bgcolor-white clearfix">
                <div className="container">
                   
                    <div className="row row-equal-height">
                        <div className="col-xl-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.11204933018!2d77.22288258148079!3d28.65139324889605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1a88dcc559%3A0x24fa43c081dbe51!2sChandni%20Chowk%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1651562638647!5m2!1sen!2sin" width="100%" height="500" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div className="col-xl-6">
                            <div className="padding_left30 res-1199-padding_left0 padding_top20 res-1199-padding_top40">
                                
                                <div className="section-title">
                                    <div className="title-header">
                                        <h2>CONTACT US</h2>
                                        <h3 className="title mt-3">Needs Help? Let’s Get in Touch</h3>
                                    </div>
                                    <div className="title-desc padding_right30">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod temp incididunt ut labore et dolor.lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                    
                                        <div className="featured-icon-box icon-align-before-content">
                                            <div className="featured-content padding_left25">
                                                <div className="featured-title text-left">
                                                    <h3 className="margin_bottom0">Call Us: <span> +91 9871051648 </span></h3>
                                                </div>
                                                <div className="featured-desc text-left">Office Time : 09:10Am to 10:00PM on Weekdays</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        
                                        <div className="featured-icon-box icon-align-before-content">
                                            <div className="featured-content padding_left25">
                                                <div className="featured-title text-left">
                                                    <h3 className="margin_bottom0">Email:</h3>
                                                </div>
                                                <div className="featured-desc text-left">suruchiprints.delhi@gmail.com</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                       
                                        <div className="featured-icon-box icon-align-before-content">
                                            <div className="featured-content padding_left25">
                                                <div className="featured-title text-left">
                                                    <h3 className="margin_bottom0">Address:</h3>
                                                </div>
                                                <div className="featured-desc text-left">628, Gali Ghanteshwar, Katra Neel, Chandni Chowk, Delhi 110006</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <p className="padding_top30 rajdhani fs-18 padding_right30">Follow us on <a href="#"><strong>Facebook,</strong></a> Follow us on <a href="#"><strong>Twitter,</strong></a> Follow us on <a href="#"><strong>Dribbble</strong></a> and also Follow us on <a href="#"><strong>Instagram</strong></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            <section className="ttm-row form-section ttm-bgcolor-grey bg-img11 ttm-bg ttm-bgimage-yes clearfix">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-lg-12">
                           
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h2 className="title">Get In Touch!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="request_qoute_form" className="request_qoute_form wrap-form clearfix" method="post" action="#">
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="text-input"><input name="name" type="text" value="" placeholder="Your Name*" required="required"/></span>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="text-input"><input name="Your Subject" type="text" value="" placeholder="Your Address*" required="required"/></span>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="text-input"><input name="phone" type="text" value="" placeholder="Phone Number*" required="required"/></span>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="text-input"><input name="address" type="text" value="" placeholder="Your Email*" required="required"/></span>
                                    </div>
                                    <div className="col-lg-12">
                                        <span className="text-input"><textarea name="message" rows="4" placeholder="Message" required="required"></textarea></span>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="padding_top15 text-center">
                                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">
                                                Send Message<i className="flaticon flaticon-right-arrow"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        <SocialTags/>
        </>
    )
}

export default ContactUs