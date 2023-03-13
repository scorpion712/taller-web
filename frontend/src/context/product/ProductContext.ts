import React from "react";
import { Product, ProductDetail } from "../../views/main/models/Product.model";

interface IProductContext {
    dispatch: any,
    products: Product[],
    loading: boolean,
    error?: string,
    loadingDetail: boolean,
    errorDetail?: string,
    detailProduct?: ProductDetail,
}

const ProductContext: React.Context<IProductContext> = React.createContext({} as IProductContext);

export default ProductContext;