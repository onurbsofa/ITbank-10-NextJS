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
  // Fetch cuentas data from an API or database
  const res = await fetch('https://example.com/api/cuentas');
  const cuentas = await res.json();

  return {
    props: {
      cuentas,
    },
  };
}

export async function getStaticPaths() {
  // Fetch cuentas data from an API or database
  const res = await fetch('https://example.com/api/cuentas');
  const cuentas = await res.json();

  // Generate paths for each cuenta
  const paths = cuentas.map((cuenta) => ({
    params: { id: cuenta.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
