import React from 'react'
import img1 from '../../images/IMG-20211027-WA0058-300x300.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faStar, } from '@fortawesome/free-solid-svg-icons';

const FilterProduct = ({ filter, AddToCart }) => {

    const handlecart = () => {
        AddToCart(filter)
    }
    console.log(filter)
    return (
       
                        <div className="col-xl-3 col-md-3 col-sm-12 col-xs-12 product-box our-product " data-tilt="" data-tilt-max="10" >
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
                                <p> {filter.title}  </p>
                                <ul className="w-100 d-block mt-3">
                                    <li className="list-inline-item text-left text-dark">Rs {filter.price}</li>
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

                                    <li className="list-inline-item"><a role="button"
                                        className="font-weight-bold border py-2 px-4 rounded text-white"
                                        onClick={handlecart}
                                    >Add To Cart</a></li>
                                </ul>
                            </div>
                        </div>

                  
        
    )
}

export default FilterProduct