const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano') // Pode-se passar mais elementos.
console.log(todos, filhas, filhos) // Os "arrays" originais não são alterados.

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
