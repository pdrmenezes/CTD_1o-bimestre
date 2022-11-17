let maiorAltura = (array) => Math.max(...array);

let menorAltura = (array) => Math.min(...array);

function mediaAltura(arraySexo, arrayAltura) {
    let i = 0;
    let contador = 0;
    let somaAltura = 0;
    for (i = 0; i < arrayAltura.length; i++) {
        if (arraySexo[i] == 'F') {
            somaAltura += arrayAltura[i];
            contador++;
        }
    }
    return (somaAltura / contador).toFixed(2);
}

let numerosHomens = (array) => array.filter(num => num == 'M');

let soma = 0;
let contador = 0;
let mediaIdades = (arrayIdades, arrayOpnioes) => arrayIdades.forEach((idade, i) => {
    if (arrayOpnioes[i] == 3) {
        soma += idade;
        contador++;
    }
}
);

let qtd = (array) => array.reduce((total, valor) => { if (valor === 1) { return total + 1; } return total; }, 0); // 0 é o "total" inicial

let numeroBom = (array) => array.reduce((total, valor) => { if (valor === 2) { return total + 1; } return total; }, 0);

export { maiorAltura, menorAltura, mediaAltura, numerosHomens, mediaIdades, soma, contador, qtd, numeroBom };