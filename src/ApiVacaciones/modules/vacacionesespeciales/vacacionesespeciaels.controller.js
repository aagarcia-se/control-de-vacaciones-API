import { registrarVacacionesEspecialesService } from "./vacacionesespeciales.service.js";

export const registrarVacacionesEspecialesController = async (req, res) => {
    try {
        const idVacacionesEspeciales = await registrarVacacionesEspecialesService(req.body);
        const responseData = {
            status: 200,
            message: "Datos ingresados correctamente",
            idVacacionesEspeciales
        };
        res.status(200).json(responseData);
        
    } catch (error) {
        const status = error?.codRes || 500;
        const responseData = error?.message || error;
        res.status(status).json({ responseData });
    }
}   