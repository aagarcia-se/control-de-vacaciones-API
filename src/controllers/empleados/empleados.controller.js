import { IngresarEmpleadoServices } from "../../services/empleados/empleados.services.js";


export const IngresarEmpleadosController = async (req, res) => {
    try{
        const result = await IngresarEmpleadoServices(req.body);
        res
        .status(200)
        .json({status: "OK",  data: "Datos ingresados correctamente", affectedRows: result});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}