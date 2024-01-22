import { ConsultarCuiDao, IngresarCuiDao, ActualizarCuiDao, EliminarCuiDao, ConsultarAllCuiDao } from "../../dao/dpi/dpi.dao.js";


export const ConsultarCuiServices = async (cuiParam) =>{
    try{
       const cuiRes = await ConsultarCuiDao(cuiParam);
       return cuiRes;
    }catch(error){
      throw error;
    }
 }


 export const ConsultarAllCuiServices = async () =>{
   try{
      const cuiRes = await ConsultarAllCuiDao();
      return cuiRes;
   }catch(error){
     throw error;
   }
}

 export const IngresarCuiServices = async (data) => {
   try{
         const result = await IngresarCuiDao(data);
         return result;
   }catch(error){
      throw error;

   }
 }

 export const ActualizarCuiServices = async (data) => {
   try{
         const result = await ActualizarCuiDao(data);
         return result;
   }catch(error){
      throw error;

   }
 }
 

 export const EliminarCuiServices = async (idCui) => {
   try{
         const result = await EliminarCuiDao(idCui);
         return result;
   }catch(error){
      throw error;

   }
 }