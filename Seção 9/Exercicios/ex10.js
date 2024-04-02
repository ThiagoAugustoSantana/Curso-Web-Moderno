function simbolaMais (valor) {
    let resultado = ''
    for (let i = 0; i < valor; i++) {
        resultado += '+'
    }
    return resultado
}

console.log(simbolaMais(3))
console.log(simbolaMais(5))