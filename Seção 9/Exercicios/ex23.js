function contarPalavras (frase) {
    let palavras = frase.split(' ')

    return palavras.length
}

console.log(contarPalavras('Sou uma frase!'))
console.log(contarPalavras('O rato roeu a roupa do rei de roma!'))
