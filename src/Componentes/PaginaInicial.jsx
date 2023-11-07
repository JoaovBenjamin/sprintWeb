import { Divimg,TituloImagem,Body,SectionImagem,Input,BtnEnviarDados,DivDadoInicial } from "./Estilos"

function PaginaInicial(){

    return(
        <>
        <Body>
            <SectionImagem>
                <Divimg>
                    <TituloImagem>Seja bem-vindo ao novo atendimento Porto Guinchos</TituloImagem>
                </Divimg>
                <DivDadoInicial>
                    <Input placeholder="Digite seu usuario"></Input>
                    <BtnEnviarDados>Enviar</BtnEnviarDados>
                </DivDadoInicial>    
            </SectionImagem>
        </Body> 
        </>
    )
}


export default PaginaInicial