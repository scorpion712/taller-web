import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "../../../helpers/constants";
import Axios from "axios"; 
import { adaptProduct, adaptProductDetail } from "../adapters/product.adapter"; 
import { API_URL } from "../../../helpers/api.constants";
import { ProductWS } from "../models/Product.model";

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

export const fetchProductDetail = async (dispatch: any, id: string) => {
    dispatch({
        type: PRODUCT_DETAIL_REQUEST
    });
    try { 
        // get data from api 
        const { data } = await Axios.get(`${API_URL}/products/${id}`); 
        //dispatch success with adappted data
        return dispatch({
            type: PRODUCT_DETAIL_SUCCESS, 
            payload: adaptProductDetail(data)
        })  
    } catch (error: any) { 
        return dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.message
        }); 
    }
} 