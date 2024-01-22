import { Router } from "express";
import { IngresarUsuarioController } from "../../controllers/usuarios/usuarios.controller.js";

export const usuariosRoute = Router();

usuariosRoute.post('/usuarioSave', IngresarUsuarioController);