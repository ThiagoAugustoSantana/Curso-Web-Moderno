function estaEntre (numero, minimo, maximo, inclusivo = false) {
    if (inclusivo == true) {
        if (numero >= minimo && numero <= maximo) {
            return true
        }
    } else if (numero > minimo && numero < maximo) {
        return true
    } else {
        return false
    }
}

console.log(estaEntre(50, 10, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))