// Em JS um array é um objeto.
console.log(typeof Array, typeof new Array, typeof [])

// Exemplos de como criar um array:

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Forma não recomendada.
console.log(aprovados)
console.log('\n')

aprovados = ['Bia', 'Carlos', 'Ana'] // Forma recomendada.
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Não gera erro, apenas retorna "undefined".
console.log('\n')

aprovados[3] = 'Paulo' // Forma mais comum para substituir um elemento que ja existe.
console.log(aprovados[3])
aprovados.push('Abia') // Forma mais comum para adicionar um novo elemento.
console.log(aprovados)
console.log(aprovados.length)
console.log('\n')

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // Os elementos existem mas estão setados como "undefined".
console.log(aprovados[8] === null)
console.log('\n')

// Algumas funções em array:

aprovados.sort() // Passa os elementos "undefined" para o final da lista.
console.log(aprovados)

delete aprovados[1] // Vai deletar e colocar "undefined" na posição informada.
console.log(aprovados)
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
aprovados.splice(1, 1) // Serve para adicionar ou retirar elementos do array.
//       .splice(posição inicial, quantidade de elementos)       
console.log(aprovados)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
//       .splice(posição inicial, quantidade de elementos, elementos a serem adicionados) 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // Sem excluir.
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // Excluir apenas 1.
console.log(aprovados)



