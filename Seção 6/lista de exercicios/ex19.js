function lanchonete (codigo, quantidade) {

    switch (codigo) {
        case 100:
            return `O preço total é de R$${3.00 * quantidade}`
        case 200:
            return `O preço total é de R$${4.00 * quantidade}`
        case 300:
            return `O preço total é de R$${5.50 * quantidade}`
        case 400:
            return `O preço total é de R$${7.50 * quantidade}`
        case 500:
            return `O preço total é de R$${3.50 * quantidade}`
        case 600:
            return `O preço total é de R$${2.80 * quantidade}`
        default:
            return 'O codigo do produto informado não existe|!'
    }
}

console.log(lanchonete(100, 2))
console.log(lanchonete(200, 2))
console.log(lanchonete(300, 2))
console.log(lanchonete(400, 2))
console.log(lanchonete(500, 2))
console.log(lanchonete(600, 2))