function calculadora (valor1, valor2, operacao) {
     switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação Invalida!'
     }
    
}

console.log(calculadora(4,2,'+'))
console.log(calculadora(4,2,'-'))
console.log(calculadora(7,6,'*'))
console.log(calculadora(9,3,'/'))
console.log(calculadora(3,2,'**'))