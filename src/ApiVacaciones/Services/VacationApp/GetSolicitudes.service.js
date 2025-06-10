import { consultarDiasSolicitadosPorAnioDao, getSolicitudesDao } from "../../Dao/VacationApp/GetSolicitudes.Dao.js";

export const getSolicitudesServices = async (unidadSolicitud) => {
    try{
          const solicitudes = await getSolicitudesDao(unidadSolicitud);
          return solicitudes;
    }catch(error){
       throw error;
 
    }
}

export const consultarDiasSolicitadosPorAnioServices = async (idEmpleado, anio) => {
  try {
    const diasSolicitados = await consultarDiasSolicitadosPorAnioDao(idEmpleado, anio);
    return diasSolicitados;
  } catch (error) {
    throw error;
  }
}
