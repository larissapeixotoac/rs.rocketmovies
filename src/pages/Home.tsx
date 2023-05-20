import { Header } from "../components/Header"
import { Card } from "../components/Card"

import { Link } from "react-router-dom"

import { FiPlus } from "react-icons/fi"

export function Home() {
    return (
        <div className="flex flex-col h-[85vh]">
            <Header />

            <div className="flex flex-col h-full px-32">
                <div className="flex justify-between mt-12 mb-10">
                    <h1 className=" text-[32px] text-white">
                        Meus filmes
                    </h1>
                    <Link to="/newmovie">
                        <button 
                            type="button"
                            className=" bg-PINK rounded-[10px] text-BGDARK_900 flex items-center px-8 py-4 gap-2"
                        >
                            <FiPlus className="h-5 w-5"/>
                            Adicionar filme
                        </button>
                    </Link>
                </div>
                <main className="flex flex-col gap-6 overflow-y-auto pr-3 pb-5">
                    <Card   />
                    <Card   />
                    <Card   />
                    <Card   />
                </main>
            </div>
        </div>
    )
}