// funções são sequências de ações que serão executadas quando necessário

//função declarada: declara-se a função usando o 'function'
 function dobro(umNumero) {
     console.log(umNumero * 2);
 }

 dobro(2);

 function darOi() {
     console.log("Olá mundo");
 }

 darOi();

 // função expressa: são funções atribuídas colo calor de uma variável. a função em si, não tem nome, é uma função anônima e pode ser chamada pelo nome da variável. declara-se uma variável e atribui-se a ela uma função. entre os parênteses, determina-se o(s) parâmetros da função
 let somar1e1 = function(){
     console.log(1+1);
 }

 somar1e1();

 let somar = function(numero1, numero2){
    console.log(numero1+numero2);
}

somar(1, 2); // se eu não forneço os 2 parâmetros o output é NaN (Not A Number). os parâmetros têm que ser separados por vírgulas

// funções com 'return' não geram nenhum output, só guardam o resultado da função e, pra usar esse retorno, deve-se criar uma variável que busque o que foi retornado da função

function fazerSorvete(quantidade){
    return '🍦'.repeat(quantidade);
}
let meusSorvetes = fazerSorvete(3);
console.log(meusSorvetes);


 // escopo de uma função local

 function multiplicar(numero1, numero2){
     let resultado = numero1*numero2;
 }
console.log(resultado); // retorna um erro de que a variável 'resultado' só existe dentro do escopo da função

// se o console.log for pra dentro da função, aí sim ele consegue retornar a variável 'resultado'

function multiplicar(numero1, numero2){
    let resultado = numero1*numero2;
    console.log(resultado);
}

// o escopo local consegue acessar o escopo global, já o global não consegue acessar o escopo local. eu posso criar uma variável que já existe no escopo global, localmente, e o escopo local utilizará essa variável sem interferir com a do escopo global

// parâmetros padrão para uma função
function bemVindo(nome = 'visitante', sobrenome ='secreto') {
    return 'olá, ' + nome + ' ' + sobrenome;
}
bemVindo();