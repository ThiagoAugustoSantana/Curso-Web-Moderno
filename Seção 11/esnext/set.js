// O "set" não ceita repetição e não é indexada, ao contrario dos arrays nos quais vc pode pegar um elemento a partir de um indice.

// Estrutura do set:
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))
console.log('\n')

// Criar um set a partir de um array:
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)









