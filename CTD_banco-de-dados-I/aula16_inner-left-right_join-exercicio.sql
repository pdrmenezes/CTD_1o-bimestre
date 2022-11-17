-- Felipe Arruda, Katherine Duarte, Nayla Ueda, Pedro Menezes, Vanessa Matos

USE EMarket;

-- Faça uma consulta sobre o faturamento do e-market. Inclua as seguintes informações: ID da fatura, data da fatura, nome da empresa de correio (o id da empresa consta da tabela faturas no campo FormaEnvio), nome do cliente, categoriao produ dto vendido, nome do produto (você chega ao produto consultando os detalhes da fatura), preço unitário, quantidade

SELECT Faturas.FaturaId, Faturas.DataFatura, Correios.Empresa, Clientes.Contato, Categorias.CategoriaNome, Produtos.ProdutoNome, DetalheFatura.PrecoUnitario, DetalheFatura.Quantidade
FROM Faturas
INNER JOIN Correios
ON Faturas.FormaEnvio = Correios.CorreioID
INNER JOIN Clientes
ON Faturas.ClienteID = Clientes.ClienteID
INNER JOIN DetalheFatura
ON Faturas.FaturaId = Detalhefatura.FaturaId
INNER JOIN Produtos
ON DetalheFatura.ProdutoID = Produtos.ProdutoID
INNER JOIN Categorias
ON Produtos.CategoriaID = Categorias.CategoriaID;

-- 1. Liste todas as categorias junto com informações sobre seus produtos. Incluir todas as categorias, mesmo que não tenham produtos.

SELECT Categorias.CategoriaNome, Produtos.ProdutoNome, Produtos.PrecoUnitario, Produtos.QuantidadePorUnidade
FROM Categorias
LEFT JOIN Produtos
ON Categorias.CategoriaID = Produtos.CategoriaID;

-- 2. Liste as informações de contato de clientes que nunca compraram no emarket.

SELECT DISTINCT Clientes.Contato, Clientes.Telefone, Faturas.FaturaId
FROM Clientes
LEFT JOIN Faturas
ON Clientes.ClienteID = Faturas.ClienteID
WHERE Faturas.ClienteID IS NULL;

-- 3. Faça uma lista de produtos. Para cada um, indique seu nome, categoria e as informações de contato de seu fornecedor. Lembre-se que podem existir produtos para os quais o fornecedor não foi indicado.

SELECT Produtos.ProdutoNome AS "Nome do produto", Categorias.CategoriaNome AS "Categoria", Provedores.Empresa, Provedores.Contato, Provedores.Telefone
FROM Categorias
INNER JOIN Produtos
ON Categorias.CategoriaID = Produtos.CategoriaID
INNER JOIN Provedores
ON Produtos.ProvedorID = Provedores.ProvedorID;

-- 4. Para cada categoria, liste o preço unitário médio de seus produtos.

SELECT Categorias.CategoriaNome, AVG(Produtos.PrecoUnitario)
FROM Categorias
INNER JOIN Produtos
ON Categorias.CategoriaID = Produtos.CategoriaID
GROUP BY Categorias.CategoriaNome;

-- 5. Para cada cliente, indique a última nota fiscal de compra. Inclua clientes que nunca compraram no e-market.

SELECT DISTINCT Clientes.Empresa, MAX(Faturas.DataFatura)
FROM Clientes
LEFT JOIN Faturas
ON Clientes.ClienteID = Faturas.ClienteID
GROUP BY Clientes.Empresa;

-- 6. Todas as faturas têm uma empresa de correio associada (envio). Gere uma lista com todas as empresas de correio e o número de faturas correspondentes. Execute a consulta usando RIGHT JOIN.

SELECT COUNT(Faturas.FormaEnvio) AS "Qtd faturas", Correios.Empresa
FROM Faturas
RIGHT JOIN Correios
ON Faturas.FormaEnvio = Correios.CorreioID
GROUP BY Correios.Empresa;