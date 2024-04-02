function PA (numeroTermos, a1, r) {

    let resultado = a1
    let valores = [0]
    let soma = 0
    for (let i = 0; i < numeroTermos; i++) {
        valores [i] = resultado
        soma += resultado
        resultado = resultado + r
    }
    return `Valores: ${valores}, Soma: ${soma}`

}

function PG (numeroTermos, a1, r) {

    let resultado = a1
    let valores = [0]
    let soma = 0
    for (let i = 0; i < numeroTermos; i++) {
        valores [i] = resultado
        soma += resultado
        resultado = resultado * r
    }
    return `Valores: ${valores}, Soma: ${soma}`

}

console.log(PA(6, 1, 2))
console.log(PG(6, 1, 2))