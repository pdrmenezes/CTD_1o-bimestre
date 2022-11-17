/*
Defina as entidades e os tipos de dados para cada atributo
*/

-- FORNECEDORES
id INT
nome VARCHAR(100)
cidade VARCHAR(50)
estado VARCHAR(2)
telefone CHAR(13)

-- SESSÕES
id INT
nome VARCHAR(30)
descricao TEXT

-- PRODUTOS
id INT
nome VARCHAR(30)
sessão_id INT
fornecedor_id INT
lote INT
data_compra DATE
data_validade DATE
valor_unitario DECIMAL(7,2)