import React, { createContext, useEffect, useReducer } from "react";

export interface AuthContextType {
    user: User | null,
    dispatch: React.Dispatch<any>

}

interface User {
    token: any;
    _id: string,
    email: string,
    password: string
}

type Action = 
| { type: 'LOGIN'; payload: User}
| { type: 'LOGOUT'; payload: string}

export const AuthContext = createContext<AuthContextType | undefined >(undefined);


export const authReducer = (state: User, action: Action): User | null | any => {
    switch (action.type){
        case 'LOGIN':
            return { user: action.payload};
        case 'LOGOUT':
            return { user: null };
        default:
            return state       
    }

}

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, { user: null });

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if(storedUser){
            const user = JSON.parse(storedUser);
            if (user) {
                dispatch({ type: 'LOGIN', payload: user });
            }          
        }
    }, [])

    console.log(state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}