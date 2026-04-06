// Ícones
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { MdOutlineMoreHoriz } from "react-icons/md";

// Imagens - Perfil
import Sigma from "../assets/sigma.webp";
import Chiquinho from "../assets/Principal/chiquinhoGaviao.jpg";
import Nasa  from "../assets/nasa.jpg";
import Gru from "../assets/Principal/gru.webp";
import Sagui from "../assets/Principal/sagui.png";
import Einsten from "../assets/Principal/albert.jpg";
import Loos from "../assets/Principal/Pedroloos.jpg";
import Virginia from "../assets/Principal/virginia.jpg";
import Choquei from "../assets/Principal/choquei.jpg";
import Cariani from "../assets/Principal/cariri.jpg";
import Ramon from "../assets/Principal/dino.jpg";
import Dicaprio from "../assets/Principal/leozito.jpg";
import Bjordan from "../assets/Principal/bjordan.jpg";
import Phineas from "../assets/Principal/phineas.webp";
import Machado from "../assets/Principal/machado.png";
import Castanhari from "../assets/Principal/castanhari.jpg";
import Djavan from "../assets/Principal/djavan.jpg";
import Peewee from "../assets/Principal/peewee.jpg";
// Imagens - Posts
import FrangoAssado from "../assets/Principal/frangoAssado.jpg";
import PostGru from "../assets/Principal/postGru.jpg";
import PostJordan from "../assets/Principal/postJordan.webp";
import PostChoquei from "../assets/Principal/postChoquei.png";
import PostPeewee from "../assets/Principal/postPeewee.jpg";
import sixSeven from "../assets/Principal/67.jpg";

// Ícones
import { FaRegHeart } from "react-icons/fa6";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa6";
import { RxLoop } from "react-icons/rx";
import { FaRegBookmark } from "react-icons/fa6";

// Estilos
import "./Principal.css";

// Scripts
import { useState } from 'react';

export default function Principal(){
    // Variável "index" com um setter e valor inicial 0
    const [index, setIndex] = useState(0);
    // Quantidade de blocos de stories
    const totalSlides = 3;

    // Funcionalidade do botão direito
    const proximo = () => {
        if (index < totalSlides - 1) {
            // Mudança de estado do index -> todos os componentes são re-renderizados novamente
            setIndex(index + 1);
        }
    };

    // Funcionalidade do botão esquerdo
    const anterior = () => {
        if (index > 0) {
            // Mudança de estado do index -> todos os componentes são re-renderizados novamente
            setIndex(index - 1);
        }
    };

    return (
        <div className="Principal">
            <section className="Stories" >
                <div 
                    className="StoriesPerfis" 
                    id="stories" 
                    style={{
                        transform: `translateX(${index * -100}%)`
                    }}
                >
                    <div className="FotosStories">
                        <div className="Story">
                            <img src={ Sigma } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">Guilherme_...</span>
                        </div>
                        <div className="Story">
                            <img src={ Nasa } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">Nasa</span>
                        </div>
                        <div className="Story">
                            <img src={ Chiquinho } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">ChiquinhoG...</span>
                        </div>
                        <div className="Story">
                            <img src={ Sagui } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">AtléticaSa...</span>
                        </div>
                        <div className="Story">
                            <img src={ Einsten } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">Albert_E.</span>
                        </div>
                        <div className="Story">
                            <img src={ Gru } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">Gru</span>
                        </div>
                    </div>
                    <div className="FotosStories">
                        <div className="Story">
                            <img src={ Loos } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">Pedroloos</span>
                        </div>
                        <div className="Story">
                            <img src={ Choquei } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">choquei</span>
                        </div>
                        <div className="Story">
                            <img src={ Virginia } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">virginia</span>
                        </div>
                        <div className="Story">
                            <img src={ Cariani } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">renato_ca...</span>
                        </div>
                        <div className="Story">
                            <img src={ Ramon } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">ramondino...</span>
                        </div>
                        <div className="Story">
                            <img src={ Dicaprio } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">leonardod...</span>
                        </div>
                    </div>
                    <div className="FotosStories">
                        <div className="Story">
                            <img src={ Bjordan } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">michaelbjo</span>
                        </div>
                        <div className="Story">
                            <img src={ Phineas } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">Phineas</span>
                        </div>
                        <div className="Story">
                            <img src={ Machado } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">AssisMacha...</span>
                        </div>
                        <div className="Story">
                            <img src={ Djavan } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">Guilherme_...</span>
                        </div>
                        <div className="Story">
                            <img src={ Castanhari } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">Guilherme_...</span>
                        </div>
                        <div className="Story">
                            <img src={ Peewee } alt="Foto de perfil" className="FotoStory"/>
                            <span className="NomeStory">Guilherme_...</span>
                        </div>
                    </div>
                </div>
                <button className="StoriesBotaoEsquerdo" id="botaoEsquerdo" onClick={anterior} style={{display: index === 0 ? "none": "block"}}><FaCircleChevronLeft size={20} color="white"/></button>
                <button className="StoriesBotaoDireito" id="botaoDireito" onClick={proximo} style={{display: index === totalSlides - 1 ? "none": "block"}}><FaCircleChevronRight size={20} color="white"/></button>
            </section>

            <section className="Feed">
                <section className="Post">
                    <div className="Post_header">
                        <img src={Chiquinho} alt="Foto de perfil" className="Foto_perfil"/>
                        <div className="InfosPerfilPost">
                            <div className="NomesPerfilPost">
                                <span className="ArrobaPerfilPost">ChiquinhoGaviao <span className="HoraPostagem">• 20 h</span></span>
                                <span className="NomePerfilPost">Chico Gavião</span>
                            </div>
                            <div>
                                <button><MdOutlineMoreHoriz size={25}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="Conteudo_post">
                        <img src={FrangoAssado} alt="Frango assado"/>
                    </div>
                    <div className="Post_footer">
                        <div className="AcoesFooter">
                            <div className="AcoesFooterEsquerda">
                                <div>
                                    <button><FaRegHeart size={25}/></button>
                                    <span>10,7 mil</span>
                                </div>
                                <div>
                                    <button><FaRegCommentDots size={25}/></button>
                                    <span>136</span>
                                </div>
                                <div>
                                    <button><RxLoop size={25}/></button>
                                    <span>98</span>
                                </div>
                                <button><PiPaperPlaneTiltBold size={25}/></button>
                            </div>
                            <div>
                                <button><FaRegBookmark size={23}/></button>
                            </div>
                        </div>
                        <div>
                            <span className="NomePerfilFooterPost">ChiquinhoGaviao </span>
                            <span className="TextoPost">
                                Comendo um frango assadinho hoje aki em casa, só faltou o feijão pra fechar bem essa sexta-feira santa....😞
                            </span>
                            <p className="Hashtags">
                                #Almosso #Desejo #FeijãoComChicken
                            </p>
                        </div>
                    </div>
                </section>
                <section className="Post">
                    <div className="Post_header">
                        <img src={Bjordan} alt="Foto de perfil" className="Foto_perfil"/>
                        <div className="InfosPerfilPost">
                            <div className="NomesPerfilPost">
                                <span className="ArrobaPerfilPost">MichaelBjo <span className="HoraPostagem">• 1 semana atrás</span></span>
                                <span className="NomePerfilPost">Michael B. jordan</span>
                            </div>
                            <div>
                                <button><MdOutlineMoreHoriz size={25}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="Conteudo_post">
                        <img src={PostJordan} alt="Michael B. Jordan no Oscar 2026"/>
                    </div>
                    <div className="Post_footer">
                        <div className="AcoesFooter">
                            <div className="AcoesFooterEsquerda">
                                <div>
                                    <button><FaRegHeart size={25}/></button>
                                    <span>1,1 mi</span>
                                </div>
                                <div>
                                    <button><FaRegCommentDots size={25}/></button>
                                    <span>50,10 mil</span>
                                </div>
                                <div>
                                    <button><RxLoop size={25}/></button>
                                    <span>2,03 mil</span>
                                </div>
                                <button><PiPaperPlaneTiltBold size={25}/></button>
                            </div>
                            <div>
                                <button><FaRegBookmark size={23}/></button>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>MichaelBjo </span>
                            <span className="TextoPost">
                                Salve tropa, vim aqui resgatar meu prêmio. Obrigado <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>@Guilherme_lindo</span> por tudo que você fez por mim, tu é zika mlk, voa pae!
                            </span>
                        </div>
                    </div>
                </section>
                <section className="Post">
                    <div className="Post_header">
                        <img src={Gru} alt="Foto de perfil" className="Foto_perfil"/>
                        <div className="InfosPerfilPost">
                            <div className="NomesPerfilPost">
                                <span className="ArrobaPerfilPost">Gru <span className="HoraPostagem">• 1 h</span></span>
                                <span className="NomePerfilPost">Gru</span>
                            </div>
                            <div>
                                <button><MdOutlineMoreHoriz size={25}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="Conteudo_post">
                        <img src={PostGru} alt="Foto do Gru roubando a lua"/>
                    </div>
                    <div className="Post_footer">
                        <div className="AcoesFooter">
                            <div className="AcoesFooterEsquerda">
                                <div>
                                    <button><FaRegHeart size={25}/></button>
                                    <span>6,7 mil</span>
                                </div>
                                <div>
                                    <button><FaRegCommentDots size={25}/></button>
                                    <span>67</span>
                                </div>
                                <div>
                                    <button><RxLoop size={25}/></button>
                                    <span>67</span>
                                </div>
                                <button><PiPaperPlaneTiltBold size={25}/></button>
                            </div>
                            <div>
                                <button><FaRegBookmark size={23}/></button>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Gru </span>
                            <span className="TextoPost">
                                Só relembrando o momento mais poggers da minha vida, 🎩+1000 OBS: Vai sem qualidade msm, os minions n sabem exportar imagens em 4K
                            </span>
                            <p className="Hashtags">
                                #GruTheBest #Aura
                            </p>
                        </div>
                    </div>
                </section>                
                <section className="Post">
                    <div className="Post_header">
                        <img src={Choquei} alt="Foto de perfil" className="Foto_perfil"/>
                        <div className="InfosPerfilPost">
                            <div className="NomesPerfilPost">
                                <span className="ArrobaPerfilPost">choquei <span className="HoraPostagem">• 30 s</span></span>
                                <span className="NomePerfilPost">Choquei</span>
                            </div>
                            <div>
                                <button><MdOutlineMoreHoriz size={25}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="Conteudo_post">
                        <img src={PostChoquei} alt="Guilherme Brito convocado para seleção brasileira"/>
                    </div>
                    <div className="Post_footer">
                        <div className="AcoesFooter">
                            <div className="AcoesFooterEsquerda">
                                <div>
                                    <button><FaRegHeart size={25}/></button>
                                    <span>5,10 bi</span>
                                </div>
                                <div>
                                    <button><FaRegCommentDots size={25}/></button>
                                    <span>49 mi</span>
                                </div>
                                <div>
                                    <button><RxLoop size={25}/></button>
                                    <span>2,3 bi</span>
                                </div>
                                <button><PiPaperPlaneTiltBold size={25}/></button>
                            </div>
                            <div>
                                <button><FaRegBookmark size={23}/></button>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Choquei </span>
                            <span className="TextoPost">
                                O estudante Guilherme Brito dos Santos Lindo Brito Alfa foi oficialmente escalado para a seleção brasileira de 2026,
                                tal escolha de Ancelotti deixa a questão: "Será que essa é uma ótima ou uma boa escolha?"
                            </span>
                            <p className="Hashtags">
                                #GuilhermeTop #Guiguizika #TheGoatReturns #SixSeven
                            </p>
                        </div>
                    </div>
                </section>                
                <section className="Post">
                    <div className="Post_header">
                        <img src={Peewee} alt="Foto de perfil" className="Foto_perfil"/>
                        <div className="InfosPerfilPost">
                            <div className="NomesPerfilPost">
                                <span className="ArrobaPerfilPost">canalpeewee <span className="HoraPostagem">• 3 dias</span></span>
                                <span className="NomePerfilPost">Canal PeeWee</span>
                            </div>
                            <div>
                                <button><MdOutlineMoreHoriz size={25}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="Conteudo_post">
                        <img src={PostPeewee} alt="Primeiro pôster de Duna parte 3"/>
                    </div>
                    <div className="Post_footer">
                        <div className="AcoesFooter">
                            <div className="AcoesFooterEsquerda">
                                <div>
                                    <button><FaRegHeart size={25}/></button>
                                    <span>461,23 mil</span>
                                </div>
                                <div>
                                    <button><FaRegCommentDots size={25}/></button>
                                    <span>34 mil</span>
                                </div>
                                <div>
                                    <button><RxLoop size={25}/></button>
                                    <span>10,13 mil</span>
                                </div>
                                <button><PiPaperPlaneTiltBold size={25}/></button>
                            </div>
                            <div>
                                <button><FaRegBookmark size={23}/></button>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Canal PeeWee </span>
                            <span className="TextoPost">
                                Primeiro pôster de "Duna Parte 3", o filme tá previsto para ser lançado nos cinemas em 18 de Dezembro, estão ansiosos? 
                            </span>
                            <p className="Hashtags">
                                #Duna #Filme #Cinema #PaulGOAT
                            </p>
                        </div>
                    </div>
                </section>                
                <section className="Post">
                    <div className="Post_header">
                        <img src={Nasa} alt="Foto de perfil" className="Foto_perfil"/>
                        <div className="InfosPerfilPost">
                            <div className="NomesPerfilPost">
                                <span className="ArrobaPerfilPost">Nasa <span className="HoraPostagem">• 67 dias</span></span>
                                <span className="NomePerfilPost">Nasa</span>
                            </div>
                            <div>
                                <button><MdOutlineMoreHoriz size={25}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="Conteudo_post">
                        <img src={sixSeven} alt="Pôster do six seven(67)"/>
                    </div>
                    <div className="Post_footer">
                        <div className="AcoesFooter">
                            <div className="AcoesFooterEsquerda">
                                <div>
                                    <button><FaRegHeart size={25}/></button>
                                    <span>67,67 mil</span>
                                </div>
                                <div>
                                    <button><FaRegCommentDots size={25}/></button>
                                    <span>67 mil</span>
                                </div>
                                <div>
                                    <button><RxLoop size={25}/></button>
                                    <span>67</span>
                                </div>
                                <button><PiPaperPlaneTiltBold size={25}/></button>
                            </div>
                            <div>
                                <button><FaRegBookmark size={23}/></button>
                            </div>
                        </div>
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Nasa </span>
                            <span className="TextoPost">
                                Happy 67(Six-seven) day's, we wish that this day be an amazing day for everyone. HAPPY SIX-SEVEN DAAAAAAY'S!!!.
                            </span>
                            <p className="Hashtags">
                                #67 #sixSeven #SiixxSevveen #67676767
                            </p>
                        </div>
                    </div>
                </section>                              
            </section>
        </div>
    )
}