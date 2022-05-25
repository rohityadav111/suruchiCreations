import React from 'react'
import img1 from '../../images/page-404.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons';
import SocialTags from './SocialTags';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <>
        
            <section className="breadcumb py-5">
                <div className="container">
                    <div className="row">
                        
                        <h1 className="text-center w-100 text-white">404</h1>
                    </div>
                </div>
                <div className="ul-list">
                    <ul className="text-center mt-3">
                        <li className="list-inline-item"><a href="#" className="text-white">Home</a></li>
                        <li className="list-inline-item text-white">/</li>
                        <li className="list-inline-item text-white">404</li>
                    </ul>
                </div>

            </section>
         
            <section className="page-404 py-5">
                <div className="container">
                    <div className="row">
                    <div className='col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12'>
                        <div className="error-img text-center w-100">
                            <img src={img1} alt="" title=""/>
                        </div>
                        <div className="content-error text-center w-100">
                            <span>Page Not Found</span>
                            <p>The link you clicked may be broken or the page may have been removed.<br/> visit the <Link to="/" >Homepage </Link> or <Link to="contact-us"> Contact Us </Link>about the problem</p>
                        </div>
                        <div className="col-md-4 mt-3 search_bar">
                            <form action="#" method="post">
                                <ul className="text-center w-100 col-md-12">
                                    <li className="search-filed"><input type="" name="" placeholder="Search...." required=""/></li>
                                    <li className="search-filed"><button><i className="fa fa-search" aria-hidden="true"></i> </button></li>
                                </ul>

                            </form>
                        </div>

                        <div className="go-back-home w-100 text-center mt-5">
                            <Link to="/"> <FontAwesomeIcon icon={faHome}/> Back To Home Page</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <SocialTags/>
        </>
    )
}

export default PageNotFound