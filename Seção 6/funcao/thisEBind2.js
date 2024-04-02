// Exemplo usando a função "bind":

/*
function Pessoa1() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // O "bind" aqui esta setando ao "this" que nesse caso ja esta setado para o objeto Pessoa.
}

new Pessoa1
*/

// Exemplo armazenando o "this" em uma constante:

function Pessoa2() {
    this.idade = 0

    // O "this" esta setado para o objeto "Pessoa2" que sera criado posteriomente.
    const self = this // Usualmente se da o nome de "self" para essa constante que armazenara o "this".
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // O "bind" aqui esta setando ao "this" que nesse caso ja esta setado para o objeto Pessoa.
}

new Pessoa2


