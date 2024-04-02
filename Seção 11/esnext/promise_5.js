function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro! Esta no reject!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Esta no resolve!', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    //.then(console.log) // Essa linha e a de cima funcionam da mesma forma.
    
    // Forma de ter um tratamento de erro expecifico para cada then:    
    /*
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`) // O segundo parametro do then sempre é o tratamento de erro dele.
    )
    */
    //Se o erro foi tratado dentro do then o catch não sera acionado.
    .catch(err => console.log(`Erro: ${err}`)) // Forma de se tratar o reject.
    //.catch(console.log) // Tambem funciona dessa forma.
// Convencion-se colocar o catch no final pois a partir dele não se tem mais acesso a nehum valor,
// mas ele tambem pode ser seguido de mais um then so não tera mais acesso aos valores.
    .then(() => console.log('Fim!'))
