// Concatenar arrays

let pizza = ['slice 1', 'slice 2', 'slice 3', 'slice 4'];
let friends = ['matheus', 'ricardo', 'delan', 'pedro'];

let plates = [];

friends.forEach(
    function (friends, i) {
        plates = friends.concat(': ', pizza[i]);
        console.log(plates);
    });