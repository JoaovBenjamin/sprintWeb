import styled from "styled-components";

//resetando o body
export const Body = styled.body`
    margin: 0;
    padding: 0;
`
//seção da imagem
export const SectionImagem = styled.section`
    display:flex ;
    flex-direction: column;
`

// Imagem de fundo para a pagina principal;

export const Divimg = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    background-image: url("https://img.freepik.com/fotos-gratis/emocoes-positivas-close-up-de-jovem-bonito-homem-de-pele-escura-com-penteado-afro-em-camiseta-branca-e-camisa-vermelha-sorrindo-com-dentes-conversando-com-um-amigo-no-smartphone_176420-13009.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    width: auto;
    height: 300px;

`
// Texto para o fundo da imagem
export const TituloImagem = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    color: #354DB5;

`

//Section para o envio de dados da pagina inicial
export const DivDadoInicial = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    text-align: center;
`

//input para o usuario digitar seu login
export const Input = styled.input`
    margin-left: 100px;
    margin-top: 100px;
    width: 200px;
    height: 60px;
    padding: 7px;
    
`

//Botao para enviar os dados da pagina inicial
export const BtnEnviarDados = styled.button`
    border: none;
    color: white;
    padding: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 16px;
    margin-top:25px;
    margin-left: 125px;
    border-radius: 20px;
    background-color:#008080;
    width: 125px;
`
