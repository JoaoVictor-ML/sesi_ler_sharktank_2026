CREATE DATABASE IF NOT EXISTS gestao_refeitorio;

USE sistema_escolar;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,

    tipo_usuario ENUM(
        'administrador_geral',
        'gestor',
        'coordenador',
        'professor'
    ) NOT NULL,

    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);