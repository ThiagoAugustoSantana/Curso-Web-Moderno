const pessoa = {
    saudação: 'Bom dia!',
    falar() {
        //console.log(pessoa.saudação)
        console.log(this.saudação) // Funciona da mesma forma pois o "this" aponta para o objeto no qual a função esta inserida. 
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Conflito entre paradigmas: Funcional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa) // O "bind" seta o "this" a um determinado objeto.
falarDePessoa()

