import { Connection } from "../Connection/ConexionSqlite.dao.js";

export const IngresarEmpleadoDao = async (data) => {
    try {
        const query = "INSERT INTO empleados (idInfoPersonal, puesto, salario, fechaIngreso, correoInstitucional, extensionTelefonica, unidad, renglon, observaciones, coordinacion, tipoContrato, numeroCuentaCHN, numeroContrato, numeroActa, numeroAcuerdo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

        const result = await Connection.execute(query, [
            data.idInfoPersonal,
            data.puesto,
            data.salario,
            data.fechaIngreso,
            data.correoInstitucional,
            data.extensionTelefonica,
            data.unidad,
            data.renglon,
            data.observaciones,
            data.coordinacion, 
            data.tipoContrato,
            data.numeroCuentaCHN,
            data.numeroContrato,
            data.numeroActa,
            data.numeroAcuerdo
        ]);

        return Number(result.lastInsertRowid);
    } catch (error) {
        console.log("Error en IngresarEmpleadoDao:", error);
        throw error;
    }
}

export const consultarEmpleadosUltimoAnioDao = async (anioEnCurso) => {
    try {
        const query = `select e.idEmpleado, e.idInfoPersonal, 
                        concat(i.primernombre, ' ', i.segundoNombre, ' ', i.primerApellido, ' ', i.segundoApellido)Nombre
                        from empleados e
                            inner join infoPersonalEmpleados i on e.idInfoPersonal = i.idInfoPersonal
                        where fechaIngreso between date(?, '-1 year') AND date(?);`;

        const result = await Connection.execute(query, [anioEnCurso, anioEnCurso]);

        if (result.rows.length === 0) {
            throw {
                codRes: 409,
                message: "NO EXISTE EMPLEADO EN EL ULTIMO AÑO",
            };
        } else {
            return result.rows;
        }
    } catch (error) {
        console.log("Error en consultarEmpleadosUltimoAnioDao:", error);
        throw error;
    }
}