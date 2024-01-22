import { ObtenerTipoFamiliaresDao } from "../../dao/catalogos/catalogos.dao.js";


export const ObtenerTipoFamiliaresServices = async () =>{
    try{
       const departamentos = await ObtenerTipoFamiliaresDao();
       return departamentos
    }catch(error){
       return error;
    }
 }