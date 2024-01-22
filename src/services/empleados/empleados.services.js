import { IngresarEmpleadoDao, ObtenerCodigoCalboarador } from "../../dao/empleados/empleados.dao.js";


export const IngresarEmpleadoServices = async (data) => {
      try{
            const codigoE = await GenerarCodigoEmpleado();

            data.codigoColaborador = codigoE;

            const result = await IngresarEmpleadoDao(data);
            return result;

      }catch(error){
            throw error;
      }
  }


const GenerarCodigoEmpleado = async () => {
      try{
            const codigoColaborador = await ObtenerCodigoCalboarador();
            return  parseInt(codigoColaborador) + 1;            

      }catch(error){
            throw error;
      }
}