import HistorialCuenta from "../../components/cuentas/HistorialCuenta";
import TituloPagina from "../../components/globales/TituloPagina";
import styles from "../../components/cuentas/cuentas.module.css";
import saldos from '../../components/cuentas/saldos.json'

function PagCuentaEspecifica({params}) {    

    const {especifica} = params;
    let saldoCuenta = 0;

    saldos.forEach(element => {
        if (element.name == especifica) {
            saldoCuenta = element.value
        }
    });

    return ( 
        <>
            <TituloPagina contenido={'Caja de Ahorro en ' + (especifica == 'ARS' ? 'Pesos' : 'Dolares')}/>
            <div className={styles.contenedorSinBorde}>
                <h2>Saldo: ${parseFloat(saldoCuenta).toFixed(2)}</h2>
                <h4>Historial de todos los Movimientos:</h4>
                <HistorialCuenta Cuenta={especifica} ult_5={false}/>
            </div>
        </>
     );
}

export default PagCuentaEspecifica;