// callback anônima
setTimeout(function () {
  console.log('olá mundo')
}, 1000);

let myCallback = () => console.log('olá mundo');
setTimeout(myCallback, 1000);

// outro exemplo de callback

function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome;
};

function bomDia(nome, sobrenome, callback) {
  return 'olá, ' + callback(nome, sobrenome);
};

console.log(bomDia('pedro', 'menezes', nomeCompleto));

// callback com index

function iniciais(nome, sobrenome) {
  return nome[0] + '.' + sobrenome[0] + '.';
};

function bomDia(nome, sobrenome, callback) {
  return 'olá, ' + callback(nome, sobrenome);
};

console.log(bomDia('pedro', 'menezes', iniciais));