import { RegistrarUsuarioServices } from "../../services/regisroEmpleados/registro.services.js";



export const RegistrarUsuarioController = async (req, res) => {
    try{
        const result = await RegistrarUsuarioServices(req.body);
        res
        .status(200)
        .json({status: "OK",  data: "Datos ingresados correctamente", affectedRows: result});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}