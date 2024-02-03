import { Router } from "express";
import { GetRenglonController } from "../../controllers/catalogos/renglones.controller.js";

export const renglonRoute = Router();

renglonRoute.get('/renglones', GetRenglonController);