import { ObtenerEstadCivilService } from "../../services/catalogos/estadocivil.services.js";

export const ObtenerEstadCivilController = async (req, res) => {
    try{
        const [estadoCivil] = await ObtenerEstadCivilService();
        res.json({estadoCivil});
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}