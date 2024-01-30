import { GetPuestosLaboralesServices } from "../../services/catalogos/puestos.services.js";



export const GetPuestosLaboralesController = async (req, res) =>{
    try{
        const [puestosL] = await GetPuestosLaboralesServices();
        res.json({puestosL});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}