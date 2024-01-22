import { Connection } from "../connection/Connection.js";

export const IngresarUsuarioDao = async (data) => {
    try{
        const [result] = await Connection.execute(
            'INSERT INTO usuarios (usuario, pass, correo, idRol, idEmpleado) VALUES (?, ?, ?, ?, ?)',
            [data.usuario, data.pass, data.correo, data.idRol, data.idEmpleado]
          );

        return result.affectedRows;

    }catch(error){
        throw error;
    }

}