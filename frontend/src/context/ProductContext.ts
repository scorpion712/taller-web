import React from "react";
import { Product } from "../models/Product.model";

interface IProductContext {
    dispatch: any,
    products: Product[],
    loading: boolean,
    error?: string,
    loadingDetail: boolean,
}

const ProductContext: React.Context<IProductContext> = React.createContext({} as IProductContext);

export default ProductContext;