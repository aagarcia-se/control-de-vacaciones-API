import { IngresarUsuarioDao } from "../../dao/usuarios/usuarios.dao.js";


export const ingresarUsuariosServices = async (data) => {
    try{
          const result = await IngresarUsuarioDao(data);
          return result;
    }catch(error){
       throw error;
 
    }
  }