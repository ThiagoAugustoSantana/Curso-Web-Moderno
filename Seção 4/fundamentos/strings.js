const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna o caractere na quarta posição da string.
console.log(escola.charAt(5)) // Retorno vazio, não gera erro.
console.log(escola.charCodeAt(3)) // Retorna o valor do caractere da posição especificada referente a tabela unicode.
console.log(escola.indexOf('d')) // Retorna a posição na string do caractere informado.

console.log(escola.substring(2)) // Retorna os caracteres da string a partir da posição informada.
console.log(escola.substring(0, 3)) // Retorna os caracteres da string entre as duas posições informadas, sem contar a ultima posição.

console.log('Escola '.concat(escola).concat("!")) // Concatena os elementos.
console.log('Escola ' + escola + "!") // Concatena os elementos.

console.log(escola.replace(3, 'e')) // Faz a substituição dos caracteres da posição informada da string pelo caracter informado.
// Pode-se usar regex, como visto a baixo
console.log(escola.replace(/\w/g, 'F')) // O "/\d/g" é uma expressão regular que serve para substituir todos os caracteres da string pelo o caractere informado.  

console.log('Ana,Maria,Pedro'.split(',')) // Transforma uma string em Array a partir do elemento informado.
