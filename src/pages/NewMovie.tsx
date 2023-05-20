import { Back } from "../components/Back"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { NewTag } from "../components/NewTag"

export function NewMovie() {
    return (
        <div className="w-screen h-full flex flex-col items-center">
            <Header />

            <div className=" pt-10">
                <Back   />

                <div className="w-[1137px] overflow-y-auto h-[78vh] pr-2" >
                    <h1 className=" font-medium text-4xl mb-10">
                        Novo Filme
                    </h1>

                    <div className="flex justify-between gap-10 mb-10 ">
                        <div className="flex-1">
                            <Input type="text" placeholder="Título" value=''  />
                        </div>
                        <div className="flex-1">
                            <Input type="number" placeholder="Sua nota (de 0 a 5)" value=''  />
                        </div>
                    </div>

                    <textarea                
                        placeholder="Observações"   
                        className="bg-BGDARK_800 rounded-[10px] px-4 py-4 w-full h-64 resize-none placeholder:text-GRAY_100 placeholder:font-ff_secondary mb-10"
                    />

                    <h2 className=" text-xl text-GRAY_50 mb-6">
                        Marcadores
                    </h2>

                    <div className="flex flex-wrap gap-6 mb-10 bg-BLACK rounded-lg px-4 py-4">
                        <NewTag value="Ação" isnew={false}/>
                        
                        <NewTag value='' isnew />
                    </div>

                    <div
                        className="flex gap-10"
                    >
                        <Button title="Excluir filme" del ></Button>
                        <Button title="Salvar alterações" del={false}></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}