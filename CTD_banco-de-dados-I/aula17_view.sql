USE EMarket;

-- criando uma view a partir de uma consulta: "CREATE VIEW" "nome da view (que n pode ser igual ao nome de nenhuma tabela no banco" "AS" "todo o SELECT"
CREATE VIEW faturamento_aula16_pt1 AS 
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

-- usando a view: "SELECT" "parâmetro,coluna,*" "FROM" "nome da view"
SELECT * FROM faturamento_aula16_pt1;

-- usando mais comandos junto com a view
SELECT * FROM faturamento_aula16_pt1
ORDER BY Contato;

-- exercício 1: começar pelo select, depois insere no topo o comando pra criar uma view

CREATE VIEW Detalhe_Remessa AS
SELECT FaturaID,
date_format(DataFatura, "%d/%m/%y") AS "Data da Fatura",
date_format(DataEnvio, "%d/%m/%y") AS "Data de Envio",
format(Transporte, 2) AS "Transporte",
concat(EnderecoEnvio, ", ", CidadeEnvio, ", ", CodigoPostalEnvio, ", ", PaisEnvio) AS "Destino"
FROM Faturas;

-- exercício 2
SELECT Correios.Empresa, Detalhe_Remessa.*
FROM Correios
INNER JOIN Faturas
ON Faturas.FormaEnvio = Correios.CorreioID
INNER JOIN Detalhe_Remessa
ON Detalhe_Remessa.FaturaId = Faturas.FaturaId;