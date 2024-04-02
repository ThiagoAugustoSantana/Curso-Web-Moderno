// Formas mais comuns de exportar um modulo no node:
// Estara disponivel para fora do modulu.



let a = 2 // Parte que sera visivel apenas dentro do modulo.


// Parte que sera visivel fora do modulo:
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}