function rand([min = 0, max = 1000]) {
    if (min > max) [min , max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // "Math.floor()" serve para arredondar para baixo o valor.
}

console.log(rand([50, 40]))
console.log(rand([992])) // Passando so o primeiro valor.
console.log(rand([, 10])) // Passando so o segundo valor.
console.log(rand([])) // Passando nenhum valor.

// Teste sem passar um array:
// Gera um erro.

//console.log(rand()) // Passando nenhum valor.


