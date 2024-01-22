import { ObtenerEstadoCivilDao } from "../../dao/catalogos/estadocivil.dao.js";

export const ObtenerEstadCivilService = async () =>{
   try{
      const estadoCivil = await ObtenerEstadoCivilDao();
      return estadoCivil;
   }catch(error){
      return error;
   }
}
