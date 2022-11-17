/* Vamos pegar o exercício sumArray() que fizemos na classe arrays, mas desta vez vamos modificá-lo para que ele possa receber um array de números de qualquer quantidade de elementos. Se você não se lembrar da instrução original: Você deve criar uma função somaArray que aceita uma matriz de números e retorna a soma de todos eles.

exemplo:
• sumArray([1,2,3]) // 6
• sumArray([10, 3, 10, 4]) // 27
• sumArray([-5,100]) // 95
*/

arr1 = [1, 2, 3]
arr2 = [4, 5, 6]


function sumArray(array) {
  console.log(array.reduce((a, b) => a + b, 0))
}

sumArray(arr1);
sumArray(arr2);


/* E como estamos ajustando as funções, vamos fazer o mesmo com a função do exercício de simulação join(). você deve modificar a função join() para que ela possa receber uma matriz de strings de qualquer quantidade de elementos. Importante: Você não pode usar o método original Array.join().
*/

arr3 = ['b', 'o', 'm', ' ', 'd', 'i', 'a']
arr4 = ['b', 'o', 'a', ' ', 'n', 'o', 'i', 't', 'e']

function joinArray(array) {
  console.log(array.join(""))
}

joinArray(arr3);
joinArray(arr4);