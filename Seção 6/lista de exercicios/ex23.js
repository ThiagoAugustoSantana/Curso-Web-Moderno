function mediaPonderada (codigo, nota1, nota2, nota3) {
    const P1 = 4
    const P2 = 3
    let resultado = 0
    if (nota1 <= 10 && nota1 >= 0 && nota2 <= 10 && nota2 >= 0 && nota3 <= 10 && nota3 >= 0) {
        if (nota1 > nota2 && nota1 > nota3) {
            resultado = (nota1 * P1 + nota2 * P2 + nota3 * P2) / (P1 + 2*P2)   
        } else if (nota2 > nota1 && nota2 > nota3) {
            resultado = (nota1 * P2 + nota2 * P1 + nota3 * P2) / (P1 + 2*P2)
        } else {
            resultado = (nota1 * P2 + nota2 * P2 + nota3 * P1) / (P1 + 2*P2)
        }
        
        console.log(`Codigo: ${codigo}; Notas: ${nota1}, ${nota2}, ${nota3}; Média Ponderada: ${resultado}; Situação: ${resultado < 5 ? 'Reprovado' : 'Aprovado'}`)   
    } else {
        console.log('Notas incorretas')
    }
}

mediaPonderada(123, 2, 4, 5)
mediaPonderada(124, 10, 8, 5)
mediaPonderada(125, 11, 0, 5)