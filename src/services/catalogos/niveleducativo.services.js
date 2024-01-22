import { ObtenerNivelEducativoDao } from "../../dao/catalogos/niveleducativo.dao.js";

export const ObtenerNivelEducativoServices = async () => {
    try{
        const nivelEducativo = await ObtenerNivelEducativoDao();
        if(nivelEducativo.length === 0){
  
        }
        return nivelEducativo;
     }catch(error){
        return error;
     }
}