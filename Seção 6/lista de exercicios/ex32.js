function media (vetor) {

    let soma = 0
    let med = 0
    
    for (let i in vetor) {
        soma += vetor[i]
        med = soma / (parseInt(i) + 1)
    }
    return med
}

console.log(media([1,2,3,4]))
