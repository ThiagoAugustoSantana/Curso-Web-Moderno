const sequencia = { 
    _valor: 1, // Convenção que mostra que essa variavel deve ser acessada apenas internamente.
    // Get e Set são funções.
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)




