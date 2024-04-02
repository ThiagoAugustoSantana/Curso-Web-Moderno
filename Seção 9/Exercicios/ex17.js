function somarNumeros (numeros) {
    let resultado = 0
    numeros.forEach(numero => resultado += numero)

    return resultado
}

console.log(somarNumeros([10, 10, 10]))