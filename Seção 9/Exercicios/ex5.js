function maiorOuIgual (valor1, valor2) {
    
    if (typeof valor1 != typeof valor2) {
        return false
    } else {
        return (valor1 >= valor2) ? true : false
    }  
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(1, 5))
console.log(maiorOuIgual(5, 1))