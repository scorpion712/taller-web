import { CartItem } from "../../cart/models/cart.model";
import { Product, ProductDetail } from "../../models/Product.model";

export const adaptCartItem = (product: Product) => {
    const formattedItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        discountPercentage: product.discountPercentage,
        units: 1,
        thumbnail: product.thumbnail,
    };
    return formattedItem;
};

export const adaptCartItemProductDetail = (product?: ProductDetail) => {
    if (product) {
        const formattedItem: CartItem = {
            id: product._id,
            title: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage,
            units: 1,
            thumbnail: product.thumbnail,
        };
        return formattedItem;
    }
    return {} as CartItem;
};
