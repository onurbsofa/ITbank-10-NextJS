import styles from "./inicio.module.css";
import { Link } from "react-router-dom";

function AccesoRapido({pagina}) {
    return ( 
        <li className={styles.elemGrilla}>
            <Link className={styles.link} to={`/${pagina}`}>{pagina}</Link>
        </li>
     );
}

export default AccesoRapido;