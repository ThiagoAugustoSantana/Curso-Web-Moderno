function filtrarNumeros (array) {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(filtrarNumeros(['Javascript', 1, '3', 'web', 20]))
console.log(filtrarNumeros(['a', 'c']))