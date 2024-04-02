// Um objeto é uma coleção de chaves e valores.
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Pega todas as chaves do objeto.
console.log(Object.values(pessoa)) // Pega todos os valores do objeto.
console.log(Object.entries(pessoa)) // Pega todas as chaves e valores do objeto.
console.log('\n')

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
console.log('\n')

// A mesma cois mas com o operador destructuring:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
console.log('\n')

// Outros exemplos de funções:
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Se aparecera a chave.
    //enumerable: false, 
    writable: false, // Se sera permitido a reescrita do atributo.
    value: '01/01/2019' // Atribui um valor.
})
console.log(pessoa)
console.log('\n')

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
console.log('\n')

// Object.assign (ECMAScript 2015):
const dest = { a: 1 }
const o1 = { b: 2, a: 5 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Irá concatenar "o1" e "o2" em "dest".

Object.freeze(obj) // Não deixa o objeto ser alterado.
obj.c = 1234
console.log(obj)

