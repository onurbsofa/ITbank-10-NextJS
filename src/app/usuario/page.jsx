'use client'
import { redirect } from "next/navigation";

function PaginaUsuario() { 

  redirect('/usuario/' + localStorage.getItem('usuarioActivo'))

  return (
    <>
    </>
  );
}

export default PaginaUsuario;