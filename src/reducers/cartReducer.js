import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  GET_CART_LIST_REQUEST,
  GET_CART_LIST_SUCCESS,
  GET_CART_LIST_FAIL
} from "../constants/cartConstants";



export const cartListReducer = (state = { cartList: [] }, action) => {
  switch (action.type) {
    case GET_CART_LIST_REQUEST:
      return {
        loading: true,
        cartList:[]
      };
    case GET_CART_LIST_SUCCESS:
      return {
        success: action.payload.success,
        cartList: action.payload.cartList,

      };

    case GET_CART_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      };


    default:
      return state;
  }
};

{/*




export const cartReducer = (
  state = { cartList: [], shippingInfo: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      const item = action.payload;

      const isItemExist = state.cartList.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          cartList: state.cartList.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartList: [...state.cartList, item],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartList: state.cartList.filter((i) => i.product !== action.payload),
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    default:
      return state;
  }
};

*/}