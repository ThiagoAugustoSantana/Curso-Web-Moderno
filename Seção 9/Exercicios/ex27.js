function inverter (obj) {
   const objInvertido = {}   
   
   Object.entries(obj).forEach(mudar => {
    const chave = 0,
          valor = 1
    objInvertido[mudar[valor]] = mudar[chave]
   })

   return objInvertido

}

console.log(inverter({a: 1, b: 2, c: 3}))