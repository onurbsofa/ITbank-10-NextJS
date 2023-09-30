import "../../styles/globals.css"

export default async function Home() { 

  return (
    <>
    <main>
      <section className="banner">
        <div className="banner-img">
          <img src="https://img.freepik.com/vector-premium/banca-linea-concepto-isometrico-diseno-plano-moderno-banco-electronico-concepto-personas-plantilla-pagina-destino-ilustracion-isometrica-conceptual-diseno-web-grafico_709513-31.jpg" alt="banner" />
        </div>
        <div className="banner-text">
          <h1>Prestamos a taza cero</h1>
          <p>¡Solicitá tu préstamo en 3 simples pasos!</p>
          <button className="btn-banner">Quiero saber más</button>
        </div>
      </section>
      <section className="dash-boards">
      <div className="dashboard-grid">
          <div className="dashboard-item item1">
            <h2>Panel 1</h2>
            <p>Texto de ejemplo para el Panel 1</p>
            <img
              src="https://via.placeholder.com/150"
              alt="Imagen de ejemplo"
            />
          </div>
          <div className="dashboard-item item2">
            <h2>Panel 2</h2>
            <p>Texto de ejemplo para el Panel 2</p>
            <img
              src="https://via.placeholder.com/150"
              alt="Imagen de ejemplo"
            />
          </div>
          <div className="dashboard-item item3">
            <h2>Panel 3</h2>
            <p>Texto de ejemplo para el Panel 3</p>
            <img
              src="https://via.placeholder.com/150"
              alt="Imagen de ejemplo"
            />
          </div>
          <div className="dashboard-item item4">
            <h2>Panel 4</h2>
            <p>Texto de ejemplo para el Panel 4</p>
            <img
              src="https://via.placeholder.com/150"
              alt="Imagen de ejemplo"
            />
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
