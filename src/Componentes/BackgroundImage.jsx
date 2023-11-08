//Importando as estilizações que vou utilizar para criar meu componente
import { Divimg,TituloImagem,Body,SectionImagem,Input,BtnEnviarDados,DivDadoInicial } from "../Estilos/Estilos"

//Criando a function que vai armazenar as minhas estilizaçõees
function BackgroundImage(){

    return(
        <>
        <Body>
            <SectionImagem>
                <Divimg>
                    <TituloImagem>Seja bem-vindo ao novo atendimento Porto Guinchos</TituloImagem>
                </Divimg>
                <DivDadoInicial>
                    <Input placeholder="Digite seu CPF"></Input>
                    <BtnEnviarDados>Iniciar Atendimento</BtnEnviarDados>
                </DivDadoInicial>    
            </SectionImagem>
        </Body> 
        </>
    )
}

//Exportando minha function para ser utilizada na "PaginaInicial.jsx"
export default BackgroundImage