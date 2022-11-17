// Condicional if - else

var n1 = 10;
var n2 = 20;

if (n1 == 10) {
    console.log("is true");
} else {
    console.log("is false");
}

// Condicional else / else if: se condição for verdadeira, executa if, senão, executa else if, senão, executa else
// (o código pode ter vários else if, mas só 1 pode ser verdadeiro)
// o código pode ter vários IF e passa por todos.
// Else If ele para no primeiro que for verdadeiro


// Calcular média

// Regra: média >= 7 - aprovado | média < 7 - recupração

var n1 = 10;
var n2 = 10;
var n3 = 10;
var n4 = 1;

let media = (n1 + n2 + n3 + n4) / 4;
console.log("A média é: " + media)

if (media >= 7) {
    console.log("Parabéns! \nVocê foi aprovad(a)(o)!")
}
else {
    console.log("Vamos lá, você consegue recuperar!")
}