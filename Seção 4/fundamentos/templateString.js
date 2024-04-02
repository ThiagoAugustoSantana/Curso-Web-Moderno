const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
// Exemplo de uso do template string, onde é possivel fazer quebra de linhas:
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// Exemplo com expressões...

console.log(`1 + 1 = ${1 + 1}`) // Faz-se o uso do " ${ } " para que seja interpretado o que esta dentro.

// Mostrando que é possivel chamar uma função dentro do template.
// Criando uma função para se usar de exemplo:

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)


