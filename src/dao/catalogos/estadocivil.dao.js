import { Connection } from "../connection/Connection.js";

export const ObtenerEstadoCivilDao = async () => {
    try{
        const [estadoCivil] = await Connection.query("SELECT IdEstadoCivil, estado_civil FROM estados_civiles;");
        return [estadoCivil]; 
    }catch(error){
        return error;
    }
}