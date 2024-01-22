import { GetComunidadLinguisticaServices } from "../../services/catalogos/comunidadesLinguisticas.services.js";


export const GetComunidadlinguisticaController = async (req, res) =>{
    try{
        const [comunidadesL] = await GetComunidadLinguisticaServices();
        res.json({comunidadesL});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}