-- Tabla principal de parámetros
CREATE TABLE IF NOT EXISTS config_params (
    idParam INTEGER PRIMARY KEY AUTOINCREMENT,
    servicio TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    valor TEXT NOT NULL,
    estado TEXT NOT NULL DEFAULT 'A',
);

