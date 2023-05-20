import { Title } from "../components/Title"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

import { Link } from "react-router-dom"

export function SignIn() {  
  return (
    <div className="flex h-screen">
      <div className=" mx-40 mt-60 w-[340px]">
        <Title  />

        <h2 className=" text-2xl font-medium my-12">
          Faça seu login
        </h2>

        <div className="flex flex-col gap-2 mb-6">
          <Input type="email" placeholder='E-mail' value='' ></Input>
          <Input type="password" placeholder="Senha" value='' ></Input>
        </div>
        <Button title="Entrar" del={false}/>

        <Link
          to='/register'
          className=" text-PINK flex justify-center mt-11 cursor-pointer"
        >
          Criar conta
        </Link>

      </div>

      <div className="flex-1 bg-BG_COVER bg-no-repeat bg-center bg-cover">        
      </div>

    </div>
  )
}

