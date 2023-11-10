import styled from "styled-components";

//resetando o PADDING E MARGIN  
export const   Section = styled.section`
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

    @media (min-width: 718px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        background-image: url("https://img.freepik.com/fotos-gratis/emocoes-positivas-close-up-de-jovem-bonito-homem-de-pele-escura-com-penteado-afro-em-camiseta-branca-e-camisa-vermelha-sorrindo-com-dentes-conversando-com-um-amigo-no-smartphone_176420-13009.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: white;
        width: auto;
        height: 420px;

    }

    @media (min-width: 1051px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        background-image: url("https://img.freepik.com/fotos-gratis/emocoes-positivas-close-up-de-jovem-bonito-homem-de-pele-escura-com-penteado-afro-em-camiseta-branca-e-camisa-vermelha-sorrindo-com-dentes-conversando-com-um-amigo-no-smartphone_176420-13009.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: white;
        width: auto;
        height: 625px;

    }

`
// Texto para o fundo da imagem
export const TituloImagem = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
    font-size: 22px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    color: #354DB5;

`

//Section do Corpo da Home
export const SectionCorpoHome = styled.section`
    display: flex;
    margin: 25px 0;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`

//H1 para ser o titulo da Home
export const TituloD = styled.h2`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 25px 0px 15px 0px;
    padding: 10px;
    font-size: 24px;
    color: #006666;
`
//Section para os paragrafos
export const Sectionparagrafo = styled.section`
    display: flex;
    justify-content: center;
    text-align:center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns:50% 25% ;
       
    }
    
`
//Criando um contaneir que vai ser usado na tela de no minino 888px, para distanciar as colunas
export const ContainerParagrafo = styled.div`
        padding:4.5em ;
        margin-right: 15px;
`
//Paragrafo que vai na home
export const Paragrafo = styled.p`
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 15px 5px;
    

`

//Imagem que vai na home
export const ImgHome = styled.div`
    width: 200px;
    height: 200px;
    background-image: url("https://st3.depositphotos.com/7507140/37032/v/450/depositphotos_370328048-stock-illustration-icon-for-tow-truck-or.jpg") ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;

    @media (min-width: 867px){
        width: 350px;
    height: 400px;
    background-image: url("https://st3.depositphotos.com/7507140/37032/v/450/depositphotos_370328048-stock-illustration-icon-for-tow-truck-or.jpg") ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    }
  
`

//Botao para inicar o atendimento da pagina home
export const BtnAtendimento = styled.button`
    border: none;
    color: white;
    padding: 18px;
    font-size: 16px;
    margin-top:25px;
    border-radius: 20px;
    background-color:#008080;
    width: 125px;
    font-size:16px;
    font-family: Arial, Helvetica, sans-serif;
    @media (min-width: 867px){
        border: none;
        color: white;
        padding: 18px;
        font-size: 18px;
        margin-top:15px;
        border-radius: 20px;
        background-color:#008080;
        width: 250px;
        font-family: Arial, Helvetica, sans-serif;
    }
`

//Link para navegar entre a pagina atraves do "BtnAtendimento"
export const LinkButton = styled.a`
     color: white;
    display: flex;
    justify-content: center;
    font-size: 18px;
    text-decoration: none;
`

//Section para o envio de dados da pagina inicial
export const DivDadoInicial = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    text-align: center;
    align-items: center;
`

//input para o usuario digitar seu login
export const Input = styled.input`
    margin-top: 100px;
    width: 200px;
    height: 60px;
    padding: 7px; 
    
`



//link para criar um cadastro novo
export const LinkC = styled.a`
    color:#008080 ;
    display: flex;
    justify-content: center;
    font-size: 18px;
    text-decoration: none;
`
//Footer para as paginas
export const Rodape = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 50px;
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

