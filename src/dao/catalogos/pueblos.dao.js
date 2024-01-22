import { establecerConexion, cerrarConexion } from "../connection/Conection2.js";


export const GetPueblosPDao = async () => {
    let connection ;

    try{
        connection = await establecerConexion();
        const [puebloslist] = await connection.query("select idPuebloPertenencia, tipoPueblo, estado from puebloPertenencia;");
        return [puebloslist];
    }catch(error){
        throw error;
    }finally{
        cerrarConexion(connection);
    }
}