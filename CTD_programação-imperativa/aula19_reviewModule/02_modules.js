// 1

let altura = [1.74, 1.54, 1.87, 1.65, 1.89, 1.94, 2.03, 2.15, 1.62, 1.76, 1.98, 1.85, 1.68, 2.72, 2.80];
let sexo = ['M', 'F', 'M', 'F', 'F', 'F', 'M', 'F', 'M', 'M', 'F', 'F', 'F', 'M', 'M'];

// 2

function mediaAlturaFem(sexo, i) {
    var soma = 0;
    var sexoFem = 0
    if (sexo == 'F') {
        soma = soma + altura[i];
        sexoFem = sexoFem + 1;
        return soma;
    }
}

module.exports = { altura, sexo, mediaAlturaFem }