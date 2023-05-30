import axios, { AxiosError } from "axios";
import { api } from "./api";
import { User } from "./models/user";

export async function signIn(email: string, password: string) {
    try {
        const response = await api.post('/sessions', { email, password })
        const { user, token }: { user: User; token: string } = response.data

        localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
        localStorage.setItem("@rocketmovies:token", token)

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        window.location.replace('/')
    } catch(err) {
        const error = err as Error | AxiosError<Error>
        if(axios.isAxiosError(error)) {
            alert(error.response?.data.message)
        } else {
            alert("Não foi possível entrar.")
        }
    }
}

export function signOut() {
    localStorage.removeItem("@rocketmovies:user")
    localStorage.removeItem("@rocketmovies:token")
    window.location.replace('/')
}