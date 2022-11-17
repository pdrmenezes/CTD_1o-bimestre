// 1. soma de 2 números
let soma = 10 + 20;
console.log(soma);

// 2. repetir processo com outro operador
let divisao = 20 / 10;
console.log(divisao);

// 3. declarar e atribuir 2 variáveis e exibir a soma na tela
let numero1 = 10;
let numero2 = 20;
console.log(numero1 + numero2);

// 4. atribuir soma a uma nova variável e exibir a nova variável na tela
let novaSoma = (numero1 + numero2);
console.log(novaSoma);

// 5. reatribuir à variável anterior "1"+1 e exibí-la
novaSoma = "1" + 1;
console.log(novaSoma);

// 6. atribuir "olá"+23 à nova variável e exibí-la
novaSoma = "olá" + 23;
console.log(novaSoma);

// 7. criar mensagens concatenadas com valores diferentes

let nome = "cláudio";
let sobrenome = "santoro";
let projetado = 1958;
let arquiteto = "oscar niemeyer";
let nomeOriginal = "teatro nacional de brasília";

console.log("o teatro nacional" + " " + nome + " " + sobrenome + ", originalmente chamado de " + nomeOriginal + " " + "foi projetado em " + projetado + " por " + arquiteto + ". Seu nome é uma homenagem ao maestro e compositor que fundou a orquestra sinfônica em " + 1979 + ".")

// com template string
console.log(`o teatro nacional ${nome} ${sobrenome}, originalmente chamado de ${nomeOriginal} foi projetado em ${projetado} por ${arquiteto}. Seu nome é uma homenagem ao maestro e compositor que fundou a orquestra sinfônica em 1979.`)

