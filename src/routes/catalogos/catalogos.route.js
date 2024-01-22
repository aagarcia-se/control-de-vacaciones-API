import { Router } from "express";
import { obtenerTipoFamiliaresController } from "../../controllers/catalogos/catalogos.controller.js";
import { GetDiscapacidadesController } from "../../controllers/catalogos/discapacidades.controller.js";
import { GetPueblosPController } from "../../controllers/catalogos/publosP.controller.js";


export const catalogosRoute = Router();

//Catalogo tipo de familiares
catalogosRoute.get('/tipoFamiliaresC', obtenerTipoFamiliaresController);
catalogosRoute.get('/discapacidadesList', GetDiscapacidadesController)
catalogosRoute.get('/pueblosList', GetPueblosPController)
