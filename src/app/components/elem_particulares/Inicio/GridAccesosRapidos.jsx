import AccesoRapido from "./AccesoRapido";
import styles from "./inicio.module.css";

function GridAccesosRapidos() {

    const accesosRapidos = [
        "Transferencias", "Pagos", "Prestamos", "Ayuda"];

    const links = accesosRapidos.map((accesoRapido) => {
        return (
            <AccesoRapido pagina={accesoRapido}/>
        );
    });

    return (
        <div className={styles.accesosRapidos}>
            <h2>Accesos Rapidos</h2>
            <ul className={styles.grilla}>
                {links}
            </ul>
        </div>
        
     );
}

export default GridAccesosRapidos;