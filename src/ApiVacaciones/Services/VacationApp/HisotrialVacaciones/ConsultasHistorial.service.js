import { consultarDiasDisponiblesDeVacacacionesDao, obtenerHistorialPorEmpleadoDao } from "../../../Dao/VacationApp/HistorialVacaciones/ConsultasHistorial.dao.js";

export const obtenerHistorialPorEmpleadoService = async (idEmpleado) => {
    try{
          const historial = await obtenerHistorialPorEmpleadoDao(idEmpleado);
          return historial;
    }catch(error){
       throw error;
    }
}

export const consultarDiasDisponiblesDeVacacacionesServices = async (idEmpleado) => {
      try{
          const historial = await consultarDiasDisponiblesDeVacacacionesDao(idEmpleado);
          return historial;
    }catch(error){
       throw error;
    }
}