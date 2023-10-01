import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-social-icons']}>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} size="lg" style={{ color: "#ffffff" }} />
        </a>

        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#ffffff" }} />
        </a>

        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#ffffff" }} />
        </a>
      </div>
      <div className={styles['footer-links']}>
        <Link href="./components/about">Acerca de ITBANK</Link>
        <Link href="./components/contact">Contacto</Link>
        <Link href="./components/faq">Preguntas Frecuentes</Link>
      </div>
      <div className={styles['footer-links']}>
        <Link href="./components/privacy">Política de Privacidad</Link>
        <Link href="./components/terms">Términos y Condiciones</Link>
      </div>
      <div className={styles.copyright}>
        © 2023 ITBank. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;