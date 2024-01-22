import { ObtenerSexoDao } from "../../dao/catalogos/sexo.dao.js";

export const ObtenerSexoServices = async () =>{
   try{
      const genero = await ObtenerSexoDao();
      if(genero.length === 0){

      }
      return genero;
   }catch(error){
      return error;
   }
}

