// 1. Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em km/l), dado que são conhecidos a distância total percorrida e o volume de combustível consumido para percorrê-la (medido em litros).

let distance = "";
let fuel = "";

function calcEfficiency(distance, fuel) {
    console.log("O consumo médio do carro é: " + distance / fuel + "km/l");
}

calcEfficiency(10, 2)


// 2. Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. Crie um programa que pergunta quantos homens e quantas mulheres participaram da festa e calcula o valor total arrecadado com as entradas.

function totalArrecadado(amountMen, amountWomen) {
    let men = 20;
    let women = 17;
    console.log("o total arrecadado foi: R$" + ((amountMen * men) + (amountWomen * women)));
}

totalArrecadado(10, 10);

// 3. Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. O programa deve perguntar as notas da primeira e da segunda prova, calcular a média aritmética entre elas, e exibir na tela.

function averageStudents(grade1, grade2) {
    console.log("your average is: " + ((grade1 + grade2) / 2))
}

averageStudents(10, 8);

// 4. Escreva um programa que solicita o nome de 3 alimentos e então exibe o nome dos 3 separados por virgulas. Ex: maçã, pera, banana.

let alimentos = ["maçã", "pera", "banana"];
console.log(alimentos.join(", "));

//Parte 2
// 1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.

function maior10(num) {
    if (num > 10) {
        console.log("o número " + num + " é maior que 10");
    }
    else {
        console.log("o número " + num + " não é maior que 10");
    }
}
maior10(11);

// 2. Escrever um algoritmo que leia dois valores inteiros e informe qual deles é o maior.

function oMaior(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " é o maior");
    } else {
        console.log(num2 + " é o maior")
    }
}

oMaior(7, 8)

// 3. Escrever um algoritmo que leia dois valores inteiros e informe se os números são iguais.

function iguais(num1, num2) {
    if (num1 == num2) {
        console.log(num1 + " é igual a " + num2);
    } else {
        console.log("os números são diferentes")
    }
}

iguais(10, 20)

// 4. Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

function parOuImpar(num) {
    if (num % 2 == 0) {
        console.log(num + " é PAR")
    } else {
        console.log(num + " é IMPAR")
    }
}

parOuImpar(9)

// 5. Crie um programa que receba um número inteiro e informa se este número é múltiplo de 10.

function multiplo10(num) {
    if (num % 10 == 0) {
        console.log('o número ' + num + ' é múltiplo de 10')
    } else {
        console.log('o número ' + num + ' não é múltiplo de 10')
    }
}

multiplo10(15)

// ou

var num = 15
let multiplo10 = num % 10 == 0 ? (num + " é múltiplo de 10") : (num + " não é múltiplo de 10");
console.log(multiplo10);


//Parte 3

// 1 - Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50.

function numErrado(num) {
    if ((num >= 15 && num <= 25) || (num >= 45 && num <= 50)) {
        console.log('erro. o número não pode estar entre 15 e 25 ou 45 e 50');
    } else {
        console.log("O seu número é = " + num)
    }
}

numErrado(10)
numErrado(15)
numErrado(40)
numErrado(49)

// 2 - Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 80, menor que 25 ou igual a 40.

function numCerto(num) {
    if (num > 80) {
        console.log(num + ' é maior que 80')
    } else if (num < 25) {
        console.log(num + ' é menor que 25');
    } else if (num == 40) {
        console.log(num + ' é = 40')
    } else {
        console.log('o seu número é: ' + num)
    }
}

numCerto(81)
numCerto(24)
numCerto(40)
numCerto(79)

/* 3 - Escrever um algoritmo que leia três valores inteiros e verifique se eles podem ser as medidas dos lados de um triângulo.
Exemplo:
let ladoA = 10
let ladoB = 10
let ladoC = 10
MENSAGEM:
"Os números digitados formam um TRIÂNGULO! (TRUE)"
"Os números digitados NÃO FORMAM um triângulo! (FALSE)" */

function checkTriangle(num1, num2, num3) {
    if ((num1 == num2) && (num2 == num3)) {
        console.log("os números inseridos formam um triângulo equilátero de lado " + num1);
    } else {
        console.log('os números inseridos não formam um triângulo equilátero');
    }
}

checkTriangle(20, 20, 20)

// 4 - Crie um programa que pergunte o nome do usuário. Exiba uma mensagem diferenciada caso o nome digitado seja "William", "Roberta" ou "JavaScript".

function sayMyName(name) {
    if ((name == 'roberta') || (name == 'Roberta') || (name == 'ROBERTA')) {
        console.log('Bom dia, ' + name + ', nossa querida tutora');
    } else if ((name == 'william') || (name == 'William') || (name == 'WILLIAM')) {
        console.log('Bom dia, ' + name + ', nosso professor mais otimista');
    } else if (name == 'javascript') {
        console.log('a turma 16 tá deitando no ' + name + '.');
    } else {
        console.log('Bom dia, ' + name)
    }
}

sayMyName('roberta')
sayMyName('Roberta')
sayMyName('william')
sayMyName('William')
sayMyName('javascript')