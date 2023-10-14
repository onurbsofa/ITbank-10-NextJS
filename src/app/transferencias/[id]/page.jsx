

 
export async function generateStaticParams() {//esto es como el getStaticPaths de la otra version
    return [{ id: '1' }, { id: '2' }]
  }
   
  async function getUser(params) { // asi se hace el fetchin con el res y await porque todo es asyn y el json
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    //recuperas un suario a la vez
    const user = await res.json()
   
    return user
  }
  
  export default async function ListadoDeCuentas({params}) {
    // aca recuperas las props que hiciste en el generateStaticParams
  
    const id = params.id
    const user = await getUser(params)
  return (
        <div>
            <h1>Cuenta de {user.name}</h1>
            <p>Id: {id}</p>
        </div>
  )
}
