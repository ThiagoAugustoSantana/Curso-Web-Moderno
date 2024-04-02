// Formas de se ler um arquivo do lado do servidor:
const fs = require('fs')
const caminho = __dirname + '/arquivo.json' // "__dirname" é uma constante que representa o diretorio atual, ao inves de se passar todo o caminho.

// Ler de forma sincrona (não recomendavel):
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
console.log('\n')

// Ler de forma assincrona:
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
    console.log('\n')
})

const config = require('./arquivo.json')
console.log(config.db) // Esse é executado antes. 
console.log('\n')

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

