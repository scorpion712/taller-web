import { useReducer } from "react";
import { CartItem } from "../models/cart.model";
import {
  addToCart as addToCartService,
  clearCart as clearCartService,
  removeFromCart as removeFromCartService,
} from "../services/cart.service";
import CartContext from "./CartContext";
import { ICartState } from "./model/cart.model";
import cartReducer from "./reducers/cart.reducer";

const initialState: ICartState = {
  cartItems: [],
};

const CartState = (props: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (cartItems: CartItem[], item: CartItem) => {
    addToCartService(dispatch, cartItems, item);
  }

  const removeFromCart = (cartItems: CartItem[], item: CartItem) => {
    removeFromCartService(dispatch, cartItems, item);
  }

  const clearCart = () => {
    clearCartService(dispatch);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart: addToCart,
        clearCart: clearCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
