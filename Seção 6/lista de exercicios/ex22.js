function anuidade (mes, valor) {
    if (mes > 0 && mes < 13 ) {
        return jurosCompostos(valor, 0.05, (mes - 1))
    } else {
        return 'Mes incorreto!'
    }
    
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    montante = capitalInicial * ((1 + taxaJuros) ** tempoAplicacao) 
    return montante.toFixed(2)
}

console.log(anuidade(9, 1000))
console.log(anuidade(14, 100))