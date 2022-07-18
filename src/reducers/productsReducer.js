
import { ALL_PRODUCT_REQUEST, 
         ALL_PRODUCT_SUCCESS, 
         ALL_PRODUCT_FAIL, 
         CLEAR_ERROR,
         PRODUCT_DETAILS_REQUEST,
         PRODUCT_DETAILS_SUCCESS,
         PRODUCT_DETAILS_FAIL } from "../constants/productConstants";

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

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case  PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      ...state,
      };
    case  PRODUCT_DETAILS_SUCCESS:
      return {
        success: action.payload.success,
        product: action.payload,
      
      };

      case  PRODUCT_DETAILS_FAIL:
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
};