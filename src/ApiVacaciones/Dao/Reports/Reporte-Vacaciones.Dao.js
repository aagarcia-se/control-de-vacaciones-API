import { Connection } from "../Connection/ConexionSqlite.dao.js";

export const vacacionesReportDao = async (unidad) => {
  try {
    const query = `
      SELECT sv.idSolicitud, sv.idEmpleado, 
      (inf.primerNombre || ' ' || inf.segundoNombre || 
      ' ' || inf.primerApellido || ' ' || inf.segundoApellido) AS Nombre,
      sv.unidadSolicitud, sv.fechaInicioVacaciones, sv.fechaFinVacaciones,
      sv.fechaRetornoLabores, sv.cantidadDiasSolicitados, sv.estadoSolicitud,
      sv.fechaSolicitud, sv.coordinadorResolucion AS coordinadorAprobo,
      sv.fechaResolucion AS fechaAutorizacion, sv.descripcionRechazo, 
      sv.fechaSolicitud
      FROM solicitudes_vacaciones sv,
      infoPersonalEmpleados inf, empleados emp
      WHERE sv.idEmpleado = emp.idEmpleado
      AND sv.idInfoPersonal = inf.idInfoPersonal
      AND unidadSolicitud = ?;
    `;

    const result = await Connection.execute(query, [unidad]);
    
    if (result.rows.length === 0) {
      throw {
        codRes: 409,
        message: "NO REGISTROS PARA LOS DATOS INGRESADOS",
      };
    } else {
      return result.rows;
    }
  } catch (error) {
    console.log("Error en vacacionesReportDao:", error);
    throw error;
  }
};