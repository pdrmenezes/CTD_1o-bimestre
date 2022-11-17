// exemplo 6: uma falsa

var n1 = 10;
var n2 = 15;

if ((n1 > n2) && (n1 != 20)) {
    console.log(true + ": ambas são verdadeiras");
}

else {
    console.log(false + ": uma ou as 2 são falsas");
}

// ambas verdadeiras

var n1 = 10;
var n2 = 15;

if ((n1 <= n2) && (n1 != 20)) {
    console.log(true + ": ambas são verdadeiras");
}

else {
    console.log(false + ": uma ou as 2 são falsas");
}

// viagem de avião

var passaporte = true
var documento = true

if ((passaporte = true) && (documento == true)) {
    console.log("Pode partir sem problema algum!")
}
else {
    console.log("Não vai a lugar nenhum!")
}

// && (and) com %

if ((12 % 4 == 0) && (12 != 24)) {
    console.log(true + ": Tudo certinho!")
}
else {
    console.log(false + ": Opa, alguma coisa de errada não está certa!")
}

// || (or)

if ((10 > 5) || (10 > 20)) {
    console.log(true + ": Certinho! Uma delas é verdadeira")
}
else {
    console.log(false + ": Opa, nenhuma delas é verdadeira")
}

// ! (not): negar a condição

!false // true
!(20 > 15) // seria true e vira false