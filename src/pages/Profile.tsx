import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiCamera } from "react-icons/fi"

import { useAuth } from "../hooks/auth"
import { api } from "../services/api"

import avatarPlaceholder from '../assets/avatar_placeholder.svg'
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Back } from "../components/Back"


export function Profile() {
    const { userDataAndFunc } = useAuth()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [oldPassword, setOldPassoword] = useState()
    const [newPassword, setNewPassword] = useState()

    const avatarURL = userDataAndFunc.user.avatar ? `${api.defaults.baseURL}/files/${userDataAndFunc.user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarURL)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    async function handleUpdateProfile() {
        const Update = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        const userUpdated = Object.assign(userDataAndFunc.user, Update)

        await userDataAndFunc.updateProfile({ user: userUpdated, avatarFile})
    }

    async function handleChangeAvatar(event: any) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    // function handleBack() {
    //     navigate(-1)
    // }

    return (
        <div className=" relative flex justify-center">
            <div className=" bg-PINK bg-opacity-5 absolute h-[144px] w-screen -z-10">
            </div>

            <Link 
                to="/"
                className="absolute left-0 mt-[60px] ml-36">
                <Back   />
                
            </Link>

            <main className=" w-[340px] flex flex-col items-center">
                <div className="flex items-end justify-end relative mb-16">
                    <img 
                        src={avatar} 
                        alt={name}
                        className=" rounded-full h-[186px] mt-[51px]"
                    />
                    <label 
                        htmlFor="avatar"
                        className=" bg-PINK w-12 h-12 absolute rounded-full flex items-center justify-center text-BGDARK_700 right-2 bottom-2 cursor-pointer"
                    >
                        <FiCamera className="w-5 h-5"   />
                        <input 
                            type="file" 
                            id="avatar" 
                            className="hidden" 
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </div>

                <div className="w-full">
                    <div className="mb-2">
                        <Input 
                            type="text" 
                            placeholder="Nome" 
                            value={name} 
                            onChange={(event: any )=> setName(event.target.value)} 
                            
                        />
                    </div>
                    <div className="mb-6">
                        <Input 
                            type="email" 
                            placeholder="E-mail" 
                            value={email}  
                            onChange={(event: any )=> setEmail(event.target.value)} 
                        />                    
                    </div>
                </div>

                <div className="w-full">
                    <div className="mb-2">
                        <Input 
                            type="password" 
                            placeholder="Senha atual" 
                            value=''  
                            onChange={(event: any )=> setOldPassoword(event.target.value)} 
                        />
                    </div>
                    <Input 
                        type="password" 
                        placeholder="Nova senha" 
                        value='' 
                        onChange={(event: any )=> setNewPassword(event.target.value)} 
                    />
                </div>

                <div className="mt-6">
                    <Button 
                        title="Salvar" 
                        del={false} 
                        onClick={handleUpdateProfile}
                    />
                </div>
            </main>
        </div>
    )
}