import { GetDiscapacidadesServices } from "../../services/catalogos/discapacidades.services.js";


export const GetDiscapacidadesController = async (req, res) =>{
    try{
        const [discapacidades] = await GetDiscapacidadesServices();
        res.json({discapacidades});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}