// soma
let sum = (a, b) => a + b;

// subtração
let subtracao = (a, b) => a - b;

// multiplicação
let multiplicacao = (a, b) => a * b;

// divisão
let divisao = (a, b) => a / b;

// quadrado do número
let quadradoDoNumero = (a) => a * a;

// média de 3 números
let mediaDeTresNumeros = (a, b, c) => ((a + b + c) / 3);

// calcaular porcentagem
let calcularPorcentagem = (a, b) => a * b / 100;

// adicionar porcentagem
let adicionarPorcentagem = (a, b) => a + (a * b / 100);

// gerador de porcentagem
let geradorDePorcentagem = (a, b) => a * 100 / b;


// teste da calculadora
console.log("-------------- Teste de Operações / Calculadora --------------")
console.log("O resultado da soma é: " + sum(1, 2))
console.log("O resultado da subtração é: " + subtracao(1, 2))
console.log("O resultado da multiplicação é: " + multiplicacao(1, 2))
console.log("O resultado da divisão é é: " + divisao(1, 2))
console.log("O resultado da divisão por 0 é: " + divisao(1, 0))

console.log(" ")

console.log("-------------- Teste de Funções Extras / Calculadora --------------")
console.log("Esse número ao quadrado é: " + quadradoDoNumero(5));
console.log("A média é: " + mediaDeTresNumeros(1, 2, 3));
console.log("A porcentagem é igual a: " + calcularPorcentagem(200, 10));

console.log("A porcentagem é igual a: " + calcularPorcentagem(9950, 10));

console.log("o valor total é: " + adicionarPorcentagem(9950, 10));

console.log("O valor representa " + geradorDePorcentagem(4, 200) + "%");