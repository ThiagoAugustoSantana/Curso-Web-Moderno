const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Função arrow com operador ternario.

console.log(resultado(7.1))
console.log(resultado(6.7))

// Testes:
const teste = valor => valor != 10 ? 20 : 20.2

console.log(teste(7.1))
console.log(teste(10))
