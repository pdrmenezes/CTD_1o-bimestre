// Nível 1
function adicionar(a, b) {
    let resultado = a + b;
    console.log("adicionar: " + resultado);
}

function subtrair(a, b) {
    let resultado2 = a - b;
    console.log("subtrair: " + resultado2);
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    let resultado3 = a / b;
    return resultado3;
}

// Nível 2
console.log("-------Teste de Operações / Calculadora--------")

adicionar(40, 29) // 69
subtrair(30, 10) // 20
console.log("multiplicar: " + multiplicacao(50, 50)) // 2500
console.log("dividir: " + divisao(21, 7)) // 3
console.log("dividir: " + divisao(2, 0)) // Infinity

// Nível 3
function quadradoComMultiplicacao(z) {
    let resultado4 = multiplicacao(z, z);
    return resultado4;
}

function quadradoComPow(a) {
    let resultado4 = Math.pow(a, 2);
    return resultado4;
}

function exponenciacao(a, b) {
    let resultado4 = Math.pow(a, b);
    return resultado4;
}

console.log("quadrado com Math.Pow: " + quadradoComPow(3));
console.log("potência com Math.Pow: " + exponenciacao(4, 3));
console.log("quadrado com nossa funcao multiplicacao(a,b): " + quadradoComMultiplicacao(7));

function mediaDeTresNumeros(a, b, c) {
    let resultado5 = (a + b + c) / 3
    return resultado5
}
console.log("media de tres numeros: " + mediaDeTresNumeros(20, 10, 30)) // 20

function calculaPorcentagem(num, porcentagem) {
    return multiplicacao(divisao(porcentagem, 100), num)
}

console.log("porcentagem: " + calculaPorcentagem(300, 15));

function geradorDePorcentagem(a, b) {
    return multiplicacao(divisao(a, b), 100)
}

console.log("gerador de porcentagem: " + geradorDePorcentagem(2, 200))