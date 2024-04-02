let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// Exemplo de converção de algum dado em true ou false:
isAtivo = 1 // O valor "1" representa um valor verdadeiro(true).
console.log(!!isAtivo) // Metodo para testar se é true ou false. 
console.log(!isAtivo)

console.log('\nOs tipos que são considerados true: ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // String com espaço. 
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // Se a atribuição retorna para true.
console.log(!!(isAtivo = 33))

console.log('\nOs tipos que são considerados false: ')
console.log(!!0)
console.log(!!'')// String vazia.
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Se a atribuição retorna para false.

console.log('\nExemplo para finalizar: ')
console.log(!!('' || null || 0 || ' ')) // Retorna "true" pois tem ao menos um "true".
console.log(!!('' || null || 0 || NaN)) // Retorna "false" pois todos são "false".
console.log(('' || null || 0 || 'epa' || 123)) // Retorna o unico ou o primeiro valor verdadeiro.

// Exemplo de uso do " || " ("OU" logico):

let nome = ''
console.log(nome || 'Desconhecido') // Exemplo caso a pessoa não informar o nome, ou seja a variavel "nome" ser "false".

nome = 'Lucas'
console.log(nome || 'Desconhecido') // Exemplo caso a pessoa informar o nome, ou seja a variavel "nome" ser "true".
