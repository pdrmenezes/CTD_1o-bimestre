// aula08 - 24.08.2021
// Switch: casos absolutos, sem condições.


let idade = 28;

switch (idade) {
    case 5: // caso a variável seja == ao valor: console.log
        console.log("Tem 5 anos");
        break; // encerra a execução dos parâmetros
    case 10:
        console.log("Tem 10 anos");
        break;
    default: // caso não atenda às condições anteriores: console.log
        console.log("Erro. Opções possíveis: 5 ou 10. Tente novamente");
}
