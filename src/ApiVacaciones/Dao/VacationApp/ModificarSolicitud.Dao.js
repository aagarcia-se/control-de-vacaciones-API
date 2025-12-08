import { Connection } from "../Connection/ConexionSqlite.dao.js";

export const IngresarSolicitudDao = async (data) => {
    try {
        const result = await Connection.execute(`INSERT INTO solicitudes_vacaciones (idEmpleado, idInfoPersonal, idCoordinador, 
                                                unidadSolicitud, fechaInicioVacaciones, fechaFinVacaciones, 
                                                fechaRetornoLabores, cantidadDiasSolicitados)
                                                 VALUES 
                                                 (?, ?, ?, ?, ?, ?, ?, ?);`, 
            [data.idEmpleado,
             data.idInfoPersonal,
             data.idCoordinador,
             data.unidadSolicitud, 
             data.fechaInicioVacaciones,
             data.fechaFinVacaciones,
             data.fechaRetornoLabores,
             data.cantidadDiasSolicitados
            ]);
        return Number(result.lastInsertRowid);
    } catch (error) {
        console.log("Error en IngresarSolicitudDao:", error);
        throw error;
    }
};

export const eliminarSolicitudDao = async (idSolicitud) => {
    try {
        const result = await Connection.execute(`UPDATE solicitudes_vacaciones SET estado = 'N'
                                                 WHERE idSolicitud = ?`, 
            [idSolicitud]);
        return result.rowsAffected;
    } catch (error) {
        console.log("Error en eliminarSolicitudDao:", error);
        throw error;
    }
};

export const actualizarEstadoSolicitudDao = async (data) => {
    try {
        const result = await Connection.execute(`UPDATE solicitudes_vacaciones 
                                                    SET estadoSolicitud = ? 
                                                    WHERE idSolicitud = ? 
                                                    AND idEmpleado = ?;`, 
            [data.estadoSolicitud, data.idSolicitud, data.idEmpleado]);
        return result.rowsAffected;
    } catch (error) {
        console.log("Error en actualizarEstadoSolicitudDao:", error);
        throw error;
    }
};