import { GetPueblosPServices } from "../../services/catalogos/pueblosP.services.js";

export const GetPueblosPController = async (req, res) =>{
    try{
        const [pueblosList] = await GetPueblosPServices();
        res.json({pueblosList});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}