const moduloA = require('../../moduloA') // O "../" serve para sair de uma pasta.
//const moduloA = require('C:\Users\thiag\Downloads\Udemy\Curso Web Moderno\Seção 10\node\moduloA.js') 
console.log(moduloA.ola)

//const c = require('./pastaC/index')
const c = require('./pastaC') // Pode-se importar apenas com o nome da pasta pois sera procurado o arquivo de nome "index.js".
console.log(c.ola2)


// Importar com o "require" modulos que ja vem previamente instalados com o node:
// Modulos Core.

const http = require('http') // Sem usar o caminho relativo "./" .
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)



