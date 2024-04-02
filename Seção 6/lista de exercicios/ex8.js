listaString = '10 20 20 8 25 3 0 30 1'

function recordeEPiorJogo(pontuacoes) {
    let lista = pontuacoes.split(' ')
    let vetor = [0, 0] 
    let record = lista [0] 
    let pior = lista [0]

    for (let i = 1; i < lista.length; i++){
        if (parseInt(lista [i]) > parseInt(record)) {
            record = lista [i] 
            vetor [0] = vetor [0] + 1 
        }

        if (parseInt(lista [i]) < parseInt(pior)){
            pior = lista [i]
            vetor [1] = lista.indexOf(pior) + 1
        } else {
            vetor [1] = lista.indexOf(pior) + 1
        }
    }

    return vetor
}

console.log(recordeEPiorJogo(listaString))