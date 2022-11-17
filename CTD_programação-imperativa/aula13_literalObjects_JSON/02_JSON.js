// JSON (Javascript Object Notation) é um padrão de texto para troca de dados, que permite a comunicação entre sistemas com linguagens diferentes. (formulário para servidor, utilização de APIs)

JSON.parse() // é o organizador, quando recebe como parâmetro um dado e retorna um array ou objeto literal (os dados fornecidos devem ser um texto no formato JSON)

JSON.stringify() // é o "preparador para envio", que recebe um array ou um objeto literal como parâmetro e retorna uma string do tipo JSON

// JSON COM OBJETO

let person = {
  name: 'pedro',
  age: 28,
  nationality: 'brazilian'
}

// CONVERTENDO PARA JSON
let json = JSON.stringify(person);
console.log(json);

// RECONVERTENDO PARA OBJETO
let objectAgain = JSON.parse(json);
console.log(objectAgain)

// JSON COM LISTA

let listFood = ['apple', 'bread', 'homus', 'tapioca']
let jsonFood = JSON.stringify(listFood)
console.log(jsonFood);

let objectFood = JSON.parse(jsonFood)
console.log(objectFood)

// FS -- File System

const fs = require('fs');
let frutas = '{"Fruta":"Banana", "Preço":8.50, "Tipo":"nanica", "Origem":"Brasil"}';

// write file

fs.writeFileSync('teste.txt', frutas);

// read file
let readJSON = fs.readFileSync('teste.txt', 'utf-8'); // codificar os caracteres pra ler corretamente
console.log(readJSON)


