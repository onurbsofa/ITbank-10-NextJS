import styles from "./login.module.css";
import { useState } from "react";

function LoginCampos({login}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.campoLogin}>
                <label className={styles.labelInput} htmlFor="email">Correo Electrónico:</label>
                    <input
                        className={styles.inputText}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {!isValidEmail && (
                <p className={styles.error}>Ingresa un correo electrónico válido.</p>
                )}
                <div className={styles.campoLogin}>
                    <label className={styles.labelInput} htmlFor="password">Contraseña:</label>
                    <input
                        className={styles.inputText}
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className={styles.botonIniciarSesion} type="submit">Iniciar Sesión</button>
            </form>
        </div>
  );
}

export default LoginCampos;