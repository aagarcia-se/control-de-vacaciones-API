import { GetPuestosLaboralesDao } from "../../dao/catalogos/puestos.dao.js";


export const GetPuestosLaboralesServices = async () =>{
    try{
       const puestosL  = await GetPuestosLaboralesDao();
       return puestosL;
    }catch(error){
       return error;
    }
 }