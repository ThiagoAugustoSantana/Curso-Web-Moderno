const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: // Por padrão, se entrar no primeiro ele sai executando os demais,
        case 9:  // assim ele entrara no 10 e depois no 9 saindo por casusa do "break".
            console.log('Quadro de Honra')
            break
        case 8: case 7: // Pode ser colocado na mesma linha.
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // Não precisa do "break" porque esta no final, mas poderia estar em outra posição com o uso do "break".
            console.log('Nota inválida')   
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)