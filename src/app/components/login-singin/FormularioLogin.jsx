'use client'

import styles from './login-singin.module.css';
import { useState } from 'react';
import Link from 'next/link';

function LoginCampos({ login }) {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseniaUsuario, setContraseniaUsuario] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(nombreUsuario);

    if (!isEmailValid) {
      setIsValidEmail(false);
      alert("Su correo electrónico no es válido.");
      return; // Mostrar un mensaje de error para el correo electrónico inválido
    } else {
      setIsValidEmail(true);
  }

  if (isValidEmail && contraseniaUsuario.length >= 8) { // Cambia la validación de contraseña según tus necesidades
    try {
        const response = await fetch('/api/cuentas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: nombreUsuario, password: contraseniaUsuario }),
        });

        if (response.status === 200) {
          // Autenticación exitosa, muestra un mensaje o redirige a la página de inicio
          alert('Inicio de sesión exitoso');
          // Redirige a la página de inicio o realiza otras acciones necesarias
        } else if (response.status === 401) {
          // Credenciales incorrectas, muestra un mensaje de error
          alert('Usuario o contraseña incorrectos');
        } else {
          // Error del servidor, muestra un mensaje de error
          console.log(response);
          alert('Error interno del servidor');
        }
      } catch (error) {
        // Manejo de errores de red u otros errores
        console.error('Error al realizar la solicitud:', error);
      }
    }
  }

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