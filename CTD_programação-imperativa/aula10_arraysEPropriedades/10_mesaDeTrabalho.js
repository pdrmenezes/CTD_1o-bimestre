// 1. o que os códigos retornam?

let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]); // undefined

let grupoDeAmigos = [["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna", "Patán"]]
console.log(grupoDeAmigos[1][0]) // spiderman

let str = "uma string qualquer"
let grupoDeArray = [[45, 89, 0], ['Digital', 'House', true], ['string', '123', 'false', 54, true, str]]
console.log(grupoDeArray[2][grupoDeArray[2].length - 1]); // uma string qualquer

// 2. acessar elementos específicos de uma array

let array = [4, 5, 7, 2, 3];
console.log("acessando o elemento da posição [2]");
console.log(array[2]);

// 3. modificar cada um dos elementos de uma array e imprimí-los
console.log("alterando os elementos da array")
console.log(array[3]);
array[0] = 2;
array[1] = 3;
array[2] = 4;
array[3] = 5;
console.log(array);

// 4. adicionar elementos à array
console.log("adicionando no final da array");
array.push(1);
console.log(array);
console.log("adicionar no início da array");
array.unshift(6);
console.log(array);

// 5. extrair elementos de uma array
console.log("extraindo do final da array o elemento" + array.pop());
console.log(array);
console.log("extraindo do início da array o elemento" + array.shift());
console.log(array);

// 6. comparar elementos de uma array com os elementos de outra
let array = [4, 5, 7, 2, 3];
let outroArray = [3, 1, 7, 2, 3];
if (array[0] > outroArray[2]) {
    console.log("Maior número registrado com sucesso.");
}
else {
    console.log("Erro, o 2º número é maior");
}

// 7. array invertido
function imprimirInverso(array) {
    console.log(array.reverse());
}

function imprimirInversoRecursiva(array) {
    console.log(array[array.length - 1]);
    if (array.length - 1 != 0) {
        imprimirInverso2(array.slice(0, array.length - 1));
    }
}

array = [0, 1, 2, 3, 4];
console.log("array invertido: " + inverter(array));
console.log("função imprimir inverso: " + inverter(array));
imprimirInverso(array);

console.log("Nova função de imprimir inverso: ")
imprimirInversoRecursiva(array);

// 8. somar array
numeros = [1, 2, 3, 4, 5];


function somarArray([]) {
    console.log()

}