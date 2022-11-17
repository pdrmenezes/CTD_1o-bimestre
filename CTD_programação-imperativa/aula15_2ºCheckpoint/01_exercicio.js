let frutasAmarelas = ['melão', 'mamão', 'limão'];
let [fruta1, fruta2, fruta3] = frutasAmarelas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(frutasAmarelas);


function soma(a = 1, b = 3) {
  return a + b;
}

console.log(soma());
console.log(soma(3));
console.log(soma(1, 2));

frutasAmarelas = ['melão', 'mamão', 'limão siciliano'];
let frutasVermelhas = ['morango', 'cereja', 'maçã red'];
let frutasVerdes = ['limão', 'kiwi', 'maçã verde'];

frutasVermelhas1 = frutasVermelhas.map(fruta => fruta.toUpperCase());
let todasFrutas = [...frutasAmarelas, ...frutasVermelhas1, ...frutasVerdes];

console.log(todasFrutas);

for (var i = 0; i < 50; i += 10) {
  console.log(i);
}

console.log(i)

var z = 0;
for (var i = 20; i < 50; i += 10) {
  z += i;
}
console.log(z);

function soletrar(texto) {
  console.log(texto.replace('-', '').toLocaleUpperCase().split("").join("-"));
}
soletrar("digital-house");
soletrar("ctd");

// fatorial
let valor = 5;
let fatorial = 1;
for (let i = valor; i > 1; i--) {
  fatorial *= i;
}
console.log(fatorial);

let x = 5;
let y = x++ + ++x;
console.log("y= " + y);

x = 3;
y = x * (x + 1) * x++;
x = 5;
y = 3;
y *= x + 1
console.log("x= " + x);
console.log("y= " + y);