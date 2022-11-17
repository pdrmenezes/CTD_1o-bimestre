const group = require('./groups')

const grupo = [
  { sexo: "F", altura: 153 },
  { sexo: "M", altura: 172 },
  { sexo: "M", altura: 180 },
  { sexo: "F", altura: 164 },
  { sexo: "M", altura: 176 },
  { sexo: "F", altura: 163 },
  { sexo: "M", altura: 182 },
  { sexo: "M", altura: 190 },
  { sexo: "F", altura: 174 },
  { sexo: "M", altura: 186 },
  { sexo: "F", altura: 143 },
  { sexo: "M", altura: 162 },
  { sexo: "M", altura: 170 },
  { sexo: "F", altura: 154 },
  { sexo: "M", altura: 166 },
]

const expectadores = [
  { nota: 3, idade: 17 },
  { nota: 1, idade: 15 },
  { nota: 2, idade: 18 },
  { nota: 3, idade: 16 },
  { nota: 3, idade: 17 },
  { nota: 2, idade: 16 },
  { nota: 1, idade: 18 },
  { nota: 2, idade: 19 },
  { nota: 2, idade: 17 },
  { nota: 1, idade: 18 },
  { nota: 3, idade: 14 },
  { nota: 1, idade: 16 },
  { nota: 2, idade: 17 },
  { nota: 1, idade: 15 },
  { nota: 2, idade: 16 },
]

console.log(group.sexAndHeight.maiorAltura(grupo));
console.log(group.sexAndHeight.menorAltura(grupo));
console.log(group.sexAndHeight.numeroHomens(grupo));

console.log("-----------------------------")

console.log(group.viewers.mediaIdadeOtimo(expectadores));
console.log(group.viewers.qtdRegular(expectadores));
console.log(group.viewers.porcentagemBom(expectadores));
