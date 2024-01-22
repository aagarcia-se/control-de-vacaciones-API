import { Connection } from "../connection/Connection.js";

export const ObtenerNivelEducativoDao = async () => {
    try{
        const [nivelesEduacion] = await Connection.query("select * from NivelEducativo;");
        return [nivelesEduacion]; 
    }catch(error){
        return error;
    }
}