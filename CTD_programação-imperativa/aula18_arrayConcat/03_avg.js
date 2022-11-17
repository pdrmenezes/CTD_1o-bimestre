// Método 'Math.min()' retorna o número com o valor mais baixo

let grades = [7.5, 8.1, 9.3, 9.7];
let sum = 0;
let avg = 0;

for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

avg = sum / grades.length

console.log('o valor da soma é: ', Math.round((sum * 100) / 100));

console.log('a média é: ', avg.toFixed(2));