import { RegistrarEmpleadoServices } from "../../services/registrarEmpleado/registrarEmpleado.services.js";


export const RegistrarEmpleadoController = async (req, res) => {
    try{
        const result = await RegistrarEmpleadoServices(req.body);
        res.status(200).json({
            status: "success",
            message: "Empleado ingresado correctamente",
            data: {
              codRes: 601,
              result: "Detalles adicionales, si es necesario"
            }
          });
    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}