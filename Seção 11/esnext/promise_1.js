let a = 1
console.log(a)

console.log(typeof Promise) // Por definição uma promise é uma função.

// Normalmente uma promise possui duas funções internas, a "resolve" e a "reject"
// nesse caso a resolve estara sendo chamada de "cumprirPromessa" e a reject não estara sendo usada.

let p = new Promise(function(cumprirPromessa) { // O operador "new" sempre cria um objeto.
    // cumprirPromessa(3) // A promise so pode retornar um unico valor.
    // cumprirPromessa(3, 4) Forma incorreta.
    // Para retornar mais de um valor é necessario utilizar um objeto:
    /*
    cumprirPromessa( {
        x: 3,
        y: 4
    })
    */

    // Pode-se usar arrays tambem:
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

console.log(typeof p)
console.log('\n')

// Para se acessar os valores internos da promise deve-se usar o metodo "then".
// Aqui sera apresentado a forma de se acessar os dados com o uso do "then", mas de varias formas diferentes.

// Primeira forma:
p.then(function(valor) {
    console.log(valor)
})

// Segunda forma forma (mais simplificada com arrow function):
p.then( valor => console.log(valor))

// Terceira forma (formas de se usar o "then", usar ele em sequencia):
p // tende-se a usar essa notação quebrando-se a linha.
    .then( valor => valor[0]) // Pega o primeiro nome.
    .then( primeiro => primeiro [0]) // Pega a primeira letra.
    .then( letra => letra.toLowerCase()) // Passa a letra para minuscula.
    .then( letraMinuscula => console.log(letraMinuscula))
    








