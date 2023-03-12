import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "../../helpers/constants";
import { IProductState } from "../model/product.state";

function productReducer(state: IProductState, action: any) {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case PRODUCTS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;