function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 == lado3){
        return console.log('Triangulo Equilátero!')
    } else if ((lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3) ){
        return console.log('Triangulo Escaleno!')
    } else {
        return console.log('Triangulo Isósceles!')
    }
}

tipoTriangulo(1, 1, 1)
tipoTriangulo(1, 2, 1)
tipoTriangulo(1, 2, 3)