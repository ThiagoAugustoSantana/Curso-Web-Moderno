const nums = [1, 2, 3, 4, 5]

// O "map" é um "for" com proposito, ele varre o array e faz transformações nele. 
// O "map" não transforma o "array" original ele sempre gera um novo.

let resultado = nums.map(function(e) {
    return e * 2 // O metodo que se passa sempre tem que ter um retorno.
})

console.log(resultado)
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)
