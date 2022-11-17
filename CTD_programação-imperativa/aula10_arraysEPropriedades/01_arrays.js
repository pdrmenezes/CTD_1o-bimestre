// Array: como trabalhar com arrays em JS

// toda string é um array de caracteres, onde escolhermos, dentro dos colchetes [], o index do elemento que queremos acessar

let pessoa = ["Pedro", 53, 1.65, true, ["Pão de queijo", "café"]];

// console.log 1 elemento da array: a partir do seu index

console.log("O que Pedro gosta de comer?");
console.log(pessoa[4]);

console.log("O que " + pessoa[0] + " gosta de comer?" + "\n" + pessoa[4]);

// lenght: passa a quantidade de elementos da array, o comprimento

console.log(pessoa.length);

// concatenando arrays
// usando 'concat'
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

// usando .push e ...arr
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
arr3.push(...arr4);
console.log(arr3);

// usando console.log
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
console.log([...arr5, ...arr6]);

// usando 'array.of'
console.log(Array.of(...arr5, ...arr6));

// usando 'new Array'
console.log(new Array(...arr5, ...arr6));