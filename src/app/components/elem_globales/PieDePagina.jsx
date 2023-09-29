import Contactos from "../elem_particulares/header-footer/Contactos";
import LinksFooter from "../elem_particulares/header-footer/LinksFooter";
import Logo from "../elem_particulares/header-footer/Logo";
import styles from './pieDePagina.module.css';

function Footer() {
    return (
        
          <ul className={styles.footer}>
            <Logo/>            
            <LinksFooter/>            
            <Contactos/>
          </ul>        
    );
    
}

export default Footer;