import {
  getSolicitudesByIdDao,
  getSolicitudesByIdSolcitudDao,
} from "../../Dao/VacationApp/GetSolicitudById.Dao.js";
import { consultarPeriodosYDiasPorEmpeladoDao } from "../../Dao/VacationApp/HistorialVacaciones/ConsultasHistorial.dao.js";
import {
  actualizarEstadoSolicitudDao,
  eliminarSolicitudDao,
  IngresarSolicitudDao,
} from "../../Dao/VacationApp/ModificarSolicitud.Dao.js";
import { GenerarPlantillasCorreos } from "../../PlantillasCorreos/plantilas.js";
import { consultarCoordinadorService } from "../Coordinadores/Coordinadores.Service.js";
import { EnviarMailAutorizacionDeVacaciones } from "../email/EnvioEmailVacacionesAutorizadas.service.js";
import { generateVacationRequestPDF } from "../PDFGenerator/PDFGenerator.service.js";
import { notificarSolicitudVacacionesIngresada } from "../ServiciosGenerales/EnvioDeCorreos/Notificaciones.service.js";
import { obtenerPeriodosParaVacaciones } from "./HisotrialVacaciones/CalculoDeDias.service.js";

export const IngresarSolicitudService = async (data) => {
  try {
    //Consultar si exite una solicitud activa
    const solicitud = await getSolicitudesByIdDao(data.idEmpleado, data.idInfoPersonal);

    //Si existe una solicitud activa se elimina (Solo puede haber una solicitud activa)
    if (solicitud.idSolicitud) {
      await eliminarSolicitudDao(solicitud.idSolicitud);
    }

    //Se ingresa la solicitud
    const idSolicitud = await IngresarSolicitudDao(data);

    data.idSolicitud = idSolicitud;

    // Notificar de la solicitud ingresada via Correo al coordinador de la unidad
     await notificarSolicitudVacacionesIngresada(data);

    return idSolicitud;
  } catch (error) {

    if (error.codRes === 409) {
      const idSolicitud = await IngresarSolicitudDao(data)

      data.idSolicitud = idSolicitud;

      // Notificar de la solicitud ingresada via Correo al coordinador de la unidad
      await notificarSolicitudVacacionesIngresada(data);
      
      return idSolicitud;
    }
    throw error; // Mantener el throw para que el error se propague
  }

};

export const actualizarEstadoSolicitudService = async (data) => {
  let bufferPDF = null;

  try {

    //Autoriza la solicitud ingresada
    const result = await actualizarEstadoSolicitudDao(data);

    //Consulta de informacion de solicitud actualizar
    const solicitud = await getSolicitudesByIdSolcitudDao(data.idSolicitud,data.idEmpleado);
  
    //Consultar Datos coordinador
    const coordinador = await consultarCoordinadorService(solicitud.unidadSolicitud);

    const solicitudCompleta = {...solicitud, ...coordinador, ...data}

    //Generar pdf de la autorizacion
    if(data.estadoSolicitud === "autorizadas"){
      const periodos = await consultarPeriodosYDiasPorEmpeladoDao(data.idEmpleado);
      const diasPorPeriodo = obtenerPeriodosParaVacaciones(periodos, solicitud.cantidadDiasSolicitados);
      bufferPDF = await generateVacationRequestPDF(solicitudCompleta,diasPorPeriodo);
    }
    
    //Generar plantilla html para envio de correo.
    const plantillaHtml = GenerarPlantillasCorreos("autorizacion-vacaciones", solicitudCompleta);

    //Envio de correo solicitud autorizada
    await EnviarMailAutorizacionDeVacaciones(solicitud, plantillaHtml, bufferPDF);

    return result;
  } catch (error) {
    throw error; // Mantener el throw para que el error se propague
  }
};
