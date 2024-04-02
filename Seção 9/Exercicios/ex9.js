function repetir (parametro, numeroDeRepeticoes) {
    let repeticao = []
    for (let i = 0; i < numeroDeRepeticoes; i++) {
        repeticao.push(parametro)
    }
    return repeticao
}

console.log(repetir('código', 2))
console.log(repetir(7, 3))