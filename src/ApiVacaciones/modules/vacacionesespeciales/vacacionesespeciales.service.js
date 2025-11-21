import { registrarVacacionesEspecialesDao } from "./vacacionesespeciales.dao.js";


export const registrarVacacionesEspecialesService = async (data) => {
    try {
        const result = await registrarVacacionesEspecialesDao(data);
        return result;
    } catch (error) {
        console.log("Error en registrarVacacionesEspecialesService:", error);
        throw error;
    }
}