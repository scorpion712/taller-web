import { useReducer } from "react";   
import { IProductState } from "./model/product.state";
import ProductContext from "./ProductContext";
import productReducer from "./reducers/product.reducer";

const initialState: IProductState = {
  loading: true,
  loadingDetail: true,
};

const ProductState = (props: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        error: state.error,
        loadingDetail: state.loadingDetail,
        detailProduct: state.detailProduct,
        errorDetail: state.errorDetail,
        dispatch,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;