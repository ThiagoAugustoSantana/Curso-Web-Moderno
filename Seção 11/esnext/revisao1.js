// let e const:
{
    var a = 2 // Tem escopo global.
    let b = 3 // Tem escopo de bloco.
    console.log(b)
}

console.log(a)
//console.log(b)

// Template String:
const produto = 'iPad'
console.log(`${produto} è caro!\n`)
console.log(`${produto} 
è 
caro!\n`)

// Operador destructuring:
const [l, e, ...tras] = 'Cod3r' // Uso do operador rest "..." .
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome} = { nome: 'Ana', idade: 9 }
console.log(i, nome)




