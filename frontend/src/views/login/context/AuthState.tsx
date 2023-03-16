import { useReducer } from "react";   
import { LoginForm } from "../models/auth.models";
import { IAuthState } from "../models/auth.state";
import { validateLogin as validateLoginService } from "../services/auth.service";
import AuthContext from "./AuthContext";
import authReducer from "./reducers/auth.reducer";

const initialState: IAuthState = {
  loading: true,
};

const AuthState = (props: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

    const validateLogin = (user: LoginForm) => {
        validateLoginService(dispatch, user);
    }

  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        user: state.user,
        validateLogin: validateLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;