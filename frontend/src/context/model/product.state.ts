import { Product } from "../../models/Product.model";

export interface IProductState {
    loading: boolean;
    error?: string;
    products?: Product[];
    loadingDetail: boolean;
  }