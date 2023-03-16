import { AUTH_LOGIN_FAIL, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS } from "../../../helpers/constants";
import { LoginForm } from "../models/auth.models";

export const validateLogin = async (dispatch: any, user: LoginForm) => {
    dispatch({
        type: AUTH_LOGIN_REQUEST
    });
    try { 
        // delay to simulate API call

        // get data from mocked users 

        // validate if exists
        if (user.email === 'admin@admin' && user.password === 'admin') {
            //dispatch success with adappted data
            return dispatch({
                type: AUTH_LOGIN_SUCCESS, 
                payload: {email: 'admin@admin', token: 'USER_JWT'}
            }) 
        } 
        return dispatch({
            type: AUTH_LOGIN_FAIL,
            payload: 'Sorry, the user email or password is incorrect.'
        }); 
    } catch (error: any) {
        return dispatch({
            type: AUTH_LOGIN_FAIL,
            payload: error.message
        }); 
    }
} 
