import { useEffect } from "react";
import FilaHistorialCuenta from "./FilaHistorialCuenta";
import styles from "./cuentas.module.css";

function HistorialCuenta({Cuenta, ult_5}) {
    
    let filas = [];
    
    const historial = JSON.parse(localStorage.getItem(`HistorialCuenta${Cuenta}`));    
    
    historial.reverse()

    if (ult_5) {
        historial.splice(5);
    }

    historial.forEach(element => {            
        filas.push(<FilaHistorialCuenta elemento={element}/>)
    });

    return ( 
        <ul className={styles.historial}>
            <li>
                <ul className={styles.cabeceraHistorial}>
                    <li className={styles.descripcion}>Descripcion:</li>
                    <li className={styles.cantidad}>Cantidad:</li>
                    <li className={styles.estado}>Estado:</li>
                    <li className={styles.fecha}>Fecha:</li>
                </ul>
            </li>
            {filas.length === 0 ? <li className={styles.filaHistorial}>No hay movimientos</li> : filas}
        </ul>
     );
}

export default HistorialCuenta;