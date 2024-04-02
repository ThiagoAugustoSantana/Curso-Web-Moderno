const obj1 = {
    nome: 'Maria',
    profissao: 'Desenvolvedora de Software'
}

function objetoParaArray (obj) {
    return Object.entries(obj)
}

console.log(objetoParaArray(obj1))

