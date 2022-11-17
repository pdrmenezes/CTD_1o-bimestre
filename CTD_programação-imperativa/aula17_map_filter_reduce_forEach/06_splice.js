// .splice() é um método que remove e adiciona elementos de uma array e não permite criar uma nova variável
// splice = emenda

// sintaxe: array.splice(inicio, quantidade ou posição que vai sobrescrever, item1, item2, item3...)
// a quantidade é opcional e são os números inteiros a eliminar no array

let frutas = ['banana', 'maçã', 'pera', 'uva', 'laranja', 'limão', 'manga'];
console.log(frutas);
frutas.splice(2, 0, 'mamão', 'caju');

console.log(frutas);