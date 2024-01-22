import { ObtenerTipoFamiliaresServices } from "../../services/catalogos/catalogos.services.js";

export const obtenerTipoFamiliaresController = async (req, res) =>{
    try{
        const [parentescoList] = await ObtenerTipoFamiliaresServices();
        res.json({parentescoList});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}