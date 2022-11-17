function microondas(comida, tempo) {
  if (comida == "Pipoca" && tempo == 10) {
    console.log("Prato pronto, bom apetite!")
  }
  else if (comida == "Pipoca" && tempo >= 20) {
    console.log("Seu prato queimou!")
  }
  else if (comida == "Pipoca" && tempo <= 10) {
    console.log("Tempo insuficiente!")
  }
  else if (comida == "Pipoca" && tempo >= 30) {
    console.log("Explodiu !")
  }
  else if (comida == "Macarrao" && tempo == 8) {
    console.log("Prato pronto, bom apetite!")
  }
  else if (comida == "Macarrao" && tempo >= 16) {
    console.log("Seu prato queimou!")
  }
  else if (comida == "Macarrao" && tempo <= 8) {
    console.log("Tempo insuficiente!")
  }
  else if (comida == "Macarrao" && tempo >= 24) {
    console.log("Explodiu !")
  }
  else if (comida == "Carne" && tempo == 15) {
    console.log("Prato pronto, bom apetite!")
  }
  else if (comida == "Carne" && tempo >= 30) {
    console.log("Seu prato queimou!")
  }
  else if (comida == "Carne" && tempo <= 15) {
    console.log("Tempo insuficiente!")
  }
  else if (comida == "Carne" && tempo >= 45) {
    console.log("Explodiu !")
  }
  else {
    console.log("Prato Inexistente")
  }
}
microondas("Pipoca", 10)