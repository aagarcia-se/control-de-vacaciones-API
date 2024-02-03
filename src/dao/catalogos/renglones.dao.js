import { establecerConexion, cerrarConexion } from "../connection/Conection2.js";


export const GetRenglonDao = async () => {
    let connection ;

    try{
        connection = await establecerConexion();
        const [renglonesLista] = await connection.query("select idRenglon, renglon, descripcion, estado from renglonPresupuestario where estado = 'Y';");
        return [renglonesLista];
    }catch(error){
        throw error;
    }finally{
        cerrarConexion(connection);
    }
}