function bhaskara(ax2, bx, c) {
    delta = (bx ** 2) - (4  * ax2 * c)

    if(delta < 0) {
        return 'Delta é negativo!'
    } else {
       let x = []
       
       x[0] = ((bx * -1) + Math.sqrt(delta)) / (2 * ax2)
       x[1] = ((bx * -1) - Math.sqrt(delta)) / (2 * ax2)

       return x
    }
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(2, -16, -18))