function intervalo (vetor) {
    let contIn = 0
    let contOut = 0
    
    for (let i in vetor) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            ++contIn
        } else {
            ++contOut
        }
    }
    return `São ${contIn} numeros dentro do intervalo e ${contOut} numeros fora do intervalo` 
}

console.log(intervalo([9,10,11,12,13,14,15,16,17,18,19,20,25]))