// Exemplo utilizando callbacks em sequência (callback hell):
/*
setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function() {
        console.log('Executando callback...')
    
        setTimeout(function() {
            console.log('Executando callback...')
        }, 2000) 
    }, 2000)      
}, 2000)
*/

// Exemplo utilizando promise:

/*
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishhhh')
        }, tempo)
    })
}
*/

// Primeira forma de pegar os dados da função que retorna uma promise:
//let p = esperarPor()

// Segunda forma:
//esperarPor(3000).then(texto => console.log(texto))

// Refazendo o exemplo de callback utilizando promise:

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor) // Essa linha é igual a de cima so que simplificada pela situação permitir.

