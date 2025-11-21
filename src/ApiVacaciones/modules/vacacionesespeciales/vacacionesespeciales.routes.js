import { Router } from "express";
import { registrarVacacionesEspecialesController } from "./vacacionesespeciaels.controller.js";

export const vacacionesespecialesRoute = Router();

vacacionesespecialesRoute.post('/registrarVacacionesEspeciales', registrarVacacionesEspecialesController);