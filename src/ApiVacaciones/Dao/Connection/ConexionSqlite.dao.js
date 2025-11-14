import { createClient } from "@libsql/client";

// Crear cliente de conexión a SQLite usando @libsql/client
export const Connection = createClient({
    url: "libsql://vacacionesapp-desarrollocna.aws-us-east-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NjMwOTUxNDAsImlkIjoiYjk5MDQ3YjctNDcwNy00OWQyLWE3MjgtNmM2N2Q4YWQ3YzVmIiwicmlkIjoiMDBjNTUyNWMtYjM4Yi00NWVjLWFiMDYtMTQzZjYxMDMzNGUyIn0.qGcdilYMgwCSZs6f9hfg0cXP76xT1IoeXndUjR6ynkh-LhTWLArY8g7w8SCkOnhByfz-8g6JcTbq1HRgoTX8AA"
});
