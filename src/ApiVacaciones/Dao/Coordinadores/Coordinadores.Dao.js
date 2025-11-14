import { Connection } from "../Connection/ConexionSqlite.dao.js";

export const registrarCoordinadorDao = async (data) => {
    try {
        const queryInsert = `
            INSERT INTO coordinadores (idEmpleado, nombreCoordinador, 
            coordinadorUnidad, correoCoordinador)
            VALUES (?, ?, ?, ?);
        `;

        const result = await Connection.execute(queryInsert, [
            data.idEmpleado,
            data.nombreCoordinador,
            data.coordinadorUnidad,
            data.correoCoordinador,
        ]);

        // En SQLite usamos lastInsertRowid en lugar de insertId
        return Number(result.lastInsertRowid);
    } catch (error) {
        console.log("Error en registrarCoordinadorDao:", error);
        throw error;
    }
}

export const consultarCoordinadorDao = async (coordinadorUnidad) => {
    try {
        const query = `
            SELECT idCoordinador, idEmpleado, nombreCoordinador, 
            coordinadorUnidad, correoCoordinador FROM coordinadores
            WHERE coordinadorUnidad = ?
            AND estado = 'A';
        `;

        const result = await Connection.execute(query, [coordinadorUnidad]);
        
        if (result.rows.length === 0) {
            throw {
                codRes: 409,
                message: "NO EXISTEN REGISTROS PARA EL COORDINADOR INGRESADO",
            };
        } else {
            return result.rows[0];
        }
    } catch (error) {
        console.log("Error en consultarCoordinadorDao:", error);
        throw error;
    }
}

export const consultarCoordinadoresListDao = async () => {
    try {
        const query = `
            SELECT idCoordinador, idEmpleado, nombreCoordinador, 
            coordinadorUnidad, correoCoordinador FROM coordinadores
            WHERE estado = 'A';
        `;

        const result = await Connection.execute(query);
        
        if (result.rows.length === 0) {
            throw {
                codRes: 409,
                message: "NO EXISTEN REGISTROS PARA EL COORDINADOR INGRESADO",
            };
        } else {
            return result.rows;
        }
    } catch (error) {
        console.log("Error en consultarCoordinadoresListDao:", error);
        throw error;
    }
}