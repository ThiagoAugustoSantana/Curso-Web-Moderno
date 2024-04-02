function compara(S1, S2) {

    S1 = S1.toUpperCase()
    S2 = S2.toUpperCase()

    let logico1 = true
    let logico2 = true
    
    logico1 = inverte(S1, S2)
    logico2 = inverte(S2, S1)

    if (logico1 == false || logico2 == false) {
        return false
    } else {
        return true
    }
}

function inverte (St1, St2) {

externo :for (let i = 0; i < St1.length ; i++) {
            for (let j = 0; j < St2.length ; j++) {
                
                if (St1.charAt(i) == St2.charAt(j)) {
                    //console.log(St1.charAt(i), St2.charAt(j))
                    continue externo
                } 
                else if (i == (St2.length - 1) &&  St1.charAt(i) != St2.charAt(j)){
                    return false 
                }
            }
        }
        return true
}


console.log(compara('amar', 'amores'))
console.log(compara('amores', 'amar'))
console.log(compara('amar', 'rama'))
console.log(compara('AMAr', 'rama'))