import { Router } from "express";
import { ObtenerEstadCivilController } from "../../controllers/catalogos/estadocivil.controller.js";

export const estadoCivilRoute = Router();

estadoCivilRoute.get('/estadoCivil', ObtenerEstadCivilController);