// function padrão

function somar(a, b) {
  return a + b
}

// arrow functions são sempre anônimas

(a, b) => a + b;

// se quisermos nomeá-las, temos que atribuí-la a uma variável

let somar = (a, b) => a + b;
console.log(somar(2, 2));

// arrow function com mais de 1 linha de retorno

let multiplo = (a, b) => {
  let resto = a % b;
  return resto == 0
};

console.log(multiplo(4, 2));