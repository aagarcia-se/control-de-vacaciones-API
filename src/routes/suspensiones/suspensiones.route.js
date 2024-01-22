import { Router } from "express";
import { IngresarSuspensionesController } from "../../controllers/suspensiones/suspensiones.controller.js";

export const suspensionesRoute = Router();

suspensionesRoute.post('/ingresarSuspensiones', IngresarSuspensionesController);
