const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // A constante "pilotos" não podera ser alterada, mas seu conteudo sim.

// Alguns metodos para array:
pilotos.pop() // Remove o ultimo elemento do array.
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento a ultima posição do array.
console.log(pilotos) 

pilotos.shift() // Remove o primeiro elemento do array.
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento a primeira posição do array.
console.log(pilotos)

// O metodo "splice" pode adicionar e remover elementos de um array, Ex:
// Adicionar:
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover:
pilotos.splice(3, 1)
console.log(pilotos)

// O metodo "slice" pega um pedaço do array a partir da posição informada ate o elemento antes do valor informado como final, e retorna um novo array, Ex:
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Pega os elementos da posição 1 ate a 3.
console.log(algunsPilotos2)
