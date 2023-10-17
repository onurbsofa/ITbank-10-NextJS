import Link from "next/link";
import { cuentas } from "../../api/cuentasBancarias.js";

/* async function getUsers() {// aca haces el fetchin de los users completa
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return users ///funcion para traer datos de una api y procesarlos
}*/
export default async function ListadoDeCuentas() {
  /* const users = await getUsers() // esto para ver las cuentas
          {users.map((user) => (
          <li key={user.id}>
            <Link href={`transferencias/${user.id}`}>{user.name}</Link>
          </li>
        ))}
  */

  return (
    <div>
      <h1>Listado de cuentas:</h1>
      <ul>
        {cuentas.map(({ cuenta, nombre }) => (
          <li key={nombre}>{cuenta}</li>
        ))}
      </ul>
    </div>
  );
}
