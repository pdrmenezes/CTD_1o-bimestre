/* Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios: 
• Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
você deve exibir a string &quot;Digital&quot; em vez do número.
• Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,
você deve exibir a string &quot;House&quot; em vez disso.
ª Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você
deve exibir a string &quot;Digital House&quot; em vez do número. */

const limiter = 100;

function digitalHouse(num1, num2) {
  for (let i = 1; i <= 100; i++) {
    if (i % num1 == 0) {
      console.log("Digital")
    }
    else if (i % num2 == 0) {
      console.log("House");
    }
    else if ((i % num1 == 0) && (i % num2 == 0)) {
      console.log("Digital House")
    } else {
      console.log(i);
    }
  }
}

digitalHouse(3, 10)
