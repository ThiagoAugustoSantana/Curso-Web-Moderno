function negativos(vetor) {

    let cont = 0

    for (let i in vetor) {
        if (vetor[i] < 0) {
            ++cont
        }
    }
    console.log(`Existem ${cont} numeros negativos`)
}

negativos([-5,-9,-1,-6,0,5,4,6,3,-7])