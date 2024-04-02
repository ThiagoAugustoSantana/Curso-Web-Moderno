const peso1 = 1.0// Considera o " .0 " como ainda sendo inteiro.
//const peso1 = 1.1 Considera o " .1 " em diante como ja sendo float.
const peso2 = Number('2.0') // O "Number" aqui trata-se de um função.
console.log(typeof Number) // "Number" com "N" maiusculo é uma função ja com "n" minusculo é o tipo da variavel.  

console.log(peso1, peso2)
console.log(typeof peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 * avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))// Fixa o numero de casas decimais em 2
console.log(media.toString())// Converte o valor "number" da variavel para uma "String" para que possa ser impresso no console, mas não altera seu 
                            //  valor por ser uma constante, a variavel "media" continuara tendo o mesmo valor em "number".
console.log(media.toString(2)) // Passando o valor "2" ela mostra a forma binaria do valor armazenado em "media". 
console.log(media.toString(8)) // Passando o valor "8" ela mostra a forma octal do valor armazenado em "media".
console.log(media.toString(16)) // Passando o valor "16" ela mostra a forma hexadecimal do valor armazenado em "media".

console.log(typeof media)

// Testes 1
let a = 34
a = a.toString(2) // Convertera para a forma binaraia mas continuara sendo uma "String".

console.log("\n" + a)
console.log(typeof a)

let b = a.toString()

console.log(typeof b)

