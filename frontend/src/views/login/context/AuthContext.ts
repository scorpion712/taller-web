import React from "react";
import { User } from "../models/auth.models";

interface IAuthContext {
    loading: boolean;
    error?: string;
    dispatch: any; 
    user?: User;
}

const AuthContext: React.Context<IAuthContext> = React.createContext({} as IAuthContext);

export default AuthContext;