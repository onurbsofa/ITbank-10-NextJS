import usuariosFake from "../api/cuentasBancarias.js";
import Link from "next/link.js";

export default function transferencia() {
  return (
    <div>
      <h1>transferencias</h1>
      <ul>
        {usuariosFake.map((usuario) => (
        <Link href={`/transferencias/${usuario.id}`}>
          <li key={usuario.id}>{usuario.nombre}</li>
        </Link>
        ))}
      </ul>
    </div>
  );
}
