import { EnviarMailServices } from "../email/email.services.js";
import { IngresarEmpleadoServices } from "../empleados/empleados.services.js"
import { ingresarUsuariosServices } from "../usuarios/usuarios.services.js";



export const RegistrarEmpleadoServices = async (data) => {
    let password;

    try {
        const resEmpleado = await IngresarEmpleadoServices(data);

        if (resEmpleado && resEmpleado.codigoEmpleado && resEmpleado.idEmpleado) {
            password = generarContraseñaAleatoria();

            const datosUsuario = {
                usuario:  resEmpleado.codigoEmpleado,
                pass:  password,
                correo: data.correo,
                idRol: 2,
                idEmpleado: resEmpleado.idEmpleado
            };

            const resUsuario = await ingresarUsuariosServices(datosUsuario);

            (resUsuario === 1) && EnviarMailServices(datosUsuario);
        }

        return true;

    } catch (error) {
        console.error('Error al registrar empleado:', error);
        throw error;
    }
};


const generarContraseñaAleatoria = () => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let contraseña = '';
  
    // Generar una contraseña de al menos 8 caracteres
    while (contraseña.length < 8) {
      const caracterAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];
  
      // Asegurarse de que el caracter no esté ya en la contraseña
      if (!contraseña.includes(caracterAleatorio)) {
        contraseña += caracterAleatorio;
      }
    }
  
    return contraseña;
  };