import HistorialCuenta from "../components/cuentas/HistorialCuenta";
import TituloPagina from "../components/globales/TituloPagina";
import Link from "next/link";
import styles from "../components/cuentas/cuentas.module.css";
import saldos from '../components/cuentas/saldos.json'
import React from 'react'

const page = () => {

    const saldoARS = saldos[0].value;
    const saldoUSD = saldos[1].value;

    return ( 
        <>
            <TituloPagina contenido={'Cuentas'}/>
            <div className={styles.contenedor}>
                <Link href="/cuentas/ARS"className={styles.linkCuenta}>
                    Caja de Ahorro en Pesos: ${saldoARS}          
                </Link>
                <h4>Ultimos 5 Movimientos:</h4>
                <HistorialCuenta Cuenta={'ARS'} ult_5={true}/>
            </div>
            <div className={styles.contenedor}>
                <Link href="/cuentas/USD"className={styles.linkCuenta}>
                    Caja de Ahorro en Dolares: ${saldoUSD}
                </Link>
                <h4>Ultimos 5 Movimientos:</h4>
                <HistorialCuenta Cuenta={'USD'} ult_5={true}/>
            </div>
        </>
     );
}

export default page