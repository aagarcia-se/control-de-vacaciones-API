import { CloseConection, OpenConection } from "../../Connection/ConexionV.dao.js";

let dbConnection;

export const obtenerHistorialPorEmpleadoDao = async (idEmpleado) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select idHistorial, idEmpleado, idSolicitudCorrelativo As Gestion,
                    idEmpleado, periodo, totalDiasAcreditados, diasSolicitados,
                    totalDiasDebitados, diasDisponiblesTotales, fechaAcreditacion, fechaDebito, 
                    tipoRegistro
                    from HistorialVacaciones
                    where idEmpleado = ?
                    `;

    const [historial] = await dbConnection.query(query, [idEmpleado]);
    if (historial.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTE SOLICITUDES",
      };
    } else {
      return historial;
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};

export const consultarPeriodosYDiasPorEmpeladoDao = async (idEmpleado) => {
    try {
      dbConnection = await OpenConection();
      await dbConnection.beginTransaction();

      const query = `SELECT periodo, MIN(diasDisponibles) AS diasDisponibles
                    FROM historial_vacaciones 
                    WHERE idEmpleado = ?
                    GROUP BY periodo;`

      const [periodosConDias] = await dbConnection.query(query, [idEmpleado]);

      if (periodosConDias.length === 0) {
        return  [];
      }

      await dbConnection.commit();

      return periodosConDias;
        
    } catch (error) {
        throw error;
    }finally{
      if (dbConnection) {
        await CloseConection(dbConnection);
      }
    }
}

export const consultarDiasDisponiblesDeVacacacionesDao = async (idEmpleado) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select sum(diasDisponibles)diasDisponiblesT
                      from historial_vacaciones
                      where idEmpleado = ?;`

    const [diasDisponibles] = await dbConnection.query(query, [idEmpleado]);

    if (diasDisponibles.length === 0) {
      return [];
    }

    await dbConnection.commit();

    return diasDisponibles[0];

  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
}

