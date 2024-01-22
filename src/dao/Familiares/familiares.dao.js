import { Connection } from "../connection/Connection.js";

export const ConsultarFamiliaresDao = async (cuiEmpleado) => {
    try{
        const [familiaresResul] = await Connection.query("select f.idFamiliar, f.nombre, f.fechaNacimiento, tp.parentesco, f.cuiEmpleado, f.estado from familiares f, tipo_parentesco tp where tp.idParentesco = f.idParentesco and f.cuiEmpleado = ? and f.estado = 'Y';", [cuiEmpleado]);
        if (familiaresResul.length === 0) {
            throw  {
                status: 500,
                codeError: 101,
                meessage: "NO SE ENCONTRO EL CUI INGRESADO"
            }
        }
        return familiaresResul; 
    }catch(error){
        throw error;
     }    
}


export const IngresarFamiliaresDao = async (data) => {
    try{
        const [resultInsert] = await Connection.query("insert into familiares (nombre, fechaNacimiento, idParentesco, cuiEmpleado) values (?, ?, ?, ?);", [data.nombre, data.fechaNacimiento, data.idParentesco, data.cuiEmpleado]);
        return resultInsert.affectedRows;
        
    }catch(error){
        throw error;
    }

}

export const ActualizarFamiliaresDao = async (data) => {
    try{
        const [resultUpdate] = await Connection.query("update familiares set nombre = ?, fechaNacimiento = ?, idParentesco = ?, cuiEmpleado = ? where idFamiliar = ? and estado = 'Y';", [data.nombre, data.fechaNacimiento, data.idParentesco, data.cuiEmpleado, data.idFamiliar]);
        if(resultUpdate.affectedRows === 0){
            throw  {
                status: 401,
                codeError: 103,
                meessage: "REGISTRO NO ENCONTRADO"
            }
        }
        return resultUpdate.affectedRows;
    }catch(error){
        throw error;
    }
}

export const EliminarFamiliaresDao = async (idFamiliar) => {
    try{
        const [resultDelete] = await Connection.query("UPDATE familiares SET Estado = 'N' WHERE idFamiliar = ?;", [idFamiliar]);
        if(resultDelete.affectedRows === 0){
            throw  {
                status: 401,
                codeError: 103,
                meessage: "REGISTRO NO ENCOTRADO"
            }
        }
        return resultDelete.affectedRows;
    }catch(error){
        throw error;
    }
}