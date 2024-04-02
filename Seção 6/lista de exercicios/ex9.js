function classificacao (nota) {
    if (nota >= 0 && nota <= 100) {
        proximoMultiplo = nota + (5 - nota%5) 

        if (nota < 38){
            console.log(`O aluno foi Reprovado com ${nota} pontos!`)
        } 
        else if ((proximoMultiplo - nota) < 3) {
            nota = proximoMultiplo
            console.log(`O aluno foi Aprovado com ${nota} pontos!`)
        } 
        else {
            console.log(`O aluno foi Aprovado com ${nota} pontos!`)
        }
    } 
    else {
        console.log('A nota informada esta Incorreta!')
    }
}

classificacao(111)
classificacao(-1)
classificacao(29)
classificacao(38)
classificacao(84)
classificacao(81)
classificacao(56)
classificacao(37)
classificacao(53)