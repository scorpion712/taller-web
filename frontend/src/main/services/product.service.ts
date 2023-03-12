import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "../../helpers/constants";
import Axios from "axios"; 
import { adaptProduct } from "../adapters/product.adapter";
import { API_URL } from "../../helpers/api.constants";
import { ProductWS } from "../../models/Product.model";


export const fetchProducts = async (dispatch: any) => {
    dispatch({
        type: PRODUCTS_LIST_REQUEST
    });
    try { 
        // get data from api 
        const { data } = await Axios.get(`${API_URL}/products`);
        //dispatch success with adappted data
        dispatch({
            type: PRODUCTS_LIST_SUCCESS, 
            payload: data.map((webProduct: ProductWS) => {return adaptProduct(webProduct)})
        }) 
        return data.map((webProduct: ProductWS) => {return adaptProduct(webProduct)});
    } catch (error: any) {
        return dispatch({
            type: PRODUCTS_LIST_FAIL,
            payload: error.message
        }); 
    }
} 