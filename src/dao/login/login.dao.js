import { Connection } from "../connection/Connection.js";



export const ConsultarUsuarioDao = async (data) => {
    try {
        const [userExist] = await Connection.query("SELECT usuario from usuarios where usuario = ?;", [data.usuario]);
        if(userExist.length !== 0){
            
            const [user] = await Connection.query("select u.usuario, u.idRol, e.cui, e.primerNombre, e.primerApellido from usuarios u, empleados e where usuario = ? and pass = ? and u.usuario = e.codigoColaborador and u.estado = 'Y';", [data.usuario, data.pass]);
            if (user.length === 1) {
                return user[0];
            } else {
                return {codError: 785,
                        message: "Usuario o conttraseña incorrectos"}; 
            }

        }else{
            return {codError: 874,
                    usuario: "NO EXISTE"};
        }

    } catch (error) {
        throw error;
    }
}

