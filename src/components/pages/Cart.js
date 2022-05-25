import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {

  var totalprice = 0;
  const [cart, setCart] = useState([])
  const [quantity, setUpdateQuantity] = useState("")
  

  //--------------------------GET CART LIST API ----------------------------------------------------//

  useEffect(() => {
    ShowCart();
    
  }, []);

  const userId = JSON.parse(localStorage.getItem("user"))._id

  const ShowCart = async () => {
    let result = await fetch(`https://web-click-api.herokuapp.com/cart/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
      }
    });
    result = await result.json();
    console.log(result)
    setCart(result.cartList)
  }

  // -----------------------------------------------CLOSE---------------------------------------------//

  //--------------------------DELETE ITEM FROM CART API ------------------------------------------------///

  const DeleteCartItem = async (id) => {


    let result = await fetch(`https://web-click-api.herokuapp.com/cart/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
      }

    });
    result = await result.json();

    if (result.success == true) {
      console.log(result)
      ShowCart()
    }

  }


  const UpdateCartQuantity = async ( id) => {
    const formData = new FormData();
    formData.append('quantity', quantity);

    let result = await fetch(`https://web-click-api.herokuapp.com/cart/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
      },
      body: formData

    })
    result = await result.json()
    console.log(result)
    setUpdateQuantity(result)

    if (result.success) {
      alert("quantity updated")
    }
  }

  
 

  //------------------------CLOSE--------------------------------------------------------------------------///


  //--------------------------UPDATE CART API ----------------------------------------------------------//

  
  const Decrement = (id) => {
    setCart(cart =>
        cart.map((item) =>
            id === item._id ?
             { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
              : item
        )


    );
    UpdateCartQuantity(id)
}


const Increment = (id) => {
    setCart(cart =>
        cart.map((item) =>
            id === item._id ? 
            { ...item, quantity: item.quantity + (item.quantity < 10 ? 1 : 0) } :
             item
        )


    );
    UpdateCartQuantity(id)
}




  //-----------------------------------CLOSE --------------------------------------------------/////

  return (
    <>
      <section className="breadcumb py-5">
        <div className="container">
          <div className="row">
            <h1 className="text-center w-100 text-white">Cart</h1>
          </div>
        </div>
        <div className="ul-list">
          <ul className="text-center mt-3">
            <li className="list-inline-item"><a href="#" className="text-white">Home</a></li>
            <li className="list-inline-item text-white">/</li>
            <li className="list-inline-item text-white">Cart</li>
          </ul>
        </div>
      </section>

      <section className="cart__section section--padding">
        <div className="container-fluid">
          <div className="cart__section--inner">
            <form action="#">
              <h2 className="cart__title mb-40">Shopping Cart</h2>
              <div className="row">
                <div className="col-lg-8">
                  <div className="cart__table">
                    <table className="cart__table--inner">
                      <thead className="cart__table--header">
                        <tr className="cart__table--header__items">
                          <th className="cart__table--header__list">Product</th>
                          <th className="cart__table--header__list">Price</th>
                          <th className="cart__table--header__list">Quantity</th>
                          <th className="cart__table--header__list">Total</th>
                        </tr>
                      </thead>
                      {

                        cart && cart.map((item, index) => {
                          console.log(item.quantity)
                          totalprice += item.quantity * item.price
                          return (
                            
                            <tbody className="cart__table--body">
                           
                              <tr className="cart__table--body__items">
                                <td className="cart__table--body__list">
                                  <div className="cart__product d-flex align-items-center">
                                    <button className="cart__remove--btn" aria-label="search button" type="button" onClick={() => DeleteCartItem(item._id)}>
                                      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12px" height="12px">
                                        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                                      </svg>
                                    </button>
                                    <div className="cart__thumbnail">
                                      <a href="#"><img className="border-radius-5 w-75" src={'https://web-click-api.herokuapp.com/filestorage/' + item.product.image.replace("uploads/images/", "")} alt="cart-product" /></a>
                                    </div>
                                    <div className="cart__content">
                                      <h4 className="cart__content--title"><a href="#">{item.product.title}</a></h4>
                                      <span className="cart__content--variant text-left">COLOR: Blue</span>
                                      <span className="cart__content--variant text-left">WEIGHT: 2 Kg</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="cart__table--body__list">
                                  <span className="cart__price">Rs {item.product.price}</span>
                                </td>
                                <td className="cart__table--body__list">

                                  <div className="quantity-cart mb-3 mt-3">
                                    <div className="quantity-cart-pluse buttons_added">


                                      <button type="button" className="minus" onClick={() => Decrement(item._id)} >-</button>

                                      <input type="number" readOnly value={item.quantity} title="Qty" className="input-text qty text" />

                                      <button type="button" className="plus float-right" onClick={() => Increment(item._id)}>+</button>

                                    </div>
                                  </div>
                                </td>
                                <td className="cart__table--body__list">
                                  <span className="cart__price end">Rs {totalprice}</span>
                                </td>
                              </tr>
                            </tbody>
                          )
                        })
                      }

                    </table>
                    <div className="continue__shopping d-flex justify-content-between">
                      <a className="continue__shopping--link" href="#">Continue shopping</a>
                      <button className="continue__shopping--clear bg-transparent p-0 m-0" type="submit">Clear Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cart__summary border-radius-10">
                    <div className="coupon__code mb-30">
                      <h3 className="coupon__code--title">Coupon</h3>
                      <p className="coupon__code--desc">Enter your coupon code if you have one.</p>
                      <div className="coupon__code--field d-flex">
                        <form action="#" method="post">
                          <ul>
                            <li className="list-inline-item"><input type="text border" className="pl-3" name="" value="" placeholder="Coupon code" required="" /></li>
                            <li className="list-inline-item"><button className="border-0 text-white"><p className="text-white mb-0">Apply Coupon</p></button></li>
                          </ul>
                        </form>

                      </div>
                    </div>
                    <div className="cart__note mb-20">
                      <h3 className="cart__note--title">Note</h3>
                      <p className="cart__note--desc">Add special instructions for your seller...</p>
                      <textarea className="cart__note--textarea border-radius-5"></textarea>
                    </div>
                    <div className="cart__summary--total mb-20">
                      <table className="cart__summary--total__table">
                        <tbody>
                          <tr className="cart__summary--total__list">
                            <td className="cart__summary--total__title text-left border-0">SUBTOTAL</td>
                            <td className="cart__summary--amount text-right border-0">Rs {totalprice}</td>
                          </tr>
                          <tr className="cart__summary--total__list">
                            <td className="cart__summary--total__title text-left border-0">GRAND TOTAL</td>
                            <td className="cart__summary--amount text-right border-0">Rs {totalprice}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="cart__summary--footer">
                      <p className="cart__summary--footer__desc">Shipping & taxes calculated at checkout</p>
                      <ul >
                        <li className="list-inline-item"><button className="cart__summary--footer__btn primary__btn cart" type="submit">Update Cart</button></li>
                        <li className="list-inline-item float-right"><Link className="cart__summary--footer__btn primary__btn checkout" to="/checkout" >Check Out</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>









    </>
  )
}

export default Cart