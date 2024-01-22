import { Connection } from "../connection/Connection.js";

export const ObtenerDepartamentosDao = async () => {
    try{
        const [rowsDepartementos] = await Connection.query("SELECT IdDepartamento, departamento FROM departamentos WHERE estado = 'Y';");
        return [rowsDepartementos]; 
    }catch(error){
        return error;
    }
};