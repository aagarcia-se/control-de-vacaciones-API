import { establecerConexion, cerrarConexion } from "../connection/Conection2.js";


export const GetDiscapacidadesDao = async () => {
    let connection ;

    try{
        connection = await establecerConexion();
        const [discapacidadesList] = await connection.query("select idDiscapacidad, tipoDiscapacidad, estado from discapacidades;");
        return [discapacidadesList];
    }catch(error){
        throw error;
    }finally{
        cerrarConexion(connection);
    }
}