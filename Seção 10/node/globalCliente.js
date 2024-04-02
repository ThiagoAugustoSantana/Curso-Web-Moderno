require('./global') 

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // O objeto sendo global podera ser alterado em qualquer lugar, usa-se o "freeze" para impedir isso.
console.log(MinhaApp.nome)


