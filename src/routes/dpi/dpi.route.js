import { Router } from "express";
import { ActualizarCuiController, ConsultarAllCuiController, ConsultarCuiController, EliminarCuiController } from "../../controllers/dpi/dpi.controller.js";
import { IngresarCuiController } from "../../controllers/dpi/dpi.controller.js";


export const cuiRoutes = Router();

cuiRoutes.get('/ConsultarCui/:dpi', ConsultarCuiController);
cuiRoutes.get('/ConsultarAllCui', ConsultarAllCuiController);
cuiRoutes.post('/IngrsarCui/', IngresarCuiController);
cuiRoutes.put('/ActualizarCui/', ActualizarCuiController);
cuiRoutes.delete('/EliminarCui/:idCui', EliminarCuiController);
