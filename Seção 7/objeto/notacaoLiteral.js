const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // Forma antiga de criar objeto.
const obj2 = { a, b, c } // Forma atual de criar objeto.
console.log(obj1, obj2)

// Criar um atributo apartir do nome de uma variavel:
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// Como definir funções dentro de um objeto literal:
const obj5 = { 
    funcao1: function() {// Forma antiga.
        //...
    },

    funcao2() { // Forma atual.
        //...
    }
}

console.log(obj5)


 

