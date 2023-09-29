import LogOut from "../elem_particulares/header-footer/LogOut";
import Logo from "../elem_particulares/header-footer/Logo";
import Menu from "../elem_particulares/header-footer/Menu";
import styles from './encabezado.module.css';

function Encabezado({logout}) {   
    
    return ( 
        <div className={styles.header}>
            <Menu/>
            <Logo/>
            <LogOut logout={logout}/>
        </div>
     );
}

export default Encabezado;