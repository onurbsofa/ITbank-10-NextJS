import styles from "./PyC-TC-Ayuda.module.css"

function Seccion({titulo, subtitulos, parrafos}) {

    let subsecciones = [];
    let cont = 0;

    subtitulos.forEach(element => {
        subsecciones.push(
            <>
                <hr />
                <h3>{element}</h3>
                <p>{parrafos[cont]}</p>                
            </>
        )
        cont++;
    });

    return ( 
        <>
            <div id={`#${titulo}`} className={styles.container}>
                <h2>{titulo}</h2>
                {subsecciones}
            </div>
        </>
     );
}

export default Seccion;