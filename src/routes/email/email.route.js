import { Router } from "express";
import { EnviarMailController } from "../../controllers/email/email.controller.js";

export const emailRoute = Router();

emailRoute.post('/sendmail', EnviarMailController);

