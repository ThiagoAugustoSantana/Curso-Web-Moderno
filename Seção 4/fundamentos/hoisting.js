// Teste com "var":

console.log('a =', a)
var a = 2 // "a" sofre o içamento(hoisting).
console.log('a =', a)

// Seria igual fazer isso:

/*  var a
    console.log('a =', a)
    a = 2
    console.log('a =', a)
*/

// Testando o efeito dentreo de uma função:

function teste() {
    console.log('\na =', a)
    var a = 2 
    console.log('a =', a)
}

teste()
console.log('a =', a)

// Teste com "let":
// Gera um erro.

/*
    console.log('b =', b)
    let b = 2 // "b" não sofre o içamento(hoisting).
    console.log('b =', b)
*/

