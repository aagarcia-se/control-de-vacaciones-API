import { Router } from "express";
import { IngresarEmpleadoController } from "../../Controller/empleados/empleados.controller.js";

export const empleadosRoute = Router();

empleadosRoute.post('/ingresarEmpleado', IngresarEmpleadoController);