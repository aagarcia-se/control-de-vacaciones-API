import { Router } from "express";
import { ObtenerNivelEducativoController } from "../../controllers/catalogos/niveleducativo.controller.js";

export const nivelEductaivooRoute = Router();

nivelEductaivooRoute.get('/educacion', ObtenerNivelEducativoController);