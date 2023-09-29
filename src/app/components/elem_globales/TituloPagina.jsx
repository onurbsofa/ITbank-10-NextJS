import styles from "./paginas.module.css";

function TituloPagina({contenido}) {
    return ( 
        <h1 className={styles.tituloPagina}>{contenido}</h1>
     );
}

export default TituloPagina;