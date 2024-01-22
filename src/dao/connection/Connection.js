import { createPool } from "mysql2/promise";

export const Connection = createPool({
    host: 'befu7ulp4t3du14tpbrz-mysql.services.clever-cloud.com',
    user: 'ubonxldkyinjalqx',
    password: 'WGyVng8ZB6hPvrKGrfje',
    port: 3306,
    database: 'befu7ulp4t3du14tpbrz'
});

// Manejar la conexión
Connection.getConnection()
  .then(connection => {
    console.log('Conexión establecida correctamente');
  })
  .catch(error => {
    console.error('Error al establecer la conexión:', error.sqlMessage);
    // Realizar acciones de manejo de errores, como enviar una respuesta de error al cliente
  });
