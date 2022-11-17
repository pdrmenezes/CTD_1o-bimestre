-- JOIN
SELECT coluna1, coluna2...
FROM tabela A
(INNER | LEFT | RIGHT) JOIN tabela B
ON condição
(INNER | LEFT | RIGHT) JOIN tabela C
ON condição;

-- INNER JOIN: intersecção entre 2 tabelas (A com B e A com C). não mostra valores nulos porque tem que conter valores nas 2 tabelas. para valores nulos, que excluem, usar o LEF ou RIGHT

-- LEFT JOIN: intersecção entre tabelas A e B + todos os registros de A que não estejam vinculadas com B
SELECT c.CategoriaNome, p.ProdutoNome
FROM Categorias C
LEFT JOIN Produtos p
ON c.CategoriaId = p.CategoriaId;

-- RIGHT JOIN: intersecção entre tabelas A e B + todos os registros de B que não estejam vinculadas com A
SELECT c.CategoriaNome, p.ProdutoNome
FROM Categorias C
LEFT JOIN Produtos p
ON c.CategoriaId = p.CategoriaId;

