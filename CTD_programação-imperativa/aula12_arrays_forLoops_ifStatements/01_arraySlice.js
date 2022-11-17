// Slice(inicio,fim): fatia a string a partir de 2 parâmetros, um que determina o inicio e um que determina o fim, mas não inclui o index

/*
@param start — The index to the beginning of the specified portion of stringObj.

@param end
The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
 */

let sentence = 'Breaking bad rules!';
let slicedA = sentence.slice(0); // => Breaking bad rules! // a partir do primeiro index
let slicedB = sentence.slice(0, 8); // => Breaking // do primeiro index até o 8º, não o incluindo
let slicedC = sentence.slice(5, 8); // => ing // a partir do 5º até o 8º
let slicedD = sentence.slice(1, 8); // => reaking
let slicedE = sentence.slice(8); // => ' bad rules!' // a partir do 8º index até o final
let slicedF = sentence.slice(9, 12); // => bad
let slicedG = sentence.slice(13); // => rules! // a partir do 13º index até o final
let slicedH = sentence.slice(-10); // => bad rules! // de trás pra frente

// O Slice() não altera a matriz inicial, gera uma nova matriz a partir da original

console.log(slicedA);
console.log(slicedB);
console.log(slicedC);
console.log(slicedD);
console.log(slicedE);
console.log(slicedF);
console.log(slicedG);
console.log(slicedH);