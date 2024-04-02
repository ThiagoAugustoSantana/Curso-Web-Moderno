function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// Primeira forma de fazer:
/*
esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))
*/

// Segunda forma de fazer:
// Ele executara os consoles e depois ira esperar o tempo.

/*
async function executar() {
    esperarPor(1500)
    console.log('Async/Await 1...')
    
    esperarPor(1500)
    console.log('Async/Await 2...')

    esperarPor(1500)
    console.log('Async/Await 3...')
}

executar()
*/

// Terceira forma de fazer:
// Executara cada linha no seu tempo.

async function executar() {
    await esperarPor(1500)
    console.log('Async/Await 1...')
    
    await esperarPor(1500)
    console.log('Async/Await 2...')

    await esperarPor(1500)
    console.log('Async/Await 3...')
}

executar()
