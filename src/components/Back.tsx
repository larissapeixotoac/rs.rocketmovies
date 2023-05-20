import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Back() {
    return (
        <Link to="/">
            <a 
                href="#"
                className="flex text-PINK items-center mb-6 gap-2"
            >
                <FiArrowLeft   />
                Voltar
            </a>
        </Link>
)
}