//Importando o use state e axios para consumir a API
// import { useState } from "react";
// import axios from "axios";

//Importando os estilos para montar o meu componentes
import { TituloD,Body,SecaoForms,TextoForms,InputForms } from "../Estilos/Estilos";

//Criando a função que vai receber meus estilos para o formulario

function Formulario(){
    return(
        <>
            <Body>
                <TituloD>Confirme Sua Identidade</TituloD>
                <SecaoForms>
                    <TextoForms>Digite o numero da apolice: </TextoForms>
                     <InputForms placeholder="Digite o numero da apolice"></InputForms>
                </SecaoForms>
            </Body>
        </>
    )
}

//Exportando meu formulario para ser usado na pagina "ConfirmaçãoIdentidade.jsx"
export default Formulario