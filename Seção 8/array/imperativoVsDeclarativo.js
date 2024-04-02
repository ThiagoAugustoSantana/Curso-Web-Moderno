const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2}
]

// Imperativo:
// Se importa em como foi feito.
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo:
// Se importa no que tem que ser feito.
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const tatal2 = alunos.map(getNota).reduce(soma)
console.log(tatal2 / alunos.length)