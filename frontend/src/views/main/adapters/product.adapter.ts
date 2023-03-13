import { Product, ProductDetail, ProductWS } from "../models/Product.model"; 

export const adaptProduct = (product: ProductWS) => {
    const formattedProduct: Product = {
        id: product._id,
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        stock: product.stock, 
        category: product.category,
        thumbnail: product.thumbnail, 
    };
    return formattedProduct;
  };
  
export const adaptProductDetail = (product: ProductWS) => {
    const formattedProduct: ProductDetail = {
        _id: product._id,
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        stock: product.stock,
        rating: product.rating,
        brand: product.brand,
        category: product.category,
        thumbnail: product.thumbnail,
        images: product.images,
    };
    return formattedProduct;
  };
  