import Link from "next/link";
import styles from "./encabezado.module.css";

function MenuLista({isOpen}) {    

    let claseMenu = isOpen ? styles.menuAbierto : styles.menu;

    return (
        <>
            <ul className={claseMenu}>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="/">Inicio</Link>
                </li>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="/cuentas">Cuentas</Link>
                </li>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="/Transferencias">Transferencias</Link>
                </li>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="/Pagos">Pagos</Link>
                </li>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="/Prestamos">Prestamos</Link>
                </li>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="/conversor">Conversor</Link>
                </li>
            </ul>
        </>
    );
}

export default MenuLista;