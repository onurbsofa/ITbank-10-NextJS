import Link from 'next/link';

export default function ListadoDeCuentas({ cuentas }) {
  return (
    <div>
      <h1>Listado de cuentas:</h1>
      <ul>
        {cuentas.map((cuenta) => (
          <li key={cuenta.id}>
            <Link href={`/${cuenta.id}`}>
              <a>{cuenta.nombre}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  
  const res = await fetch('../../api/cuentasBancarias.json');
  const cuentas = await res.json();

  return {
    props: {
      cuentas,
    },
  };
}

export async function getStaticPaths() {

  // Generate paths for each cuenta
  const paths = cuentas.map((cuenta) => ({
    params: { id: cuenta.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
