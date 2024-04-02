// Usando uma função normal:
let dobro = function (a) {
    return 2 * a
}

console.log(dobro(Math.PI))

// Usando a função arrow:
dobro = (a) => { // A função arrow é sempre anonima, precisa ser armazenada.
    return 2 * a
}
console.log(dobro(Math.PI))

// Usando a função arrow caso tenha um unico parametro:
dobro = a => 2 * a // O retorno fica implicito por ter uma unica linha. 

console.log(dobro(Math.PI) + '\n')

// Mais exemplos:
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // Sem parametros.
console.log(ola())

ola = _ => 'Olá' // Aqui o "_" é um parametro.
console.log(ola() + '\n')





