-- Leonardo Fernandes, Juliana Rosa, Pedro Menezes, Marcelo Ramos, Phillipe Borges
-- 1. Para cada empresa de correio, calcule o transporte total. Inclua todas as empresas de correio, mesmo que não tenham realizado nenhuma operação.

SELECT Correios.Empresa, sum(Faturas.Transporte) AS "Valor Total"
FROM Correios
LEFT JOIN Faturas
ON Correios.CorreioID = Faturas.FormaEnvio
GROUP BY Correios.Empresa;

-- 2. Liste as informações de contato (ou, endereço, etc.) dos clientes que não fizeram compras. Exiba as informações no formato considerado mais adequado.

SELECT Clientes.Contato, concat(Clientes.Endereco, ", ", Clientes.Cidade, " – ", Clientes.Pais, " | CEP: ", Clientes.CodigoPostal) AS "Endereço"
FROM Clientes
LEFT JOIN Faturas
ON Clientes.ClienteID = Faturas.FaturaId;

-- 3. Liste as categorias e seus produtos, incluindo as categorias para as quais não há produtos no banco de dados. Para nomes de produtos, onde aparece mix ou Chef, substituí-lo por MIX ou CHEF, respectivamente.

SELECT Categorias.CategoriaNome AS "Categorias", REPLACE(REPLACE(produtos.ProdutoNome, 'Mix', 'MIX'),'Chef', 'CHEF') AS "Produtos"
FROM Categorias
LEFT JOIN Produtos
ON Categorias.CategoriaID = Produtos.CategoriaID;