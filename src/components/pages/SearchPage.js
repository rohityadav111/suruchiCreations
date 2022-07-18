import React from 'react'
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import CottonCollecton from '../CottonCollecton';
import Featured from '../layout/Featured';
import img1 from '../../images/IMG-20211027-WA0058-300x300.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faStar, } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Header';
import Footer from '../Footer';

const Loader = styled.div`
  min-width: calc(100vw - 30vw);
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
    text-align: center;
  }
`;

const Box = styled.div`
  display: flex;
  margin: auto;
  width: auto;
  padding: 30px 30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const SearchPage = () => {
 
  const [flterProducts, setFilterProducts] = useState("")

  useEffect(() => {
    Search()
    ShowCart()
  },[flterProducts])

  let params = useParams()
  let param = Object.values(params)


  
  const Search = async () => {
    let response = await fetch(`https://web-click-api.herokuapp.com/products/search/${param}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
      }
    })
    response = await response.json()
    console.log(response)
    setFilterProducts(response.product)

  }


  const submit = async (product) => {
    if (localStorage.getItem('user')) {
      const productExist = cart.find((item) => item.product._id == product._id);

      const user = JSON.parse(localStorage.getItem("user"))._id
      let result = await fetch("https://web-click-api.herokuapp.com/cart", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
        },
        body: JSON.stringify({
          productId: product._id,
          userId: user,
          quantity: productExist ? productExist.quantity + 1 : 1
        })

      });
      result = await result.json();
      console.log(result)
      if (result.success) {
        toast.success(result.message, {
          position: "top-center",
          autoClose: 2000,
         
        });
        ShowCart();
      } else {

      }
    }

    else {
      toast.warn("Login to Add Item", {
        position: "top-center",
        autoClose: 2000,
        
      });
    }


  }

  const [cart, setCart] = useState([])
  const ShowCart = async () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem("user"))._id
      let result = await fetch(`https://web-click-api.herokuapp.com/cart/${user}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
        }
      });
      result = await result.json();
      setCart(result.cartList)
    }
    else {

    }



  }

  return (
    <>

      <section className="breadcumb py-5">
        <div className="container">
          <div className="row">
            <h1 role="button" className="text-center w-100 text-white" >Our Products</h1>
          </div>
        </div>
        <div className="ul-list">
          <ul className="text-center mt-3">
            <li className="list-inline-item"><Link to="/" className="text-white">Home</Link></li>
            <li className="list-inline-item text-white"></li>
            <li className="list-inline-item text-white"></li>
          </ul>
        </div>
      </section>



      <div className="col-xl-12 col-12 col-md-12 col-sm-12 col-xs-12 product-_side">
        <div className='container-fluid'>
          <div className="row">



            {
              flterProducts && flterProducts.map((product) => {

                return (
                  <div className="col-xl-3  col-md-3 col-sm-12 col-xs-12 product-box our-product mt-2" data-tilt="" data-tilt-max="10" >
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
                      <p> {product.title}  </p>
                      <ul className="w-100 d-block mt-3">
                        <li className="list-inline-item text-left text-dark">Rs {product.price}</li>
                      
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
                        <li className="list-inline-item">
                          <Link to={`/detail/${product._id}`} className="bg-transparent  border font-weight-bold py-2 px-4 rounded" data-toggle="modal" data-target=".bd-example-modal-sm">Quick View</Link></li>

                        <li className="list-inline-item"><a role="button"
                          className="font-weight-bold border py-2 px-4 rounded text-white"
                          onClick={() => submit(product)}
                        >Add To Cart</a></li>
                      </ul>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>





    </>

  )
}
export default SearchPage