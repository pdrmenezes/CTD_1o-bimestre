-- 1. Liste as músicas que possuem a letra "z" no título.

SELECT 
    titulo
FROM
    cancao
WHERE
    titulo LIKE '%z%';

-- 2. Liste as músicas que têm a letra "a" como segundo caractere e a letra "s" como último caractere.

SELECT 
    titulo
FROM
    cancao
WHERE
    titulo LIKE '_a%s';

-- 3. Mostre a lista de reprodução que contém mais músicas, renomeando as colunas, colocando em maiúscula a primeira letra, os acentos correspondentes e adicionando os espaços entre as palavras.

SELECT 
    idPlaylist AS 'Id da playlist',
    titulo AS 'Título',
    qtdcancoes AS 'Quantidade de Canções'
FROM
    playlist
ORDER BY qtdcancoes DESC
LIMIT 3;

-- 4. Em outro momento, obtenha uma lista com os 5 usuários mais jovens, a partir dos próximos 10 registros.

SELECT 
    Nomeusuario, Data_nac
FROM
    usuario
ORDER BY Data_nac
LIMIT 5 OFFSET 10;

-- 5. Liste as 5 músicas com mais reproduções, em ordem decrescente.

SELECT 
    titulo, qtdreproducao
FROM
    cancao
ORDER BY qtdreproducao DESC
LIMIT 5;

-- 6. Gere um relatório de todos os álbuns em ordem alfabética.

SELECT 
    *
FROM
    album
ORDER BY titulo;

-- 7. Liste todos os álbuns que não possuem imagem, organizados em ordem alfabética.

SELECT 
    *
FROM
    album
WHERE
    imagemcapa IS NULL
ORDER BY titulo;

-- 8. Insira um novo usuário com os seguintes dados (leve em consideração os relacionamentos):
-- nomeusuario: novousuariodespotify@gmail.com
-- Nome e sobrenome: Elmer Santos 
-- password: S4321m
-- Data de nacimiento: 15/11/1991
-- Sexo: Masculino
-- Código Postal: B4129ATF
-- País: Brasil

INSERT INTO usuario (idUsuario, Nomeusuario, NomeCompleto, senha, Data_nac, sexo, Cod, Pais_idPais, idTipoUsuario) VALUES ('20', 'novousuariodespotify@gmail.com', 'Elmer Santos', 'S4321', '1991-11-15', 'M', 'B4129ATF', 9, 1);

-- 9. Exclua todas as músicas do gênero "pop".

DELETE FROM generoxcancao 
WHERE
    IdGenero = 9;

-- 10. Edite todos os artistas que não possuem uma imagem carregada e carregue para eles o texto "Imagem em falta" na coluna de imagens.

SET SQL_SAFE_UPDATES = 0;
UPDATE artista 
SET 
    imagem = 'Imagem em falta'
WHERE
    imagem IS NULL;
SET SQL_SAFE_UPDATES = 1;