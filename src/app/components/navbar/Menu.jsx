'use client'
import MenuLista from "./MenuLista";
import { useState, useEffect } from 'react';
import styles from "./encabezado.module.css";
import icono from "../../assets/menu-icon.png"

function Menu() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const handleMenuClick = () => {
        setMenuAbierto(!menuAbierto);
    };

    const handleDocumentClick = (e) => {
        if (menuAbierto) {
            setMenuAbierto(false);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            document.addEventListener('click', handleDocumentClick);
        }, 50);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };               
    }, [menuAbierto]);

    return (
        <>
            <img className={styles.menuIcono} src={icono} alt="Menu" onClick={handleMenuClick} />
            <MenuLista isOpen={menuAbierto}/>
        </>
    );
}

export default Menu;