import { User } from "./auth.models";

export interface IAuthState {
    loading: boolean;
    error?: string;
    user?: User;
  }