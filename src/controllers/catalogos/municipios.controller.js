import { ObtenerMunicipiosServices, ObtenerMunicipioByIdServices} from "../../services/catalogos/municipios.services.js";


export const ObtenerMunicipiosController = async (req, res) =>{
    try{
        const [municipios] = await ObtenerMunicipiosServices();
        res.json({municipios});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}


export const ObtenerMunicipioByIdController = async (req, res) => {
    try {
        const [municipio] = await ObtenerMunicipioByIdServices(req.params.id);
        res.json({ municipio });
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}


