console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)
console.log('\n')

// Cuidado ao acessar o "this" dentro de uma função que esta dentro do modulo:
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...' // Cuidado, isso ira para dentro do escopo global.
}

this.perigo = '...' // Ja nesse caso ele ira apontar apenas para "module.exports" .
logThis()

