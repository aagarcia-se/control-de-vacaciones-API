import { Router } from "express";
import { GetPuestosLaboralesController } from "../../controllers/catalogos/puestos.controller.js";

export const puestosLRoute = Router();

puestosLRoute.get('/puestos', GetPuestosLaboralesController);