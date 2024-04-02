function funcaoDaSorte (numero) {
    let aleatorio = Math.random() * (10 - 1) + 1
    if (aleatorio.toFixed(0) == numero) {
        return `Parabens! O número sorteado foi o ${aleatorio.toFixed(0)}`
    } else {
        return `Que pena! O número sorteado foi o ${aleatorio.toFixed(0)}`
    }

}

console.log(funcaoDaSorte(1))
console.log(funcaoDaSorte(2))
console.log(funcaoDaSorte(3))
console.log(funcaoDaSorte(4))
console.log(funcaoDaSorte(5))