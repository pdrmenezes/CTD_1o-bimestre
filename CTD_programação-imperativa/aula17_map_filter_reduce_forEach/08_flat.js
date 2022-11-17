// .flat() método que insere um sub-array dentro de um array original

let numeros = [1, 2, 3, 4, [5, 6, 7, 8], 9, 10, 11];
console.log(numeros);

numerosFlattened = numeros.flat(0);
console.log(numerosFlattened);

numerosFlattened = numeros.flat(1);
console.log(numerosFlattened);

console.log('')
console.log('exemplo 2')

// o parâmetro é o nível ou camada de sub-array que será incoroparado à array principal/original

let numeros2 = [1, 2, 3, 4, [5, 6, 7, 8, [1, 1, 1, [2, 2, 2]]], 9, 10, 11];
console.log("array 'número2': " + numeros2);

numeros2Flattened = numeros2.flat(0);
console.log('flat(0): ', numeros2Flattened);

numeros2Flattened = numeros2.flat(1);
console.log('flat(1): ', numeros2Flattened);

numeros2Flattened = numeros2.flat(2);
console.log('flat(2): ', numeros2Flattened);

numeros2Flattened = numeros2.flat(3);
console.log('flat(3): ', numeros2Flattened);