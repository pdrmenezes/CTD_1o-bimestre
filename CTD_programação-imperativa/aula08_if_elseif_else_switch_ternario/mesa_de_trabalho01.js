/* Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
A pessoa deve medir mais de 1.40m e menos de 2 metros.
Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
Em caso de impedimento, exiba a mensagem: “Acesso negado.”
 */

// altura > 1.40 e < 2
// if altura < 1.20 = não pode subir
// if altura 

function podeSubir(altura, estaAcompanhada) {
    if ((altura >= 1.4 && altura <= 2) || (altura >= 1.20 && altura <= 1.4 && estaAcompanhada)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(podeSubir(2, true))


