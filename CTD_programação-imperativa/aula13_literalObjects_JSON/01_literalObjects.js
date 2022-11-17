/*
literalObjects = {
  key: 'value',
  key2: [value, value, value],
  key3: value
}
*/

let myCountry = {
  name: 'Brasil',
  population: 210000000,
  capital: 'brasilia',
  currency: 'reais',
  languages: ['português', 'Libras']
};

// como acessar a propriedade, usando a '.notation'

console.log(myCountry.name + "'s capital is " + myCountry.capital)

// exemplo 2

let car = {
  model: ['fox', 'gol', 'saveiro'],
  year: 2012,
  manufacturer: 'volkswagen',
  flex: true
}

console.log(car.model[1] + ' ' + car.year);

// method: são funções atribuídas como valor a uma 'key' que procuram fazer algo além de ter um simples dado

let myCountry2 = {
  name: 'Brasil',
  population: 210000000,
  capital: 'brasilia',
  currency: 'reais',
  languages: ['português', 'Libras'],
  sayNationality: function () {
    return "Brazilian";
  }
};

console.log(myCountry2.sayNationality())

// this: serve pra se referir, dentro de um método, a uma propriedade interna do objeto: this.nome = 'Brasil || this.capital = 'brasilia'

let myCountry3 = {
  name: 'Brasil',
  population: 210000000,
  capital: 'brasilia',
  currency: 'reais',
  languages: ['português', 'Libras'],
  sayNationality: function () {
    return "Brazilian";
  },
  sayPopulation: function () {
    return this.name + "'s population is: " + this.population
  },
  sayBrasil: function () {
    return "características do seu país: \n nome = " + myCountry3.name + "\n population = " + myCountry3.population + "\n languages = " + myCountry3.languages
  },
};

console.log(myCountry3.sayNationality())
console.log(myCountry3.sayPopulation())
console.log(myCountry3.sayBrasil())

// objetos variáveis são envolvidos por {chaves}
let { name, population, capital, currency, languages } = myCountry3;
console.log(myCountry3)
console.log(population)

// object constructor: uma função que te permite chamá-la sempre que quiser inserir novas informações no objeto, de acordo com parâmetros determinados. como um molde pra inserção de novas informações

// funções construtoras devem SEMPRE iniciar com letra maiúscula

function CreateCar(carModel, carYear, carManufacturer) {
  this.model = carModel;
  this.year = carYear;
  this.manufacturer = carManufacturer;
}

// instance: criação de um objeto usando o molde

let peugeot206 = new CreateCar("206", "2011", "Peugeot");
let peugeot308 = new CreateCar("308", "2020", "Peugeot");

console.log(peugeot206);
console.log(peugeot308);