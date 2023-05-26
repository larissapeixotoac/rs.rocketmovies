import React, { createContext, useContext, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

import { api } from '../services/api'

type AuthUser = {
    user: any,
    signIn: Function,
    signOut: Function,
    updateProfile: Function
}

export type AuthContextType = {
    userDataAndFunc: any,
    setUserDataAndFunc: any
}

type AuthContextProviderType = {
    children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextType) 

const AuthContextProvider = ({ children }: AuthContextProviderType) => {
    const [userDataAndFunc, setUserDataAndFunc] = useState<AuthUser | null>(null)

    const [data, setData] = useState(Object)

    async function signIn({ email, password }: any) {
        try {
            const response = await api.post('/sessions', {email, password})
            const { user, token } = response.data

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketmovies:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({user, token})
            
        } catch(err) {
            const error = err as Error | AxiosError<Error>
            if(axios.isAxiosError(error)) {
                alert(error.response?.data.message)
            } else {
                alert("Não foi possível entrar.")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")

        setData({})
    }

    async function updateProfile({ user, avatarFile}: any) {
        try {
            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append('avatar', avatarFile)

                const response = await api.patch('/users/avatar', fileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put('/users', user)
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

            setData({ user, token: data.token })

            alert("Perfil atualizado.")
            
        } catch(err) {
            const error = err as Error | AxiosError<Error>
            if(axios.isAxiosError(error)) {
                alert(error.response?.data.message)
            } else {
                alert("Não foi possível atualizar o perfil.")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketmovies:token")
        const user = localStorage.getItem("@rocketmovies:user")

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])
    
    return (
        <AuthContext.Provider
            value={{
                userDataAndFunc: {
                    user: data.user,
                    signIn,
                    signOut
                },
                setUserDataAndFunc
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