CREATE DATABASE consultorio;
USE consultorio;

CREATE TABLE pacientes(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    sobrenome VARCHAR(100)
);

CREATE TABLE especialidades(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);

CREATE TABLE medicos(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    sobrenome VARCHAR(100),
    especialidade_id INT,
    FOREIGN KEY(especialidade_id) REFERENCES especialidades(id)
);

DROP TABLE IF EXISTS especialidades;

-- ALTER TABLE:
-- ADD: adiciona coluna
-- MODIFY: modifica coluna
-- DROP: exclui coluna
ALTER TABLE especialidades
ADD descricao TEXT NOT NULL;

ALTER TABLE especialidades
MODIFY descricao VARCHAR(50) NOT NULL;

ALTER TABLE especialidades
DROP descricao;