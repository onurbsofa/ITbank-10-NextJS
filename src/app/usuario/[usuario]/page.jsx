function PaginaUsuario({params}) {

  const {usuario} = params;

  const usuarioDecodificado = decodeURIComponent(usuario)

  return ( 
    <>
      <h1>Bienvenido {usuarioDecodificado}</h1>
    </>
  );
}

export default PaginaUsuario;