import { Connection } from "../connection/Connection.js";

export const ObtenerMunicipiosDao = async () => {
    try{
        const [rowsMunicipios] = await Connection.query("SELECT idMunicipio, municipio FROM municipios where Estado = 'Y';");
        return [rowsMunicipios]; 
    }catch(error){
        return error;
    }
};

export const ObtenerMunicipioByIdDao = async (id) => {
    try{
        const [rowsMunicipio] = await Connection.query("SELECT idMunicipio, municipio FROM municipios where idMunicipio > ? and IdMunicipio < ? and Estado = 'Y';", [id*100, (id+1)*100]);
        return rowsMunicipio; 
    }catch(error){
       throw new Error(error);
    }
}