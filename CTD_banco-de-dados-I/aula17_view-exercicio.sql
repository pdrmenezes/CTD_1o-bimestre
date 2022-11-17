-- Clientes
-- 1. Crie uma View com os seguintes dados do cliente: Id, contato, Fax e o telefone.

CREATE VIEW ListaDeClientes AS
SELECT ClienteID, Contato, Fax, Telefone
FROM Clientes;

-- 2. Liste os números de telefone dos clientes que não possuem fax. Faça isso de duas maneiras diferentes:
-- a. Consultando a tabela clientes
SELECT ClienteID, Contato, Fax, Telefone
FROM Clientes
WHERE Fax = '';

-- b. Consultando a view do cliente
SELECT ClienteID, Contato, Fax, Telefone
FROM ListaDeClientes
WHERE Fax = '';


-- Fornecedores
-- 1. Crie uma visão com os seguintes dados do fornecedor: Id, contato, empresa e endereço. Para o endereço, pegue o endereço, cidade, código postal e país.

CREATE VIEW ListaDeFornecedores AS
SELECT ProvedorID, Contato, Empresa, concat(Endereco, ", ", Cidade, " - ", CodigoPostal, " - ", Pais) AS "Endereço"
FROM Provedores;

-- 2. Liste os fornecedores que moram na Avenida das Americanas, no Brasil. Faça de duas formas diferentes:
-- a. Consultando a tabela de fornecedores
SELECT Empresa, Endereco
FROM Provedores
WHERE Endereco LIKE "%das Americanas%";

-- b. Consultando a visão do fornecedor
SELECT Empresa, Endereço
FROM ListaDeFornecedores
WHERE Endereço LIKE "%das Americanas%";


-- PARTE 2
-- 1. Crie uma visão dos produtos que será usada ​​para controle de estoque. Inclua o id e nome do produto, preço unitário arredondado sem decimais, unidades em estoque e as unidades encomendadas. Inclua também uma nova coluna PRIORIDADE, com os seguintes valores:
-- BAIXA se as unidades encomendadas forem zero
-- MÉDIA se as unidades pedidas forem menores do que as unidades em estoque
-- URGENTE se as unidades pedidas não dobrarem o número de unidades em estoque
-- PRIORITÁRIO caso contrário

CREATE VIEW controleDeEstoque AS
SELECT ProdutoID, ProdutoNome AS nome, format(PrecoUnitario, 0) AS preco, UnidadesEstoque AS estoque, UnidadesPedidas AS pedido, 
CASE
WHEN UnidadesPedidas = 0 THEN "BAIXA"
WHEN UnidadesPedidas < UnidadesEstoque THEN "MÉDIA"
WHEN UnidadesPedidas < 2*UnidadesEstoque THEN "URGENTE"
ELSE "PRIORITÁRIO" END AS prioridade
FROM Produtos;

-- 2.  É necessário um relatório para identificar problemas de estoque. Utilizando a visão criada no exercício anterior, indique, para cada prioridade, quantos produtos existem e seu preço médio. Não inclua prioridades para as que possuem menos de 5 produtos.

SELECT prioridade, count(nome) AS quantidade, avg(preco) AS precoMedio
FROM controleDeEstoque
GROUP BY prioridade
HAVING quantidade > 5;