// Pop(): remove o último elemento de uma array/matriz

let colors = ["blue", "white", "red", "green", "violet", "yellow"];
console.log("Before pop: " + colors);
console.log(colors.length);


// o Pop() guarda o elemento retirado na memória, posso atribuí-lo a uma variável
let lastColor = colors.pop();
console.log(lastColor);


console.log("After pop: " + colors);
console.log(colors.length);