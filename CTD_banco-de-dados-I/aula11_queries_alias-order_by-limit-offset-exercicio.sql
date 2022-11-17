USE filmes_db;

-- 1. mostre o título de todas as séries e use 'alias' pra que o nome do campo fique em pt

SELECT titulo AS 'Título' FROM series; -- ele só altera o nome de exibição, não o nome da entidade


-- 2. busque por título de filmes com Avaliação superior a 3, com mais de 1 prêmio e com data de lançamento entre '01-01-1988' e '31-12-2009'. Classifique os resultados em ordem decrescente.

SELECT 
    titulo, data_lancamento, premios
FROM
    filmes
WHERE
    avaliacao > 3 AND premios > 1
        AND data_lancamento BETWEEN '1998-01-01' AND '2009-12-31'
ORDER BY premios DESC;

-- 3. fazer um top 3 com os filmes a partir do 10º registro da consulta anterior.  

SELECT 
    titulo, premios, avaliacao
FROM
    filmes
WHERE
    avaliacao > 3 AND premios > 1
        AND data_lancamento BETWEEN '1988-01-01' AND '2009-12-31'
ORDER BY premios DESC
LIMIT 3 OFFSET 10
;

-- 4. quais são os 3 piores episódios considerando suas avaliações?

SELECT
	titulo, avaliacao
FROM
	episodios
ORDER BY avaliacao
LIMIT 3;


-- 5. liste nome, sobrenome e avaliacao da tabela Atores. Utilize Alias para mostrar o título das colunas com a 1a letra maiúscula. Substitua o nome  da coluna id por Identificação e da coluna avaliacao por Classificação.

SELECT 
    id AS Identificação,
    nome AS Nome,
    sobrenome AS Sobrenome,
    avaliacao AS Classificação
FROM
    atores;