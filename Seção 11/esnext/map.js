const tecnologias = new Map()
tecnologias.set('react', { framework: false} )
tecnologias.set('angular', { framework: true} )

console.log(tecnologias.react) // Forma errada de se acessar.
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)
console.log('\n')

// Outra forma de se criar um Map:
const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']

])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log('\n')
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
console.log('\n')

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)






