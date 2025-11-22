import { Router } from "express";
import { consultarGestionVacacionesEspecialesController, registrarVacacionesEspecialesController } from "./vacacionesespeciaels.controller.js";

export const vacacionesespecialesRoute = Router();

vacacionesespecialesRoute.post('/registrarVacacionesEspeciales', registrarVacacionesEspecialesController);
vacacionesespecialesRoute.get('/consultarVacacionesEspeciales', consultarGestionVacacionesEspecialesController);
