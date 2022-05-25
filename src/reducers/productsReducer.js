
import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERROR } from "../constants/productConstants";

export const productsReducer = (state = { productList: [] }, action) => {
    switch (action.type) {
      case ALL_PRODUCT_REQUEST:
     
        return {
          loading: true,
          productList:[]
        };
      case ALL_PRODUCT_SUCCESS:
        return {
        
          products: action.payload.productList,
          success: action.payload.success,
        };

        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            };


        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}