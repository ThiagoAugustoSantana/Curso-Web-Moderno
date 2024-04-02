// Arrow Function:
const soma = (a, b) => a + b // Quando não se tem o corpo da função o "return" sera chamado implicitamente, quado tiver corpo deve-se colocar o "return".
// Funções Arrows sempre são anonimas, tendo que armazenar em alguma coisa.
// Quando se tem so um parametro não é obrigado a colocar os parênteses.
console.log(soma(2, 3))

// Arrow Function (this):
// Não é possivel mudar o contexto lexico de uma função arrow.
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // Tentando apontar para um objeto qualquer, não funcionara.
lexico1()
lexico2()

// Parametro default em uma função:
function log (texto = 'Node') {
    console.log(texto)
}

log()
log(undefined)
log(null)
log('Sou mais forte!')

// Operador rest:
// No contexto de funções este operador se chama "rest"(agrupar), mas no contexto de arrays e objetos ele se chama "Spread"(espalhar).
function total (...numeros) { // Agrupou todos os valores passados.
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))
