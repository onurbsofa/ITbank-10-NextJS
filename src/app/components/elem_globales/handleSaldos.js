function movimientoSaldo(cuenta, descripcion, cantidad) {
    const saldo = parseFloat(localStorage.getItem(`Saldo${cuenta}`));
    localStorage.setItem(`Saldo${cuenta}`, saldo + cantidad);

    let historial = JSON.parse(localStorage.getItem(`HistorialCuenta${cuenta}`));
    historial.push({descripcion: descripcion, cantidad: cantidad, estado: (saldo + cantidad), fecha: new Date().toLocaleString()});
    localStorage.setItem(`HistorialCuenta${cuenta}`, JSON.stringify(historial));
    return;
}

export default movimientoSaldo;