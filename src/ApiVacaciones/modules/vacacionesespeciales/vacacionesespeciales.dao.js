import { Connection } from "../../Dao/Connection/ConexionSqlite.dao.js";

export const registrarVacacionesEspecialesDao = async (data) => {
    console.log(data)
    try {
        const queryInsert = `
            INSERT INTO vacaciones_especiales (idEmpleado, idInfoPersonal, 
            idUsuario, flagAutorizacion, descripcion, fechaInicioValidez, fechaFinValidez, fechaIngresoGestion)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        `;

        const result = await Connection.execute(queryInsert, [
            data.idEmpleado,
            data.idInfoPersonal,
            data.idUsuario,
            data.flagAutorizacion,
            data.descripcion,
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

export const consultarGestionVacacionesEspecialesDao = async (idEmpleado, fechaEnCurso) => {    
    try{

        const query = `SELECT count(*) as isExist
                        FROM vacaciones_especiales
                        WHERE idEmpleado = ?
                        AND estado = 'A'
                        AND date(?) BETWEEN fechaInicioValidez AND fechaFinValidez
                        AND flagAutorizacion = 1;`

        const result = await Connection.execute(query, [idEmpleado, fechaEnCurso]);

        return result.rows[0];

    }catch(error){
        console.log("Error en consultarGestionVacacionesEspecialesDao:", error);
        throw error;
    }
}
