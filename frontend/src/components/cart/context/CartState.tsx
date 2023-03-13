 
import { useReducer } from "react"; 
import CartContext from "./CartContext";
import { ICartState } from "./model/cart.model";
import cartReducer from "./reducers/cart.reducer";

const initialState: ICartState = {
  cartItems: []  
};

const CartState = (props: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState); 

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        dispatch,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState; 
  