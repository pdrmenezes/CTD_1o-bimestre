--  função COUNT retorna a quantidade total de itens de acordo com a condição selecionada
SELECT COUNT(*) FROM 'tabela';

SELECT COUNT (*) FROM 'autores' WHERE 'sobrenome' = 'Silva';

SELECT COUNT('cliente_id') FROM 'faturas';

-- função MAX retorna o valor máximo de um conjunto de valores, ex: descobrir o preçø mais alto de um livro
SELECT MAX ('preco_livro') FROM 'livros';

-- função MIN retorna o valor mínimo, o menor, o mais baixo
SELECT MIN('data_publicacao') FROM 'livros';

-- função AVG retorna a média aritmética de um conjunto de valores, ex: descobrir preço médio de livros
SELECT AVG('preco_livro') FROM 'livros';

-- função SUM retorna a soma dos valores de um conjunto, ex: descobrir o valor total dos livros na tabela
SELECT SUM('preco_livro') FROM 'livros';

-- funções de formatação
-- função DATE_FORMAT é repsonsável por formatar datas em diversas configurações diferentes, ex: transformar a data 2020-02-04 em 04 February 2020
SELECT DATE_FORMAT('data_cadastro', "%d %m %y") FROM 'livros';
SELECT DATE_FORMAT('data_cadastro', "%d %M %Y") FROM 'livros';
SELECT DATE_FORMAT('data_cadastro', "%d / %m / %Y") FROM 'livros';
SELECT DATE_FORMAT('data_cadastro', "%d de %M de %Y") FROM 'livros';
SELECT DATE_FORMAT('data_cadastro', "%D of %M of %Y") FROM 'livros';
SELECT DATE_FORMAT('data_cadastro', "%D of %M of %Y") AS "Data da Fatura" FROM 'livros';