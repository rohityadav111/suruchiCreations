import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Logo from '../images/suruchi-creations-logo-1.png';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router';
import Loader from './Loader/Loader';



const Header = () => {

    const [product, setProduct] = useState("")
    const [suggesstion, setSuggestion] = useState([])
    const [cart, setCart] = useState("")


    useEffect(() => {
        GetCategoryList()
        GetProducts();
        ShowCart()
    }, [cart])


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
    const [searchInput, setSearch] = useState();


    const searchClickHandler = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            navigate(`/search/${searchInput}`);
        }
        else {
            navigate(`/search/${searchInput}`);
        }
    };

    const onChangehandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = product.filter(item => {
                const regex = new RegExp(`${text}`, "gi");
                return item.title.match(regex)
            })
        }
        
        setSuggestion(matches)
        setSearch(text)
    }

    const cartHandle = () => {
        if (localStorage.getItem('user')) {
            navigate('/cart')
            ShowCart()
        }
        else {
            handleShow()
        }
    }


    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    let data = { phone, password }
    const Login = async (e) => {
        e.preventDefault();
        let result = await fetch("https://web-click-api.herokuapp.com/users/signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },
            body: JSON.stringify(data)
        })
        result = await result.json()



        if (result.success) {
            handleClose()
            toast.success(result.message, {
                position: "top-center",
                autoClose: 1000,
            });
            GetCategoryList()
            localStorage.setItem("Token", JSON.stringify(result.token))
            localStorage.setItem("user", JSON.stringify(result.result))
            navigate("suruchi-creations/my-account")

        } else {
            toast.error(result.message, {
                position: "top-center",
                autoClose: 1000,
            });

        }
    }
    let params = useParams()
    const param = Object.values(params)


    const GetProducts = async () => {
        let response = await fetch(`https://web-click-api.herokuapp.com/products/?categoryId=${param}`, {
            method: "GET",

        })
        response = await response.json()

        setProduct(response.productList)
        
    }


    const [category, setCategory] = useState([])
    const GetCategoryList = async () => {
        let response = await fetch("https://web-click-api.herokuapp.com/category", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
            }
        })
        response = await response.json()
        setCategory(response.categorytList)
       
        if (response.success) {
            GetProducts();
        }

    }
    
    const ShowCart = async () => {
        if(localStorage.getItem('user')){
            const userId = JSON.parse(localStorage.getItem("user"))._id
            let result = await fetch(`https://web-click-api.herokuapp.com/cart/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                }
            });
            result = await result.json();
            
            setCart(result.cartList.length)

        }else{
                
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
                                                        <li className="list-inline-item mr-0"><Link to="/about" >About Us</Link></li>
                                                        <li className="list-inline-item mr-0"><Link to="/suruchi-creations/products/categories" >Our Products</Link></li>
                                                        <li className="list-inline-item mr-0"><Link to="/contact-us"  >Contact Us</Link></li>

                                                        {
                                                            localStorage.getItem("user") ?
                                                                <li className="list-inline-item mr-0"><Link to="/suruchi-creations/my-account">My Account</Link></li>
                                                                :
                                                                <li className="list-inline-item mr-0"><a role="button" onClick={handleShow}>Login</a></li>

                                                        }



                                                    </ul>
                                                </div>

                                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 nav_links align-self-center">
                                                    <div className="social-media">
                                                        <ul>
                                                            <li><a href="https://www.facebook.com/suruchicreations/" target="_blank" ><FontAwesomeIcon icon={faFacebook} className="hover:text-red-500" /></a></li>
                                                            <li><a href="https://www.instagram.com/suruchicreations/" target="_blank" > <FontAwesomeIcon icon={faInstagram} className="hover:text-red-500" /></a></li>
                                                            <li><a href="https://www.youtube.com/channel/UC4MjjX4N-z_Emwx6nMFLCRQ" target="_blank" > <FontAwesomeIcon icon={faYoutube} className="hover:text-red-500" /> </a></li>
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
                                                    <form onSubmit={searchClickHandler} className="search-design">
                                                        <ul>
                                                            <li className="list-inline-item">
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    value={searchInput}
                                                                    onChange={(e) => {
                                                                        onChangehandler(e.target.value);
                                                                    }}
                                                                    required=""
                                                                    placeholder="Search For Products" />

                                                            </li>
                                                            <li className="list-inline-item">
                                                                <button
                                                                    type='submit'
                                                                    className="border-0 search-button">

                                                                    <FontAwesomeIcon icon={faSearch} />
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </form>
                                                    {
                                                        suggesstion && suggesstion.slice(0, 3).map((item, index) => {
                                                            console.log(item)
                                                            return (
                                                                <div className='dropDown-styling' key={index}>

                                                                    <div className='dropDown-styling-inner'>
                                                                        <ul>
                                                                            <li> <Link to={`/detail/${item._id}`}>{item.title}</Link> </li>
                                                                        </ul>

                                                                    </div>
                                                                </div>
                                                            )


                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 align-self-center text-center'>
                                            <div className='button-style-1 align-self-center'>
                                                <button className="openbtn-1 bg-transparent" onClick={handleShow}><FontAwesomeIcon icon={faUser} /> </button>
                                                <button className="openbtn-1 bg-transparent" onClick={cartHandle}>
                                                    <StyledBadge badgeContent={cart}>
                                                        <FontAwesomeIcon icon={faShoppingCart} />
                                                    </StyledBadge>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="sticky mobile-nav ">
                                <div className="container-fluid">

                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <div className="navbar-area text-center">
                                                <div className="fennec-nav">
                                                    <nav className="navbar navbar-expand-md navbar-light">
                                                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent" style={{ display: "block" }}>
                                                            {
                                                                category && category.slice(0, 5).map((element, index) => {
                                                                    return (
                                                                        <ul className="navbar-nav " key={index} >

                                                                            <li className="nav-item"><NavLink to={`/suruchi-creations/products/${element._id}`} className="nav-link" style={{ textDecoration: 'none' }}>{element.title}</NavLink></li>

                                                                        </ul>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                 

                {
                    localStorage.getItem('user') ? null

                        :

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
                                                    <Link to="/suruchi-creations/forgetpassword" title="Forgot your password?" onClick={handleClose}>Forgot your password?</Link>
                                                </div>

                                                <div className="create-an-account text-center">
                                                    <Link to="/suruchi-creations/register" className="text-uppercase text-white" title="Forgot your password?" onClick={handleClose}> <p className="text-white">Create An Account </p></Link>
                                                </div>
                                            </div>
                                        </Modal.Body>

                                    </div>
                                </Modal>
                            </div>

                        </div>
                }
                <ToastContainer />
            </>
        )
    }

    export default Header