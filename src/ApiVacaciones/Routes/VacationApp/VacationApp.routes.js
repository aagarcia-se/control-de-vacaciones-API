import { Router } from "express";
import { consultarSolicitudesPorEmpleadoController, getSolicitudesByIdController } from "../../Controller/VacationApp/GetSolicitudesById.controller.js";
import { actualizarEstadoSolicitudConroller, IngresarSolicitudController } from "../../Controller/VacationApp/ModificarSolicitud.controller.js";
import { consultarDiasSolicitadosPorAnioController, getSolicitudesController } from "../../Controller/VacationApp/GetSolicitudes.Controller.js";
import { acreditarDiasPorPeriodoController, debitarDiasPorPeriodoController } from "../../Controller/VacationApp/HisotoriaVacaciones/ControlDeDias.controller.js";
import {  consultarDiasDebitadosPorAnioController, consultarDiasDisponiblesController, obtenerHistorialPorEmpleadoController } from "../../Controller/VacationApp/HisotoriaVacaciones/ConsultasHistorial.controller.js";

export const VacationAppRoute = Router();


VacationAppRoute.get('/solicitudesById', getSolicitudesByIdController);
VacationAppRoute.post('/ingresarSolicitudVacaciones', IngresarSolicitudController);
VacationAppRoute.get('/solicitudes', getSolicitudesController);
VacationAppRoute.put('/UpdateEstadoSolicitud', actualizarEstadoSolicitudConroller);
VacationAppRoute.post('/acreditarDias', acreditarDiasPorPeriodoController);
VacationAppRoute.get('/getHistorial', obtenerHistorialPorEmpleadoController);
VacationAppRoute.post('/debitarDias', debitarDiasPorPeriodoController);
VacationAppRoute.get('/consultarDiasSolicitadosPorAnio', consultarDiasSolicitadosPorAnioController);
VacationAppRoute.get('/consultarDiasDebitadosPorAnio', consultarDiasDebitadosPorAnioController);
VacationAppRoute.get('/consultarDiasDisponibles', consultarDiasDisponiblesController);
VacationAppRoute.get('/consultarSolicitudesPorEmpleado', consultarSolicitudesPorEmpleadoController);