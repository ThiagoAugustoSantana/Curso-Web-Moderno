function criarProduto (nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.15
    }
}

console.log(criarProduto('Agua', 10))
console.log(criarProduto('Bala', 1))