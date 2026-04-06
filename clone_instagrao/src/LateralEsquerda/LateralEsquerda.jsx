// Imagens
import logoInstagram from "../assets/LateralEsquerda/insta.png";
import Sigma  from "../assets/sigma.webp";

// Ícones
import { GoHomeFill } from "react-icons/go";
import { LuSquarePlay } from "react-icons/lu";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

// Estilos
import "./LateralEsquerda.css";

// Scripts
import { useState } from 'react';

export default function LateralEsquerda(){
    const [exibindoTexto, setExibindoTexto] = useState(false);

    const exibirTexto = () => {
        setExibindoTexto(true);
    }

    const removerTexto = () => {
        setExibindoTexto(false);
    }

    return (    
        <div className="LateralEsquerda" onMouseEnter={ exibirTexto } onMouseLeave={ removerTexto }>
            <div className="SobreIconeInstagram">
                <img src={ logoInstagram } alt="Logo do Instagram" className="LogoInstagram"/>
            </div>
            <ul className="OpcoesPaginas"> 
                <div className="SobreIcone">
                    <li><GoHomeFill size={30} color="black"/></li>
                    <span style={{fontWeight: "bold", color: exibindoTexto === true ? "black" : "transparent"}}>Página inicial</span>
                </div>
                <div className="SobreIcone">
                    <li className><LuSquarePlay size={30} color="black"/></li>
                    <span style={{color: exibindoTexto === true ? "black" : "transparent"}}>Reels</span>
                </div>
                <div className="SobreIcone">
                    <li className><PiPaperPlaneTiltBold size={30} color="black"/></li>
                    <span style={{color: exibindoTexto === true ? "black" : "transparent"}}>Mensagens</span>
                </div>
                <div className="SobreIcone">
                    <li className><FaSearch  size={30} color="black"/></li>
                    <span style={{color: exibindoTexto === true ? "black" : "transparent"}}>Pesquisa</span>
                </div>
                <div className="SobreIcone">
                    <li className><FaRegHeart  size={30} color="black"/></li>
                    <span style={{color: exibindoTexto === true ? "black" : "transparent"}}>Notificações</span>
                </div>
                <div className="SobreIcone">
                    <li className><FaPlus size={30} color="black"/></li>
                    <span style={{color: exibindoTexto === true ? "black" : "transparent"}}>Criar</span>
                </div>
                <div className="SobreIcone">
                    <li className><img src={ Sigma } alt="Foto de perfil" className="FotoPerfilLogado"/></li>
                    <span style={{color: exibindoTexto === true ? "black" : "transparent"}}>Perfil</span>
                </div>
            </ul>
            <ul className="OpcoesPaginas">
                <div className="SobreIcone">
                    <li><GiHamburgerMenu size={30} color="black"/></li>
                    <span style={{color: exibindoTexto === true ? "black" : "transparent"}}>Mais</span>
                </div>
                <div className="SobreIcone">
                    <li><FaMeta size={30} color="black"/></li>
                    <span style={{color: exibindoTexto === true ? "black" : "transparent"}}>Também da Meta</span>
                </div>
            </ul>
        </div>
    )
}