import { ADD_TO_CART_REQUEST
        ,ADD_TO_CART_SUCCESS,
        ADD_TO_CART_FAIL,
        GET_CART_LIST_REQUEST,GET_CART_LIST_SUCCESS ,GET_CART_LIST_FAIL,REMOVE_CART_ITEM, SAVE_SHIPPING_INFO} from "../constants/cartConstants";

import axios from "axios";

const id = JSON.parse(localStorage.getItem("user"))

const config = {
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
  },
};
export const getCartList = ()=> async (dispatch)=>{
  try {
        
    dispatch({type: GET_CART_LIST_REQUEST});
    let link = `https://web-click-api.herokuapp.com/cart/${id}`

    const {data} = await axios.get(link,config);

    dispatch({
        type: GET_CART_LIST_SUCCESS,
        payload: data,
        
    });

    
} catch (error) {
   dispatch({
       type: GET_CART_LIST_FAIL,
       payload: error.response.message
   })
    
}

}
{/*

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://web-click-api.herokuapp.com/cart/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      title: data.product.title,
      price: data.product.price,
      image: data.product.images[0].url,
      quantity: data.product.quantity,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};





 

  
}



export const add = (data) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_CART_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`https://web-click-api.herokuapp.com/cart`, data, config);

    dispatch({ type: ADD_TO_CART_SUCCESS, payload: data.cartList });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: error.response.data.message,
    });
  }
};


*/}

