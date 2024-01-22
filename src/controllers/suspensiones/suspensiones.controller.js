import { IngresarSuspensionesServices } from "../../services/suspensiones/suspensiones.services.js";



export const IngresarSuspensionesController = async (req, res) => {
    try{
        const result = await IngresarSuspensionesServices(req.body);
        res
        .status(200)
        .json({status: "OK",  data: "Datos ingresados correctamente", affectedRows: result});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error});
    }

}