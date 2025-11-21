import { Connection } from "../../Dao/Connection/ConexionSqlite.dao.js";

export const registrarVacacionesEspecialesDao = async (data) => {
    try {
        const queryInsert = `
            INSERT INTO vacaciones_especiales (idEmpleado, idInfoPersonal, 
            idUsuario, flagAutorizacion, fechaInicioValidez, fechaFinValidez, fechaIngresoGestion)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;

        const result = await Connection.execute(queryInsert, [
            data.idEmpleado,
            data.idInfoPersonal,
            data.idUsuario,
            data.flagAutorizacion,
            data.fechaInicioValidez,
            data.fechaFinValidez,
            data.fechaIngresoGestion,
        ]);

        // En SQLite usamos lastInsertRowid en lugar de insertId
        return Number(result.lastInsertRowid);
    } catch (error) {
        console.log("Error en registrarVacacionesEspecialesDao:", error);
        throw error;
    }
}

export const consultarVacacionesEspcialesDisponiblesDAo = async (fechaInicio, fechaFin) => {    
    try{

    }catch(error){
        console.log("Error en registrarVacacionesEspecialesDao:", error);
        throw error;
    }
}
