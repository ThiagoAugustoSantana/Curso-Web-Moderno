// Factory é uma função que sempre retorna um objeto.

// Exemplo de uma factory simples:
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

