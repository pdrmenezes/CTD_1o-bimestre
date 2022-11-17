-- teremos os vários países dos vários usuários repetidos
SELECT pais FROM usuarios

-- exemplo 1: pra que as linhas não se repitam, usamos DISTINCT pra limitar a 1 repetição de cada:
SELECT DISTINCT pais FROM usuarios

-- exemplo 2: na query seguinte, se não usarmos o DISTINCT, os atores que participaram de mais de 1 filme de harry potter aparecerão repetidos, como não queremos que isso aconteça, usaremos o DISTINCT.
SELECT DISTINCT first_name, last_name
FROM movies
INNER JOIN actor_movie
ON movie_id = movies.id
INNER JOIN actors
ON actor_id = actors.id
WHERE movies.title LIKE "%Harry Potter%";