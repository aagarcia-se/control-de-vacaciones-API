import { Router } from "express";
import { ActualizarFamiliaresController, ConsultarFamiliaresController, EliminarFamiliaresController, IngresarFamiliareresController } from "../../controllers/familiares/familiares.controller.js";
export const familiaresRoute = Router();

familiaresRoute.get('/ObtenerFamiliares/:cuiEmpleado', ConsultarFamiliaresController);
familiaresRoute.post('/IngresarFamiliares/', IngresarFamiliareresController);
familiaresRoute.put('/ActualizarFamiliares/', ActualizarFamiliaresController);
familiaresRoute.delete('/EliminarFamiliares/:idFamiliar', EliminarFamiliaresController);