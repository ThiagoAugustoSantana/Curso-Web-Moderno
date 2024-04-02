console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola' // Criando dinamicamente um atributo para o objeto.

// Outra forma de atribuir um atributo a um objeto:
//obj1['nome'] = 'Bola2'

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // Com "this" ele fica global.
    this.exec = function() {
        console.log('\nExec...')
    }
}

const obj2 = new Obj('\nCadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

