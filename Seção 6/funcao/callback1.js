const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

// A mesma coisa so que com a função arrow:
fabricantes.forEach(fabricante => console.log(fabricante))