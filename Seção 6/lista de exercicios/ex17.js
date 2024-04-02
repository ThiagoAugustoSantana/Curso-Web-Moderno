function novoSalario (plano, salario) {
    
    switch (plano) {
        case 'A':
            console.log(`O seu novo salario é ${salario + (salario * 0.1)}`)
            break
        case 'B':
            console.log(`O seu novo salario é ${salario + (salario * 0.15)}`)
            break
        case 'C':
            console.log(`O seu novo salario é ${salario + (salario * 0.2)}`)
            break
        default:
            console.log(`O plano de trabalho informado é invalido!`)
    }
}

novoSalario('A', 1500)
novoSalario('B', 1500)
novoSalario('C', 1500)
novoSalario('D', 1500)