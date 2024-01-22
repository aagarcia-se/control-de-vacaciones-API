import { Router } from "express";
import { GetComunidadlinguisticaController } from "../../controllers/catalogos/comunidadesLinguisticas.controller.js";


export const comunidadesLRoute = Router();

comunidadesLRoute.get('/comunidadesLinguisticas', GetComunidadlinguisticaController);