import tarjetas from '../api/listaTarjetas'
import Link from 'next/link'
import TarjetaComponent from '../components/TarjetasComponentes/TarjetaComponent'

export default function Page() {
  return (
    <>
      <div>Listado de tarjetas</div>
      <ul>
        {tarjetas.map((tarjeta) => (
          <TarjetaComponent key={tarjeta.id} numero={tarjeta.numero} color={tarjeta.color} tipo={tarjeta.tipo}/>
        ))}
      </ul>
    </>
  )
}
