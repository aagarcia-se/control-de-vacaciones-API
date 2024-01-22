import { Connection } from "../connection/Connection.js";


export const ObtenerTipoFamiliaresDao = async () => {
    try{
        const [tipoParentesto] = await Connection.query("select idParentesco, parentesco from tipo_parentesco where estado = 'Y';");
        return [tipoParentesto]; 
    }catch(error){
        return error;
    }
};