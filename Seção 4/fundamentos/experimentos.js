let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.c = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // São as mesmas coisas.
console.log(module.exports)

// Criando uma variavel maluca: sem var e le!
abc = 3 // Não fazer esse tipo de coisa!!!
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste' }


