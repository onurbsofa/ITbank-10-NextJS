import GridAccesosRapidos from "./GridAccesosRapidos";
import ResumenCuentas from "./ResumenCuentas";
import styles from "./inicio.module.css";

function InfoInicio({actualizarSaldo, setActualizarSaldo}) {
    return ( 
        <div className={styles.infoInicio}>        
        <ResumenCuentas actualizarSaldo={actualizarSaldo} setActualizarSaldo={setActualizarSaldo}/>
        <GridAccesosRapidos/>
        </div>
     );
}

export default InfoInicio;