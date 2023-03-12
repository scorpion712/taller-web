import { ADD_CART_ITEM, CLEAR_CART, REMOVE_CART_ITEM } from "../../helpers/constants";
import { CartItem } from "../models/cart.model";

// add given item to cart
export const addToCart = (
    dispatch: any,
    cartItems: CartItem[],
    itemToAdd: CartItem
  ) => {
    const items = cartItems.slice();
    let exists = false;
    items.forEach((item) => {
      if (item.id === itemToAdd.id) {
        exists = true;
        item.units = itemToAdd.qty ? itemToAdd.qty : item.units+1;
      }
    });
    if (!exists) {
      items.push(itemToAdd);
    }
    return dispatch({
      type: ADD_CART_ITEM,
      payload: { items },
    });
  };

// remove given item from cart
export const removeFromCart = (
    dispatch: any,
    cartItems: CartItem[],
    itemToRemove: CartItem
  ) => {
    const items = cartItems
      .filter((item) => item.id !== itemToRemove.id)
      .slice();
  
    return dispatch({
      type: REMOVE_CART_ITEM,
      payload: { items },
    });
  }; 

// clear cart
export const clearCart = (dispatch: any) => {
    return dispatch({
      type: CLEAR_CART,
    });
  };