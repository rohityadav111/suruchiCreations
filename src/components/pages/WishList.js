import React from 'react'
import img1 from '../../images/PHOTO-2022-02-02-12-07-05-300x300.jpg'
import img2 from '../../images/PHOTO-2021-12-16-13-13-19-300x300.jpg'
import img3 from '../../images/PHOTO-2021-12-16-13-13-19-300x300.jpg'
import img4 from '../../images/delete.jpg'

import SocialTags from './SocialTags'

const WishList = () => {
    return (
    <>
    
        <section className="breadcumb py-5">
            <div className="container">
                <div className="row">
                    <h1 className="text-center w-100 text-white">Wishlist</h1>
                </div>
            </div>
            <div className="ul-list">
                <ul className="text-center mt-3">
                    <li className="list-inline-item"><a href="#" className="text-white">Home</a></li>
                    <li className="list-inline-item text-white">/</li>
                    <li className="list-inline-item text-white">Wishlist</li>
                </ul>
            </div>
        </section>
       
       
        <section className="wishlist py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive shopping-summery">
                            <table className="table table-wishlist">
                                <thead>
                                    <tr className="main-heading">
                                        <th className="custome-checkbox start pl-30">
                                            <input className="form-check-input ml-3" type="checkbox" name="checkbox" id="exampleCheckbox11" value=""/>
                                                <label className="form-check-label" for="exampleCheckbox11"></label>
                                        </th>
                                        <th scope="col" colspan="2" className="pl-5">Product</th>
                                        <th scope="col" className="text-center">Price</th>
                                        <th scope="col" className="text-center">Stock Status</th>
                                        <th scope="col" className="text-center">Action</th>
                                        <th scope="col" className="end text-center">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="pt-30">
                                        <td className="custome-checkbox pl-30">
                                            <input className="form-check-input ml-0" type="checkbox" name="checkbox" id="exampleCheckbox1" value=""/>
                                                <label className="form-check-label" for="exampleCheckbox1"></label>
                                        </td>
                                        <td className="image product-thumbnail pt-40 text-center"><img src={img1} alt="#"/></td>
                                        <td className="product-des product-name">
                                            <h6><a className="product-name mb-10" href="#"> Shades Zulfat ( Rate : 540/- Per Pcs , Design : 10 Pcs catalog ) </a></h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" ></div>
                                                </div>
                                                <span className="font-small ml-1 text-muted"> (4.0)</span>
                                            </div>
                                        </td>
                                        <td className="price" data-title="Price">
                                            <h3 className="text-brand text-center">₹ 1,835</h3>
                                        </td>
                                        <td className="text-center detail-info" data-title="Stock">
                                            <span className="stock-status in-stock mb-0"> In Stock </span>
                                        </td>
                                        <td className="text-center" data-title="Cart">
                                            <button className="btn btn-sm">Add to cart</button>
                                        </td>
                                        <td className="action text-center" data-title="Remove">
                                            <a href="#" className="text-body"><img src={img4} alt="" title=""/></a>
                                        </td>
                                    </tr>

                                    <tr className="pt-30">
                                        <td className="custome-checkbox pl-30">
                                            <input className="form-check-input ml-0" type="checkbox" name="checkbox" id="exampleCheckbox1" value=""/>
                                                <label className="form-check-label" for="exampleCheckbox1"></label>
                                        </td>
                                        <td className="image product-thumbnail pt-40 text-center"><img src={img2} alt="#"/></td>
                                        <td className="product-des product-name">
                                            <h6><a className="product-name mb-10" href="#"> Oversize Cotton Dress</a></h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" ></div>
                                                </div>
                                                <span className="font-small ml-1 text-muted"> (4.0)</span>
                                            </div>
                                        </td>
                                        <td className="price" data-title="Price">
                                            <h3 className="text-brand  text-center">₹ 1,500</h3>
                                        </td>
                                        <td className="text-center detail-info" data-title="Stock">
                                            <span className="stock-status in-stock mb-0"> In Stock </span>
                                        </td>
                                        <td className="text-center" data-title="Cart">
                                            <button className="btn btn-sm">Add to cart</button>
                                        </td>
                                        <td className="action text-center" data-title="Remove">
                                            <a href="#" className="text-body"><img src={img4} alt="" title=""/></a>
                                        </td>
                                    </tr>


                                    <tr className="pt-30">
                                        <td className="custome-checkbox pl-30">
                                            <input className="form-check-input ml-0" type="checkbox" name="checkbox" id="exampleCheckbox1" value=""/>
                                                <label className="form-check-label" for="exampleCheckbox1"></label>
                                        </td>
                                        <td className="image product-thumbnail pt-40 text-center"><img src={img3} alt="#"/></td>
                                        <td className="product-des product-name">
                                            <h6><a className="product-name mb-10" href="#"> Oversize Cotton Dress</a></h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" ></div>
                                                </div>
                                                <span className="font-small ml-1 text-muted"> (4.0)</span>
                                            </div>
                                        </td>
                                        <td className="price" data-title="Price">
                                            <h3 className="text-brand  text-center">₹ 540</h3>
                                        </td>
                                        <td className="text-center detail-info" data-title="Stock">
                                            <span className="stock-status in-stock mb-0"> In Stock </span>
                                        </td>
                                        <td className="text-center" data-title="Cart">
                                            <button className="btn btn-sm">Add to cart</button>
                                        </td>
                                        <td className="action text-center" data-title="Remove">
                                            <a href="#" className="text-body"><img src={img4} alt="" title=""/></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <SocialTags/>
    </>
    )
}

export default WishList