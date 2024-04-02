// JSON = JavaScript Object Notation
// O JSON é um formato textual em que todas as linguagens conseguem ler e conseguem gerar.

// Exemplo criando um objeto de forma normal e depois convertendo ele para JSON:

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj)) // A função sera excluida porque o JSON é um formato de dados, não é algo que é executavel.
// O JSON retorna apenas um texto.

// Exemplo inverso, passando um JSON para um objeto normal:

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Formato valido, todo nome de atributo em JSON deve ter aspas duplas.
console.log(JSON.parse('{ "a": 1.7, "b": "String", "c": true, "d": {}, "e": [] }'))

