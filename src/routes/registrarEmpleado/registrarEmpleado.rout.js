import { Router } from "express";
import { RegistrarEmpleadoController } from "../../controllers/registrarEmpleado/registrarEmpleado.controller.js";

export const registrarDatos = Router();

registrarDatos.post('/registrarEmpleado', RegistrarEmpleadoController);