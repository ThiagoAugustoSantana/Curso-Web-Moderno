function multiplicar (valor1, valor2) {
    if (valor1 >= 0 && valor2 >= 0) {
        let produto = 0

        for (let i = 0; i < valor2; i++) {
            produto += valor1
        }
        return produto

    } else {
        return 'Valores incorretos!'
    }
}

console.log(multiplicar(9, 1))
console.log(multiplicar(0, 1))
console.log(multiplicar(0, 0))
console.log(multiplicar(5, 0))
console.log(multiplicar(-1, 0))