import { ObtenerNivelEducativoServices } from "../../services/catalogos/niveleducativo.services.js";


export const ObtenerNivelEducativoController = async (req, res) => {
    try{
        const [nivelesEducacion] = await ObtenerNivelEducativoServices();
        res.json({nivelesEducacion});
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}