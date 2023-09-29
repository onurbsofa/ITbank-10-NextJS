import Link from 'next/link';
import phone from "../../../assets/phone.png";
import mail from "../../../assets/mail.png";
import whatsapp from "../../../assets/whatsapp.png";
import styles from "../../elem_globales/pieDePagina.module.css"

function Contactos() {
    return ( 
        <li className={styles.contacto}>
            <Link className={styles.contactoLink} href="./PoliticasDePrivacidad">Politicas de privacidad</Link>
            <br />
            <Link className={styles.contactoLink} href="./TerminosYCondiciones">Términos y Condiciones</Link>
            <br />
            <h3>Contacto</h3>
            <ul>
                <li>
                <img src={mail} alt="mail" />
                <a target="_blank" href="mailto:itbank@gmail.com" className="mail">itbank@gmail.com</a>
                </li>
                <li>
                <img src={whatsapp} alt="whatsapp" />
                <a target="_blank" href="https://api.whatsapp.com/send?phone=" className="whatsapp">+54 9 11 1234-5678</a>
                </li>
                <li>
                <img src={phone} alt="telefono" />
                <a target="_blank" href="tel:" className="phone">+54 9 11 1234-5678</a>
                </li>
            </ul>
        </li>
     );
}

export default Contactos;