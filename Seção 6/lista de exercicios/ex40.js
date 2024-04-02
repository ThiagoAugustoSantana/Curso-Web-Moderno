function conceitos (vetorNotas) {

    for (let i = 0; i < vetorNotas.length; i++) {
        if (vetorNotas[i] < 0) {
            console.log(`A nota ${vetorNotas[i]} esta incorreta`)
        }
        else if (vetorNotas[i] <= 4.9) {
            console.log(`A nota ${vetorNotas[i]} é conceito D`)
        } 
        else if (vetorNotas[i] >= 5.0 && vetorNotas[i] <= 6.9) {
            console.log(`A nota ${vetorNotas[i]} é conceito C`)
        }
        else if (vetorNotas[i] >= 7.0 && vetorNotas[i] <= 8.9) {
            console.log(`A nota ${vetorNotas[i]} é conceito B`)
        }
        else if (vetorNotas[i] >= 9.0 && vetorNotas[i] <= 10.0) {
            console.log(`A nota ${vetorNotas[i]} é conceito A`)
        } else {
            console.log(`A nota ${vetorNotas[i]} esta incorreta`)
        }
    }
}

vetor = [3.4, 5.8, -1, 8.0, 9.6, ]

conceitos(vetor)