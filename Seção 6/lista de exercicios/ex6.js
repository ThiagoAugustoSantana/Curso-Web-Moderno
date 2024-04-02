function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    juros = capitalInicial * taxaJuros * tempoAplicacao
    montante = capitalInicial + juros
    return montante.toFixed(2)
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    montante = capitalInicial * ((1 + taxaJuros) ** tempoAplicacao) 
    return montante.toFixed(2)
}

console.log(jurosSimples(500, 0.03, 8))
console.log(jurosCompostos(10000, 0.05, 18))

