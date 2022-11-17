// switch: serve pra trabalhar com valores exatos, não condições
// case: os casos e condições que, se correspondidos, executam um bloco de código
// break: interrompe a execução das outras condições, como o default, quando uma é atendida
// default: último recurso que indica o que fazer se nenhum dos cases anteriores for verdadeiros

switch (dia) {
    case "segunda":
        console.log("vou tomar café")
        break;
    case "quarta":
        console.log("vou ao cinema");
        break;
    case "quinta":
        console.log("vou estudar");
        break;
    default:
        console.log("vou fazer é nada")
}

// cases também podem ser agrupados pra executar o mesmo bloco de código se mais de uma condição for verdadeira:

switch (dia) {
    case "segunda":
    case "quarta":
        console.log("vou estudar");
        break;
    case "quinta":
        console.log("vou ao cinema");
        break;
    default:
        console.log("vou fazer é nada")
}