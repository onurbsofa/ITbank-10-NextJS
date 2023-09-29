import Link from "next/link";
import styles from "../../elem_globales/pieDePagina.module.css"

function LinksFooter() {
    return ( 
        <li>
            <ul className={styles.nav}>
                <li className={styles.navLI}>
                    <Link className={styles.navLink} href="./">Inicio</Link>
                </li>
                <li className={styles.navLI}>
                    <Link className={styles.navLink} href="./Cuentas">Cuentas</Link>
                </li>
                <li className={styles.navLI}>
                    <Link className={styles.navLink} href="./Transferencias">Transferencias</Link>
                </li>
                <li className={styles.navLI}>
                    <Link className={styles.navLink} href="./Pagos">Pagos</Link>
                </li>
                <li className={styles.navLI}>
                    <Link className={styles.navLink} href="./Prestamos">Prestamos</Link>
                </li>
                <li className={styles.navLI}>
                    <Link className={styles.navLink} href="./Ayuda">Ayuda</Link>
                </li>
            </ul>
        </li>
     );
}

export default LinksFooter;