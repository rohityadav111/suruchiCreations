import React from 'react'

import Subnavbar from '../Subnavbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faVimeo, faPinterest, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import img1 from '../../images/IMG-20211027-WA0058-300x300.jpg'
import img2 from '../../images/PHOTO-2020-10-02-09-38-55_1-e1604749422848-300x300.jpg'
import img3 from '../../images/PHOTO-2022-02-17-11-34-28-300x300.jpg'
import Select from 'react-select'
import { Dropdown } from 'bootstrap';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
const OurProducts = () => {


    return (

        <>

            <section className="breadcumb py-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center w-100 text-white">Our Products</h1>
                    </div>
                </div>
                <div className="ul-list">
                    <ul className="text-center mt-3">
                        <li className="list-inline-item"><a href="#" className="text-white">Home</a></li>
                        <li className="list-inline-item text-white">/</li>
                        <li className="list-inline-item text-white">Our Products</li>
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
                                        <Typography sx={{ width: '100%', flexShrink: 20 ,color: "#ce155a"}}> <div className="font-weight-bold"> Product Type </div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <ul className="">
                                                <li>
                                                    <form action="#" method="post">
                                                        <input type="checkbox" id="LadiesSuits" className="mb-0" name="LadiesSuits" value="LadiesSuits" />
                                                        <label for="vehicle1" className="pl-1"> Ladies Suits</label><br />

                                                        <input type="checkbox" id="WomenSuits" className="mb-0" name="WomenSuits" value="WomenSuits" />
                                                        <label for="vehicle2" className="pl-1"> Women Suits</label><br />

                                                        <input type="checkbox" id="LadiesSalwarSuits" className="mb-0" name="LadiesSalwarSuits" value="LadiesSalwarSuits" />
                                                        <label for="vehicle3" className="pl-1"> Ladies Salwar Suits</label><br />

                                                        <input type="checkbox" id="AnarkaliSuits" className="mb-0" name="AnarkaliSuits" value="AnarkaliSuits" />
                                                        <label for="vehicle3" className="pl-1"> Anarkali Suits</label><br />

                                                        <input type="checkbox" id="CottonSuits" className="mb-0" name="CottonSuits" value="CottonSuits" />
                                                        <label for="vehicle3" className="pl-1"> Cotton Suits</label><br />

                                                        <input type="checkbox" id="LawnCottonSuits" className="mb-0" name="LawnCottonSuits" value="LawnCottonSuits" />
                                                        <label for="vehicle3" className="pl-1"> Lawn Cotton Suits</label><br />

                                                    </form>
                                                </li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{ width: '100%', flexShrink: 20 ,color: "#ce155a"}}> <div className="font-weight-bold"> Price  </div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <ul className="">
                                                <li>
                                                    <form action="#" method="post">
                                                        <input type="checkbox" id="LadiesSuits" className="mb-0" name="LadiesSuits" value="LadiesSuits" />
                                                        <label for="vehicle1" className="pl-1"> Rs.100 - Rs.500</label><br />

                                                        <input type="checkbox" id="WomenSuits" className="mb-0" name="WomenSuits" value="WomenSuits" />
                                                        <label for="vehicle2" className="pl-1"> Rs.501 - Rs.1000</label><br />

                                                        <input type="checkbox" id="LadiesSalwarSuits" className="mb-0" name="LadiesSalwarSuits" value="LadiesSalwarSuits" />
                                                        <label for="vehicle3" className="pl-1"> Rs.1001 - Rs.2500</label><br />

                                                        <input type="checkbox" id="AnarkaliSuits" className="mb-0" name="AnarkaliSuits" value="AnarkaliSuits" />
                                                        <label for="vehicle3" className="pl-1"> Rs.2501 - Rs.5000</label><br />

                                                        <input type="checkbox" id="CottonSuits" className="mb-0" name="CottonSuits" value="CottonSuits" />
                                                        <label for="vehicle3" className="pl-1"> Rs.5001 & Above</label><br />

                                                    </form>
                                                </li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{ width: '100%', flexShrink: 20,color: "#ce155a" }}> <div className="font-weight-bold"> Size  </div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <ul className="">
                                                <li>
                                                    <form action="#" method="post">
                                                        <input type="checkbox" id="S" className="mb-0" name="S" value="S" />
                                                        <label for="vehicle1" className="pl-1"> S </label><br />

                                                        <input type="checkbox" id="M" className="mb-0" name="M" value="M" />
                                                        <label for="vehicle2" className="pl-1"> M </label><br />

                                                        <input type="checkbox" id="L" className="mb-0" name="L" value="L" />
                                                        <label for="vehicle3" className="pl-1"> L </label><br />

                                                        <input type="checkbox" id="X" className="mb-0" name="X" value="X" />
                                                        <label for="vehicle3" className="pl-1"> X </label><br />

                                                        <input type="checkbox" id="XL" className="mb-0" name="XL" value="XL" />
                                                        <label for="vehicle3" className="pl-1"> XL </label><br />

                                                        <input type="checkbox" id="XLL" className="mb-0" name="XLL" value="XLL" />
                                                        <label for="vehicle3" className="pl-1"> XLL </label><br />

                                                        <input type="checkbox" id="XXL" className="mb-0" name="XXL" value="XXL" />
                                                        <label for="vehicle3" className="pl-1"> XXL </label><br />

                                                    </form>
                                                </li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{ width: '100%', flexShrink: 20,color: "#ce155a" }}> <div className="font-weight-bold"> Brands </div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <ul className="">
                                                <li>
                                                    <form action="#" method="post">
                                                        <input type="checkbox" id="brands-name" className="mb-0" name="brands-name" value="brands-name" />
                                                        <label for="vehicle1" className="pl-1"> Brands Name </label><br />

                                                        <input type="checkbox" id="brands-name-2" className="mb-0" name="brands-name-2" value="brands-name-2" />
                                                        <label for="vehicle2" className="pl-1"> Brands Name </label><br />

                                                        <input type="checkbox" id="brands-name-3" className="mb-0" name="brands-name-3" value="brands-name-3" />
                                                        <label for="vehicle3" className="pl-1"> Brands Name  </label><br />

                                                        <input type="checkbox" id="brands-name-4" className="mb-0" name="brands-name-4" value="brands-name-4" />
                                                        <label for="vehicle3" className="pl-1"> Brands Name  </label><br />

                                                        <input type="checkbox" id="brands-name-5" className="mb-0" name="brands-name-5" value="brands-name-5" />
                                                        <label for="vehicle3" className="pl-1"> Brands Name  </label><br />

                                                        <input type="checkbox" id="brands-name-6" className="mb-0" name="brands-name-6" value="brands-name-6" />
                                                        <label for="vehicle3" className="pl-1"> Brands Name  </label><br />

                                                        <input type="checkbox" id="brands-name-7" className="mb-0" name="brands-name-7" value="brands-name-7" />
                                                        <label for="vehicle3" className="pl-1"> Brands Name  </label><br />

                                                    </form>
                                                </li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </ul>
                        </div>

                        <div className="col-xl-9 col-9 col-md-9 col-sm-12 col-xs-12 product-_side">
                            <div className="row">
                                <div className="col-xl-4 our-product col-md-3 col-sm-12 col-xs-12 product-box " data-tilt="" data-tilt-max="10" >
                                    <div className="for-img-side img-hover-zoom">
                                        <div className="grid">
                                            <figure className="effect-bubba">
                                                <img src={img1} alt="" title="" />
                                                <figcaption>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="text-side">
                                        <p> Shades Zulfat ( Rate : 540/- Per Pcs , Design : 10 Pcs catalog ) </p>
                                        <ul className="w-100 d-block mt-3">
                                            <li className="list-inline-item text-left text-dark">Rs 2,999.00</li>
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
                                            <li className="list-inline-item"><a href="#" className="bg-transparent  border font-weight-bold py-2 px-4 rounded" data-toggle="modal" data-target=".bd-example-modal-sm">Quick View</a></li>

                                            <li className="list-inline-item"><Link to="/cart" className="font-weight-bold border py-2 px-4 rounded text-white">Add To Bag</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-4 our-product col-md-4 col-sm-12 col-xs-12 product-box " data-tilt="" data-tilt-max="10" >
                                    <div className="for-img-side img-hover-zoom">
                                        <div className="grid">
                                            <figure className="effect-bubba">
                                                <img src={img2} alt="" title="" />
                                                <figcaption>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="text-side">
                                        <p> Shades Zulfat ( Rate : 540/- Per Pcs , Design : 10 Pcs catalog ) </p>
                                        <ul className="w-100 d-block mt-3">
                                            <li className="list-inline-item text-left text-dark">Rs 2,999.00</li>
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
                                            <li className="list-inline-item"><a href="#" className="bg-transparent  border font-weight-bold py-2 px-4 rounded" data-toggle="modal" data-target=".bd-example-modal-sm">Quick View</a></li>

                                            <li className="list-inline-item"><Link to="/cart" className="font-weight-bold border py-2 px-4 rounded text-white">Add To Bag</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 our-product col-md-4 col-sm-12 col-xs-12 product-box " data-tilt="" data-tilt-max="10" >
                                    <div className="for-img-side img-hover-zoom">
                                        <div className="grid">
                                            <figure className="effect-bubba ">
                                                <img src={img3} alt="" title="" />
                                                <figcaption>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="text-side">
                                        <p> Shades Zulfat ( Rate : 540/- Per Pcs , Design : 10 Pcs catalog ) </p>
                                        <ul className="w-100 d-block mt-3">
                                            <li className="list-inline-item text-left text-dark">Rs 2,999.00</li>
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
                                            <li className="list-inline-item"><a href="#" className="bg-transparent  border font-weight-bold py-2 px-4 rounded" data-toggle="modal" data-target=".bd-example-modal-sm">Quick View</a></li>

                                            <li className="list-inline-item"><Link to="/cart" className="font-weight-bold border py-2 px-4 rounded text-white">Add To Bag</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </>

    )
}

export default OurProducts