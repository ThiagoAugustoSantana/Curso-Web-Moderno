let valor // Não inicializada
console.log(valor)
// console.log(valor2) // Nem foi declarado gera um erro, é diferete do anterior.
// "Undefined" é diferente de "not defined". 

valor = null // "Null" indica que a variavel não possui nenhum valor e não esta refecenciada na memoria.
             // Ausência de valor
console.log(valor)
//console.log(valor.toSring()) // Ira gerar um erro por tentar acessar uma variavel sem endereço(null).

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir "undefined", para isso utilizar o "null".
console.log(!!produto.preco)
// delete produto.preco
console.log(produto) // Não faz sentido.

produto.preco = null // Forma correta, seria sem preço.
console.log(!!produto.preco)
console.log(produto)



