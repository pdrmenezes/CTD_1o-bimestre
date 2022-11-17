let microondas = {
  pipoca: function (tempo = 10) {
    if (tempo === 10 * 2) {
      return "Sua comida queimou";
    } else if (tempo < 10) {
      return "Tempo insuficiente";
    } else if (tempo === 10 * 3) {
      return "KABUUUN!";
    } else if (tempo === 10) {
      return "Prato pronto, bom apetite";
    }
  },

  macarrao: function (tempo = 8) {
    if (tempo === 8 * 2) {
      return "Sua comida queimou";
    } else if (tempo < 8) {
      return "Tempo insuficiente";
    } else if (tempo === 8 * 3) {
      return "KABUUUN!";
    } else if (tempo === 8) {
      return "Prato pronto, bom apetite";
    }
  },

  carne: function (tempo = 15) {
    if (tempo === 15 * 2) {
      return "Sua comida queimou";
    } else if (tempo < 15) {
      return "Tempo insuficiente";
    } else if (tempo === 15 * 3) {
      return "KABUUUN!";
    } else if (tempo === 15) {
      return "Prato pronto, bom apetite";
    }
  },

  feijao: function (tempo = 12) {
    if (tempo === 12 * 2) {
      return "Sua comida queimou";
    } else if (tempo < 12) {
      return "Tempo insuficiente";
    } else if (tempo === 12 * 3) {
      return "KABUUUN!";
    } else if (tempo === 12) {
      return "Prato pronto, bom apetite";
    }
  },

  brigadeiro: function (tempo = 8) {
    if (tempo === 8 * 2) {
      return "Sua comida queimou";
    } else if (tempo < 8) {
      return "Tempo insuficiente";
    } else if (tempo === 8 * 3) {
      return "KABUUUN!";
    } else if (tempo === 8) {
      return "Prato pronto, bom apetite";
    }
  },
};

const processar = function (prato, tempo) {
  if (prato === "pipoca") {
    return microondas.pipoca(tempo);
  } else if (prato === "macarrao") {
    return microondas.macarrao(tempo);
  } else if (prato === "carne") {
    return microondas.carne(tempo);
  } else if (prato === "feijao") {
    return microondas.feijao(tempo);
  } else if (prato === "brigadeiro") {
    return microondas.brigadeiro(tempo);
  } else if (
    prato !== "pipoca" ||
    "macarrao" ||
    "carne" ||
    "feijao" ||
    "brigadeiro"
  ) {
    return "Prato inexistente";
  } else {
    return "Escolha outro tempo";
  }
};

console.log(processar("pipoca", 10)); // Prato pronto, bom apetite
console.log(processar("pipoca", 20)); // Sua comida queimou
console.log(processar("macarrao", 8)); // Prato pronto, bom apetite
console.log(processar("macarrao", 24)); // KABUUUN!
console.log(processar("carne", 15)); // Prato pronto, bom apetite
console.log(processar("carne", 3)); // Tempo insuficiente
console.log(processar("feijao", 12)); // Prato pronto, bom apetite
console.log(processar("brigadeiro", 8)); // Prato pronto, bom apetite
console.log(processar("frango", 8)); // Prato inexistente



//OPÇÃO 2

const opcoes = {
  pratos: ["Pipoca", "Macarrão"],
  tempos: [10, 20],

  ligar: function (prato, tempo) {
    const pratoPedido = opcoes.pratos[prato];
    const timer = opcoes.tempos[prato];

    if (!pratoPedido) {
      return "Prato não existe";
    } else if (tempo >= timer * 2 && tempo < timer * 3) {
      return "Seu prato queimou";
    } else if (tempo >= timer * 3) {
      return "KABUN";
    } else if (tempo < timer) {
      return "Tempo insuficiente";
    } else {
      return "Seu prato está pronto";
    }
  },
};

console.log(opcoes.ligar(0, 5));
console.log(opcoes.ligar(0, 10));
console.log(opcoes.ligar(0, 20));
console.log(opcoes.ligar(0, 30));
console.log(opcoes.ligar(1, 5));
console.log(opcoes.ligar(1, 20));
console.log(opcoes.ligar(1, 40));
console.log(opcoes.ligar(1, 60));
console.log(opcoes.ligar(2, 60));