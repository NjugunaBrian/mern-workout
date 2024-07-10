import React, { createContext, useReducer } from "react";

export interface AuthContextType {
    users: User[],
    dispatch: React.Dispatch<any>

}

interface User {
    _id: string,
    email: string,
    password: string
}

type Action = 
| { type: 'LOGIN'; payload: User[]}
| { type: 'LOGOUT'; payload: string}

export const AuthContext = createContext<AuthContextType | undefined >(undefined);

export const authReducer = (state: User[], action: Action): User[] | null | any => {
    switch (action.type){
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return null;
        default:
            return state       
    }

}

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [users, dispatch] = useReducer(authReducer, { user: null });

    return (
        <AuthContext.Provider value={{ ...users, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}