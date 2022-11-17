import { maiorAltura, menorAltura, mediaAltura, numerosHomens, mediaIdades, soma, contador, qtd, numeroBom } from "./modulos/modulo1.js";

let altura2 = [1.56, 1.67, 1.98, 1.48, 1.56, 1.58, 1.63, 1.76, 1.77, 1.66];
let sexo2 = ['M', 'F', 'F', 'M', 'M', 'M', 'F', 'M', 'M', 'M'];

console.log(`A pessoa mais alta tem ${maiorAltura(altura2)}m de altura `);
console.log(`A pessoa mais baixa tem ${menorAltura(altura2)}m de altura `);

console.log(`A media de altura das mulheres = ${mediaAltura(sexo2, altura2)} metros`);

console.log(`O numero de homens = ${numerosHomens(sexo2).length}`);

let idades2 = [31, 42, 27, 23, 35, 27, 31, 33, 15, 67];
let opniao2 = [2, 1, 2, 3, 2, 1, 2, 3, 2, 1];

mediaIdades(idades2, opniao2);
console.log(`A media das idades das pessoas que responderam ótimo = ${soma / contador}`);

console.log(`A quantidade de pessoas que responderam regular = ${qtd(opniao2)}`);

console.log(`A porcentagem de pessoas que responderam bom entre todos os espectadores analisados = ${(numeroBom(opniao2) * 100) / opniao2.length}%`);