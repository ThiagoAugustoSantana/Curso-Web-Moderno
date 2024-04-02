function MeuObjeto() {}
 console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

///////

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Aqui mudou-se a referencia de "Object.prototype" para "MeuObjeto.prototype".
obj3.nome = 'Obj3'
obj3.falar() // Agora ele tem acesso a "MeuObjeto.prototype"
console.log('\n')

// Resumo:
// Cadeia de prototipos.
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // "(new MeuObjeto).__proto__" esta em "MeuObjeto.prototype".
console.log(MeuObjeto.__proto__ === Function.prototype) // "MeuObjeto.__proto__" esta em "Function.prototype".
console.log(Function.prototype.__proto__ === Object.prototype) // "Function.prototype.__proto__" esta em "Object.prototype".
console.log(Object.prototype.__proto__ === null) // "Object.prototype.__proto__" é nulo, ou seja, é o ultimo prototipo.







