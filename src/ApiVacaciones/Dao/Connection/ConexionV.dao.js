import { createPool } from "mysql2/promise";

// Configuración del pool de conexiones
const pool = createPool({
    host: 'bwfndvsdnopox6glkob6-mysql.services.clever-cloud.com',
    user: 'umtiagcmlyb8i1fn',
    password: 'b7U6uKX1C761lPxpcuJc',
    port: 3306,
    database: 'bwfndvsdnopox6glkob6',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Mantenemos los mismos nombres de funciones para no romper tu código existente
export const OpenConection = async () => {
    const connection = await pool.getConnection();
    return connection;
};

export const CloseConection = async (connection) => {
    if (connection) {
        await connection.release();
    }
};

// Función adicional útil para consultas simples
export const query = async (sql, params) => {
    const [rows] = await pool.query(sql, params);
    return rows;
};