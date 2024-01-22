import {IngresarFamiliaresDao, ActualizarFamiliaresDao, EliminarFamiliaresDao, ConsultarFamiliaresDao} from "../../dao/Familiares/familiares.dao.js";

export const ObtenerFamiliaresServices =  async (cuiEmpleadoPäram) => {
    try{
        const familiaresResult = await ConsultarFamiliaresDao(cuiEmpleadoPäram);
        return familiaresResult;
    }catch(error){
        throw error;
    }
}

export const IngresarFamiliaresServices = async (data) => {
    try{
        const resultFamiliares = await IngresarFamiliaresDao(data);
        return resultFamiliares;
    }catch(error){
        throw error;
    }
}

export const ActualizarFamiliaresServices = async (data) => {
    try{
        const resultFamiliar = await ActualizarFamiliaresDao(data);
    }catch(error){
        throw error;
    }
}

export const EliminarFamiliaresServices = async (idFamiliar) => {
    try{
        const resultFamlilar = await EliminarFamiliaresDao(idFamiliar);
        return resultFamlilar;
    }catch(error){
        throw error;
    }
}