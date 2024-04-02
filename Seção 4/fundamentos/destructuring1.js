// Novo recurso de ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // Forma de usar o operador destructuring.
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

//Exemplo de solicitação de atributos que não foram criados:
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

// Acessando o objeto dentro do objeto:
const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)
