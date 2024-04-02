function impares (inicio = 0, fim = 100) {
 
    let aux = 0

    if (inicio > fim) {
        aux = inicio
        inicio = fim
        fim = aux
    }

    for  (let i = inicio + 1; i < fim; i++) {
        if (i%2 != 0) {
            console.log(i)
        }
    }
}

impares(55, 150)