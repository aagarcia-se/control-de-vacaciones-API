import { ObtenerMunicipiosDao, ObtenerMunicipioByIdDao } from "../../dao/catalogos/municipios.dao.js";


export const ObtenerMunicipiosServices = async () =>{
   try{
      const municipios = await ObtenerMunicipiosDao();
      return municipios
   }catch(error){
      return error;
   }
}

export const ObtenerMunicipioByIdServices = async (idParam) => {
   try{
      const id = parseInt(idParam);
      if(isNaN(id) || id < 0){
         throw new Error("DEBE INSGRESAR UN ID.");
      }
      const municipio = await ObtenerMunicipioByIdDao(id);
      if (municipio.length === 0) {
         throw new Error("NO SE ENCONTRO MUNICIPIO CON EL ID INGRESADO");
     }
     
      return municipio;
   }catch(error){
      throw new Error(error);
   }

}

