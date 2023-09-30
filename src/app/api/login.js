import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Leer el archivo JSON que contiene las cuentas de usuario
      const filePath = path.join(process.cwd(), 'cuentas.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const cuentas = JSON.parse(fileContents);

      // Buscar el usuario en la lista de cuentas
      const usuarioEncontrado = cuentas.find((cuenta) => {
        return cuenta.usuario === email && cuenta.contraseña === password;
      });

      if (usuarioEncontrado) {
        // Autenticación exitosa
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
      } else {
        // Usuario o contraseña incorrectos
        res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  } else {
    // Método no admitido
    res.status(405).json({ message: 'Método no admitido' });
  }
}