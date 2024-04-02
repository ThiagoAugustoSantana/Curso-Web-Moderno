function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // "OU" logico.
    const comprarTv50 = trabalho1 && trabalho2 // "E" logico.
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // "OU EXCLUSIVO" logico, bitwise XOR.
    const comprarTv32 = trabalho1 != trabalho2 // Forma de simular um "OU EXCLUSIVO".
    const manterSaudavel = !comprarSorvete // Operador unário.
    
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // Criou-se um objeto onde as chaves foram criadas com nome das constantes.
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))







