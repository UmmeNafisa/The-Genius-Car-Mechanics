import { createContext } from "react";
import React from 'react';
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={useFirebase()}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;