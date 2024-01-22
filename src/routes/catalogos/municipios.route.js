import { Router } from "express";
import { ObtenerMunicipiosController, ObtenerMunicipioByIdController } from "../../controllers/catalogos/municipios.controller.js";

export const municipiosRoutes = Router();

municipiosRoutes.get('/municipios', ObtenerMunicipiosController);
municipiosRoutes.get('/municipio/:id', ObtenerMunicipioByIdController);