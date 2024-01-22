import { cerrarConexion, establecerConexion } from "../connection/Conection2.js";



export const IngresarSuspensionDao = async (data) => {
    let connection;
    try{
        connection = await establecerConexion();
        const [result] = await connection.query("insert into suspensionesLaborales(codigoColaborador, fechaSuspension, motivo, numeroAcuerdo, numeroActa) values (?, ?, ?, ?, ? );", [data.codigoColaborador, data.fechaSuspension, data.motivo, data.numeroAcuerdo, data.numeroActa]);
        return result.affectedRows;
        
    }catch(error){
        console.log(error);
        throw error;
  
    }finally{
        if(connection){
            cerrarConexion(connection);
        } 
    }

}