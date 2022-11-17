// EXERCICIO 1
/*
Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. 
Faça um programa que calcule e escreva:
*/

// a maior e a menor altura do grupo
let altura = [1.74, 1.54, 1.87, 1.65, 1.89, 1.94, 2.03, 2.15, 1.62, 1.76, 1.98, 1.85, 1.68, 2.72, 2.80];
let sexo = ['M', 'F', 'M', 'F', 'F', 'F', 'M', 'F', 'M', 'M', 'F', 'F', 'F', 'M', 'M'];
Array.min = (array) => {
    return Math.min.apply(Math, array);
}
Array.max = (array) => {
    return Math.max.apply(Math, array);
}
console.log('Maior altura: ', Array.max(altura).toFixed(2));
console.log('Menor altura: ', Array.min(altura).toFixed(2));

// a média de altura das mulheres
let soma = 0;
let sexoFem = 0;
sexo.forEach((sexo, i) => {
    if (sexo == 'F') {
        soma = soma + altura[i];
        sexoFem = sexoFem + 1;
    }
});
let media = soma / (sexoFem);
console.log('Média da altura das mulheres: ', media.toFixed(2));

// o número de homens
let numHomem = sexo.filter(elemento => elemento == 'M');
console.log('Números de homens: ', numHomem.length);


// EXERCICIO 2
/* Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em
relação ao filme: ótimo - 3, bom - 2, regular - 1. Faça um programa que receba a idade e a opinião de 15
espectadores, calcule e imprima:
*/

// a média das idades das pessoas que responderam ótimo;
let idades = [5, 95, 16, 65, 29, 44, 73, 12, 111, 51, 22, 122, 14, 9, 31];
console.log(idades.length);
let opinioes = [3, 3, 2, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 2, 2];
console.log(opinioes.length);
let somaIdade = 0;
let qtdOtimo = 0;

opinioes.forEach((opinioes, i) => {
    if (opinioes == 3) {
        somaIdade = somaIdade + idades[i];
        qtdOtimo = qtdOtimo + 1;
    }
});
console.log(somaIdade);
console.log(qtdOtimo);
let mediaIdades = somaIdade / qtdOtimo;
console.log('Média das idades: ', mediaIdades.toFixed(2));

// a quantidade de pessoas que responderam regular;
let qtdRegular = 0;
opinioes.forEach((opinioes, i) => {
    if (opinioes == 1) {
        qtdRegular = qtdRegular + 1;
    }
});
console.log('Quantidade de pessoas - opinião regular: ', qtdRegular);

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados
let porcentagem = ((15 - (qtdRegular + qtdOtimo)) / 15) * 100;
console.log(`Porcentagem de avaliações bom: ${porcentagem}%`);