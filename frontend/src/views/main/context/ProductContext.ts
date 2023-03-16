import React from "react"; 
import { Product, ProductDetail } from "../models/Product.model";

interface IProductContext { 
    products: Product[];
    loading: boolean;
    error?: string;
    loadingDetail: boolean;
    errorDetail?: string;
    detailProduct?: ProductDetail;
    fetchProductDetail: (id: string) => void;
    fetchProducts: () => void;
}

const ProductContext: React.Context<IProductContext> = React.createContext({} as IProductContext);

export default ProductContext;