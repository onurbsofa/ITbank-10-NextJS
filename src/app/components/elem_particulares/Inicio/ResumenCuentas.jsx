import { useEffect } from 'react';
import styles from './inicio.module.css';
import { Link } from 'react-router-dom';

function ResumenCuentas({actualizarSaldo, setActualizarSaldo}) {
    
    const saldoUSD = localStorage.getItem('SaldoUSD');
    const saldoARS = localStorage.getItem('SaldoARS');
    
    useEffect(() => {
        if (actualizarSaldo) {
            setActualizarSaldo(false);
        }
    }, [actualizarSaldo])

    return (
        <div className={styles.cuentas}>
            <h2><Link className={styles.cuentasLink} to="/Cuentas">Cuentas</Link></h2>
            <div className={styles.saldos}>
                <Link className={styles.cuentasLink} to="/Cuentas/USD">Caja de Ahorro USD: <br/> ${parseFloat(saldoUSD).toFixed(2)}</Link>
                <Link className={styles.cuentasLink} to="/Cuentas/ARS">Caja de Ahorro ARS: <br/> ${parseFloat(saldoARS).toFixed(2)}</Link>                
            </div>
        </div>        
     );
}

export default ResumenCuentas;