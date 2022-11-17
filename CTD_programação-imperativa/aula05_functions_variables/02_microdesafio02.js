// 1. converter polegadas pra centímetros
function converterPolegadas(polegadas){
    let polegadasEmCentimetros = (polegadas*2.54);
    return polegadasEmCentimetros;
}
console.log(converterPolegadas(2));

// 2. converter string em url
function converterString(texto){
    let stringEmUrl = ("www." + texto + ".com.br");
    return stringEmUrl;
}
console.log(converterString("aula2"));

// 3. adicionar '!' ao final da frase
function fraseEmAfirmação(frase){
    let afirmacao = (frase + "!");
    return afirmacao;
}
console.log(fraseEmAfirmação("lorem ipsum sit amet"));

// 4. calcular idade do pet
function calcularIdadeDoPet(idade){
    let idadeDoPet = (idade * 7);
    return idadeDoPet;
}
console.log(calcularIdadeDoPet(10))

// 5. calcular valor da hora
function calcularValorDaHora(salario){
    let valorDaHora = (salario / 160);
    return valorDaHora;
}
console.log(calcularValorDaHora(2500))

// 6. calcular imc a partir da altura em cm e peso em kg
// peso/altura**2
function calcularImc(peso, altura){
    let imc = (peso/((altura/100)**2));
    return imc;
}
console.log(calcularImc(55, 165))

// 7. lower to uppercase
function lowerToUpperCase(stringEmLower){
    let Upper = (stringEmLower.toUpperCase());
    return Upper;
}
console.log(lowerToUpperCase("algumas letras"))

// 8. retornar tipo de dado do parâmetro
function whatTheData(parametro){
    let qualParametro = typeof(parametro);
    return qualParametro;
}
console.log(whatTheData(true));

// 9. retornar a circunferência a partir do raio
function circunferenciaPeloRaio(raio){
    let circunferencia = (2*Math.PI*raio);
    return circunferencia;
}
console.log(circunferenciaPeloRaio(20))