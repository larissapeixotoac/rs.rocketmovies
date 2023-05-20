import { Link } from 'react-router-dom'

import { Input } from './Input'

export function Header() {
    return (
        <div className='flex justify-between items-center w-screen px-28 py-[25px] border-b border-[#3E3B47]'>
            <h1 className=' text-PINK font-bold text-2xl mr-16'>
                RocketMovies
            </h1>
            <div className='flex-1'>
                <Input type="text" placeholder="Pesquisar pelo título" value="" />
            </div>
            <div className='flex ml-16 gap-3'>
                <div className='flex flex-col items-end py-4'>
                    <Link 
                        to="/profile"
                        className=' font-bold text-sm'
                    >
                        Larissa Peixoto
                    </Link>
                    <a 
                        href="#"
                        className='text-sm text-GRAY_100'
                    >
                        sair
                    </a>
                </div>
                <Link to="/profile">
                    <img
                        src="https://github.com/larissapeixotoac.png"
                        alt="Foto do usuário"
                        className=' w-16 h-16 rounded-full'
                    />
                </Link>
            </div>
        </div>
    )
}