import React from 'react'

import Subnavbar from '../Subnavbar';
import Featured from './Featured';

import CottonCollecton from '../CottonCollecton';
import Designer from '../Designer';
import Dresses from '../Dresses';
import SubFooter from '../SubFooter';
import img from '../../images/white-border.png'
import { getProduct } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import img4 from '../../images/heading-shape.png'

const Layout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch])

    const { loading, error, products } = useSelector((state) => state.products);


    return (
        <>

            <Subnavbar />
            
                <section className="featured bg-light py-5">
                    <div className="container">
                        <div className="section-title text-center">
                            <h1>Featured</h1>
                            <img src={img4} />
                        </div>
                            <Featured />

                    </div>
                </section>
            
            <section class="about-section py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-9 border-white p-5 text-center">
                            <h1 class="text-white">Ladies Suits Wholesalers In Delhi </h1>
                            <img src={img} alt="" title="" />
                            <p class="text-white mb-3 mt-4">Suruchi Creations is one of the best Ladies Suits Wholesalers in Delhi. With over 21+ years of experience, we provide a wide range of Indian Ladies Suits, Kurti, Georgette Suit, Heavy Designer Suit and Lehengas in different varieties, colour, and fabric. We offer suits for all occasions including parties, weddings, get together, reception, etc. The shop has earned happy customers by offering an extensive range of Kurti, Pakistani Suits and Ladies Cotton Suit.</p>

                            <p class="text-white">The range offered by us constitutes Ladies Kurti & Cotton Suit Set. Our offered range is widely demanded in the market for their features like elegant designs, fine finish, alluring appearance, colorfastness, mesmerizing looks and lightweight. Owing to the following features, our offered range of Ladies garments are demanded across the Indian and International markets.</p>

                            <div class="about-btn mt-4">
                                <a href="#" class="text-white font-weight-bold">Company Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <CottonCollecton />
            <Designer />
            <Dresses />
            <SubFooter />

        </>
    )
}

export default Layout