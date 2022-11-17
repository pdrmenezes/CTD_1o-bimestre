// atribuição: atribui valores a variáveis
let x = 10 // atribui o valor 10 à variável x
x += y // soma o valor de y (x = x + y)
x -= y // subtrai o valor de y (x = x - y)
x *= y // multiplica o valor de y (x = x * y)
x /= y // divide o valor de y (x = x / y)
x %= y // atribui o valor do resto da divisão de x por y (x = x % y)
x **= y // atribui o valor da exponenciação de y, x elevado a y (x = x ** y)

// comparação: retorna valores true ou false
x == y // verifica se é igual
x != y // verifica se é diferente
x === y // verifica se é estritamente igual. se, além do dado, o tipo é igual (ex: se fosse o númeero 5 e a string 5, o resultado seria 'false')
x !== y // verifica se é estritamente diferente. idêntico ao de cima
x > y // verifica se é maior
x < y // verifica se é menor
x >= y // verifica se é maior ou igual
x <= y // verifica se é menor ou igual

// aritmético: realizam operações como soma, subtração, incrementar ou não
x++ // incrementa 1 ao valor
x-- // decrementa 1 ao valor
x % y // resto da divisão de 2 valores
x - y // subtrai valores
x + y // soma valores
x ** y // exponecia 2 valores (x à potência de y)

// lógico: verifica comparações entre combinações de códigos e retornam true ou false

true && true // true => ambas as condições precisam ser verdadeiras
/* ex:
let dia = 'domingo'
let clima = 'ensolarado'

dia == 'domingo' && clima == 'ensolarado'

ou console.log(10>5 && 10<5 && 11>5)

todas têm que ser verdadeiras pra que ele retorne true
*/

true || false // true => se uma ou ambas as condições forem verdadeiras, retorna true
/* ex:
8>=15 || 8!=13 // retorna true

porque uma delas é verdadeira
*/

!false // true => operador de negação, nega a condição atual, alterando seu valor para o oposto

/* ex:
console.log(!true) o output vai ser false, porque ele inverte a condição atual

console.log(!5>3) 5 é maior que 3, enão a resposta seria true, mas com a exclamação, ele inverte a resposta pra false
*/


// concatenação
let nome = 'pedro'
let sobrenome = 'menezes'
let nomeCompleto = nome + " " + sobrenome // pedro menezes