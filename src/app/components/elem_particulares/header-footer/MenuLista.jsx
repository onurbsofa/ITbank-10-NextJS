'use client'
import Link  from "next/link";
import styles from "../../elem_globales/encabezado.module.css";

function MenuLista({className}) {    

    return (
        <>
            <ul className={className}>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="./">Inicio</Link>
                </li>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="./Cuentas">Cuentas</Link>
                </li>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="./Transferencias">Transferencias</Link>
                </li>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="./Pagos">Pagos</Link>
                </li>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="./Prestamos">Prestamos</Link>
                </li>
                <li className={styles.menuLI}>
                    <Link className={styles.menuLink} href="./Ayuda">Ayuda</Link>
                </li>
            </ul>
        </>
    );
}

export default MenuLista;