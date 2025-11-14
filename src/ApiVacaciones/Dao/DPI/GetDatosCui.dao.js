import { Connection } from "../Connection/ConexionSqlite.dao.js";

export const obtenerInfoDPIDao = async (idDpi) => {
  try {
    const query = `SELECT idDpi, numeroDocumento, departamentoExpedicion,
                    municipioExpedicion, fechaVencimientoDpi
                    FROM dpiEmpleados
                    WHERE idDpi = ?;`;

    const result = await Connection.execute(query, [idDpi]);
    
    if (result.rows.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTE EMPLEADO CON EL ID INGRESADO",
      };
    } else {
      return result.rows[0];
    }
  } catch (error) {
    console.log("Error en obtenerInfoDPIDao:", error);
    throw error;
  }
};