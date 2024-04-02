function receberPrimeiroEUltimoElemento (vetor) {
    const primeiro = vetor.shift()
    const ultimo = vetor.pop()

    return [primeiro, ultimo]
}

console.log(receberPrimeiroEUltimoElemento([1, 2, 3]))
console.log(receberPrimeiroEUltimoElemento([7, 14, 'Ola']))