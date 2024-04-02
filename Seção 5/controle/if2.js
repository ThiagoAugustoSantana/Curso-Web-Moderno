function teste1(num) {
    if(num > 7) // Não fazer dessa forma.
        console.log(num)
        console.log('Final\n')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // O ";" finaliza a linha, não usar com as estruturas de controle.
        console.log(num)
    }
}

teste2(6)
teste2(8)

