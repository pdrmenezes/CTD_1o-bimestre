USE filmes_db;

-- 1. Utilizando a base de dados filmes_db, queremos saber, por um lado, os títulos e nomes dos gêneros de todas as séries registradas.

SELECT series.titulo, generos.nome
FROM series
INNER JOIN generos
ON series.genero_id = generos.id;

-- 2. Por outro lado, precisamos listar os títulos dos episódios juntamente com os nomes e sobrenomes dos atores que atuam em cada um deles.
SELECT episodios.titulo, concat(atores.nome, ' ', atores.sobrenome)
FROM episodios
INNER JOIN ator_episodio
ON ator_episodio.episodio_id = episodios.id
INNER JOIN atores
ON ator_episodio.ator_id = atores.id;

-- 3. Para o nosso próximo desafio, precisamos obter todos os atores ou atrizes (nome e sobrenome) que trabalharam em qualquer filme de Harry Potter.

SELECT filmes.titulo, concat(atores.nome, ' ', atores.sobrenome)
FROM filmes
INNER JOIN ator_filme
ON ator_filme.movie_id = filmes.id
INNER JOIN atores
ON ator_filme.ator_id = atores.id
WHERE filmes.titulo LIKE "%Harry Potter%";

-- 4. Faça uma consulta que mostre a quantidade de filmes por gênero.

SELECT count(filmes.id), generos.nome
FROM filmes
INNER JOIN generos
ON filmes.genero_id = generos.id
GROUP BY generos.nome;

