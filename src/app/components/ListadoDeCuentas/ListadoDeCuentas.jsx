import Link from "next/link"
async function getUsers() {// aca haces el fetchin de los users completa
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
 
  return users
}


export default async function ListadoDeCuentas({params}) {

  const users = await getUsers()
  console.log(users)


  return (
    <div>
      <h1>Listado de cuentas:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`transferencias/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



