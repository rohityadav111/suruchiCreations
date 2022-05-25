import React from 'react'
import { useState } from 'react';

import Logo from '../images/suruchi-creations-logo-1.png';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Sidebar from './Sidebar';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const Header = () => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 1,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            color: "white",
            backgroundColor: "#ce155a"
        },
    }));

    let navigate = useNavigate("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [searchInput, setSearch] = useState("");


    const searchClickHandler = (e) => {
        e.preventDefault();
    
        navigate(`/search/${searchInput}`);
      };

    function logout() {
        localStorage.clear();
        navigate("/")
    }

    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    let data = { phone, password }
    const Login = async (e) => {
        e.preventDefault();
        let result = await fetch("http://3.110.3.217/users/signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },
            body: JSON.stringify(data)
        })
        result = await result.json()
        console.log(result)


        if (result.success) {
            localStorage.setItem("Token", JSON.stringify(result.token))
            localStorage.setItem("user", JSON.stringify(result.result))
            navigate("/")
        } else {

        }
    }

    return (
        <>
            <section className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 creation_side">
                            <p className="text-center text-white blink w-100">Suruchi Creations is one of the best Ladies <span> "Suits Wholesalers in Delhi."</span></p>
                        </div>


                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 contact_side text-right">
                            <p className="text-white">Need Help? : <a href="tel:+91 9871051648" className="text-white"> <strong> +91 9871051648 </strong> </a></p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="header-links-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 left-side_tag align-self-center">
                            <p className="text-capitalize">100% Secure delivery without Contacting the courier</p>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 right-side_tag align-self-center">
                            <div className="row">

                                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 nav_links align-self-center">
                                    <ul className="float-right">

                                        {
                                            localStorage.getItem("user") ?
                                                <li className="list-inline-item mr-0"><a href="#" onClick={logout} >Logout</a></li>
                                                :
                                                <li className="list-inline-item mr-0"><Link to="/login">Login</Link></li>

                                        }

                                        <li className="list-inline-item mr-0"><Link to="/about" >About Us</Link></li>
                                        <li className="list-inline-item mr-0"><Link to="/our-products" >Our Products</Link></li>
                                        <li className="list-inline-item mr-0"><a href="#">My account</a></li>
                                        <li className="list-inline-item mr-0"><Link to="/contact-us"  >Contact Us</Link></li>
                                    </ul>
                                </div>

                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 nav_links align-self-center">
                                    <div className="social-media">
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} className="hover:text-red-500" /></a></li>
                                            <li><a href="#"> <FontAwesomeIcon icon={faInstagram} className="hover:text-red-500" /></a></li>
                                            <li><a href="#"> <FontAwesomeIcon icon={faYoutube} className="hover:text-red-500" /> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="logo-sticky py-1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 logo-side align-self-center">
                            <Link to="/">  <img src={Logo} alt="" title="" className="w-100" /></Link>
                        </div>

                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-8 col-xs-8 search-side align-self-center">
                            <div className="row">

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 search-side-ajax align-self-center">
                                    <form >
                                        <ul>
                                            <li className="list-inline-item">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={searchInput}
                                                    onChange={(e) => {
                                                        setSearch(e.target.value);
                                                    }}
                                                    required=""
                                                    placeholder="Search For Products" />
                                            </li>
                                            <li className="list-inline-item"><button
                                                className="border-0"
                                                onClick={searchClickHandler}
                                            ><FontAwesomeIcon icon={faSearch} className="hover:text-red-500"
                                                /> </button></li>

                                        </ul>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 align-self-center text-center'>
                            <div className='button-style-1 align-self-center'>
                                <button className="openbtn-1 bg-transparent" onClick={handleShow}><FontAwesomeIcon icon={faUser} /> </button>
                                <Link to="/cart">  <button className="openbtn-1 bg-transparent">
                                    <StyledBadge badgeContent={4}>
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </StyledBadge>
                                </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="sticky">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="navbar-area text-center">
                                <div className="fennec-nav">
                                    <nav className="navbar navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent" style={{ display: "block" }}>
                                            <ul className="navbar-nav">
                                                <li className="nav-item"><Link to="/products/georgette" className="nav-link " style={{ textDecoration: 'none' }}>Georgette Collection</Link></li>
                                                <li className="nav-item"><Link to="/products/georgette" className="nav-link" style={{ textDecoration: 'none' }}>Heavy Designer Collection</Link></li>
                                                <li className="nav-item"><Link to="/products/georgette" className="nav-link " style={{ textDecoration: 'none' }}>Cotton Collection</Link></li>
                                                <li className="nav-item"><Link to="/products/georgette" className="nav-link " style={{ textDecoration: 'none' }}>Pakistani Collection</Link></li>

                                                <li className="nav-item"><Link to="/products/georgette" className="nav-link " style={{ textDecoration: 'none' }}>Kurti</Link></li>
                                                <li className="nav-item"><Link to="/products/georgette" className="nav-link " style={{ textDecoration: 'none' }}>Lehenga</Link></li>
                                                <li className="nav-item"><Link to="/products/georgette" className="nav-link " style={{ textDecoration: 'none' }}>Non Catalog</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="modal fade bd-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">

                <div className="modal-dialog modal-lg max-width-setting">
                    <Modal show={show} >
                        <div className="modal-content px-3 pb-4 pt-3">

                            <Modal.Header className="modal-header p-0"> <Modal.Title className="modal-title h4 text-center w-100 d-block" > <h5 id="myLargeModalLabel">Customer Login </h5></Modal.Title>
                                <button type="text" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </Modal.Header>

                            <Modal.Body>
                                <div className="col-md-12 margin-center">
                                    <form onSubmit={Login} className="p-4 form-side">
                                        <input type="text" name="phone" placeholder="Phone" required="" className="w-100 border-0 mb-3 pl-3" value={phone} onChange={e => setPhone(e.target.value)} />
                                        <input type="text" name="password" placeholder="Password" required="" className="w-100 border-0 mb-3 pl-3" value={password} onChange={e => setPassword(e.target.value)} />
                                        <button type="submit" className="border-0 w-100 text-white text-center">Login</button>
                                    </form>

                                    <div className="forget-password text-center">
                                        <Link to="/forgetpassword" title="Forgot your password?">Forgot your password?</Link>
                                    </div>

                                    <div className="create-an-account text-center">
                                        <Link to="/register" className="text-uppercase text-white" title="Forgot your password?"> <p className="text-white">Create An Account </p></Link>
                                    </div>
                                </div>
                            </Modal.Body>

                        </div>
                    </Modal>
                </div>

            </div>

        </>
    )
}

export default Header