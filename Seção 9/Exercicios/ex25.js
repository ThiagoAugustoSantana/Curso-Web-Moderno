const array1 = ['programação', 'mobile', 'profissional']
const array2 = ['javascript', 'java', 'c++']
const array3 = ['javascript', 'java', 'c++', 'python++']


function buscarPalavrasSemelhantes (palavra, array) {
    return array.filter(a => a.includes(palavra))
}

console.log(buscarPalavrasSemelhantes('pro', array1))
console.log(buscarPalavrasSemelhantes('java', array2))
console.log(buscarPalavrasSemelhantes('python', array2))
console.log(buscarPalavrasSemelhantes('python', array3))
console.log(buscarPalavrasSemelhantes('++', array3))