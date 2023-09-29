import logo from "./ITBANK.svg";
import styles from '../../elem_globales/encabezado.module.css';

function Logo() {
    
    return ( 
        <img className={styles.logo} src={logo} alt="Logo" />
     );
}

export default Logo;