function troca (vetorA, vetorB) {
    
    if (vetorA.length == vetorB.length) {
        for (let i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } 
    else {
        return console.log('Vetores de tamanhos diferentes')
    }

    console.log(`Novo vetorA: ${vetorA}`)
    console.log(`Novo vetorB: ${vetorB}`)
}

let a = [1,2,3,4,5]
let b = [6,7,8,9,10]

troca(a, b)