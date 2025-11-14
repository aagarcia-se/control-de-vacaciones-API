import { Connection } from "../../Connection/ConexionSqlite.dao.js";

/**
 * Inserta múltiples registros de vacaciones en la tabla `historial_vacaciones` para un lote de periodos.
 *
 * @async
 * @function acreditarDiasPorPeriodoLoteDao
 * @param {Array<Object>} data - Array de objetos que contienen los datos de cada empleado y el periodo a acreditar.
 * @param {number} data[].idEmpleado - ID del empleado.
 * @param {number} data[].idInfoPersonal - ID de la información personal del empleado.
 * @param {number} data[].periodo - Periodo al que se están acreditando los días de vacaciones.
 * @param {number} data[].diasPeriodo - Días acreditados y disponibles para el periodo.
 * @param {number} data[].sumatoriaCalculo - Cálculo acumulativo de los días.
 * @param {string} data[].fechaAcreditacion - Fecha en la que se acredita el periodo (formato YYYY-MM-DD).
 * @returns {Promise<number>} - Número de registros insertados exitosamente.
 * @throws {Error} - Lanza un error si falla la conexión o la inserción.
 */
export const acreditarDiasPorPeriodoLoteDao = async (data) => {
  if (!Array.isArray(data)) {
    throw new Error("El parámetro 'data' debe ser un arreglo de objetos.");
  }

  try {
    let contadorDeInserciones = 0;

    // Recorrer cada objeto dentro del array `data`
    for (const item of data) {
      await Connection.execute(
        `INSERT INTO historial_vacaciones 
            (idEmpleado, idInfoPersonal, periodo, 
             diasAcreditados, diasDisponibles, 
             sumatoriaDias, fechaActualizacion, fechaAcreditacion) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          item.idEmpleado,
          item.idInfoPersonal,
          item.anioPeriodo,
          item.diasPeriodo, // `diasAcreditados` es `diasPeriodo` aquí
          item.diasPeriodo, // `diasDisponibles` es igual a `diasPeriodo`
          item.sumatoriaCalculo,
          item.fechaActualizacion,
          item.fechaAcreditacion,
        ]
      );
      contadorDeInserciones++;
    }

    return contadorDeInserciones; // Retorna el número de inserciones realizadas
  } catch (error) {
    console.log("Error en acreditarDiasPorPeriodoLoteDao:", error);
    throw error;
  }
};

export const acreditarDiasPorPeriodoDao = async (data) => {
  try {
    const result = await Connection.execute(
      `INSERT INTO historial_vacaciones  (idEmpleado, idInfoPersonal, periodo, 
                                                diasAcreditados, diasDisponibles,
                                                sumatoriaDias, fechaActualizacion, fechaAcreditacion)
                                                VALUES (?, ?, ?, ?, ?, ?, ?, ?); `,
      [
        data.idEmpleado,
        data.idInfoPersonal,
        data.anioPeriodo,
        data.diasPeriodo, // `diasAcreditados` es `diasPeriodo` aquí
        data.diasPeriodo, // `diasDisponibles` es igual a `diasPeriodo`
        data.sumatoriaCalculo,
        data.fechaActualizacion,
        data.fechaAcreditacion,
      ]
    );
    return Number(result.lastInsertRowid);
  } catch (error) {
    console.log("Error en acreditarDiasPorPeriodoDao:", error);
    throw error;
  }
};

export const ActualizarDiasAcumuladosPorPeriodoDao = async (data) => {
  try {
    const result = await Connection.execute(
      `UPDATE historial_vacaciones SET diasAcreditados = ?, 
                diasDisponibles   = ?, sumatoriaDias = ?, 
                fechaActualizacion = ?
                WHERE periodo = ?
                AND idEmpleado = ?
                AND idInfoPersonal = ?;`,
      [
        data.diasPeriodo,
        data.diasPeriodo,
        data.sumatoriaCalculo,
        data.fechaActualizacion,
        data.anioPeriodo,
        data.idEmpleado,
        data.idInfoPersonal,
      ]
    );
    return result.rowsAffected;
  } catch (error) {
    console.log("Error en ActualizarDiasAcumuladosPorPeriodoDao:", error);
    throw error;
  }
};

export const getUltiaAcreditacionDiasDao = async (idEmpleado) => {
  try {
    const query = `SELECT idHistorial, idEmpleado, idInfoPersonal, periodo, diasAcreditados,
                    diasDisponibles, sumatoriaDias, fechaActualizacion
                    FROM historial_vacaciones
                    WHERE idEmpleado = ?
                    AND tipoRegistro = 1
                    ORDER BY idHistorial DESC
                    LIMIT 1;`;

    const result = await Connection.execute(query, [idEmpleado]);
    
    if (result.rows.length === 0) {
      return 0;
    } else {
      return result.rows[0];
    }
  } catch (error) {
    console.log("Error en getUltiaAcreditacionDiasDao:", error);
    throw error;
  }
};

export const debitarDiasPorPeriodoDao = async (data) => {
  if (!Array.isArray(data)) {
    throw new Error("El parámetro 'data' debe ser un arreglo de objetos.");
  }

  try {
    let contadorDeInserciones = 0;

    // Recorrer cada objeto dentro del array `data`
    for (const item of data) {
      const insert = `INSERT INTO historial_vacaciones (idEmpleado, idInfoPersonal, idSolicitud, periodo, diasSolicitados, diasDebitados,  diasDisponibles, fechaActualizacion, tipoRegistro) 
                              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      
      await Connection.execute(insert, [
        item.idEmpleado,
        item.idInfoPersonal,
        item.idSolicitud,
        item.anioPeriodo,
        item.diasSolicitados,
        item.diasDebitados,
        item.diasDisponibles,
        item.fechaActualizacion,
        item.tipoRegistro,
      ]);
      contadorDeInserciones++;
    }

    return contadorDeInserciones; // Retorna el número de inserciones realizadas
  } catch (error) {
    console.log("Error en debitarDiasPorPeriodoDao:", error);
    throw error;
  }
};