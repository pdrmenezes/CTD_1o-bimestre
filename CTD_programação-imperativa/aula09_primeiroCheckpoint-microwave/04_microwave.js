let Pipoca = 10;
let Macarrão = 8;
let Carne = 15;
let Feijão = 12;
let Brigadeiro = 8;

function microondas(comida, tempo) {
  if (comida == tempo) {
    console.log("Prato pronto, bom apetite!");
  }
  else if (tempo < comida) {
    console.log("Tempo insuficiente!");
  }
  else if (tempo >= (comida * 2)) {
    console.log("Queimou!");
  }
  else if (tempo >= (comida * 3)) {
    console.log("KABUUUM!");
  }
}
microondas(Carne, 10);