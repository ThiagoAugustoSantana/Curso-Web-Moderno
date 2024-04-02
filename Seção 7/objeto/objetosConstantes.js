// Esta no endereço de memoria
// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' } // Gera um erro ao tentar apontar para um objeto em outro endereço.

// Forma para não alterar o objeto:
Object.freeze(pessoa)

pessoa.nome = 'Maria' // Apenas sera ignorado.
pessoa.end = 'Rua ABC' // Apenas sera ignorado.
delete pessoa.nome // Apenas sera ignorado.

console.log(pessoa.nome)
console.log(pessoa)

// Criar objeto constante:
const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria' // Apenas sera ignorado.
console.log(pessoaConstante)


