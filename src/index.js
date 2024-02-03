import express from "express";
import cors from "cors"; // Importa cors como una función
import { municipiosRoutes } from "./routes/catalogos/municipios.route.js";
import { generoRoute } from "./routes/catalogos/sexo.route.js";
import { nivelEductaivooRoute } from "./routes/catalogos/niveleducativo.route.js";
import { estadoCivilRoute } from "./routes/catalogos/estadocivil.route.js";
import { departamentosRoute } from "./routes/catalogos/departamentos.route.js";
import { cuiRoutes } from "./routes/dpi/dpi.route.js";
import { loginRoutes } from "./routes/login/login.route.js";
import { catalogosRoute } from "./routes/catalogos/catalogos.route.js";
import { familiaresRoute } from "./routes/familiares/familiares.route.js";
import { emailRoute } from "./routes/email/email.route.js";
import { empleadosRoute } from "./routes/empleados/empleados.route.js";
import { usuariosRoute } from "./routes/usuarios/usuarios.rout.js";
import { registrarDatos } from "./routes/registrarEmpleado/registrarEmpleado.rout.js";
import { suspensionesRoute } from "./routes/suspensiones/suspensiones.route.js";
import { comunidadesLRoute } from "./routes/catalogos/comunidadLinguistica.route.js";
import { puestosLRoute } from "./routes/catalogos/puestos.route.js";
import { renglonRoute } from "./routes/catalogos/renglon.route.js";

const app = express();
app.use(express.json());
app.use(cors());

//catalogos
app.use('/api/', catalogosRoute)
app.use('/api/', municipiosRoutes);
app.use('/api/', generoRoute);
app.use('/api/', nivelEductaivooRoute);
app.use('/api/', estadoCivilRoute);
app.use('/api/', departamentosRoute);
app.use('/api/', comunidadesLRoute);
app.use('/api/', puestosLRoute);
app.use('/api/', renglonRoute);

//acciones
app.use('/api/', cuiRoutes);
app.use('/api/', loginRoutes);
app.use('/api/', familiaresRoute);
app.use('/api/', emailRoute);
app.use('/api/', empleadosRoute);
app.use('/api/', usuariosRoute);
app.use('/api/', registrarDatos);
app.use('/api/', suspensionesRoute);


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/api/");
});
