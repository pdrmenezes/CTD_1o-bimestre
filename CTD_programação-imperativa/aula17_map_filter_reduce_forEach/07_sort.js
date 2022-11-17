// .sort() ordena os elementos em ordem alfabética ou numérica

// 'sort' ordem alfabética

let frutas = ['banana', 'maçã', 'pera', 'uva', 'laranja', 'limão', 'manga', 'acerola'];

frutas.sort();

console.log(frutas);

// 'sort' numérico precisa dos parâmetros da função callback

// em ordem crescente

let numeros = [1, 8, 6, 80, 13, 20, 15];

console.log(numeros.sort(
    function (a, b) {
        return a - b;
    }
));


// 'sort' numérico em ordem decrescente

console.log(numeros.sort(
    function (a, b) {
        return b - a;
    }
));