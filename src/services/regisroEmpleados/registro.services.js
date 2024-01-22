import { RegistrarUsuriaoDao } from "../../dao/regrstro.dao.js";


export const RegistrarUsuarioServices = async (data) => {
    try{
          const result = await RegistrarUsuriaoDao(data);
          return result;
    }catch(error){
       throw error;
 
    }
  }