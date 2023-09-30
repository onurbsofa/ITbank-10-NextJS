import { useClient } from 'next/client'; // Importa useClient
import styles from './login.module.css';
import { useState } from 'react';

function LoginCampos({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nombreUsuario.length >= 5 && nombreUsuario.length <= 12) {
      alert(`Usuario creado!`);
    } else if (nombreUsuario.length === 0) {
      alert("Su usuario debe contener entre 5 y 12 letras.");
    } else {
      alert("Su usuario debe contener entre 5 y 12 letras.");
    }
  }

  return (
    <div className={styles.contenedorFormulario}>
      <form onSubmit={handleSubmit} className={styles.formularioLogin}>
        <div className={styles.registrarse}>
          <h3>REGISTRARSE</h3>
        </div>
        <label className={styles.labelUsuario}>Usuario</label>
        <input
          className={styles.inputUsuario}
          type="text"
          name="usuario"
          placeholder="Ingrese un usuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
        />
        <label className={styles.labelContrasenia}>Contraseña</label>
        <input
          className={styles.inputContrasenia}
          type="password"
          name="contraseña"
          placeholder="Ingrese una contraseña"
          value={contraseniaUsuario}
          onChange={(e) => setContraseniaUsuario(e.target.value)}
        />
        <button type="submit" className={styles.botonFormulario}>Enviar</button>
      </form>
      <p className={styles.textoRegistroCuenta}>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
}

export default useClient(LoginCampos);