import axios from "axios";

import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERROR, PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL } from "../constants/productConstants";


export const getProduct = (price=[0,25000]) => async(dispatch)=> {
    try {
        
        dispatch({type: ALL_PRODUCT_REQUEST});
        let link = `https://web-click-api.herokuapp.com/products?price[gte]=${price[0]}&price[lte]=${price[1]}`

        const {data} = await axios.get(link);

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
            
        });

        
    } catch (error) {
       dispatch({
           type: ALL_PRODUCT_FAIL,
           payload: error.response.message
       })
        
    }

}

export const getProductDetails = (id) => async(dispatch)=> {
    try {
        const token =   `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
        dispatch({type: PRODUCT_DETAILS_REQUEST});

        const {data} = await axios.get(`https://web-click-api.herokuapp.com/products/${id}`, token);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
            
        });

        
    } catch (error) {
       dispatch({
           type: PRODUCT_DETAILS_FAIL,
           payload: error.response.message
       })
        
    }

}

export const clearError = ()=> async(dispatch)=>{
    dispatch({type: CLEAR_ERROR})
}