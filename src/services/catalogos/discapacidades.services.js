import { GetDiscapacidadesDao } from "../../dao/catalogos/discapacidades.dao.js";



export const GetDiscapacidadesServices = async () =>{
    try{
       const discapacidadesList = await GetDiscapacidadesDao();
       return discapacidadesList;
    }catch(error){
       return error;
    }
 }