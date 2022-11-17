// início do contador | limite de repetições | modificador do contador

// 'i' normalmente é contador em diferentes linguagens

for (let i = 0; i < 5; i++) {
    console.log('pedro');
}

console.log('end of the loop');

//

exibirTipo(10);

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i == 0) {
            console.log("i = 0");

        } else if (i % 2 == 0) {
            console.log("o número " + i + " é par");

        } else {
            console.log("o número " + i + " é ímpar")
        }
    }
}