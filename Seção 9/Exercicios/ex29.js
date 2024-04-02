function segundoMaior (array) {
    let primeiro = array[0]

    array.forEach(primeiroM => {
        if (primeiroM >= primeiro) {
            primeiro = primeiroM 
        }
    })

    array.splice(array.indexOf(primeiro),1)

    let segundo = array[0]

    array.forEach(segundoM => {
        if (segundoM > segundo) {
            segundo = segundoM
        }
    })

    return segundo
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))
console.log(segundoMaior([24, 25, 8, 9]))
