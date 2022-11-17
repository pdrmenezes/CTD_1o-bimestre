// .filter() usa a função callback pra filtrar alguns itens da array, com base nos critérios definidos na função callback

// retornar somente os elementos da array que estejam de acordo com a condição estabelecida na função callback

// 1. retornar somente quem for maior de idade (função clássica)

let idades = [22, 8, 17, 14, 30];

let maiores = idades.filter(
    function (idade) {
        return idade > 18;
    });

console.log(maiores)

// arrow function

maiores = idades.filter(selectAdults = idade => idade > 18);

console.log(maiores)

// 2. retornar elementos maiores que 5
let numeros = [1, 2, -3, 4, -5, 0, 7, 8, 9, 19]
let numerosMaiores = numeros.filter(
    elemento => elemento > 5
);

console.log(numerosMaiores);

// exemplo 2
const data = [
    {
        id: '1',
        nome: 'pedro',
    },
    {
        id: '2',
        nome: 'cláudia',
    },
    {
        id: '3',
        nome: 'bruna',
    },
    {
        id: '4',
        nome: 'rogério',
    }
]

// quando não existe condição, cada item passa pela condição e é armazenado em "itensFiltrados"
const itensSemFiltro = data.filter((item) => item);
console.log(itensSemFiltro)

const itensFiltrados = data.filter((item) => item.id !== '2');
console.log(itensFiltrados)