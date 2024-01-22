import { ObtenerDepartamentosServices } from "../../services/catalogos/departamentos.services.js";

export const ObtenerDepartamentosController = async (req, res) =>{
    try{
        const [departamentos] = await ObtenerDepartamentosServices();
        res.json({departamentos});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}