import { GetRenglonServices } from "../../services/catalogos/renglones.services.js";


export const GetRenglonController = async (req, res) =>{
    try{
        const [renglonesLista] = await GetRenglonServices();
        res.json({renglonesLista});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}