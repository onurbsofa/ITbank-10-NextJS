import movimientoSaldo from "../../elem_globales/handleSaldos";
import agregarCuotasPrestamo from "./handleCuotas";
import styles from './formularios.module.css';

function BotonEnviar({texto, monto, setMonto, cuenta, CVU, setCVU, plazo, setPlazo, monto_cuota}) {

    const transaccion = () => {
    
        let descripcion = '';

        if (texto == 'Transferir') {
            descripcion = `Transferencia a CVU ${CVU}`;
        } else if (texto == 'Pedir Prestamo') {
            descripcion = `Prestamo en ${cuenta == "ARS" ? 'Pesos' : 'Dolares'} a ${plazo} meses`;
        }

        movimientoSaldo(cuenta, descripcion, (texto == 'Transferir' ? -monto : monto))    
    }

    const verificar = () => {        
        if (monto <= 0) {
            alert('Ingrese un monto valido');
            return;
        } else if (texto == 'Transferir') {
            if (CVU == '') {
                alert('Ingrese un CVU valido');
                return;
            }
            if (confirm(`Esta seguro que desea enviar $${monto} ${cuenta == "ARS" ? 'Pesos' : 'Dolares'} desde su cuenta Caja de Ahorro ${cuenta} al CVU ${CVU}?`)){
                transaccion();
                setCVU('');
                setMonto(0)
                alert('Transferencia realizada con exito');
            } else {
                alert('Transferencia cancelada');
            }
            
        } else if (texto == 'Pedir Prestamo') {
            if (confirm(`Esta seguro que desea solicitar un prestamo en ${cuenta == "ARS" ? 'Pesos' : 'Dolares'} de $${monto} a ${plazo} meses?`)){
                transaccion();
                agregarCuotasPrestamo(monto_cuota, plazo, cuenta);
                setPlazo(0)
                setMonto(0)
                alert('Prestamo solicitado con exito');
            } else {
                alert('Prestamo cancelado');
            }            
        }
           
    }

    return ( 
        <button className={styles.boton} onClick={verificar}>{texto}</button>
     );
}

export default BotonEnviar;