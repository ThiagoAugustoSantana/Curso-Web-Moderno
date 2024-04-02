function primeira (vetor, numero) {

    let multiplicado = []
    
    for (let i = 0; i < vetor.length; i++) {
        multiplicado[i] = vetor[i] * numero
    }
    return multiplicado
}

function segunda (vetor, numero) {
    
    let multiplicado = []
    
    if (numero > 5) {
        for (let i = 0; i < vetor.length; i++) {
            multiplicado[i] = vetor[i] * numero
        }
        return multiplicado
    } else {
        return 'Numero menor que 5'
    }   
}

console.log(primeira([1,2,3,4,5,6,7,8,9], 4))
console.log(segunda([1,2,3,4,5,6,7,8,9], 3))
console.log(segunda([1,2,3,4,5,6,7,8,9], 6))