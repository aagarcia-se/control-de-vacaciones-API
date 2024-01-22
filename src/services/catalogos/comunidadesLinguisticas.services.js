import { GetComunidadLinguisticaDao } from "../../dao/catalogos/comunidadLinguistica.dao.js";


export const GetComunidadLinguisticaServices = async () =>{
    try{
       const comunidadesL = await GetComunidadLinguisticaDao();
       return comunidadesL;
    }catch(error){
       return error;
    }
 }