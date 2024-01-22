import { ConsultarCuiServices, IngresarCuiServices, ActualizarCuiServices, EliminarCuiServices, ConsultarAllCuiServices } from "../../services/dpi/dpi.Services.js";


export const ConsultarCuiController = async (req, res) => {
    try{
        const [cuiRes] = await ConsultarCuiServices(req.params.dpi);
        res
        .status(200)
        .json({status: "OK", data: cuiRes});
    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }
}

export const ConsultarAllCuiController = async (req, res) => {
    try{
        const cuiRes = await ConsultarAllCuiServices(req.params.dpi);
        res
        .status(200)
        .json({status: "OK", data: cuiRes});
    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }
}


export const IngresarCuiController = async (req, res) => {
    try{
        const result = await IngresarCuiServices(req.body);
        res
        .status(200)
        .json({status: "OK",  data: "Datos ingresados correctamente", affectedRows: result});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}

export const ActualizarCuiController = async (req, res) => {
    try{
        const result = await ActualizarCuiServices(req.body);
        res
        .status(200)
        .json({status: "OK",  data: "Datos Actualizados correctamente"});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}

export const EliminarCuiController = async (req, res) => {
    try{
        const result = await EliminarCuiServices(req.params.idCui);
        res
        .status(200)
        .json({status: "OK",  data: "Datos Eliminados correctamente"});

    }catch(error){
        res
        .status(error?.status || 500)
        .json({status: "FAILED", data: error?.message || error});
    }

}