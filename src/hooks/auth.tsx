import React, { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api'
import { User } from "../services/models/user";


export type AuthContextType = {
    user: User | undefined
}

type AuthContextProviderType = {
    children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextType) 

const AuthContextProvider = ({ children }: AuthContextProviderType) => {
    // const [userDataAndFunc, setUserDataAndFunc] = useState<AuthUser | null>(null)

    const [user, setUser] = useState<User>()

    useEffect(() => {
            console.log('checou?')
            const token = localStorage.getItem("@rocketmovies:token")
            const user = localStorage.getItem("@rocketmovies:user")

            if(token && user) {
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`
               
                setUser(JSON.parse(user))
            }
    }, [])
    
    return (
        <AuthContext.Provider
            value={{
                user: user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}

export { 
    AuthContextProvider,
    useAuth
}