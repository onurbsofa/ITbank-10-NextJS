'use client'

import styles from './login-singin.module.css';
import { useState } from 'react';
import Link from 'next/link';

function LoginCampos({ login }) {
  
  const [contraseniaUsuario, setContraseniaUsuario] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(email);

        if (isValid) {
            const listaCuentas = JSON.parse(localStorage.getItem('Cuentas'));
            const intentoLogin = {usuario: email, contraseña: password};

            console.log(listaCuentas);
            console.log(intentoLogin);

            const usuarioEncontrado = listaCuentas.find((cuenta) => {
                return cuenta.usuario === intentoLogin.usuario && cuenta.contraseña === intentoLogin.contraseña;
              });

            if (listaCuentas.includes(usuarioEncontrado)) {                
                login();                
            } else {
                alert("Usuario o contraseña incorrectos");
                setEmail('');
                setPassword('');
            }
                
        } else {
        // El correo electrónico no es válido
            setIsValidEmail(false);
            setPassword('');
            setEmail('');
        }
      };
  

  return (
    <div className={styles.contenedorFormulario}>
      <form onSubmit={handleSubmit} className={styles.formularioLogin}>
        <div className={styles.registrarse}>
          <h3>INICIAR SESION</h3>
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
        ¿No tienes una cuenta? <Link href="/register">¡Crea tu cuenta ahora!</Link>
      </p>
    </div>
  );
}

export default LoginCampos;