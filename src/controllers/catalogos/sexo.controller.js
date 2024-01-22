import { ObtenerSexoServices } from "../../services/catalogos/sexo.service.js";

export const ObtenerSexoController = async (req, res) => {
    try{
        const [genero] = await ObtenerSexoServices();
        res.json({genero});
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}
