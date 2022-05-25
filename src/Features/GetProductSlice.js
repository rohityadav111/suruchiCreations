{/*
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const Productsfetch = createAsyncThunk("products/Productsfetch",

async ()=> {
    const response = await axios.get("https://web-click-api.herokuapp.com/products")
    return response?.data
    
}

)

export const GetProductSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        
    },

    reducers:{

    },

    extraReducers:{
        [Productsfetch.pending]: (state,action) =>{
            state.status = "pending";
        },
        [Productsfetch.fulfilled]: (state,action)=>{
            state.status = "success";
            state.data = action.payload;
        },
        [Productsfetch.rejected]: (state,action) =>{
            state.status = "pending";
        },

    }



});

export default GetProductSlice.reducer;





*/}









{/*
export function fetchProducts() {

    return async function fetchProductsThunk(dispatch, getstate) {
        dispatch(setStatus(STATUSES.LOADING));
        const response = await fetch("http://3.110.3.217/products", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        });
        const data = await response.json()
        console.log(data)
        dispatch(setProducts(data));
        dispatch(setStatus(STATUSES.IDLE));
    }
}

*/}