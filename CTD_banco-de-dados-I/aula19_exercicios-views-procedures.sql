USE musimundos;

--  EXERCÍCIO I
-- 1. Crie uma view que mostra o tamanho em bytes e a duração de uma canção pelo seu id

CREATE VIEW byte_cancoes AS
    SELECT 
        id, bytes, duracao_milisegundos
    FROM
        cancoes;

SELECT * FROM byte_cancoes;
SELECT count(*) FROM byte_cancoes;


-- 2. Crie uma view que mostra o preço unitário de uma canção pelo seu id

CREATE VIEW preco_cancao AS
	SELECT c.id, c.preco_unitario
    FROM cancoes c;
    
SELECT * FROM preco_cancao;
    

-- 3. Crie uma View que mostra o id da canção, o nome da canção e o tipo de arquivo(table tipos_de_arquivo) das canções

CREATE VIEW cancao_detalhes AS
	SELECT c.id, c.nome AS "canção", ta.nome AS "tipo de arquivo"
    FROM cancoes c
    INNER JOIN tipos_de_arquivo ta
    ON c.id_tipo_de_arquivo = ta.id;
    
SELECT * FROM cancao_detalhes;


-- EXERCÍCIO II

-- 1. Crie uma procedure que selecione o valor da fatura com o valor mais baixo.

DELIMITER $$
CREATE PROCEDURE sp_fatura_barata (OUT fatura_mais_barata VARCHAR(50))
BEGIN
SELECT min(valor_total) INTO fatura_mais_barata
FROM faturas;
END $$

DELIMITER ;

CALL fatura_barata(@fatura_mais_barata);
SELECT @fatura_mais_barata;


-- 2. crie uma procedure que retorna a quantidade de faturas que tem o país de cobrança "Canadá"

DELIMITER $$
DROP PROCEDURE IF EXISTS pais_fatura $$
CREATE PROCEDURE sp_pais_fatura(IN nome VARCHAR(50), OUT quantidade INT)
BEGIN
SELECT COUNT(*) INTO quantidade
FROM faturas
WHERE pais_cobranca = nome;
END $$

DELIMITER ;

CALL pais_fatura('Canada', @quantidade);

SELECT @quantidade;

-- 3. crie uma procedure que retorna o valor somado de todas as faturas

DELIMITER $$
CREATE PROCEDURE sp_total_faturas(OUT total VARCHAR(15))
BEGIN
SELECT SUM(faturas.valor_total) INTO total
FROM faturas;
END $$

DELIMITER ;

CALL total_faturas (@total);

SELECT @total;

-- 4. crie uma procedure que retorna o valor médio de todas as faturas

DELIMITER $$
CREATE PROCEDURE sp_media_faturas(OUT media_faturas VARCHAR(15))
BEGIN
SELECT AVG(faturas.valor_total) INTO media_faturas
FROM faturas;
END $$

DELIMITER ;

CALL sp_media_faturas (@media_faturas);

SELECT format(@media_faturas, 2);

-- EXERCÍCIO III

-- 1. Crie uma procedure que mostre o nome e sobrenome concatenados e também o email de todos os clientes.

DELIMITER $$
DROP PROCEDURE sp_nome_completo_email$$

CREATE PROCEDURE sp_nome_completo_email (IN diga_id INT, OUT clientes_contato VARCHAR(30), OUT clientes_email VARCHAR(40))
BEGIN
SELECT concat(nome, ' ', sobrenome), email INTO clientes_contato, clientes_email
FROM clientes
WHERE id = diga_id;
END $$

DELIMITER ;

CALL sp_nome_completo_email (2, @clientes_contato, @clientes_email);

SELECT @clientes_contato, @clientes_email;

-- 2. Crie uma procedure que mostre o nome completo (nome e sobrenome concatenados)  e também o endereço completo (endereço, cidade, estado e país) de um cliente pelo id informado.

DELIMITER $$
DROP PROCEDURE sp_nome_completo_endereco$$

CREATE PROCEDURE sp_nome_completo_endereco (IN diga_id INT, OUT clientes_contato VARCHAR(30), OUT clientes_endereco VARCHAR(100))
BEGIN
SELECT concat(nome, ' ', sobrenome), concat(endereco, ', ',cidade, ' - ', estado, '. ', pais, ' CEP: ', cep) INTO clientes_contato, clientes_endereco
FROM clientes
WHERE id = diga_id;
END $$

DELIMITER ;

CALL sp_nome_completo_endereco (2, @clientes_contato, @clientes_endereco);

SELECT @clientes_contato, @clientes_endereco;

-- 3. Crie uma procedure que mostre o nome do cliente e o valor total de cada uma das suas faturas pelo id do cliente informado.

DROP PROCEDURE sp_cliente_faturas;

DELIMITER $$

CREATE PROCEDURE sp_cliente_faturas (IN diga_id INT, OUT cliente_nome VARCHAR(30), OUT cliente_fatura VARCHAR(20))
BEGIN
SELECT concat(c.nome, ' ', c.sobrenome) AS nome_completo, sum(f.valor_total) INTO cliente_nome, cliente_fatura
FROM clientes c
INNER JOIN faturas f
ON c.id = f.id_cliente
WHERE c.id = diga_id
GROUP BY nome_completo;
END $$

DELIMITER ;

CALL sp_cliente_faturas (2, @cliente_nome, @cliente_fatura);

SELECT @cliente_nome, @cliente_fatura;