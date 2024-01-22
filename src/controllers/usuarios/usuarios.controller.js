import { ingresarUsuariosServices } from "../../services/usuarios/usuarios.services.js";


export const IngresarUsuarioController = async (req, res) => {
    try{
        const result = await ingresarUsuariosServices(req.body);
        res
        .status(200)
        .json({status: "OK",  data: "Datos ingresados correctamente", affectedRows: result});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}