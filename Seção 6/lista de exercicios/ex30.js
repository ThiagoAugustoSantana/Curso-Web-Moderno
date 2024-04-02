function maiorMenor (vetor) {

    let maior = 0
    let menor = 0
    
    for (let i in vetor) {
        if(vetor[i] > maior) {
            maior = vetor[i]
        } 
        else if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    return [maior, menor]
}

console.log(maiorMenor([1,25,30,0,59,21,3,-1,7,5,4,42]))
console.log(maiorMenor([0,0,0,0,0]))