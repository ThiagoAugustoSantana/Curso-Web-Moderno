// Armazenando uma função em uma variavel ou constante:
const imprimirSoma = function (a, b) {

    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel ou constante:
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implicito:
const subtracao = (a, b) => a - b // Deve ter apenas uma setença de codigo.
// Caso tenha apenas um parametro pode-se retirar os parenteses.
//const subtracao = a => a - 4

console.log(subtracao(5, 3))

// Caso tenha apenas um parametro pode-se retirar os parenteses.
const imprimir2 = a => console.log(a)
imprimir2('\nLegal!!!')

