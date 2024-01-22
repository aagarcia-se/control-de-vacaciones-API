import { Connection } from "../connection/Connection.js";

export const ConsultarAllCuiDao = async () => {
    let connection;
    try{

        connection = Connection.getConnection();
        const [allCUi] = await Connection.query("SELECT C.IdDpi, C.CUI, C.fecha_nacimiento, D.departamento, M.municipio, C.nacionalidad, E.estado_civil, C.Estado FROM dpi C, departamentos D, municipios M, estados_civiles E WHERE M.IdMunicipio = C.IdMunicipio AND D.IdDepartamento = C.IdDepartamento AND E.IdEstadoCivil = C.IdEstadoCivil AND  C.Estado = 'Y';");
        if (allCUi.length === 0) {
            throw  {
                status: 401,
                codeError: 101,
                meessage: "NO SE ENCONTRARON REGISTROS"
            }
        }
        return allCUi;
    }catch(error){
        throw error;
    }finally{
        if (Connection) {
            Connection.release();
            console.log('Conexión cerrada correctamente');
        }
    }
}

export const ConsultarCuiDao = async (cui) => {
    try{
        const [cuiRes] = await Connection.query("SELECT C.IdDpi, C.CUI, C.fecha_nacimiento, D.departamento, M.municipio, C.nacionalidad, E.estado_civil, C.Estado FROM dpi C, departamentos D, municipios M, estados_civiles E WHERE M.IdMunicipio = C.IdMunicipio AND D.IdDepartamento = C.IdDepartamento AND E.IdEstadoCivil = C.IdEstadoCivil AND C.CUI = ? AND  C.Estado = 'Y';", [cui]);
       
        if (cuiRes.length === 0) {
            throw  {
                status: 500,
                codeError: 101,
                meessage: "NO SE ENCONTRO EL CUI INGRESADO"
            }
        }
        return cuiRes; 
    }catch(error){
        throw error;
     }
};


export const IngresarCuiDao = async (data) => {
    try{
        const [existCui] = await Connection.query("SELECT CUI FROM dpi WHERE CUI = ? AND Estado = 'Y';", [data.CUI]);
        if(existCui.length === 1){
            throw  {
                status: 401,
                codeError: 102,
                meessage: "CUI INGRSADO YA EXISTE"
            }
        }else{
            const [result] = await Connection.query("INSERT INTO dpi(CUI, fecha_nacimiento, IdMunicipio, IdDepartamento, nacionalidad, IdEstadoCivil) VALUES (?, ?, ?, ?, ?, ?);", [data.CUI, data.fecha_nacimiento, data.IdMunicipio, data.IdDepartamento,data.nacionalidad, data.IdEstadoCivil]);
            return result.affectedRows;
        }
    }catch(error){
        throw error;
    }

}


export const ActualizarCuiDao = async (data) => {
    try{
        const [result] = await Connection.query("UPDATE dpi SET CUI = ?, fecha_nacimiento = ?, IdMunicipio = ?, IdDepartamento = ?, nacionalidad = ?, IdEstadoCivil = ? WHERE IdDpi = ? AND Estado = 'Y';", [data.CUI, data.fecha_nacimiento, data.IdMunicipio, data.IdDepartamento,data.nacionalidad, data.IdEstadoCivil, data.IdDpi]);
        if(result.affectedRows === 0){
            throw  {
                status: 401,
                codeError: 103,
                meessage: "REGISTRO NO ENCONTRADO"
            }
        }
        return result.affectedRows;
    }catch(error){
        throw error;
    }
}

export const EliminarCuiDao = async (idCui) => {
    try{
        const [result] = await Connection.query("UPDATE dpi SET Estado = 'N' WHERE IdDpi = ?;", [idCui]);
        if(result.affectedRows === 0){
            throw  {
                status: 401,
                codeError: 103,
                meessage: "REGISTRO NO ENCOTRADO"
            }
        }
        return result.affectedRows;
    }catch(error){
        throw error;
    }
}