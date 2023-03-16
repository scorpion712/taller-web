import { useReducer } from "react";   
import { IAuthState } from "../models/auth.state";
import AuthContext from "./AuthContext";
import authReducer from "./reducers/auth.reducer";

const initialState: IAuthState = {
  loading: true,
};

const AuthState = (props: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        user: state.user,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;