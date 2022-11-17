USE emarket;

-- 1) Queremos ter uma lista de todas as categorias.

SELECT 
    CategoriaNome
FROM
    Categorias;

-- 2) Como as categorias não possuem imagens, você está interessado em obter apenas um Nome e descrição da lista de categorias.

SELECT 
    CategoriaNome, Descricao
FROM
    Categorias;

-- 3) Obtenha uma lista dos produtos.

SELECT 
    ProdutoNome
FROM
    Produtos;

-- 4) Existem produtos descontinuados? (Descontinuado = 1).

SELECT 
    ProdutoNome
FROM
    Produtos
WHERE
    Descontinuado = 1; -- não existem produtos descontinuados

-- 5) Na sexta-feira, você deve se reunir com o fornecedor nr. 8. Quais são os produtos que eles fornecem?

SELECT 
    ProdutoNome
FROM
    Produtos
WHERE
    ProvedorID = 8;

-- 6) Queremos saber todos os produtos cujo preço unitário se encontra entre 10 e 22.

SELECT 
    ProdutoNome, PrecoUnitario
FROM
    Produtos
WHERE
    PrecoUnitario BETWEEN 10 AND 22;

-- 7) Fica definido que um produto deve ser solicitado ao fornecedor se suas unidades em estoque forem inferiores ao nível de reabastecimento. Existem produtos a solicitar?

SELECT 
    ProdutoNome, UnidadesEstoque, NivelReabastecimento
FROM
    Produtos
WHERE
    UnidadesEstoque < NivelReabastecimento;

-- 8) Você quer saber todos os produtos da lista anterior, mas que as unidades pedidas sejam iguais a zero.

SELECT 
    ProdutoNome,
    UnidadesEstoque,
    NivelReabastecimento,
    UnidadesPedidas
FROM
    Produtos
WHERE
    UnidadesEstoque < NivelReabastecimento
        AND UnidadesPedidas = 0;


-- Clientes

-- 1) Obtenha uma lista de todos os clientes com contato, empresa, cargo, País. Classifique a lista por país.

SELECT 
    Empresa, Contato, Titulo, Pais
FROM
    Clientes
ORDER BY pais;

-- 2) Queremos atender todos os clientes que possuem o título de  “Proprietário". Esse título estará em inglês (Owner).

SELECT 
    Empresa, Contato, Titulo, Pais
FROM
    Clientes
WHERE
    Titulo = 'Owner';

-- 3) A operadora de telefonia atendeu um cliente e não lembra o nome dele. Sabe apenas que começa com "C". Podemos ajudá-lo a obter uma lista com todos os contatos que começam com a letra C?

SELECT 
    Contato, Empresa, Titulo, Pais
FROM
    Clientes
WHERE
    Contato LIKE 'C%';


-- Faturas

-- 1) Obtenha uma lista de todas as faturas, ordenadas por data da fatura em ordem ascendente.

SELECT 
    FaturaId, DataFatura
FROM
    Faturas
ORDER BY DataFatura;

-- 2) Agora é necessário uma lista de faturas com o país de envio "EUA" e que a FormaeEnvio seja diferente de 3.

SELECT 
    FaturaId, PaisEnvio, FormaEnvio
FROM
    Faturas
WHERE
    FormaEnvio != 3 AND PaisEnvio = 'USA';

-- 3) O cliente 'GOURL' fez um pedido?

SELECT 
    FaturaId, ClienteID, detalhe
FROM
    Faturas
WHERE
    ClienteID = 'GOURL';

-- 4) Você deseja visualizar todas as faturas dos funcionários 2, 3, 5, 8 e 9.

SELECT 
    FaturaId, EmpregadoID
FROM
    Faturas
WHERE
    EmpregadoID IN (2 , 3, 5, 8, 9);


-- Queries I - Parte II

-- Produtos

-- 1) Obtenha a lista de todos os produtos em ordem decrescente por preço unitário.


SELECT 
    ProdutoNome, PrecoUnitario
FROM
    Produtos
ORDER BY PrecoUnitario DESC;

-- 2) Obtenha a lista dos 5 melhores produtos cujo preço unitário é o mais "Caro".

SELECT 
    ProdutoNome, PrecoUnitario
FROM
    Produtos
ORDER BY PrecoUnitario DESC
LIMIT 5;

-- 3) Obtenha um top 10 dos produtos com mais unidades em estoque.

SELECT 
    ProdutoNome, UnidadesEstoque
FROM
    Produtos
ORDER BY UnidadesEstoque DESC
LIMIT 10;

-- DetalheFatura

-- 1) Obtenha uma lista de FaturaId, Produto, Quantidade.

SELECT 
    FaturaId, ProdutoID, Quantidade
FROM
    DetalheFatura;

-- 2) Classifique a lista acima por Quantidade decrescente. 

SELECT 
    FaturaId, ProdutoID, Quantidade
FROM
    DetalheFatura
ORDER BY Quantidade DESC;

-- 3) Filtre a mesma lista apenas para os produtos cuja quantidade esteja entre 50 e 100. 

SELECT 
    FaturaId, ProdutoID, Quantidade
FROM
    DetalheFatura
WHERE
    Quantidade BETWEEN 50 AND 100
ORDER BY Quantidade DESC;

-- 4) Em outra nova consulta, obtenha uma lista com os seguintes nomes de coluna: Número da fatura (FaturaId), Produto (ProdutoId), Total (Preço Unitário * Quantidade)

SELECT 
    FaturaId AS 'Número da fatura',
    ProdutoID AS 'Produto',
    (PrecoUnitario * Quantidade) AS 'Total'
FROM
    DetalheFatura;


-- Extras

-- 1) Obtenha uma lista de todos os clientes que moram no “Brasil” ou “México” ou que tenham um título que começa com "Vendas" (o termo estará em inglês: ‘Sales’);

SELECT 
    ClienteID, Pais, Titulo
FROM
    Clientes
WHERE
    Pais IN ('Brazil' , 'Mexico')
        OR Titulo LIKE 'Sales%';

-- 2) Obtenha uma lista de todos os clientes que pertencem a uma empresa que comece com a letra “A”.

SELECT 
    ClienteID, Empresa
FROM
    Clientes
WHERE
    Empresa LIKE 'A%';
    -- o símbolo '%' indica que pode ter qualquer outra coisa após ou antes, dependendo da sua localização no termo de busca (ex: 'Sales%'
    -- '_' indica que existe apenas um caractere antes ou depois, dependendo da sua localização (ex: Sale_)

-- 3) Obtenha uma lista com os seguinte dados: Cidade, Contato(renomeie para Nome e Sobrenome), Título (renomeie para Cargo), de todos os clientes que são da cidade "Madrid".

SELECT 
    Cidade, Contato AS 'Nome e Sobrenome', Titulo AS 'Cargo'
FROM
    Clientes
WHERE
    Cidade = 'Madrid';

-- 4) Obtenha uma lista de todas as faturas com ID entre 10.000 e 10.500

SELECT 
    FaturaId
FROM
    Faturas
WHERE
    FaturaId BETWEEN 10000 AND 10500
ORDER BY FaturaId;

-- 5) Obtenha uma lista de todas as faturas com ID entre 10.000 e 10.500 ou de clientes com IDs começando com "B".

SELECT 
    ClienteID, FaturaId
FROM
    Faturas
WHERE
    FaturaId BETWEEN 10000 AND 10500
        AND ClienteID LIKE 'B%'
ORDER BY FaturaId;

-- 6) Existem notas fiscais que informam a cidade expedidora “Vancouver” ou que utilizam FormaEnvio =  3?

SELECT 
    CidadeEnvio, FormaEnvio, ClienteID, FaturaId
FROM
    Faturas
WHERE
    CidadeEnvio = 'Vancouver'
        OR FormaEnvio = '3';

-- 7) Qual é a identificação do funcionário “Buchanan”?

SELECT 
    EmpregadoID, Sobrenome
FROM
    Empregados
WHERE
    Sobrenome = 'Buchanan';

-- 8) Existem Notas Fiscais com o EmpregadoId do funcionário acima?

SELECT 
    FaturaId, EmpregadoID
FROM
    Faturas
WHERE
    EmpregadoID = '5';