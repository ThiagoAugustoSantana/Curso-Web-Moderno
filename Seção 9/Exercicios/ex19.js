function calcularMedia (array) {
    let resultado = 0
    array.reduce((acumulador, atual) => resultado = acumulador + atual, 0)
    return resultado/array.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))