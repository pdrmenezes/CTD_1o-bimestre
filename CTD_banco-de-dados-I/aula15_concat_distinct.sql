USE Emarket;

-- 1. Liste os clientes que fizeram compras durante 1996. A lista deve conter as seguintes colunas: "Nome e sobrenome" & "o título é todo maiúsculo"

SELECT DISTINCT Clientes.Contato AS 'Nome e Sobrenome', UPPER(Titulo.Clientes)
FROM Clientes
INNER JOIN Faturas
ON Clientes.ClienteID = Faturas.ClienteID
WHERE Faturas.DataFatura BETWEEN '1996-01-01' AND '1996-12-31'
ORDER BY Clientes.Contato;

-- 2.  Liste as faturas para as quais a remessa foi para uma cidade diferente da cidade do cliente. Considere apenas os clientes do Reino Unido. A listagem deve incluir:
-- O número da fatura completando com zeros principais 8 itens. Por exemplo, 00001234
-- A data da fatura no formato YYYY-MM-DD. Por exemplo, 1996-12-01
-- Para a cidade do cliente

SELECT Clientes.Cidade, Faturas.CidadeEnvio, Clientes.Pais
FROM Clientes
INNER JOIN Faturas
ON Clientes.ClienteID = Faturas.ClienteID
WHERE Clientes.Cidade <> Faturas.CidadeEnvio AND Clientes.Pais LIKE "UK";

SELECT date_format(Faturas.DataFatura, "%Y-%m-%d") AS "Data da Fatura", right(concat("000", Faturas.FaturaID), 8) AS "ID Fatura"
FROM Clientes
INNER JOIN Faturas
ON Clientes.ClienteID = Faturas.ClienteID
WHERE Clientes.Cidade <> Faturas.CidadeEnvio AND Clientes.Pais LIKE "UK";