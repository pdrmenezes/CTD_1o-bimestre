USE musimundos;

-- Crie uma view chamada FATURAS_NACIONAIS. A view deve ter as seguintes colunas: id da fatura, data da fatura, id do cliente, nome do cliente, sobrenome do cliente e total da fatura, e deve incluir apenas faturas da argentinas. Em seguida, execute SELECT * FROM FATURAS_NACIONAIS. Quantos registros a consulta retorna?

CREATE VIEW faturas_nacionais AS
SELECT faturas.id, faturas.data_fatura, faturas.id_cliente, clientes.nome, clientes.sobrenome, faturas.valor_total
FROM faturas
INNER JOIN clientes
ON faturas.id_cliente = clientes.id
WHERE faturas.pais_cobranca LIKE "%argentina%";

SELECT *
FROM faturas_nacionais;

-- Crie uma view chamada LATINOS com informações sobre os artistas com seus álbuns e músicas. A view deve ter as seguintes colunas: nome do artista, título do álbum, nome da música e deve incluir apenas as músicas do gênero 'latin'. Faça uma seleção na view LATINOS ordenada por nome de artista e música. Qual é o nome da segunda música que aparece no resultado?

CREATE VIEW LATINOS AS
SELECT artistas.nome AS "artista", albuns.titulo AS "album", cancoes.nome AS "musica", generos.nome AS "genero"
FROM artistas
INNER JOIN albuns
ON artistas.id = albuns.id_artista
INNER JOIN cancoes
ON cancoes.id_album = albuns.id
INNER JOIN generos
ON cancoes.id_genero = generos.id
WHERE generos.nome LIKE "%latin%";

SELECT artista, musica
FROM LATINOS
ORDER BY artista, musica;

-- Crie uma View chamada Faturas_Brazil, que exiba o nome e sobrenome dos clientes, o país de cobrança e a soma das faturas dos clientes cujo país de cobrança seja ‘Brazil’. Execute a view e responda: Qual o valor da fatura mais cara?

SELECT concat(clientes.nome, ' ', clientes.sobrenome) AS nome, faturas.pais_cobranca, faturas.valor_total
FROM clientes
INNER JOIN faturas
ON clientes.id = faturas.id_cliente
WHERE faturas.pais_cobranca LIKE "%Brazil%";
