CREATE DATABASE db_prueba_backend_sql;
USE db_prueba_backend_sql;
CREATE TABLE users (
    id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    email VARCHAR(255),
    email_verified_at TIMESTAMP,
    estado TINYINT(4),
    created_by BIGINT(20),
    update_by BIGINT(20),
    foto VARCHAR(255),
    password VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE productos (
    id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    estado TINYINT(4),
    created_by BIGINT(20),
    updated_by BIGINT(20),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id),
    FOREIGN KEY (updated_by) REFERENCES users(id)
);

CREATE TABLE bodegas (
    id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    id_responsable BIGINT(20),
    estado TINYINT(4),
    created_by BIGINT(20),
    updated_by BIGINT(20),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    FOREIGN KEY (id_responsable) REFERENCES users(id),
    FOREIGN KEY (created_by) REFERENCES users(id),
    FOREIGN KEY (updated_by) REFERENCES users(id)
);

CREATE TABLE inventarios (
    id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    id_bodega BIGINT(20),
    id_producto BIGINT(20),
    cantidad INT(11),
    created_by BIGINT(20),
    updated_by BIGINT(20),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    FOREIGN KEY (created_by) REFERENCES users(id),
    FOREIGN KEY (updated_by) REFERENCES users(id)
);

CREATE TABLE historiales (
    id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    cantidad INT(11),
    id_bodega_origen BIGINT(20),
    id_bodega_destino BIGINT(20),
    id_inventario BIGINT(20),
    created_by BIGINT(20),
    updated_by BIGINT(20),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    FOREIGN KEY (id_bodega_origen) REFERENCES bodegas(id),
    FOREIGN KEY (id_bodega_destino) REFERENCES bodegas(id),
    FOREIGN KEY (id_inventario) REFERENCES inventarios(id),
    FOREIGN KEY (created_by) REFERENCES users(id),
    FOREIGN KEY (updated_by) REFERENCES users(id)
);