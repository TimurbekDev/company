import { createContext, ReactNode, useEffect, useState } from "react";
import { IAuthContext } from "../types";

export const AuthContext = createContext<IAuthContext>({
    token: null,
    setToken: () => null
});

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        }
    }, [token]);

    return <AuthContext.Provider value={{ setToken, token }}>
        {children}
    </AuthContext.Provider>;
};