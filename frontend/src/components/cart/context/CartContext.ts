import React from "react";  
import { CartItem } from "../models/cart.model";

interface ICartContext {
    cartItems: CartItem[],
    dispatch: any
}

const CartContext: React.Context<ICartContext> = React.createContext({cartItems: [], dispatch: null} as ICartContext);

export default CartContext;