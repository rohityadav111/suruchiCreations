import React, { useEffect } from 'react'
import img1 from '../../images/winter-collection-ladies.jpg'
import img2 from '../../images/3.jpg'
import img3 from '../../images/2.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { Helmet } from 'react-helmet'
import axios from 'axios'


const Categories = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        GetCategoryList()
    }, [])

    const [category, setCategory] = useState([])
    const GetCategoryList = async () => {
       await axios.get("https://web-click-api.herokuapp.com/category", {
            
        }).then((response)=>{
          
            setCategory(response.data.categorytList)
            setLoading(false)
        })
    

    }
    return (


        <section className="three-category py-2 pb-5">
            <div className="container">
                <div className="row mt-4">
                    <Helmet>
                        <title>Our Products</title>
                    </Helmet>

                    {
                        (loading) ? <Loader />

                            :
                            <>
                                {
                                    category && category.map((element, index) => {
                                        return (

                                            <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 three-part img-hover-zoom" data-tilt="" data-tilt-max="10" style={{ willChange: "transform", transform: "perspective(300px) rotateX(0deg) rotateY(0deg)" }}>
                                                <div className="grid">
                                                    <figure className="effect-bubba mb-0">
                                                        <img src={`https://web-click-api.herokuapp.com/filestorage/${element.image}`} alt="img02" />
                                                        <figcaption>
                                                            <p className="text-white">{element.title}</p>
                                                            <Link to={`/suruchi-creations/products/${element._id}`} className="text-white button_center">Shop Now</Link>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                    }
                </div>

            </div>
        </section>
       
    )
}

export default Categories