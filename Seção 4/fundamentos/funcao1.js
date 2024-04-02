// Função sem retorno:
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // O segundo valor ficara "undefined".
imprimirSoma(1, 2, 3, 4, 5, 6, 7, 8) // So ira ignorar os outros valores.
imprimirSoma() 
imprimirSoma('Ola', '!\n') 

// Função com retorno:
function soma(a, b = 1) { // Por padrão o valor de "b" sera "1" quando não for passado nenhum outro.
    
    return a + b
}


console.log(soma(2, 3))
console.log(soma(2)) // Nesse caso "b" assume o seu valor padrão = "1". 
console.log(soma())  // Não foi atribuido um valor padrão para o primeiro valor.