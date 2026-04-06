// Imagens
import Sigma  from "../assets/sigma.webp";
import Paul  from "../assets/LateralDireita/PaulAtreides.webp";
import Joker  from "../assets/LateralDireita/joker.jpg";
import Batman  from "../assets/LateralDireita/batman.jpg";
import Neil  from "../assets/LateralDireita/NeilArmstrong.jpg";
import Nasa  from "../assets/nasa.jpg";
import Gabau  from "../assets/LateralDireita/Gabau.jpg";
import Proa  from "../assets/LateralDireita/proa.png";
import VermeAreia  from "../assets/LateralDireita/vermeAreia.jpg";
import Chiquinho from "../assets/Principal/chiquinhoGaviao.jpg";
import Gru from "../assets/Principal/gru.webp";

// Ícones
import { PiPaperPlaneTiltBold } from "react-icons/pi";

// Estilos
import "./LateralDireita.css";

export default function LateralEsquerda(){
    return (
        <section className="LateralDireita">
            <div className="Perfis">
                <div className="Perfil">
                    <img src={ Sigma } alt="Foto de perfil" className="FotoPerfil"/>
                    <div className="InfosPerfil">
                        <div className="NomesPerfil">
                            <span className="ArrobaPerfil">Guilherme_lindo</span>
                            <span className="NomePerfil">G Brito</span>
                        </div>
                        <div>
                            <span className="MudarPerfil">Mudar</span>
                        </div>
                    </div>
                </div>    
                <div className="SugestoesParaVocePerfis">
                    <div className="SugestoesParaVoceDivisoria">
                        <span>Sugestões para você</span>
                        <span className="VerTudo">Ver tudo</span>
                    </div>

                    <div className="Perfil">
                        <img src={ Paul } alt="Foto de perfil" className="FotoPerfil"/>
                        <div className="InfosPerfil">
                            <div className="NomesPerfil">
                                <span className="ArrobaPerfil">Paul Atreides</span>
                                <span className="SeguemEssePerfil"><img src={ VermeAreia } alt="Foto perfil" className="SeguemEssePerfilFoto"/>Seguido(a) por Verme de Areia</span>
                            </div>
                            <div>
                                <span className="MudarPerfil">Seguir</span>
                            </div>
                        </div>
                    </div>
                    <div className="Perfil">
                        <img src={ Joker } alt="Foto de perfil" className="FotoPerfil"/>
                        <div className="InfosPerfil">
                            <div className="NomesPerfil">
                                <span className="ArrobaPerfil">CoringaHaHaHa</span>
                                <span className="SeguemEssePerfil"><img src={ Batman } alt="Foto perfil" className="SeguemEssePerfilFoto"/>Seguido(a) por Batman</span>
                            </div>
                            <div>
                                <span className="MudarPerfil">Seguir</span>
                            </div>
                        </div>
                    </div>
                    <div className="Perfil">
                        <img src={ Neil } alt="Foto de perfil" className="FotoPerfil"/>
                        <div className="InfosPerfil">
                            <div className="NomesPerfil">
                                <span className="ArrobaPerfil">Neil Armstrong</span>
                                <span className="SeguemEssePerfil"><img src={ Nasa } alt="Foto perfil" className="SeguemEssePerfilFoto"/>Seguido(a) por Nasa</span>
                            </div>
                            <div>
                                <span className="MudarPerfil">Seguir</span>
                            </div>
                        </div>
                    </div>
                    <div className="Perfil">
                        <img src={ Batman } alt="Foto de perfil" className="FotoPerfil"/>
                        <div className="InfosPerfil">
                            <div className="NomesPerfil">
                                <span className="ArrobaPerfil">Batman</span>
                                <span className="SeguemEssePerfil"><img src={ Joker } alt="Foto perfil" className="SeguemEssePerfilFoto"/>Seguido(a) por CoringaHaHaHa</span>
                            </div>
                            <div>
                                <span className="MudarPerfil">Seguir</span>
                            </div>
                        </div>
                    </div>
                    <div className="Perfil">
                        <img src={ Gabau } alt="Foto de perfil" className="FotoPerfil"/>
                        <div className="InfosPerfil">
                            <div className="NomesPerfil">
                                <span className="ArrobaPerfil">Gabau</span>
                                <span className="SeguemEssePerfil"><img src={ Proa } alt="Foto perfil" className="SeguemEssePerfilFoto"/>Seguido(a) por Instituto Proa</span>
                            </div>
                            <div>
                                <span className="MudarPerfil">Seguir</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="InfosGerais">
                        <span className="Info">Sobre</span>
                        <span> • </span>
                        <span className="Info">Ajuda</span>
                        <span> • </span>
                        <span className="Info"> Imprensa </span>
                        <span> • </span>
                        <span className="Info"> API </span>
                        <span> • </span>
                        <span className="Info"> Carreiras </span>
                        <span> • </span>
                        <span className="Info"> Privacidade </span>
                        <span> • </span>
                        <span className="Info"> Termos </span>
                        <span> • </span>
                        <span className="Info"> Localizações </span>
                        <span> • </span>
                        <span className="Info"> Idioma </span>
                        <span> • </span>
                        <span className="Info"> Meta verified </span>
                        <p>© 2026 Instagram from Meta</p>
                    </div>
                </div>
            </div>

            <div className="Direct">
                <div className="DirectInfosEsquerda">
                    <PiPaperPlaneTiltBold size={26}/>
                    <span style={{paddingLeft: "0.5rem", fontWeight: "bold"}}>Mensagens</span>
                </div>
                <div className="DirectImagensDireita">
                    <img src={ Chiquinho } className="DirectImagem" style={{right: "15px"}}/>
                    <img src={ Gru } className="DirectImagem" style={{right: "38px"}}/>
                    <img src={ Neil } className="DirectImagem" style={{right: "58px"}}/>
                </div>
            </div>
        </section>
    )
}