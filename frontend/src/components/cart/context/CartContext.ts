import React from "react";
import { CartItem } from "../models/cart.model";

interface ICartContext {
    cartItems: CartItem[],
    clearCart: () => void;
    removeFromCart: (
        cartItems: CartItem[],
        itemToRemove: CartItem) => void;
    addToCart: (
        cartItems: CartItem[],
        itemToAdd: CartItem) => void;
}

const CartContext: React.Context<ICartContext> = React.createContext({} as ICartContext);

export default CartContext;