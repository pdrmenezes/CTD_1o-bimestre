/* BETWEEN */
-- buscar dados dentro de um intervalo
-- inclui os extremos
-- funciona com n´¨meros, textos, datas...
-- usado como filtro no WHERE

SELECT nome, idade
FROM alunos
WHERE idade BETWEEN 6 AND 12;

/* LIKE */
-- permite buscar dados que contenham algum valor informado
-- COMODIN (%) representa nenhum, 1 ou mais caracteres (WILDCARD)
-- COMODIN (_) representa 1 único caractere (WILDCARD)

SELECT nome FROM usuarios
WHERE nome LIKE '_a%'; #retorna nomes que possuem a letra 'a' como segundo caractere

SELECT endereco FROM usuarios
WHERE endereco LIKE '%Duque de Cax'; #retorna os endereços de usuários que incluem o texto 'duque de cax'

SELECT nome FROM clientes
WHERE nome LIKE 'Os%r'; #retorna clientes cujos nomes começam com 'os' e terminam com 'r'

/* ALIAS */
-- usados para dar nome temporário e amigável a uma tabela durante a consulta (SELECT)
-- nome_da_coluna_1 AS alias_coluna_1

-- ALIAS pra coluna
SELECT razao_social_cliente AS nome_empresa
FROM cliente
WHERE razao_social_cliente LIKE 'a%';

-- ALIAS pra tabela
SELECT nome, sobrenome, idade
FROM alunos_comissao_inicial AS alunos;

/* LIMIT */
-- limita o número de registros retornados por uma consulta (SELECT)
-- também estabelece número máximo de registros a serem deletados (DELETE)

-- sintaxe:
SELECT coluna1, coluna2
FROM tabela
LIMIT numero_de_registros;

-- exemplo: top 10 filmes que têm mais de 4 prêmios
SELECT * #tudo
FROM filmes
WHERE premios > 4
ORDER BY premios DESC
LIMIT 10;

/* OFFSET */
-- nos permite definir a partir de que resultado queremos exibir a consulta
-- por exemplo, os 50 melhores filmes de todos os tempos sem contar o top 10

-- exemplo: listar filmes e suas notas limitando o resultado a 20, sem os 10 primeiros itens
SELECT id, titulo, avaliaco
FROM filmes
LIMIT 20
OFFSET 10;