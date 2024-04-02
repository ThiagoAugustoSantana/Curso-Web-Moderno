// Função em JS é First-Class Object (Citizens).
// Higher-Order function.
// Significa que a função sera tratada como um dado.

// Criar uma função de forma literal:
function fun1() {

}

// Pode-se armazenar uma função em uma variavel:
const fun2 = function () {

}

// Pode-se armazenar uma função em um array:
const array = [function (a, b) { return a + b }, fun1, fun2] 
console.log(array[0](2, 3))

// Pode-se armazenar uma função em um atributo de objeto:
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Como passar uma função como parametro para outra função:
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') }) // Função declara na passagem de parametro.

// Uma função pode retornar/conter uma outra função:
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)

// Outra forma:
const cincoMais = soma(2, 3)
cincoMais(4)





