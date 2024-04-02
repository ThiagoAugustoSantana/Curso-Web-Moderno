console.log(module.exports === this)
console.log(module.exports === exports)

// Tres formas de exportar:

this.a = 1 // Agora "a" ficara visivel fora do arquivo.
exports.b = 2 // Agora "b" ficara visivel fora do arquivo.
module.exports.c = 3 // Agora "c" ficara visivel fora do arquivo.

//OBS:

// Não ira funcionar:
exports = null
console.log(module.exports)

// Não ira funcionar:
exports = {
    nome: 'Teste'
}
console.log(module.exports)

// Forma correta para atribuir um novo objeto pra ser exportado:
module.exports = { publico: true }
