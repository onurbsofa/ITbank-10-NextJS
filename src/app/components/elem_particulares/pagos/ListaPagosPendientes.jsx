import { useEffect, useState } from 'react';
import FilaPagosPendientes from './FilaPagosPendientes';
import styles from "./pagos.module.css";
import movimientoSaldo from '../../elem_globales/handleSaldos';

function ListaPagosPendientes({cuenta}) {

    const deudas = JSON.parse(localStorage.getItem(`PagosPendientes${cuenta}`));

    const [pagosSeleccionados, setPagosSeleccionados] = useState([]);
    const [total, setTotal] = useState(0);

    let deudasPendientes = [
        <li>
            <ul className={styles.cabeceraDeudas}>
                <li className={styles.descripcionDeuda}>Descripcion:</li>
                <li className={styles.importeDeuda}>Importe:</li>
                <li className={styles.vencimientoDeuda}>Vencimiento:</li>
            </ul>
        </li>
    ];

    deudas.forEach(deuda => {
        const id = deuda.fecha_emision + deuda.fecha_vencimiento;
        deudasPendientes.push(<FilaPagosPendientes id={id} deuda={deuda} pagosSeleccionados={pagosSeleccionados} setPagosSeleccionados={setPagosSeleccionados}/>)
    });

    useEffect(() => {
        setTotal(0);        
        pagosSeleccionados.forEach(id => {
            const deuda = deudas.find(deuda => deuda.fecha_emision + deuda.fecha_vencimiento === id);
            setTotal(total => total + parseFloat(deuda.monto));
        });        
    }, [pagosSeleccionados]);

    const pagarTotal = () => {
        if (confirm(`¿Esta seguro que desea pagar $${total}?`)){
            let nuevosPagosPendientes = []

            deudas.forEach(deuda => {
                if (!pagosSeleccionados.includes(deuda.fecha_emision + deuda.fecha_vencimiento)){
                    nuevosPagosPendientes.push(deuda);
                } else {
                    movimientoSaldo(cuenta, ("Pago de " + deuda.descripcion), -deuda.monto);
                }
            });
            localStorage.setItem(`PagosPendientes${cuenta}`, JSON.stringify(nuevosPagosPendientes));
            setPagosSeleccionados([]);
        } else {
            alert("Pago Cancelado.");
        }
    }

    return ( 
        <>
            <ul className={styles.listaDeudas}>
                {deudasPendientes.length > 1 ? deudasPendientes : <h3>No hay deudas pendientes, ¡PROBA PEDIR UN PRESTAMO Y PAGARLO!</h3>}
                <div className={styles.totales}>
                    <h3>Total Seleccionado: $ {parseFloat(total).toFixed(2)}</h3>
                    <button onClick={pagarTotal} className={styles.botonPagarTotal}>Pagar Total</button>
                </div>                
            </ul>
            
        </>
        
     );
}

export default ListaPagosPendientes;