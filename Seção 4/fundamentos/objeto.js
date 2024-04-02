const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço.

console.log(prod1)

// Criando obejto de modo literal:
const prod2 = {
    nome: 'Camisa Polo',
    preço: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }

    }
}

console.log(prod2)