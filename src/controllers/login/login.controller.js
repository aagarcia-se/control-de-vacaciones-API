import { ConsultarUsuarioServices } from "../../services/login/login.services.js";


export const ConsultarUsuarioController = async (req, res) => {
    try{
        const result = await ConsultarUsuarioServices(req.body);
        res
        .status(200)
        .json({status: "OK",  data: result});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}