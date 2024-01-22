import { IngresarSuspensionDao } from "../../dao/suspensiones/suspensiones.js";


export const IngresarSuspensionesServices = async (data) => {
    try{
          const result = await IngresarSuspensionDao(data);
          return result;
    }catch(error){
       throw error;
 
    }
  }