import axios, { AxiosError } from "axios"
import { api } from "./api"
import { User } from "./models/user"

export async function updateProfile(user: User, avatarFile: string) {
    try {
        if(avatarFile) {
            const fileUploadForm = new FormData()
            fileUploadForm.append('avatar', avatarFile)

            const response = await api.patch('/users/avatar', fileUploadForm)
            user.avatar = response.data.avatar
        }

        await api.put('/users', user)
        localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
        
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