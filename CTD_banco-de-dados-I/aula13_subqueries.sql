USE UniversoLeitura;

SELECT livros.livroID,livros.livroTitulo
FROM livros
WHERE livros.livroPreco > (SELECT AVG((livros.livroPreco)) FROM livros);

 -- forma sem subquery
SELECT 'produto_id', 'produto_nome' FROM 'Produtos' WHERE 'preco_unitario' >  5

-- a subquery é executada antes da query principal

SELECT 'livro_id', 'livro_titulo' FROM 'livros' WHERE 'livro_preco' > (SELECT AVG('livro_preco') FROM 'livros');

SELECT 'produto_id', 'produto_nome' FROM 'Produtos' WHERE 'preco_unitario' > (SELECT AVG(preco_unitario) FROM 'Produtos';