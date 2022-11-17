// 'callback' é quando o parâmetro de uma função é uma outra função

// .map() recebe uma função como parâmetro (callback), faz um loop no array e retorna um novo array modificado. As modificações serão as que previmos na nossa função de callback.

// em outras palavras, o map cria uma nova matriz com os resultados da função callback pra cada elemento da matriz

/* Array.map(function(elmentodaArray) {
    // função que queremos executar em cada elemento do array
}); */

let smallCaps = ['a', 'b', 'c', 'd', 'e'];
console.log(smallCaps);

// função clássica

let allCaps = smallCaps.map(
    function convertToCaps(letter) {
        return letter.toUpperCase();
    }
);

console.log(allCaps);


// arrow function

allCaps = smallCaps.map(convertToCaps = letter => letter.toUpperCase());

console.log(allCaps);