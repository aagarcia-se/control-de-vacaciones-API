import { establecerConexion, cerrarConexion } from "../connection/Conection2.js";


export const GetPuestosLaboralesDao = async () => {
    let connection ;

    try{
        connection = await establecerConexion();
        const [puestosL] = await connection.query("Select idPuesto, descripcion, estado from puestos where estado = 'Y';");
        return [puestosL];
    }catch(error){
        throw error;
    }finally{
        cerrarConexion(connection);
    }
}