//var numero = 1
let numero = 1
{
    let numero = 2 
    console.log('Dentro =', numero) // Com "let" ele ira procurar a variavel do escopo mais perto, nesse caso o do bloco.
}
console.log('Fora =', numero)