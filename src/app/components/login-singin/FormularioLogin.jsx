'use client'

import styles from './login-singin.module.css';
import { useState } from 'react';
import Link from 'next/link';
import cuentas from '../cuentas/cuentas.json'
import { redirect, usePathname } from 'next/navigation';

function LoginCampos() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const path = usePathname()

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(email);

        if (isValid) {
            const listaCuentas = cuentas;
            const intentoLogin = {usuario: email, contraseña: password};

            const usuarioEncontrado = listaCuentas.find((cuenta) => {
                return cuenta.usuario === intentoLogin.usuario && cuenta.contraseña === intentoLogin.contraseña;
              });

            if (listaCuentas.includes(usuarioEncontrado)) {              
              localStorage.setItem('usuarioActivo', email)
              window.location.href = path == '/login' ? '/' : path 
              //para que refresque todo y el layout deje de mostrar el formulario de login
            } else {
                alert("Usuario o contraseña incorrectos");
                setEmail('');
                setPassword('');
            }
                
        } else {
        // El correo electrónico no es válido
            alert("El correo electrónico no es válido");
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className={styles.labelContrasenia}>Contraseña</label>
        <input
          className={styles.inputContrasenia}
          type="password"
          name="contraseña"
          placeholder="Ingrese una contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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