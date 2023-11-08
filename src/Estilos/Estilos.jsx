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
    height: 250px;

`
// Texto para o fundo da imagem
export const TituloImagem = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 12px;
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
    padding: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 16px;
    margin-top:25px;
    margin-left: 135px;
    border-radius: 20px;
    background-color:#008080;
    width: 125px;
    font-size:16px;
    font-family: Arial, Helvetica, sans-serif;
`

//link para criar um cadastro novo
export const LinkC = styled.a`
    color:#008080 ;
    display: flex;
    justify-content: center;
    font-size: 12px;
`
//Footer para as paginas
export const Rodape = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 50px;
`

//Titulo para as paginas de confirmação  de dados
export const TituloD = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 25px 0px 15px 0px;
    padding: 10px;
    font-size: 18px;
    color: #006666;
`

//Section para o formulario
export const SecaoForms = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`

//Tag de p para um texto do formulario
export const TextoForms = styled.p`
    color: #006666;
    font-size: 12px;
`

//Input para buscar as informações
export const InputForms = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    padding: 7px;
    margin-top: 10px;
`

//Sectioc para as informações do Cep