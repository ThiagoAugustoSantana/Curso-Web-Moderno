function menorNumero (array) {
    let resultado = array[0]

    for (let i = 0; i < array.length; i++) {
        if (resultado >= array[i]) {
            resultado = array[i]
        } 
    }

    return resultado
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))