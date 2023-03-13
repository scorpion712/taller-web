import { Product, ProductDetail } from "../../../views/main/models/Product.model";


export interface IProductState {
    loading: boolean;
    error?: string;
    products?: Product[];
    loadingDetail: boolean;
    detailProduct?: ProductDetail;
    errorDetail?: string;
  }