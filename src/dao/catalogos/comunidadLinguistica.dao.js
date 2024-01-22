import { establecerConexion, cerrarConexion } from "../connection/Conection2.js";


export const GetComunidadLinguisticaDao = async () => {
    let connection ;

    try{
        connection = await establecerConexion();
        const [comunidadesL] = await connection.query("select idComunididadLin, tipoComunidad, estado  from comunidadesLinguisticas;");
        return [comunidadesL];
    }catch(error){
        throw error;
    }finally{
        cerrarConexion(connection);
    }
}