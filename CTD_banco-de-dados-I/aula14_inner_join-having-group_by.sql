-- HAVING é o WHERE do GROUP BY. WHERE são condições gerais, aplicadas ao FROM. HAVING são condições aplicadas ao resultado do GROUP BY
SELECT coluna_1
FROM nome_tablea
WHERE condicao
GROUP BY coluna_1
HAVING condition_Group
ORDER BY coluna_1;


-- aqui, serão retornados os países com mais de 3 clientes
SELECT pais, COUNT(ClienteID)
FROM clientes
GROUP BY pais
HAVING COUNT(ClienteID)>3;

SELECT (*) FROM Clientes;

-- primeiro seleciona o titulo, from clientes, where titulo like '%s' e depois executa a condição do group by
SELECT Titulo, COUNT(Titulo)
FROM Clientes
WHERE Titulo LIKE "S%"
GROUP BY Titulo
HAVING COUNT(Titulo)>10;


-- JOINS oferece flexibilidades adicionais, sua sintaxe é mais usada e apresenta melhor performance. Permite que consultemos dados de outras tabelas conectadas

-- INNER JOIN faz o cruzamento de duas tabelas. se cruzássemos tabela Clientes e Vendas e houvesse um cliente sem vendas, o INNER JOIN não traria esse cliente como resultado. então é como se fosse "1 && 2" se não atender, não retorna registro nenhum. "Inner Join" é como se fosse o resultado da intersecção de 2 tabelas
-- SINTAXE antes
SELECT clientes.id AS id, clientes.nome, vendas.data FROM clientes, vendas
-- SINTAXE agora
SELECT clientes.id AS id, clientes.nome, vendas.data
FROM clientes
INNER JOIN vendas -- a tabela que contém a Foreign Key fica no INNER JOIN. na tabela de vendas está a FK clientes

-- ON: usado pra validar se duas chaves são iguais quando fizer condição com JOIN. 
SELECT clientes.id AS id, clientes.nome, vendas.data FROM clientes, vendas
-- SINTAXE agora
SELECT clientes.id AS id, clientes.nome, vendas.data
FROM clientes
INNER JOIN vendas
ON clientes.id = vendas.cliente_id

-- exemplo 1

SELECT Clientes.ClienteID, Clientes.Titulo, Faturas.DataFatura
FROM Clientes
INNER JOIN Faturas
ON Clientes.ClienteID = Faturas.ClienteID

-- exemplo 2 usando o GROUP BY, o SELECT precisa ser simples
SELECT Clientes.Titulo
FROM Clientes
INNER JOIN Faturas
ON Clientes.ClienteID = Faturas.ClienteID
GROUP BY Clientes.Titulo;
