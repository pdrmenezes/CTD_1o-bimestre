// Shift(): remove o primeiro elemento de uma array/matriz "movendo" toda a array à esquerda

let colors = ["blue", "white", "red", "green", "violet", "yellow"];
console.log("Before shift: " + colors);
console.log(colors.length);
console.log("=================");


// o Shift() guarda o elemento retirado na memória, posso atribuí-lo a uma variável
let firstColor = colors.shift();
console.log("logging first color: " + firstColor);

console.log("=================");
console.log("After shift: " + colors);
console.log(colors.length);