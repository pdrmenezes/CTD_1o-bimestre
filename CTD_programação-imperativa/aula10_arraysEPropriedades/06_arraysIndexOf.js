// IndexOf: pesquisa e retorna o index / a poaisção de 1 item da array/matriz
// é case sensitive (ex: "azul" != "Azul")

let colors = ["blue", "white", "red", "green"];
console.log(colors);

// IndexOf de algo que não existe na array: retorna -1

console.log(colors.indexOf("Blue"));

// IndexOf de algo que existe na array: retorna o index do elemento na array

console.log(colors.indexOf("blue"));
