import { consultarGestionVacacionesEspecialesDao, registrarVacacionesEspecialesDao } from "./vacacionesespeciales.dao.js";


export const registrarVacacionesEspecialesService = async (data) => {
    try {
        const result = await registrarVacacionesEspecialesDao(data);
        return result;
    } catch (error) {
        console.log("Error en registrarVacacionesEspecialesService:", error);
        throw error;
    }
}

export const consultarGestionVacacionesEspecialesService = async (idEmpleado, fechaEnCurso) => {
    try{
        const result = await consultarGestionVacacionesEspecialesDao(idEmpleado, fechaEnCurso);
        return result;
    }catch(error){
        console.log("Error en consultarGestionVacacionesEspecialesService:", error);
        throw error;
    }

}