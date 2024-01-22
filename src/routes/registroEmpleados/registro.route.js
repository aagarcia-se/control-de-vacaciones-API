import { Router } from "express";
import { RegistrarUsuarioController } from "../../controllers/registrarEmpleado/registrarEmpleado.controller.js";

export const registroRoute = Router();

registroRoute.post('/registrarUsuario', RegistrarUsuarioController);