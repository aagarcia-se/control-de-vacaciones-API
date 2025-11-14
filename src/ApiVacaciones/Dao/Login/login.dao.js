import { Connection } from "../Connection/ConexionSqlite.dao.js";

export const getLoginDataDao = async (data) => {
    try {
        const query = `SELECT dp.idDpi, ip.idInfoPersonal, em.idEmpleado, 
                      ip.primerNombre, ip.primerApellido, dp.numeroDocumento, 
                      us.usuario, us.idRol, em.unidad, em.fechaIngreso
                      FROM usuarios us, dpiEmpleados dp, infoPersonalEmpleados ip, empleados em 
                      WHERE dp.idDpi = ip.idDpi 
                      AND ip.idInfoPersonal = em.idInfoPersonal 
                      AND em.idEmpleado = us.idEmpleado
                      AND us.usuario = ? AND us.pass = ?`;
        
        const result = await Connection.execute(query, [data.usuario, data.pass]);
        
        if (result.rows.length === 0) {
            throw {
                codRes: 401,
                message: "Usuario o contraseña incorrecta" 
            };
        } else {
            return result.rows[0];
        }

    } catch (error) {
        console.log("Error en getLoginDataDao:", error);
        throw error;
    }
}