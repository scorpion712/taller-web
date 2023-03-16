import { useReducer } from "react";
import {
  fetchProductDetail as fetchProductDetailService,
  fetchProducts as fetchProductsService,
} from "../services/product.service";
import { IProductState } from "./model/product.state";
import ProductContext from "./ProductContext";
import productReducer from "./reducers/product.reducer";

const initialState: IProductState = {
  loading: true,
  loadingDetail: true,
};

const ProductState = (props: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchProducts = () => {
    fetchProductsService(dispatch);
  }

  const fetchProductDetails = (id: string) => {
    fetchProductDetailService(dispatch, id);
  }

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        error: state.error,
        loadingDetail: state.loadingDetail,
        detailProduct: state.detailProduct,
        errorDetail: state.errorDetail,
        fetchProductDetail: fetchProductDetails,
        fetchProducts: fetchProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
