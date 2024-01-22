import { Router } from "express";
import { ObtenerDepartamentosController } from "../../controllers/catalogos/departamentos.controller.js";

export const departamentosRoute = Router();

departamentosRoute.get('/departamentos', ObtenerDepartamentosController);

