let nomeCompleto1 = 'José da Silva';
let idade1 = 27;
let peso1 = 83.5;
let altura1 = 1.70;
let planoDeSaude1 = true;
let imc1 = (peso1 / altura1**2)

console.log(nomeCompleto1 + ' tem ' + idade1 + ' anos e seu índice de massa corporal é de ' + imc1)


let nomeCompleto2 = 'Carlos de Souza';
let idade2 = 28;
let peso2 = 80.1;
let altura2 = 1.76;
let planoDeSaude2 = true;
let imc2 = (peso2 / altura2**2)

console.log(nomeCompleto2 + ' tem ' + idade2 + ' anos e seu índice de massa corporal é de ' + imc2)

let nomeCompleto3 = 'Aline Ferreira';
let idade3 = 33;
let peso3 = 63.7;
let altura3 = 1.53;
let planoDeSaude3 = false;
let imc3 = (peso3 / altura3**2)

console.log(nomeCompleto3 + ' tem ' + idade3 + ' anos e seu índice de massa corporal é de ' + imc3)

let nomeCompleto4 = 'Pedro Menezes';
let idade4 = 28;
let peso4 = 55;
let altura4 = 1.65;
let planoDeSaude4 = true;
let imc4 = (peso4 / altura4**2)

console.log(nomeCompleto4 + ' tem ' + idade4 + ' anos e seu índice de massa corporal é de ' + imc4)

// agora tentar deixar o comando pronto pra não ter que fazer 1 a 1

let nomeCompleto = 'pedro menezes';
let idade = 28;
let peso = 55;
let altura = 1.65;
let plano = false;
let imc = null;
const calculoImc = (peso / altura**2);

console.log(nomeCompleto + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + calculoImc)

// ou com os ':'

let paciente1 = {
    nome : 'aline ferreira',
    idade : 33,
    peso : 63.7,
    altura : 1.53,
    plano : false,
}

let outputImc = paciente1.nome + ' tem ' + paciente1.idade + ' anos e seu índice de massa corporal é de ' + ((paciente1.peso / paciente1.altura**2).toFixed(2))

console.log(outputImc)