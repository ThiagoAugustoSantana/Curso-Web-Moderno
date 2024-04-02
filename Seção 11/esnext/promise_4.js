function gerarNumerosEntre(min, max, tempo) {
    if(min > max) {
        [max , min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min +1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
       // Executa todas essas chamadas em paralelo, e demora em torno de 4s pois é o maior tempo.
    ]) // So vai dar a resposta quando todas as promises forem cumpridas.
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise') 
    }) 









