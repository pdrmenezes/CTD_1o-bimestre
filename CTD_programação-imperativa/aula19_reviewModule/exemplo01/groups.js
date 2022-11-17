module.exports = {
  sexAndHeight: {
    maiorAltura: function (grupo = [{ sexo: "F", altura: 150 }]) {
      return grupo.reduce((altura, pessoa) => altura > pessoa.altura ? altura : pessoa.altura, grupo[0].altura)
    },
    menorAltura: function (grupo = [{ sexo: "F", altura: 150 }]) {
      return grupo.reduce((altura, pessoa) => altura < pessoa.altura ? altura : pessoa.altura, grupo[0].altura)
    },
    numeroHomens: function (grupo = [{ sexo: "F", altura: 150 }]) {
      const mulheres = grupo.filter(pessoa => pessoa.sexo == "M")
      return mulheres.length;
    }
  },
  viewers: {
    mediaIdadeOtimo: function (expectadores = [{ nota: 1, idade: 150 }]) {
      const otimos = expectadores.filter(pessoa => pessoa.nota === 3)
      return otimos.reduce((a, b) => a + b.idade, 0) / otimos.length;
    },
    qtdRegular: function (expectadores = [{ nota: 1, idade: 150 }]) {
      const regulares = expectadores.filter(pessoa => pessoa.nota === 1)
      return regulares.length;
    },
    porcentagemBom: function (expectadores = [{ nota: 1, idade: 150 }]) {
      const bons = expectadores.filter(pessoa => pessoa.nota === 2)
      return ((bons.length / expectadores.length) * 100) + "%"
    }
  }
}