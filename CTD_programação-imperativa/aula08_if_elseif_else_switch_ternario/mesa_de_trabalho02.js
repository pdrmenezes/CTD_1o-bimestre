/* Modifique a função podeSubir(), de modo que ela exiba uma mensagem
de autorização ou de impedimento no acesso ao brinquedo dependendo

se a pessoa se enquadra ou não nas condições do exercício anterior. Por
exemplo:

a) Em caso de autorização, exiba a mensagem: “Acesso
autorizado” ou “Acesso autorizado somente com
acompanhante”;
b) Em caso de impedimento, exiba a mensagem: “Acesso
negado.”
 */

// altura > 1.40 e < 2
// if altura < 1.20 = não pode subir
// if altura 

function podeSubir(altura, estaAcompanhada) {
    if (altura < 1.2 || altura > 2) {
        console.log("Acesso negado!")
    }
    else if (altura >= 1.2 && altura <= 1.4 && estaAcompanhada == false) {
        console.log("Acesso autorizado somente com acompanhante.")
    }
    else if (altura >= 1.2 && altura <= 1.4 && estaAcompanhada == true) {
        console.log("Acesso autorizado!")
    }
    else if (altura >= 1.4 && altura <= 2) {
        console.log("Acesso autorizado!")
    }
    else {
        console.log("Parâmetros incorretos. Tente novamente.")
    }
}

podeSubir(1.1, true)
podeSubir(1.1, false)
podeSubir(1.2, true)
podeSubir(1.2, false)
podeSubir(1.3, true)
podeSubir(1.3, false)
podeSubir(1.4, true)
podeSubir(1.4, false)
podeSubir(1.5, true)
podeSubir(1.5, false)
podeSubir(2, true)
podeSubir(2, false)
podeSubir(2.1, true)
podeSubir(2.1, false)