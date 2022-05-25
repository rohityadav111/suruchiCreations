import axios from "axios";

import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERROR } from "../constants/productConstants";


export const getProduct = () => async(dispatch)=> {
    try {
        dispatch({type: ALL_PRODUCT_REQUEST});

        const {data} = await axios.get("https://web-click-api.herokuapp.com/products");

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

export const clearError = ()=> async(dispatch)=>{
    dispatch({type: CLEAR_ERROR})
}