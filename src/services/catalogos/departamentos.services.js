import { ObtenerDepartamentosDao } from "../../dao/catalogos/departamentos.dao.js";

export const ObtenerDepartamentosServices = async () =>{
    try{
       const departamentos = await ObtenerDepartamentosDao();
       return departamentos
    }catch(error){
       return error;
    }
 }