-- 1:1 // um pra um
-- um usuário possui apenas um endereço
-- um endereço pertence a apenas um usuário
-- chave primária de endereço na tabela usuários, indicando que este endereço está associado a este usuário (Chave Estrangeira // Foreign Key // FK)

-- 1:N // um pra muitos
-- um cliente pode ter vários cartões
-- um cartão pertence a apenas um cliente
-- chave primária do cliente na tabela cartões, indicando que a qual usuário cada cartão está associado

-- N:N // muitos pra muitos
-- um cliente pode comprar muitos produtos
-- um produto pode ser comprado por muitos clientes
-- o próprio relacionamento se torna uma tabela (tabela intermediária // tabela dinâmica) 
-- a tabela intermediária contém o seu id, a chave estrangeira de clientes e a chave estrangeira de produtos