import { Connection } from "../connection/Connection.js";

export const ObtenerSexoDao = async () => {
    try{
        const [genero] = await Connection.query("select IdSexo, sexo from sexos where Estado = 'Y';");
        return [genero]; 
    }catch(error){
        return error;
    }
};
