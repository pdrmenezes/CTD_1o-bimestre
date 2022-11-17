sum = (a, b) => a + b;
sub = (a, b) => a - b;
mult = (a, b) => a * b;
div = (a, b) => a / b;
allCaps = (word = '') => word.toUpperCase();

exports.sumArrowFunction = (a, b) => a + b;

module.exports = { sum, sub, mult, div, allCaps };

let objeto1 = {
  name: 'pedro',
  bracelet: true,
  braceletColor: 'cornflowerblue'
}

let objeto2 = {
  name: 'veg barbecue',
  color: 'veg cornflowerblue'
}

module.exports = { objeto1, objeto2 } // exportando um objeto que contém os objeto1 e objeto2

// // forma atual
// export function sumArrowFunction(a, b) { return a + b; }

// export default { sum, sub, mult, div, allCaps };

// let objeto1 = {
//   name: 'pedro',
//   bracelet: true,
//   braceletColor: 'cornflowerblue'
// }

// let objeto2 = {
//   name: 'veg barbecue',
//   color: 'veg cornflowerblue'
// }

// export default { objeto1, objeto2 } // exportando um objeto que contém os objeto1 e objeto2