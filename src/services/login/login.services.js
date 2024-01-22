import { ConsultarUsuarioDao } from "../../dao/login/login.dao.js";



export const ConsultarUsuarioServices = async (data) => {
    try{
          const result = await ConsultarUsuarioDao(data);
          return result;
    }catch(error){
       throw error;
 
    }
  }