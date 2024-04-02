function removerPropriedade (obj, propriedade) {
    let obj2 = Object.assign({}, obj)
    delete obj2[propriedade]
    
    return obj2
}

console.log(removerPropriedade({a: 1, b: 2}, 'a'))
console.log(removerPropriedade({a: 1, b: 2, c: 3}, 'c'))

