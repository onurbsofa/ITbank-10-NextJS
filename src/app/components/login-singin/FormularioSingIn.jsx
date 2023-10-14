'use client'

import { useState } from "react";
import Link from "next/link";
import styles from "./login-singin.module.css";

function RegisterCampos() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);

    if (isValid) {
        const listaCuentas = cuentas;
        const intentoLogin = {usuario: email, contraseña: password};

        console.log(listaCuentas);
        console.log(intentoLogin);

        const usuarioEncontrado = listaCuentas.find((cuenta) => {
            return cuenta.usuario === intentoLogin.usuario && cuenta.contraseña === intentoLogin.contraseña;
          });

        if (listaCuentas.includes(usuarioEncontrado)) {                
            register();//falta definir funcion register                
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
          <h3>REGISTRARSE</h3>
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
        ¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link>
      </p>
    </div>
  );
}

export default RegisterCampos;