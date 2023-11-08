//Importando os componentes que vou utilizar
import BackgroundImage from "../Componentes/BackgroundImage";
import Footer from "../Componentes/Footer";
 
// Criando a function que vai retornar todos os componentes que criei
function PaginaInicial(){
    return(
        <>
            <BackgroundImage></BackgroundImage>
            <Footer></Footer>
        </>
    )
}

//Exportando minha function para ser utilizado no "App.jxs"
export default PaginaInicial;