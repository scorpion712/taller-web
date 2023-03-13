 
import { ADD_CART_ITEM, CLEAR_CART, REMOVE_CART_ITEM } from "../../../../helpers/constants";
import { ICartState } from "../model/cart.model";
  
  function cartReducer(state: ICartState, action: any) {  
    switch (action.type) {
      case ADD_CART_ITEM:
        return {
          ...state,
          cartItems: action.payload.items,
        }; 
      case REMOVE_CART_ITEM:
        return {
          ...state,
          cartItems: action.payload.items,
        };
      case CLEAR_CART:
        return {
          ...state,
          cartItems: [],
        };
      default:
        return state;
    }
  }
  
  export default cartReducer;