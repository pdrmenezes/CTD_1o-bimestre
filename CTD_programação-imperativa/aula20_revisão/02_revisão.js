// 1. Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em km/l), dado que são conhecidos a distância total percorrida e o volume de combustível consumido para percorrê-la (medido em litros).

let consumoMédio = (distancia, consumo) => {
    return distancia / consumo;
};

console.log('O consumo médio foi de:', consumoMédio(20, 2), 'km/l.');


// 2. Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. Crie um programa que pergunta quantos homens e quantas mulheres participaram da festa e calcula o valor total arrecadado com as entradas.

let arrecadacao = (qtdHomens, qtdMulheres) => {
    let entradaHomens = 20;
    let entradaMulheres = 17;
    return ((qtdHomens * entradaHomens) + (qtdMulheres * entradaMulheres))
}

console.log('A arrecadação total foi de: R$', arrecadacao(10, 1))


// 3. Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. Na rotina deve-se incluir as notas do 1º ao 4º Bimestre. Calcular a média aritmética entre elas, e exibir na tela.

let notasDoGui = [9, 10, 9.5, 8.5];
let media = 0;

function avg(array) {
    for (let index = 0; index < array.length; index++) {
        media += (array[index] / array.length);
    }
    return media
}

console.log(avg(notasDoGui));

// 4. Escreva um programa que o programador inclua o nome de 3 alimentos e então exiba o nome dos 3 separados por virgulas. Ex: maçã, pera, arroz.

let alimentos = ['pera', 'maçã', 'uva', 'arroz', 'feijão', 'beterraba']

let separarAlimentos = (array) => {
    console.log(array.join(", "));
}

separarAlimentos(alimentos);


// 5. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.

let multiploDe10 = (num) => {
    if (num > 10) {
        console.log(num, ' é maior que 10');
    } else {

    }
}

multiploDe10(50);

// 6. Escrever um algoritmo que leia dois valores inteiros distintos e informe qual deles é o maior e também se são iguais.

let comparacao = (num1, num2) => {
    if (num1 == num2) {
        console.log(`Os números ${num1} e ${num2} são iguais`);
    } else if (num1 > num2) {
        console.log(`${num1} é maior que ${num2}`);
    } else {
        console.log(`${num1} é menor que ${num2}`);
    }
}

comparacao(8, 8);

// 7. Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

// if-else
let parOuImpar = (num1) => {
    if (num1 % 2 == 0) {
        console.log(`O número ${num1} é par`);
    } else {
        console.log(`${num1} é ímpar`);
    }
}

parOuImpar(7);

// if ternário
parOuImpar = (num1) => {
    num1 % 2 == 0 ? console.log(`O ${num1} é par`) : console.log(`O ${num1} é ímpar`);
}

parOuImpar(4);

// 8. Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50.

function numeroCerto(num1) {
    if ((num1 >= 15) && (num1 <= 25)) {
        console.log('ERRO, PAPAI!');
    } else if ((num1 >= 45) && (num1 <= 50)) {
        console.log('ERRO DE NOVO');
    } else if (!Number.isInteger(num1)) {
        console.log('o número não é um inteiro');
    } else {
        console.log(num1);
    }
}

numeroCerto(15);
numeroCerto(45);
numeroCerto(10);
numeroCerto(2.4);
numeroCerto(1000);

// 9. Escreva um programa que exibe qualquer tabuada completa. O programa deve perguntar ao usuário qual tabuada ele deseja visualizar, que irá responder digitando um número de 1 a 10.

let tabuada = (num) => {
    console.log("---------- tabuada do " + num + ' ----------')
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${(num * i)}`);
    }
}

tabuada(1);
tabuada(2);
tabuada(3);
tabuada(4);
tabuada(5);
tabuada(6);
tabuada(7);
tabuada(8);
tabuada(9);
tabuada(10);
tabuada(23);