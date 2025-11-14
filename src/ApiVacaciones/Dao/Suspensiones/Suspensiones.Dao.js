import { Connection } from "../Connection/ConexionSqlite.dao.js";

export const ingresarSuspensionDao = async (data) => {
    try {
        const queryInsert = `
            INSERT INTO suspensiones (idEmpleado, CUI, nombreEmpleado,
            fechaInicioSuspension, fechaFinSuspension, descripcionSuspension)
            VALUES (?, ?, ?, ?, ?, ?);
        `;

        const result = await Connection.execute(queryInsert, [
            data.idEmpleado,
            data.CUI,
            data.nombreEmpleado,
            data.fechaInicioSuspension,
            data.fechaFinSuspension,
            data.descripcionSuspension
        ]);

        return Number(result.lastInsertRowid);
    } catch (error) {
        console.log("Error en ingresarSuspensionDao:", error);
        throw error;
    }
};

export const GetSuspensionesDao = async () => {
    try {
        const query = `
            SELECT idSuspension, idEmpleado, CUI, 
            nombreEmpleado, fechaInicioSuspension, fechaFinSuspension,
            descripcionSuspension FROM suspensiones
            WHERE estado = 'A'
            ORDER BY idSuspension DESC;
        `;

        const result = await Connection.execute(query);
        
        if (result.rows.length === 0) {
            throw {
                codRes: 409,
                message: "NO EXISTEN REGISTROS",
            };
        } else {
            return result.rows;
        }
    } catch (error) {
        console.log("Error en GetSuspensionesDao:", error);
        throw error;
    }
};