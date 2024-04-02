function fatorial (numero) {
    resultado = 1

    for (let i = 0; i < numero; i++) {
        resultado = (numero - i) * resultado
    }
    return resultado
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
console.log(fatorial(8))
console.log(fatorial(9))
console.log(fatorial(10))