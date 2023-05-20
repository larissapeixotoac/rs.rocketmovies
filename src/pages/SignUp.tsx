import { Title } from "../components/Title"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

export function SignUp() {  
  return (
    <div className="flex h-screen">
      <div className=" mx-40 mt-60 w-[340px]">
        <Title  />

        <h2 className=" text-2xl font-medium my-12">
          Crie sua conta
        </h2>

        <div className="flex flex-col gap-2 mb-6">
          <Input type="text" placeholder='Nome' value='' ></Input>
          <Input type="email" placeholder='E-mail' value='' ></Input>
          <Input type="password" placeholder="Senha" value='' ></Input>
        </div>
        <Button title="Cadastrar" del={false}/>        

          <Link
            to="/"
            className=" text-PINK cursor-pointer flex justify-center items-center mt-11 gap-2"
          >
            <FiArrowLeft  className="w-5 h-5"/>
            Voltar para o login
          </Link>
        

      </div>

      <div className="flex-1 bg-BG_COVER bg-no-repeat bg-center bg-cover">        
      </div>

    </div>
  )
}

