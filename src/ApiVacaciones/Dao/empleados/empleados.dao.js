import { Connection } from "../Connection/ConexionSqlite.dao.js";

export const IngresarEmpleadoDao = async (data) => {
    try {
        const query = "INSERT INTO empleados (idInfoPersonal, puesto, salario, fechaIngreso, correoInstitucional, extensionTelefonica, unidad, renglon, observaciones, coordinacion, tipoContrato, numeroCuentaCHN, numeroContrato, numeroActa, numeroAcuerdo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

        const result = await Connection.execute(query, [
            data.idInfoPersonal,
            data.puesto,
            data.salario,
            data.fechaIngreso,
            data.correoInstitucional,
            data.extensionTelefonica,
            data.unidad,
            data.renglon,
            data.observaciones,
            data.coordinacion, 
            data.tipoContrato,
            data.numeroCuentaCHN,
            data.numeroContrato,
            data.numeroActa,
            data.numeroAcuerdo
        ]);

        return Number(result.lastInsertRowid);
    } catch (error) {
        console.log("Error en IngresarEmpleadoDao:", error);
        throw error;
    }
}