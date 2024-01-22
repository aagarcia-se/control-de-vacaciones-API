import { EnviarMailServices } from "../../services/email/email.services.js";


export const EnviarMailController = async (req, res) =>{
    try{
        const res = EnviarMailServices(req.body);
        res.json({data: "Correo Enviado"});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}