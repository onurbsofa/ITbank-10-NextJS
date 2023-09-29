import styles from './formularios.module.css';

function ElegirCuenta({cuenta, setCuenta}) {

    const saldoARS = localStorage.getItem('SaldoARS');
    const saldoUSD = localStorage.getItem('SaldoUSD');

    return ( 
        <select className={styles.select} onChange={(e) => setCuenta(e.target.value)} value={cuenta}>
            <option className={styles.option} value="ARS">Caja de Ahorro ARS: ${parseFloat(saldoARS).toFixed(2)}</option>
            <option className={styles.option} value="USD">Caja de Ahorro USD: ${parseFloat(saldoUSD).toFixed(2)}</option>
        </select>
     );
}

export default ElegirCuenta;