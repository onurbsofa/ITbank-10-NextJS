import styles from "./pagos.module.css";

function FilaPagosPendientes({id, pagosSeleccionados, setPagosSeleccionados, deuda}) {    

    return ( 
        <li id={id}>
            <ul className={styles.filaDeudas}>
                <li className={styles.checkboxDeuda}><input type="checkbox" checked={pagosSeleccionados.includes(id)} onClick={() => {
                    if (pagosSeleccionados.includes(id)){
                        setPagosSeleccionados(pagosSeleccionados.filter((elem_id) => elem_id != id));
                    } else {
                        setPagosSeleccionados([...pagosSeleccionados, id]);
                    }
                    
                }}/></li>
                <li className={styles.descripcionDeuda}>{deuda.descripcion}</li>
                <li className={styles.importeDeuda}>${deuda.monto}</li>
                <li className={styles.vencimientoDeuda}>{deuda.fecha_vencimiento}</li>
                
            </ul>
        </li>
     );
}

export default FilaPagosPendientes;