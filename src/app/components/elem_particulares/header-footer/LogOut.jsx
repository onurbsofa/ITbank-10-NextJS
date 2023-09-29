import styles from "../../elem_globales/encabezado.module.css"

function LogOut({logout}) {  

    return (    
        <>
            <button className={styles.logout} onClick={logout}>Salir</button>    
        </>
    );
}

export default LogOut;