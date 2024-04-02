const obj1 = [
    {nome: 'Jornal Online', categoria: 'Informação', preco: 89.99},
    {nome: 'Cinema', categoria: 'Entretenimento', preco: 150}
]

const obj2 = [
    {nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99},
    {nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.90}
]
    
function despesasTotais (obj) {
    let resultado = 0
    obj.map(a => a.preco).reduce( (acumulador, atual) => resultado = acumulador + atual)
    
    return resultado
}

console.log(despesasTotais(obj1))
console.log(despesasTotais(obj2))