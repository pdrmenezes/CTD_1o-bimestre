USE musimundos;

-- 1
SELECT cancoes.nome, cancoes.compositor, generos.nome
FROM cancoes
INNER JOIN generos
ON cancoes.id_genero = generos.id
WHERE cancoes.compositor LIKE "%Willie Dixon%" AND generos.nome LIKE "%Blues%";

-- 2
SELECT cancoes.nome, generos.nome
FROM cancoes
INNER JOIN generos
ON cancoes.id_genero = generos.id
WHERE generos.nome LIKE "%Rock%";

-- 3
SELECT artistas.nome, albuns.titulo
FROM artistas
INNER JOIN albuns
ON artistas.id = albuns.id_artista;

-- 4
SELECT tipos_de_arquivo.nome, cancoes.nome
FROM tipos_de_arquivo
INNER JOIN cancoes
ON tipos_de_arquivo.id = cancoes.id_tipo_de_arquivo;

-- 5
SELECT DISTINCT titulo
FROM empregados;

-- 6 Ranking cancoes: Faça uma consulta com o nome de todas as músicas que estão em uma lista de reprodução, e o nome da lista de reprodução a que pertencem. Observação! Tenhamos cuidado para não repetir os nomes das músicas. Para esta consulta, teremos que usar informações das tabelas cancoes, cancoes_playlists e playlists. O título da música na 5a. posição é:

SELECT DISTINCT cancoes.nome AS musica, playlists.nome AS playlist
FROM cancoes
INNER JOIN cancoes_playlists
ON cancoes.id = cancoes_playlists.id_cancao
INNER JOIN playlists
ON playlists.id = cancoes_playlists.id_playlist;

-- 7 um texto específico deve aparecer abaixo da imagem da música:"A música" (nome da música) "foi composta por" (compositor da música).Faça uma consulta ao nosso banco de dados que nos traga o nome da música e o compositor de cada música, sem repetições, adicionando o texto acima. O primeiro resultado é:

SELECT distinct concat("a música ", cancoes.nome, " foi composta por ", cancoes.compositor)
FROM cancoes;

-- 8 Faturas: Faça uma consulta ao banco de dados que nos traga a primeira coluna não nula que encontrar entre as colunas estado_cobranca, pais_cobranca e cep_cobranca. O primeiro resultado obtido é:

SELECT faturas.estado_cobranca, faturas.pais_cobranca, faturas.cep_cobranca
FROM faturas;

-- 9 Idade Empregados: Faça uma consulta no banco de dados que mostre a diferença entre sua data de nascimento e a data de contratação.Digite a terceira diferença que você obteve. DICA: Lembre-se de que DATEDIFF () retorna a diferença entre as datas expressas em DIAS. Levando isso em consideração e sabendo que um ano tem 365 dias, como você faria a consulta?Para ajudá-lo, apresentamos a função FLOOR (), que arredonda qualquer número para casas decimais.

SELECT FLOOR(datediff(empregados.data_contratacao, empregados.data_nascimento)/365)
FROM empregados;

-- 10 Última fatura: Faça uma consulta ao banco de dados que traga todas as faturas do cliente número 2 solicitadas por sua data e extraia o mês. Qual foi o mês da sua última fatura?
SELECT EXTRACT(month FROM faturas.data_fatura), id_cliente
FROM faturas
WHERE id_cliente = 2;