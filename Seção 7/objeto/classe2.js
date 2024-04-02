class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // O "extends" define como uma classe tem como prototipo outra classe.
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // Pegara na classe superior.
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)