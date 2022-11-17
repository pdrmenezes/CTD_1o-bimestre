/*
CRUD
-- CREATE
-- READ
-- UPDATE
-- DELETE
*/

/*
CREATE
*/

-- INSERT
-- 1. cláusula INSERT
-- 2. INTO + nome da tabela onde serão inseridos os dados
-- 3. campos da tabela entre parênteses, separados por vírgulas e na ordem que serão inseridos (id normalmente auto-incrementado)
-- 4. cláusula VALUES
-- 5. valores a serem inseridos na tabela entre parênteses, na ordem que foram declarados no passo 3

INSERT INTO 'produtos' ('produto_nome', 'produto_peso', 'produto_cor')
VALUES ('Quadriciclo', 12, 'amarela');

/*
READ
*/

-- SELECT
-- 1. cláusula SELECT
-- 2. campos da tabela que deseja que apareçam no resultado, separados por vírgulas
-- 3. cláusula FROM
-- 4. nome da tabela que se quer receber os resultados

SELECT 'produto_name', 'produto_peso', 'produto_cor'
FROM 'produtos';

/*
UPDATE
*/

-- UPDATE
-- 1. cláusula SELECT
-- 2. nome da tabela que se deseja atualizar dados
-- 3. cláusula SET
-- 4. 'nome do campo que será atualizado' = 'novo valor do campo'
-- 5. cláusula WHERE
-- 6. condição que determina qual(is) dado(s) deve ser atualizado(s)

UPDATE 'produtos'
SET 'produto_nome' = 'Bicicleta BMX'
WHERE 'produto_nome' = 'bicicleta';

/*
DELETE
*/

-- DELETE
-- 1. cláusula DELETE
-- 2. FROM + nome da tabela que será deletada ou que terá seus dados deletados
-- 3. cláusula WHERE
-- 6. condição que determina qual(is) dado(s) devem ser deletados

DELETE
FROM 'produtos'
WHERE 'produto_nome' = 'celular';