import { createPool } from "mysql2/promise";

export const Connection = createPool({
    host: 'befu7ulp4t3du14tpbrz-mysql.services.clever-cloud.com',
    user: 'ubonxldkyinjalqx',
    password: 'WGyVng8ZB6hPvrKGrfje',
    port: 3306,
    database: 'befu7ulp4t3du14tpbrz'
});

// Función para establecer la conexión
export const establecerConexion = async () => {
    try {
        // Obtener una conexión del pool
        const connection = await Connection.getConnection();
        console.log('Conexión establecida correctamente');
        return connection;
    } catch (error) {
        console.error('Error al establecer la conexión:', error.sqlMessage);
        // Realizar acciones de manejo de errores, como enviar una respuesta de error al cliente
        throw error;
    }
};

// Función para cerrar la conexión
export const cerrarConexion = (connection) => {
    if (connection) {
        connection.release();
        console.log('Conexión cerrada correctamente');
    }
};
