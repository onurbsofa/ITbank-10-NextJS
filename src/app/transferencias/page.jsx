import transferencias from "../api/transferencias.js";
import Link from "next/link.js";

export default function transferencia() {
  return (
    <div>
      <h1>transferencias</h1>
      <ul>
        {transferencias.map((transferencia) => (
          <Link href={`/transferencias/${transferencia.id}`}>
            <li key={transferencia.id}>{transferencia.fecha}
            <p>{transferencia.monto}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
