import { GetPueblosPServices } from "../../services/catalogos/pueblosP.services.js";

export const GetPueblosPController = async (req, res) =>{
    try{
        const [pubelosList] = await GetPueblosPServices();
        res.json({pubelosList});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}