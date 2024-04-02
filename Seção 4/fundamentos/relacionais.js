console.log('01)', '1' == 1) // Operador relacional de igualdade(mesmo valor).
console.log('02)', '1' === 1) // Operador relacional de estritamente igual(mesmo valor e tipo).
console.log('03)', '3' != 3) // Operador relacional da diferença(valores diferentes).
console.log('04)', '3' !== 3) // Operador relacional de estritamente diferente(valor e tipo diferentes).

console.log('\n05)', 3 < 2) // Operador relacional menor que...
console.log('06)', 3 > 2) // Operador relacional maior que...
console.log('07)', 3 <= 2) // Operador relacional menor igual que...
console.log('08)', 3 >= 2) // Operador relacional maior igual que...

// Testes com os operadores relacionais:
const d1 = new Date(0)
const d2 = new Date(0)
// Tanto faz os dois modos a baixo pois estão comparando endereços de memoria.
console.log('\n09)', d1 === d2)
console.log('10)', d1 == d2)

// Tanto faz os dois modos a baixo pois são do mesmo tipo e possuem o mesmo valor.
console.log('\n11)', d1.getTime() === d2.getTime())
console.log('12)', d1.getTime() == d2.getTime())

console.log('\n13)', undefined == null)
console.log('14)', undefined === null)








