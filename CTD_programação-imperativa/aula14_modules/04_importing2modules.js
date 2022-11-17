// importando os 2 módulos desestruturados

// forma antiga
let family = require('./03_modules+literalObjects');

// forma atual
// import { person, dog } from './03_modules+literalObjects';

console.log(family.person);
console.log(family.dog.dogColor);