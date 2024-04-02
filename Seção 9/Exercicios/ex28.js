function filtrarPorQuantidadeDeDigitos (arrayNumeros, numeroDigitos) {
    arrayString = []
    arrayFinal = []
    arrayNumeros.forEach(converte => arrayString.push(converte.toString()))

    arrayString.forEach(contar => {
        if (contar.length === numeroDigitos) {
            arrayFinal.push(Number(contar))
        }
    })

    return arrayFinal
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))