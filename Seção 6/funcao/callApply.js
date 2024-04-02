function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

// Exemplos de "call" e "apply":

const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Diferença entre "call" e "apply":

console.log(getPreco.call(carro, 0.17, '$'))
                  //.call(Contexto, Parametros) 

console.log(getPreco.apply(carro, [0.17, '$']))
                  //.apply(Contexto, [Parametros]), os parametros ficam em um array.

console.log(getPreco.call(global, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))

