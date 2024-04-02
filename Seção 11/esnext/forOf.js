// Como utilizar o recurso "for of":
for (let letra of "Cod3r") {
    console.log(letra)
}
console.log('\n')

// Comparando o "for of" com o "for in": 
const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i) // Retorna os indices.
}
console.log('\n')

for (let assunto of assuntosEcma) {
    console.log(assunto)
}
console.log('\n')

// Usado o "for of" com o Map:
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

// Dessa forma percorre todos os valores com as chaves.
for (let assunto of assuntosMap) {
    console.log(assunto)
}
console.log('\n')

// Forma para percorrer so as chaves.
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
console.log('\n')

// Forma para percorrer so os valores.
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
console.log('\n')

// Forma para percorrer as entradas.
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}
console.log('\n')

// Usado o "for of" com o Set:
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}


