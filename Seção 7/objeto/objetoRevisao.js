// Coleção dinamica de pares chaves/valor

// Uma forma de criar um objeto:
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']

console.log(produto)

// Outra forma de criar um objeto:

const carro = {
    modelo: 'A4',
    valor: 89000,
    // Um objeto dentro de outro
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    // Um array de objetos
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana', 
        idade: 42
    }],
    // Funções dentro do objeto
    calcularValorSeguro: function() {
        //...
    }
}

// Como acessar os atributos do objeto:
carro.proprietario.endereco.numero = 1000
// Outra forma:
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

// Deletar atributos de um objeto:
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores) //Não gera erro apenas retorna "undefined".
//console.log(carro.condutores.length) // Gera um erro.