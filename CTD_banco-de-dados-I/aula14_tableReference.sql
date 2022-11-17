SELECT clientes.id, clientes.nome, vendas.data
FROM clientes, vendas
WHERE clientes.id = vendas.clienteID;