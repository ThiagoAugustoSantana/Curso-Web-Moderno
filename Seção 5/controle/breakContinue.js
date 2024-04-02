const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Exemplo de uso do "break":

for ( let x in nums) {
    if ( x == 5) {
        break // O "break" não age sobre o bloco "if".
    }
    console.log(`indice ${x} = ${nums[x]}`)
}

console.log('\n')

// Exemplo de uso do "continue":

for ( let y in nums) {
    if (y == 5){
        continue // Interrompe a repetição atual e vai pra proxima repetição, não age sobre o bloco "if".
    }
    console.log(`indice ${y} = ${nums[y]}`)
}


// Exemplo de extrutura a não ser ultilizada:

externo: for (let a in nums) { // Uso de rotulo.
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo // O "break" passa a ser referente ao laço do rotulo indicado, nesse caso o laço externo.
        }
        console.log(`Par = ${a},${b}`)
    }
}

console.log('Fim!')