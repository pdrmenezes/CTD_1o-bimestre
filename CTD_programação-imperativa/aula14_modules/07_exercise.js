/* calculo1.subtrair(20,3));
calculo2.multiplicar(20,3));
calculo3.dividir(20,3));
maiuscula.maiuscula('silvia'); // convert to UpperCase
mais.maiuscula('aaa') //  */

const calc = require('./05_exportFunction'); // cria um objeto 'calc' com todas as funções exportadas do arquivo

const {sum,sub} = require('./05_exportFunction') // com as chaves {} não importa o documento inteiro, importa funções específicas dentro do arquivo

console.log(calc.sum(20,3));
console.log(calc.sub(20,3));
console.log(calc.mult(20,3));
console.log(calc.div(20,3));
console.log(calc.allCaps('silvia'));

console.log(calc.objeto1.braceletColor);
console.log(calc.objeto2.name);