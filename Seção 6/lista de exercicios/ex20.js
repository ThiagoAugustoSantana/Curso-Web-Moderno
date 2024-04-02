function cedulas (valor) {
    console.log('\n')
    let cont100 = 0
    let cont50 = 0
    let cont10 = 0
    let cont5 = 0

    if (valor >= 100){
        while (valor >= 100){
            valor = valor - 100
            ++cont100 
        }
        console.log(`${cont100} nota(s) de R$ 100`)
    }

    if (valor >= 50){
        while (valor >= 50){
            valor = valor - 50
            ++cont50
            console.log(`${cont50} nota(s) de R$ 50`) 
        }
    }

    if (valor >= 10){
        while (valor >= 10){
            valor = valor - 10
            ++cont10 
        }
        console.log(`${cont10} nota(s) de R$ 10`)
    }

    if (valor >= 5){
        while (valor >= 5){
            valor = valor - 5
            ++cont5
        }
        console.log(`${cont5} nota(s) de R$ 5`)
    }

    if (valor >= 1){
        console.log(`${valor} nota(s) de R$ 1`)
    }
}

cedulas(100)
cedulas(50)
cedulas(10)
cedulas(5)
cedulas(1)
cedulas(4)
cedulas(9)
cedulas(14)
cedulas(2587)
