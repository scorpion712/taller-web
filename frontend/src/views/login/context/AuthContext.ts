import React from "react";
import { LoginForm, User } from "../models/auth.models";

interface IAuthContext {
    loading: boolean;
    error?: string; 
    user?: User;
    validateLogin: (user: LoginForm) => void;
}

const AuthContext: React.Context<IAuthContext> = React.createContext({} as IAuthContext);

export default AuthContext;