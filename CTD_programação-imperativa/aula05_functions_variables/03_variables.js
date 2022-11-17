// let, const, var
// nome das variáveis são escritos sem acentos ou espaços. Camel Case (primeira palavra minúscula + segunda palavra com primeira letra maiúscula)

//as variáveis todas são case-sensitive, então 'minhaVariável' é diferente de 'MinhaVariável'

//na estrutura var meuApelido = 'peu'; a estrutura é a seguinte:
// meuApelido é o nome da variável
// o símbolo '=' é a atribuição, que diz ao JS que queremos armazenar o valor à direita na variável à esquerda
// 'peu' é o valor que vamos armazenar na variável

// var - variável global
var telefoneAmigo = 998322725;


var nomeDeUsuario = "Pedro";

console.log(nomeDeUsuario);

// pra atualizar uma variável eu não preciso repetir o var, é só declará-la novamente:

var meuApelido = 'peu';
meuApelido = 'pedrinho';

// let - exclusivas a um bloco de execução, bloco de texto contido entre chaves {} as variáveis com let não se sobresceverão como com 'var'. por convenção e boas práticas, let é a mais recomendada

// bloco de código 1
if (true){
    let cumprimento = 'bom dia';
    console.log(cumprimento);
}

//bloco de código 2
if(true){
    let cumprimento = 'tchau';
    console.log(cumprimento)
}
// não pdoemos declarar 2 vezes a mesma variável dentro de um bloco de código usando let, podemos atualizá-la, alterar o seu valor.

// exemplo 1
if (true){
    let cumprimento = 'bom dia';
    let cumprimento = 'tchau';
    console.log(cumprimento);
}

// exemplo 2
let nomeDeUsuario ='Pedro';
console.log(nomeDeUsuario);
let nomeDeUsuario ='Paulo';
console.log(nomeDeUsuario);

// se executar esse código ele dá erro dizendo que a variável já foi declarada, então pra atualizar o valor de 'nomeDeUsuario. eu não uso o let, só declaro o novo valor:
nomeDeUsuario = 'Paulo';
console.log(nomeDeUsuario);

// nesse caso, mesmo que o nome da variável seja o mesmo, ela está dentro de um bloco de código diferente, então ela não é encarada como igual à anterior
if(true){
    let nomeDeUsuario = 'Renato';
    console.log(nomeDeUsuario);
}

// const: constante. uma vez atribuído, o valor da const é imutável, mas também funciona localmente, como let, dentro de um bloco de código

const carro ='civic';

carro = 'fox';
console.log(carro);
// ao executar esse código gera um erro porque a const é imutável e não pode ser atualizada ou alterada


