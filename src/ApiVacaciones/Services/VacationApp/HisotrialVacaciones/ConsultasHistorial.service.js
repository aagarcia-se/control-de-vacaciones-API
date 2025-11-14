import { consultarDiasDebitadosPorAnioDao, consultarDiasDisponiblesDao, obtenerHistorialPorEmpleadoDao } from "../../../Dao/VacationApp/HistorialVacaciones/ConsultasHistorial.dao.js";

export const obtenerHistorialPorEmpleadoService = async (idEmpleado) => {
    try{
          const historial = await obtenerHistorialPorEmpleadoDao(idEmpleado);
          return historial;
    }catch(error){
       throw error;
    }
}

export const consultarDiasDebitadosPorAnioServices = async (idEmpleado, anio) => {
      try{
          const historial = await consultarDiasDebitadosPorAnioDao(idEmpleado, anio);
          return historial;
    }catch(error){
       throw error;
    }
}

export const consultarDiasDisponiblesServices = async (idEmpleado) => {
    try{
          const historial = await consultarDiasDisponiblesDao(idEmpleado);
          return historial;
    }catch(error){
       throw error;
    }
}