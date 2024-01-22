import { Connection } from "../connection/Connection.js";

export const IngresarEmpleadoDao = async (data) => {
    try{
        const [result] = await Connection.execute(
            'INSERT INTO empleados (cui, primerNombre, segundoNombre, tercerNombre, primerApellido, segundoApellido, apellidoCasada, correo, celular, nit, tipoLicencia, codigoColaborador, fotografia, noIgss, correoInstitucional, cuentaBancariaCHN, valorBoletoOrnato, actualizacionOGC, extencionTelefono, codigoImpresora, idNivelEducativo, idPueblo, idComunidadLinguistica, idDiscapacidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              data.cui, data.primerNombre, data.segundoNombre, data.tercerNombre, data.primerApellido, data.segundoApellido, data.apellidoCasada,
              data.correo, data.celular, data.nit, data.tipoLicencia, data.codigoColaborador, data.fotografia, data.noIgss, data.correoInstitucional,
              data.cuentaBancariaCHN, data.valorBoletoOrnato, data.actualizacionOGC, data.extencionTelefono, data.codigoImpresora, data.idNivelEducativo,
              data.idPubelo, data.idComunidadLinguistica, data.idDiscapacidad
            ]
          );
        return {idEmpleado: result.insertId,
                codigoEmpleado: data.codigoColaborador} 

    }catch(error){
        throw error;
    }

}

export const ObtenerCodigoCalboarador = async () => {
  try {
    const [resultado] = await Connection.query("SELECT codigoColaborador FROM empleados WHERE estado = 'Y' ORDER BY codigoColaborador DESC LIMIT 1;");
    
    // Verificar si hay algún resultado
    if (resultado.length > 0) {
      const codigoColaborador = resultado[0].codigoColaborador;
      return codigoColaborador;
    } else {
      // Manejar el caso en que no hay resultados
      return 999;
    }

  } catch (error) {
    throw error;
  }
}