import { GetRenglonDao } from "../../dao/catalogos/renglones.dao.js";


export const GetRenglonServices = async () =>{
    try{
       const renglonesLista  = await GetRenglonDao();
       return renglonesLista;
    }catch(error){
       return error;
    }
 }