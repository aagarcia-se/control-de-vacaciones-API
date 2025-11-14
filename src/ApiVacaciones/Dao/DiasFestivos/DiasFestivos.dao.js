import { Connection } from "../Connection/ConexionSqlite.dao.js";

export const getDiasFestivosDao = async () => {
  try {
    const query = `SELECT idDiaFestivo, nombreDia, fechaDiaFestivo,
                   descripcion, medioDia FROM DiasFestivos;`;

    const result = await Connection.execute(query);
    
    if (result.rows.length === 0) {
      throw {
        codRes: 409,
        message: "NO HAY DIAS FESTIVOS PROGRAMADOS",
      };
    } else {
      return result.rows;
    }
  } catch (error) {
    console.log("Error en getDiasFestivosDao:", error);
    throw error;
  }
};