// 1. Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status.

// A informação Qualidade do Produto deve ser um número que irá de 0 a 10. A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.

let produtos = [{
    nome: "escova de dente fibras de linho",
    valor: 50,
    qualidade: 9,
    status: true
},
{
    nome: "pasta dental sal do himalaya",
    valor: 1050,
    qualidade: 8,
    status: true
},
{
    nome: "clareamento",
    valor: 3000,
    qualidade: 10,
    status: true
},
{
    nome: "fio dental de seda",
    valor: 550,
    qualidade: 9,
    status: true
}
];

console.log("----------- ESTOQUE -----------");
console.log(produtos);
console.log("");

let totalEstoque = produtos.reduce((acumulador, atual) => {
    return acumulador + atual.valor;
}, 0);

console.log(`TOTAL EM ESTOQUE: R$${totalEstoque}`);
console.log("");


// 2. Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham:
// Valor entre 482 e 1600; Qualidade superior a 6; Status como disponível.
// O resultado do filtro deve ser armazenado na variável carrinho.

let carrinho = produtos.filter((produto) => {
    return produto.qualidade > 6 && produto.status === true && produto.valor >= 462 && produto.valor <= 1600;
});
console.log("----------- DETALHAMENTO DO CARRINHO -----------");
console.log(carrinho);


// 3. Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes e preços correspondentes, e no final um valor total, resultante da somatória de todos os produtos.
console.log("----------- CARRINHO -----------");
let total = 0;
carrinho.forEach((produto) => {
    total += produto.valor;
    console.log(`${produto.nome} - R$${produto.valor}`);
});
console.log("");
console.log("----------- TOTAL -----------");
console.log(`R$${total}`);