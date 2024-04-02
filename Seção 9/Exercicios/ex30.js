const obj1 = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
    Ana: [10, 10, 10, 9]
}
 
function receberMelhorEstudante (obj) {
    let array1 = []
    let array2 = []
    let mediaAux = 0
    let media = []
    let aux = 0
    const objFinal = {}

    array1 = Object.values(obj)
    array2 = Object.keys(obj)

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[i].length; j++) {
            mediaAux += array1[i][j]
        }
        media.push(mediaAux/array1[i].length)
        mediaAux = 0
    }

    aux = media[0]
    for (let i = 0; i < media.length; i++) {
        if (media[i] >= aux) {
            aux = media[i]
        }
    }

    objFinal['nome'] = array2[media.indexOf(aux)]
    objFinal['media'] = aux
    
    return objFinal
}

console.log(receberMelhorEstudante(obj1))

