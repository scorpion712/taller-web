import { AUTH_LOGIN_FAIL, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS } from "../../../../helpers/constants";
import { IAuthState } from "../../models/auth.state";

function authReducer(state: IAuthState, action: any) : IAuthState {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return { ...state, loading: true }; 
        case AUTH_LOGIN_SUCCESS:
            return {
              ...state,
              loading: false,
              user: action.payload,
              error: '',
            }; 
        case AUTH_LOGIN_FAIL:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };  
        default:
            return state;
    }
}

export default authReducer;