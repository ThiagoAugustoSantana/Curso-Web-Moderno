// OBS: Sempre que tiver um arquivo com o nome terminado com "Cliente", significa que essa classe ira usar outros modulos ja criados.

// Exemplo de como importar algo usando o commonJS(sistema de modulos do node):

const moduloA = require('./moduloA') // Usa-se o "." porque o modulo solicitado esta na mesma pasta.
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log('\n')
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)




