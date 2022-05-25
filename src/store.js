
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productsReducer} from './reducers/productsReducer'



let initialState = {}


  const reducer = combineReducers({ 
    products: productsReducer,
   })
 


   const middleware = [thunk];

   const store = createStore(
     reducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware))
   );
   
  
   export default store;