// Padrão middleware pattern (chain of responsibility)

const passo1 = (ctx, next) => {
    ctx.valo1 ='mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valo2 ='mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3' // Não sera chamado um novo passo.

const exec = (ctx, ...middlewares) => { // O "..."(3 pontos) é o operador rest, serve para representar um número indefinido de argumentos na forma de um Array, nesse caso um numero indefinido de funções.
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
//exec(ctx, passo1, passo2, passo3)
//exec(ctx, passo2, passo1, passo3)
exec(ctx, passo3, passo1, passo2) // Não ira executar os outros passos pois o "passo3" não tem o "next".
console.log(ctx)


