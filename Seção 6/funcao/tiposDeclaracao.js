// Tipos de declaração de funções.

console.log(soma(3, 4)) // Com a Function Declaration pode-se chamar a função antes de sua declaração.
console.log(sub(3, 4)) // O mesmo não ocorre para as outras duas.
console.log(mult(3, 4))

// Function Declaration:
function soma(x, y) {
    return x + y
}

// Function Expression:
const sub = function (x, y) {
    return x - y
}

// Named Function Expression:
const mult = function mult(x, y) {
    return x * y
}


