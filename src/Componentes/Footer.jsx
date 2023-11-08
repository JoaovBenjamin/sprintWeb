//Importando meus estilos para montar o 
import { Rodape, LinkC } from "../Estilos/Estilos"

//Criando a Function que vai armazenar os meus estilos e criar meu componente
function Footer(){
    return(
        <>
            <Rodape>
                <LinkC target="">Não tem cadastro ?</LinkC>
                <p>Direitos reservado</p>
            </Rodape>
        </>
    )
}


//Exportando meu footer para todas as paginas
export default Footer