import { Router } from "express";
import { ObtenerSexoController } from "../../controllers/catalogos/sexo.controller.js";

export const generoRoute = Router();

generoRoute.get('/genero', ObtenerSexoController);