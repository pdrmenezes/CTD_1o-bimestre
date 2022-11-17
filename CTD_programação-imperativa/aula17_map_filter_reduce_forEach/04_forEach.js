// .forEach() é um método desmembrador que itera em uma array a partir de uma função callback e não retorna nada.

// em outras palavras, ele chama a função para cada elemento em um array

var paises = ['brasil', 'cuba', 'peru'];

paises.forEach(
    function (pais) {
        console.log(pais);
    }
);

// 2. para cada elemento do array, console.log(elemento)

let pizza = ['fatia 1', 'fatia 2', 'fatia 3', 'fatia 4', 'fatia 5', 'fatia 6'];

pizza.forEach(
    function (fatia) {
        console.log(fatia)
    }
);