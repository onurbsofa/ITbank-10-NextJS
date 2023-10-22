import tarjetas from '../api/listaTarjetas'
import Link from 'next/link'

export default function page() {
  return (
    <>
    <div>listado tarjetas</div>
    <ul>
    {tarjetas.map((tarjeta) => (
    <Link href={`/tarjetas/${tarjeta.id}`}>
      <li key={tarjeta.id}>{tarjeta.numero}</li>
    </Link>
    ))}
  </ul>
  </>
  )
}
