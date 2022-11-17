// início do contador | limite de repetições | modificador do contador

// 'i' normalmente é contador em diferentes linguagens

let family = {
    ages: [27, 28, 31, 60, 63],
    names: ['claudia', 'roberto', 'deise', 'romero', 'roberta'],
}
// console.log(idades.length)

for (let index = 0; index < family.ages.length; index++) {
    console.log(family.ages[index])
}

// parâmetro .toUpperCase()

let movies = ['star wars', 'finding nemo', 'totoro', 'pulp fiction', 'la vita è bella'];

function allcaps(array) {
    array[0] = array[0].toUpperCase();
    array[1] = array[1].toUpperCase();
    array[2] = array[2].toUpperCase();
    array[3] = array[3].toUpperCase();
    array[4] = array[4].toUpperCase();
    return movies;
}

console.log(allcaps(movies));

// transferindo elementos da array 2 para a array 1

let animatedMovies = ['finding nemo', 'totoro', 'the book of life', 'stuart little'];

function elementTransfer(array1, array2) {
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    return array1
}

console.log(elementTransfer(movies, animatedMovies))

// comparando arrays com booleanos

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const europeScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compareScores(asia, europe) {
    let comparingAsiaEurope = []
    comparingAsiaEurope[0] = asia[0] === europe[0];
    comparingAsiaEurope[1] = asia[1] === europe[1];
    comparingAsiaEurope[2] = asia[2] === europe[2];
    comparingAsiaEurope[3] = asia[3] === europe[3];
    comparingAsiaEurope[4] = asia[4] === europe[4];
    return comparingAsiaEurope;
}

console.log(compareScores(asiaScores, europeScores));

// desafio: concurso com 2 categorias e 3 participantes

participantA = [5, 8, 4, 9, 5];
participantB = [8, 7, 8, 6, 8];
participantC = [7, 5, 10, 8, 3];

// média da nota de cada participante

function defineAverage(participant) {
    let average = ((participant[0] + participant[1] + participant[2] + participant[3] + participant[4]) / participant.length);
    return average;
}

console.log(defineAverage(participantA));
console.log(defineAverage(participantB));
console.log(defineAverage(participantC));


// melhor nota de cada participante

function defineBestScore(participant) {
    let best = participant[0];
    for (i = 0; i < participant.length; i++) {
        if (participant[i] > best) {
            best = participant[i];
        }
    } return best
}

console.log(defineBestScore(participantA));
console.log(defineBestScore(participantB));
console.log(defineBestScore(participantC));

// função: competição que executa as 2 funções anteriores e anuncia o vencedor de cada categoria

const contesters = {
    contesterA: [5, 8, 4, 9, 5],
    contesterB: [8, 7, 8, 6, 8],
    contesterC: [7, 5, 10, 8, 3]
}

function competicao(participant1, participant2, participant3) {
    function defineAverage(participant) {
        let average = ((participant[0] + participant[1] + participant[2] + participant[3] + participant[4]) / participant.length);
        return average;
    }
    average1 = defineAverage(participant1);
    average2 = defineAverage(participant2);
    average3 = defineAverage(participant3);
    if ((average1 > average2) && (average1 > average3)) {
        bestAverage = average1
        console.log('O vencedor da 1ª etapa foi ContesterA, com a média: ' + bestAverage)
    }
    else if ((average2 > average1 && average2 > average3)) {
        bestAverage = average2
        console.log('O vencedor da 1ª etapa foi ContesterB, com a média: ' + bestAverage)
    }
    else {
        bestAverage = average3
        console.log('O vencedor da 1ª etapa foi ContesterC, com a média: ' + bestAverage)
    }
    function defineBestScore(participant) {
        let best = participant[0];
        for (i = 0; i < participant.length; i++) {
            if (participant[i] > best) {
                best = participant[i];
            }
        } return best
    }
    best1 = defineBestScore(participant1);
    best2 = defineBestScore(participant2);
    best3 = defineBestScore(participant3);
    if ((best1 > best2) && (best1 > best3)) {
        bestScore = best1
        console.log("O vencedor da 2ª etapa foi: ContesterA, com a nota mais alta: " + bestScore)
    }
    else if ((best2 > best1 && best2 > best3)) {
        bestScore = best2
        console.log("O vencedor da 2ª etapa foi: ContesterB, com a nota mais alta: " + bestScore)
    }
    else {
        bestScore = best3
        console.log("O vencedor da 2ª etapa foi: ContesterC, com a nota mais alta: " + bestScore)
    }
}

competicao(contesters.contesterA, contesters.contesterB, contesters.contesterC)