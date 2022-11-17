// Método 'Math.min()' retorna o número com o valor mais baixo

let lowestNumber = Math.min(5, 10, -31, 2, 9, 90, 77);
console.log('the lowest number is: ' + lowestNumber);

// Método 'Math.max()' retorna o número com o valor mais alto

let highestNumber = Math.max(5, 10, -31, 2, 9, 90, 77)
console.log('the highest number is: ' + highestNumber);

// não conseguimos acessar um array com as funções 'Math', então criarmos uma função

lowestNumber = Math.min(numbers); // o resultado é 'NaN'


// então criamos uma função para acessar o array
let numbers = [5, 10, -31, 2, 9, 90, 77];

// com função clássica

Array.min = function (array) {
    return Math.min.apply(Math, array)
}

Array.max = function (array) {
    return Math.max.apply(Math, array);
}

console.log("'numbers' lowest number is: " + Array.min(numbers));

console.log("'numbers' highest number is: " + Array.max(numbers));

// com arrow function

Array.min = (array) => { return Math.min.apply(Math, array) }

Array.max = (array) => { return Math.max.apply(Math, array) }

console.log("'numbers' lowest number is: " + Array.min(numbers));

console.log("'numbers' highest number is: " + Array.max(numbers));