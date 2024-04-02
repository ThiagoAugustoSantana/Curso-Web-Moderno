function rand({ min = 0, max = 1000 }) { // Operador destructuring com parametro padrão.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))

// Teste sem passar um objeto:
// Gera um erro.

//console.log(rand())
