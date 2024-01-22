import { GetPueblosPDao } from "../../dao/catalogos/pueblos.dao.js";


export const GetPueblosPServices = async () =>{
    try{
       const publosPList = await GetPueblosPDao();
       return publosPList;
    }catch(error){
       return error;
    }
 }