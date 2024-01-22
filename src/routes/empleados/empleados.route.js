import { Router } from "express";
import { IngresarEmpleadosController } from "../../controllers/empleados/empleados.controller.js";

export const empleadosRoute = Router();

empleadosRoute.post('/empleadosSave', IngresarEmpleadosController);