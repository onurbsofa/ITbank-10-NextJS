import { useEffect, useState } from "react";
import SelectMoneda from "../Inicio/SelectMoneda";
import styles from './Convertidor.module.css';
import movimientoSaldo from "../../elem_globales/handleSaldos";

function Convertidor({actualizarSaldo, setActualizarSaldo}) {
    
    const [fromCurrency, setFromCurrency] = useState('ARS');
    const [toCurrency, setToCurrency] = useState('USD');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState(0);
    const [rate, setRate] = useState(0);

    useEffect(() => {        
        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then(res => res.json())
            .then(data => setRate(data.rates[toCurrency]));    
        
    }, [fromCurrency, toCurrency])
    
    useEffect(() => {
        setResult(parseFloat((amount*rate*0.99).toFixed(2)));
    }, [amount, rate])

    const convertirMoneda = () => {        

        const saldoFrom = parseFloat(localStorage.getItem(`Saldo${fromCurrency}`));
        const saldoTo = parseFloat(localStorage.getItem(`Saldo${toCurrency}`));

        if (!(fromCurrency == 'ARS' && toCurrency == 'USD') && !(fromCurrency == 'USD' && toCurrency == 'ARS')) {
            alert('Solo se puede convertir entre ARS y USD');
            return;
        }
        
        if (saldoFrom < amount || amount == '') {
            alert('Operacion cancelada, ingrese un monto valido');
            return;
        }
        if (confirm(`¿Esta seguro que desea convertir $${amount} a $${result}?`)) {
            
            movimientoSaldo(fromCurrency, "Conversion de Monedas" , -amount);
            movimientoSaldo(toCurrency, "Conversion de Monedas" , result);

            alert('Conversion realizada con exito');
            setActualizarSaldo(true);
            setAmount('')
        } else {
            alert('Conversion cancelada');
        }
        
        ;
    }

    return (         
        <div className={styles.convertidorMonedas}>
            <h2>Convertidor de Monedas</h2>
            <div className={styles.monedaConSelect}>
                <input className={styles.campoMoneda} placeholder="Ingrese una cantidad" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <SelectMoneda elegirMoneda={e => setFromCurrency(e.target.value)} moneda={fromCurrency}/>
            </div>
            <div className={styles.monedaConSelect}>
                <p className={styles.campoMoneda}>{result}</p>
                <SelectMoneda elegirMoneda={e => setToCurrency(e.target.value)} moneda={toCurrency}/>
            </div>
            <button className={styles.convertirMoneda} onClick={convertirMoneda}>Convertir</button>
        </div>
    );
}

export default Convertidor;