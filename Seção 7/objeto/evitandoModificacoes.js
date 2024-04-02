// Object.preventExtensions :
const produto = Object.preventExtensions({ // Não sera possivel adicionar atributos mas é possivel excluir.
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto)) // O ".isExtensible" testa se a função foi criada com o ".preventExtensions" ou não.

produto.nome = 'Borracha' // É possivel.
produto.descricao = 'Borracha escolar branca' // Não é possivel.
delete produto.tag // É possivel.
console.log(produto)

// Object.seal :
// Não consegue adicionar/excluir atributos, mas consegue modificar os valores dos atributos.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // O ".isSealed" testa se o objeto esta selado ou não.

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes, não permite fazer alterações.




