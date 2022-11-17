// .reduce() é um método que percorre o array e retorna um único valor de acordo com o critério estabelecido pela função callback. Ele acumula o valor

let numeros = [1, 2, -3, 4, -5, 0, 7, 8, 9, 19]
let resultado = numeros.reduce(
    function (totalizador, elemento) {
        return totalizador + elemento;
    }
);

console.log(resultado);