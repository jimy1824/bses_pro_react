import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    userId: null,
    user: {},
    features: {},
    details: {},
    token: null,
    refresh_token:null,
    login: () => {},
    logout: () => {},
    setForceRefresh: () => {},
});
