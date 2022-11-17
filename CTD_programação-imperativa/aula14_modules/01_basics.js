// módulos são blocos de códigos nativos, criados ou importados que nos permitem realizar várias tarefas//

// por padrão, as variáveis dentro dos módulos levam o nome do módulo e vice-versa

let series = ['Friends', 'Breaking Bad', 'Twin Peaks'];
console.log(series);

series = series.join(', ');
console.log(series);

// forma antiga
module.exports = series;

// forma atual
// export default series;