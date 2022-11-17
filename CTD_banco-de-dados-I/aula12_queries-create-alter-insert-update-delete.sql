-- CREATE

CREATE TABLE usuario (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50),
    email VARCHAR(100) NOT NULL UNIQUE,
    data_nascimento DATE
);

USE usuario;

-- ALTER

ALTER TABLE usuario
ADD telefone VARCHAR(50);

ALTER TABLE usuario
MODIFY nome VARCHAR(150) NOT NULL; 

ALTER TABLE usuario
DROP data_nascimento; 

-- INSERT

INSERT INTO usuario (nome, sobrenome, email, data_nascimento, telefone)
VALUES ('alfred', 'batman', 'alfred@batcave.com', '1955-10-10', '9989832');

-- UPDATE

UPDATE usuario
SET 
nome = 'robin',
sobrenome = 'batman'
WHERE id = 1;

-- DELETE

DELETE FROM usuario WHERE id = 1;

-- SELECT

SELECT * FROM usuario;

SELECT nome, email FROM usuario;

DROP TABLE IF EXISTS filmes;

-- WHERE

SELECT nome, email FROM usuario WHERE nome 'A%';

-- ORDER BY

SELECT nome, email FROM usuario WHERE nome LIKE 'A%' ORDER BY nome DESC;

SELECT nome, email FROM usuario WHERE nome =! 'Alfred' ORDER BY nome DESC;

-- LIKE (encontra por partes do termo de busca: '_' indica apenas um caractere e '%' indica nenhum, um ou muitos caracteres, antes ou depois dependendo da sua posição)

SELECT nome, email FROM usuario WHERE nome =! 'Alfred' AND telefone LIKE '9%' ORDER BY nome DESC;

SELECT nome, email FROM usuario WHERE nome =! 'Alfred' OR telefone LIKE '_9%' ORDER BY nome DESC;

SELECT nome, email FROM usuario WHERE nome LIKE 'al%d' ORDER BY nome DESC;

-- IS NULL (é nulo)

SELECT nome, email FROM usuario WHERE telefone IS NULL;

-- BETWEEN (valores entre 2 referências)

SELECT nome, email FROM usuario WHERE data_nascimento BETWEEN 1955 AND 1965;

-- ALIAS (altera a visualização da tabela, da entidade ou do valor)

SELECT nome AS 'Nome do usuário' FROM usuario WHERE nome LIKE 'al%d';

SELECT nome, telefone * 10 FROM usuario;

-- LIMIT (limita a exibição de resultados à quantidade especificada)

SELECT nome FROM usuario LIMIT 10;

-- OFFSET (indica a partir de qual resultado começaremos a nossa exibição)

SELECT nome FROM usuario LIMIT 10 OFFSET 5 -- indicará os 10 primeiros resultados pulando os 5 primeiros
