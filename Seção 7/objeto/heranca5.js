console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())


Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())
console.log('\n')

// Exemplo de como substituir uma função que ja pertence ao prototipo da String ou de qualquer outro:
// Obs: Isso é apenas um exemplo, não deve ser feito em um codigo normal.

String.prototype.toString = function() { // Esta sobreescrevendo o comportamento do "toString".
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) // Faz o uso do "toString".


