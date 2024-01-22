import { Router } from "express";
import { ConsultarUsuarioController } from "../../controllers/login/login.controller.js";

export const loginRoutes = Router();


loginRoutes.post('/login', ConsultarUsuarioController);
