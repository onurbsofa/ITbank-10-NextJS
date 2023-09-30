import fs from 'fs';
import path from 'path';

export async function GET(req) {
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
        return Response(200, { message: 'Inicio de sesión exitoso' })
        } else {
        // Usuario o contraseña incorrectos
        return Response(401, { message: 'Usuario o contraseña incorrectos' })
        }
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        return Response(500, { message: 'Error interno del servidor' })
    }
}

export async function POST(req) {
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
        return Response(200, { message: 'Inicio de sesión exitoso' })
        } else {
        // Usuario o contraseña incorrectos
        return Response(401, { message: 'Usuario o contraseña incorrectos' })
        }
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        return Response(500, { message: 'Error interno del servidor' })
    }
}