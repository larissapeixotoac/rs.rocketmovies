import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Back } from "../components/Back"

import { FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"

export function Profile() {
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
                        src="https://github.com/larissapeixotoac.png" 
                        alt="Foto do usuário" 
                        className=" rounded-full h-[186px] mt-[51px]"
                    />
                    <label 
                        htmlFor="avatar"
                        className=" bg-PINK w-12 h-12 absolute rounded-full flex items-center justify-center text-BGDARK_700 right-2 bottom-2 cursor-pointer"
                    >
                        <FiCamera className="w-5 h-5"   />
                        <input type="file" id="avatar" className="hidden" />
                    </label>
                </div>

                <div className="w-full">
                    <div className="mb-2">
                        <Input type="text" placeholder="Nome" value="Larissa Peixoto"  />
                    </div>
                    <div className="mb-6">
                        <Input type="email" placeholder="E-mail" value="larissapacavalcante@gmail.com"  />                    
                    </div>
                </div>

                <div className="w-full">
                    <div className="mb-2">
                        <Input type="password" placeholder="Senha atual" value=''  />
                    </div>
                    <Input type="password" placeholder="Nova senha" value='' />
                </div>

                <div className="mt-6">
                    <Button title="Salvar" del={false} />
                </div>
            </main>
        </div>
    )
}