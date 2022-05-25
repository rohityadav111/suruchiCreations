import React from 'react'
import slider1 from '../images/slider-1.jpg'
import slider2 from '../images/slider-2.jpg'
import slider3 from '../images/slider-3.jpg'
import img1 from '../images/winter-collection-ladies.jpg'
import img2 from '../images/3.jpg'
import img3 from '../images/2.jpg'
import { Link } from 'react-router-dom'
import { Carousel, } from 'react-bootstrap'
import { useState } from 'react'


const Subnavbar = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <> <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className="carousel-inner">

                <Carousel fade activeIndex={index} onSelect={handleSelect} className="Carousel-set">
                    <Carousel.Item interval={2000}>
                        <img className="d-block w-100" src={slider2} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img className="d-block w-100" src={slider1} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img className="d-block w-100" src={slider3} alt="Third slide" />
                    </Carousel.Item>

                </Carousel>

            </div>
        </div>
            <section className="three-category py-2 pb-5">
                <div className="container">
                    <div className="row mt-4">

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 three-part img-hover-zoom" data-tilt="" data-tilt-max="10" style={{ willChange: "transform", transform: "perspective(300px) rotateX(0deg) rotateY(0deg)" }}>
                            <div className="grid">
                                <figure className="effect-bubba mb-0">
                                    <img src={img1} alt="img02" />
                                    <figcaption>
                                        <p className="text-white">Winter Store</p>
                                        <a href="#" className="text-white button_center">Shop Now</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>


                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 three-part img-hover-zoom" data-tilt="" data-tilt-max="10" style={{ willChange: "transform", transform: "perspective(300px) rotateX(0deg) rotateY(0deg)" }}>
                            <div className="grid">
                                <figure className="effect-bubba mb-0">
                                    <img src={img2} alt="img02" />
                                    <figcaption>
                                        <p className="text-white">Heavy Designer Collection</p>
                                        <a href="#" className="text-white button_center"> Shop Now </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>


                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 three-part img-hover-zoom" data-tilt="" data-tilt-max="10" style={{ willChange: "transform", transform: "perspective(300px) rotateX(0deg) rotateY(0deg)" }}>
                            <div className="grid">
                                <figure className="effect-bubba mb-0">
                                    <img src={img3} alt="img02" />
                                    <figcaption>
                                        <p className="text-white">Trending Kurtis</p>
                                        <a href="#" className="text-white button_center">Shop Now</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Subnavbar