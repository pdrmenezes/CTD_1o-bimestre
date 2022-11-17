let clientes = [
    {
        nome: 'Jose',
        sobrenome: 'da Silva',
        idade: 27,
        peso: 83.5,
        altura: 1.70,
        plano: true,
        imc: null
    },
    {
        nome: 'Carlos',
        sobrenome: 'de Souza',
        idade: 28,
        peso: 80.1,
        altura: 1.76,
        plano: true,
        imc: null
    },
    {
        nome: 'Aline',
        sobrenome: 'Ferreira',
        idade: 33,
        peso: 63.7,
        altura: 1.53,
        plano: false,
        imc: null
    },
    {
        nome: 'Ana',
        sobrenome: 'Paula',
        idade: 26,
        peso: 55,
        altura: 1.62,
        plano: true,
        imc: null
    },
];

clientes.forEach((cliente) => {
    cliente.imc = cliente.peso/(cliente.altura**2);
    console.log(`${cliente.nome} ${cliente.sobrenome} tem ${cliente.idade} anos e seu índice de massa corporal é ${parseFloat(cliente.imc).toFixed(2)}`);
})