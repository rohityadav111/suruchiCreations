import React from 'react'
import img from '../images/white-border.png'



const About = () => {
    return (
        <>
   
       
            <section class="about-section py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-white p-5 text-center">
                            <h1 class="text-white text-center">Ladies Suits Wholesalers In Delhi</h1>
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
           
        </>
    )
}


export default About