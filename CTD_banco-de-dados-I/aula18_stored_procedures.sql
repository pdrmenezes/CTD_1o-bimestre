-- estrutura da 'stored procedure'
-- 1. DELIMITER: símbolos que não serão usados na SP (ex: $$) pra indicar início e fim do PROCEDURE
-- 2. CREATE PROCEDURE nome_do_procedure() -> se não tiver parâmetros, parênteses vazios
-- 3. BEGIN: cláusula usada pra indicar início do código
-- 4. Bloco de código
-- 5. END: cláusula escrita seguida pela combinação de DELIMITER e indica o fim do código

DELIMITER $$
CREATE PROCEDURE sp_nome_procedimento()
BEGIN
	-- BLOCO DE INSTRUÇÕES SQL;
END $$


-- exemplo

DELIMITER $$
CREATE PROCEDURE sp_produtos(IN filtro_categoria VARCHAR(15))
BEGIN
	SELECT ProdutoNome, PrecoUnitario FROM produtos p
	JOIN categorias C ON p.CategoriaID = c.CategoriaID
	WHERE CategoriaNome = filtro_categoria;
END $$

-- pra chamar a SP usamos 'CALL'

CALL sp_produtos('Frutos do mar');

-- Parâmetros -> no ex acima: (IN filtro_categoria VARCHAR(15))
-- São variáveis para onde os dados são enviados e recebidos. São definidos na cláusula CREATE
-- Existem parâmetros de IN (recebe dados), OUT (retorna dados) e INOUT (recebe e retorna)
-- As SP's podem ter nenhum, 1 ou mais parâmetros de entrada E de saída

-- exemplo 2

DELIMITER $$
CREATE PROCEDURE sp_produtos(IN filtro_categoria VARCHAR(15), OUT quantidade INT)
BEGIN
	SELECT count(*) INTO quantidade FROM produtos p
	JOIN categorias C ON p.CategoriaID = c.CategoriaID
	WHERE CategoriaNome = filtro_categoria;
END $$

CALL sp_quantidade_produtos('Frutos do mar', '@quantidade-frutos_do_mar');
SELECT @quantidade_frutos_do_mar;

