// ES8: Object.values/Object.entries :
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal de objetos:
// Compor um objeto com variaveis ja declaradas.
const nome = 'Carla'
const pessoa = {
    nome, // Pode-se passar apenas o nome da variavel.
    // Facilidade de se declarar um função dentro de um objeto.
    // Jeito antigo:
        /*ola: function () {

        } */

    // Jeito novo:
        ola () {
            return 'Oi gente!'
        }
}

console.log(pessoa.nome, pessoa.ola())

// Introdução do uso de Classe:
// Uma clase em JS sera convertida internamente para uma função.
class Animal {}
class Cachorro extends Animal { // Para se ter herança da outra classe.
    falar() {
        return 'Au au!'
    }
}

// Para se criar um objeto apartir de uma classe usa-se o operador "new". 
console.log(new Cachorro().falar())


