import { ActualizarFamiliaresServices, EliminarFamiliaresServices, IngresarFamiliaresServices, ObtenerFamiliaresServices } from "../../services/familiares/familiares.services.js";

export const ConsultarFamiliaresController = async (req, res) => {
    try{
        const famResult = await ObtenerFamiliaresServices(req.params.cuiEmpleado);
        res
        .status(200)
        .json({status: "OK", data: famResult});
    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }
}



export const IngresarFamiliareresController = async (req, res) => {
    try{
        const famResult = await IngresarFamiliaresServices(req.body);
        res
        .status(200)
        .json({status: "OK",  data: "Datos ingresados correctamente", affectedRows: famResult});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}

export const ActualizarFamiliaresController = async (req, res) => {
    try{
        const famResult = await ActualizarFamiliaresServices(req.body);
        res
        .status(200)
        .json({status: "OK",  data: "Datos Actualizados correctamente"});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}

export const EliminarFamiliaresController = async (req, res) => {
    try{
        const famResult = await EliminarFamiliaresServices(req.params.idFamiliar);
        res
        .status(200)
        .json({status: "OK",  data: "Datos Eliminados correctamente"});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}