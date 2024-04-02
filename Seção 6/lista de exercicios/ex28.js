function parImpar (vetor) {

    let contPar = 0
    let contImpar = 0

    for (let i in vetor) {
        if (vetor[i]%2 == 0) {
            ++contPar
        } else {
            ++contImpar
        }
    }
    return `São ${contPar} numeros pares e ${contImpar} numeros impares`
}

console.log(parImpar([1,2,3,4,5,6,7,8,9,10,11,12,13]))