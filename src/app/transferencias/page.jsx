import transferencias from "../api/transferencias.js";
import Link from "next/link.js";
import HistorialTranseferencias from "../components/historialTransferencias/HistorialTranseferencias.jsx";

export default function transferencia() {
  return (
    <div>
      <section>
      <h2>Historial Transferencias</h2>
      <HistorialTranseferencias />
      </section>

      <section>
      <h2>Realizar Transferencia</h2>
      <button>Transferir</button>
      </section>
      
    </div>
  );
}
