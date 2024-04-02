function dinheiro(valor) {
    real = valor.toFixed(2).toString().replace(".", ",")
    return real
}

console.log('R$' + dinheiro((0.1 + 0.2)))