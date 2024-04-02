function contarCaractere (caractere, frase) {
    let resultado = 0

    for (let i = 0; i < frase.length; i++) {
        if (caractere === frase.charAt(i)) {
            ++resultado
        }
    }
    return resultado
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))