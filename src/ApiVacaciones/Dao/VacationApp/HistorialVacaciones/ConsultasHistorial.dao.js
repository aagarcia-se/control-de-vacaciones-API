import { Connection } from "../../Connection/ConexionSqlite.dao.js";

export const obtenerHistorialPorEmpleadoDao = async (idEmpleado) => {
  try {
    const query = `SELECT idHistorial, idEmpleado, idSolicitudCorrelativo AS Gestion,
                    idEmpleado, periodo, totalDiasAcreditados, diasSolicitados,
                    totalDiasDebitados, diasDisponiblesTotales, fechaAcreditacion, fechaDebito, 
                    tipoRegistro
                    FROM HistorialVacaciones
                    WHERE idEmpleado = ?`;

    const result = await Connection.execute(query, [idEmpleado]);
    
    if (result.rows.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTE SOLICITUDES",
      };
    } else {
      return result.rows;
    }
  } catch (error) {
    console.log("Error en obtenerHistorialPorEmpleadoDao:", error);
    throw error;
  }
};

export const consultarPeriodosYDiasPorEmpeladoDao = async (idEmpleado) => {
  try {
    const query = `SELECT periodo, MIN(diasDisponibles) AS diasDisponibles
                  FROM historial_vacaciones 
                  WHERE idEmpleado = ?
                  GROUP BY periodo;`;

    const result = await Connection.execute(query, [idEmpleado]);

    if (result.rows.length === 0) {
      return [];
    }

    return result.rows;
  } catch (error) {
    console.log("Error en consultarPeriodosYDiasPorEmpeladoDao:", error);
    throw error;
  }
};

export const consultarDiasDisponiblesDeVacacacionesDao = async (idEmpleado) => {
  try {
    const query = `SELECT SUM(diasDisponibles) AS diasDisponiblesT
                  FROM historial_vacaciones
                  WHERE idEmpleado = ?;`;

    const result = await Connection.execute(query, [idEmpleado]);

    if (result.rows.length === 0) {
      return { diasDisponiblesT: 0 };
    }

    return result.rows[0];
  } catch (error) {
    console.log("Error en consultarDiasDisponiblesDeVacacacionesDao:", error);
    throw error;
  }
};