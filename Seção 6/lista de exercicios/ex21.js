function planoDeSaude (idade) {
    const preco = 100
    let valor = 0

    if (idade < 10) {
        valor = preco + 80
    } else if (10 <= idade && idade <= 30) {
        valor = preco + 50
    } else if (30 < idade && idade <= 60) {
        valor = preco + 95
    } else if (idade > 60) {
        valor = preco + 130
    } 
    return valor
}

console.log(planoDeSaude(8))
console.log(planoDeSaude(10))
console.log(planoDeSaude(30))
console.log(planoDeSaude(40))
console.log(planoDeSaude(60))
console.log(planoDeSaude(70))