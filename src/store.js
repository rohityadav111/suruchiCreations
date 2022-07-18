
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productsReducer,productDetailsReducer} from './reducers/productsReducer'
import {cartListReducer} from './reducers/cartReducer'


let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
}
  
}

  const reducer = combineReducers({ 
    products: productsReducer,
    productDetails:productDetailsReducer,
    cart:cartListReducer
  
   })

   const store = createStore(
     reducer,
     initialState,
     composeWithDevTools(applyMiddleware(thunk))
   );
   
  
   export default store;