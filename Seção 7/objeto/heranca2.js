// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z' // Não faça isso, não é recomendado atribuir valores a "Object.prototype".
const avo = { attr1: 'A' } // Se não tiver o atributo aqui ele irá procurar em "Object.prototype".
const pai = { __proto__: avo, attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

// Outro exemplo:

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual +=delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing(sombreamento), sombrea as variaveis nos escopos superiores.
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // O "super" ira pegar o elemento no prototipo superior.
    }
}

Object.setPrototypeOf(ferrari, carro) // Estabeleceu "carro" como sendo o prototipo de "ferrari".
Object.setPrototypeOf(volvo, carro) 

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())




