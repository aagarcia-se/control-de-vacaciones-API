export const getParentescoDao = async () => {
    try {
        const result = await Connection.execute("SELECT idParentesco, parentesco, estado FROM parentescos;");
        return [result.rows]; // Mantiene formato [parentesco]
    } catch (error) {
        console.log("Error en getParentescoDao:", error);
        throw error;
    }
};