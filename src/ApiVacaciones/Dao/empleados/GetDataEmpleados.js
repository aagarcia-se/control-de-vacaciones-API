import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

export const getDatosContactoEmpleadoDao = async (idInfoPersonal) => {
    let dbConnection;

    try{
        dbConnection = await OpenConection();
        await dbConnection.beginTransaction();

        const query = "select numeroCelular, correoPersonal from infoPersonalEmpleados where idInfoPersonal = ?;"
        const [contactoEmpleado] = await dbConnection.query(query, [idInfoPersonal]);
        if(contactoEmpleado.length === 0){
            throw  {
                codRes: 409,
                message: "NUMERO DOCUMENTO INGRESADO YA EXISTE" 
            }
        }else{
            return contactoEmpleado[0];
            
        }


    }catch(error){
        throw error;
    }finally{

        if(dbConnection){
            await CloseConection(dbConnection);
        }

    }

}