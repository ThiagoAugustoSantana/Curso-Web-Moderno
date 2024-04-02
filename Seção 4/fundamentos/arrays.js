const valores = [7.7, 8.9, 6.3, 9.2] // Exemplo de criação de um array de forma literal. 
console.log(valores[0], valores[3])
console.log(valores[4]) 

valores[4] = 10 // Adicionando mais um elemento no array.
console.log(valores) 

valores[10] = 20 
console.log(valores)

console.log(valores.length) // Informa a quantidade de elementos no array, ou pode-se dizer seu tamanho.
console.log('\n')
//Exemplo de array com varios tipos de dados:
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Formas de excluir um elemento de um array:
valores.pop() // Retira o ultimo elemento do array.
console.log(valores.pop()) // Retira o ultimo elemento do array.
console.log(valores) 

delete valores[0] // Deleta um elemento da posição selecionada do array.
console.log(valores) 

console.log(typeof valores) // Um array é do tipo objeto.
