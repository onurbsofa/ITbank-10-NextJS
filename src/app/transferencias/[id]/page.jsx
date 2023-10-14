

 
export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }]
  }
   
  async function getUser(params) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
   
    return user
  }
  
  export default async function ListadoDeCuentas({params}) {
  
    const id = params.id
    const user = await getUser(params)
  return (
        <div>
            <h1>Cuenta de {user.name}</h1>
            <p>Id: {user.id}</p>
        </div>
  )
}
