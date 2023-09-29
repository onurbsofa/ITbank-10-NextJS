import Encabezado from "../components/elem_globales/Encabezado";
import PieDePagina from "../components/elem_globales/PieDePagina";

function Layout({children}) {
    return ( 
        <>
        <Encabezado/>
        {children}
        <PieDePagina/>
        </>
     );
}

export default Layout;