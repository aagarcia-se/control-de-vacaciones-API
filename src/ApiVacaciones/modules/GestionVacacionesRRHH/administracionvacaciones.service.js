import { cancelarSolicitudAutorizadaDaDao, consultarSolicitudesVacacionesAutorizadasDao } from "./administracionvacaciones.dao.js";


export const consultarSolicitudesVacacionesAutorizadasService = async () => {
    try{
        const result = await consultarSolicitudesVacacionesAutorizadasDao();
        return result;
    }catch(error){
        console.log("Error en consultarSolicitudesVacacionesAutorizadasService:", error);
        throw error;
    }
}

export const cancelarSolicitudAutorizadaService = async (idSolicitud, fechaResolucion) => {
    try{
        const result = await cancelarSolicitudAutorizadaDaDao(idSolicitud, fechaResolucion);
        return result;
    }catch(error){
        console.log("Error en cancelarSolicitudAutorizadaService:", error);
        throw error;
    }
}