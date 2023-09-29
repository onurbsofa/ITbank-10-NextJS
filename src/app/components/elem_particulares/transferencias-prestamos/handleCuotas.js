function agregarCuotasPrestamo(monto_cuota, cant_cuotas, cuenta) {

    const PagosPendintes = JSON.parse(localStorage.getItem(`PagosPendientes${cuenta}`));

    for(let i = 0; i < cant_cuotas; i++) {
        PagosPendintes.push({descripcion: `Prestamo en ${cuenta == "ARS" ? 'Pesos' : 'Dolares'} a ${cant_cuotas} meses (cuota ${i+1})`, fecha_emision: new Date().toLocaleString() , monto: parseFloat(monto_cuota).toFixed(2), fecha_vencimiento: new Date(new Date().getTime() + i * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
    });
    }

    localStorage.setItem(`PagosPendientes${cuenta}`, JSON.stringify(PagosPendintes));

    return;
}

export default agregarCuotasPrestamo;